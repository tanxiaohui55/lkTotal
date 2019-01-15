import { Component, Injector, ViewChild, ElementRef, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AutoCarrierServiceProxy, CarrierRuleDto, CarrierWeightRuleDto, UpdateAutoCarrierRuleInput } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './auto-carrier.component.html',
    styleUrls: ['./auto-carrier.component.less'],
    animations: [appModuleAnimation()]
})
export class AutoCarrierComponent extends AppComponentBase implements OnInit, OnChanges {


    // testCarrierWeightRuleDto: CarrierWeightRuleDto = new CarrierWeightRuleDto();
    selectedCarrier: string;
    selectedCheckbox: boolean;
    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
        // noUiSlider.create(this.slider.nativeElement, {
        //     range: {
        //         'min': 0,
        //         'max': 100
        //     },
        //     start: [20, 80],
        //     connect: true,
        // });

        // $(this.repeater1.nativeElement).repeater(

        // );
    }

    //Filters
    selectedCompany: string = undefined;
    selectedCarrierRules: CarrierRuleDto[];

    constructor(
        private _autoCarrierService: AutoCarrierServiceProxy,
        injector: Injector,
    ) {
        super(injector);
        // this.testCarrierWeightRuleDto.minWeight = 10;
        // this.testCarrierWeightRuleDto.maxWeight = 50;
        // this.testCarrierWeightRuleDto.carrierCode = 'ZTO';
        // this.testCarrierWeightRuleDto.id = 1;

        // this.selectedCarrier = 'SF';
    }

    selectedCompanyHandler(event: string) {
        if (event != undefined || event != null) {
            this.selectedCompany = event;
        }
        if (this.selectedCompany == undefined || this.selectedCompany == null) {
            return;
        }
        this.getCarrierRulesByCompanyCode(this.selectedCompany);
    }

    getCarrierRulesByCompanyCode(companyCode: string) {

        abp.ui.setBusy();
        this._autoCarrierService
            .getCarrierRulesByCompanyCodeAsync(companyCode)
            .finally(() => {
                abp.ui.clearBusy();
            })
            .subscribe(result => {
                this.selectedCarrierRules = result.items;
                // this.selectedCarrierRules[0].carrierWeightRuleDtos.unshift(
                //     this.testCarrierWeightRuleDto
                // );
                // console.log(`json data: ${JSON.stringify(this.selectedCarrierRules)}`);
            }
            );
    }

    addLine(rule: CarrierRuleDto) {
        if (rule.weightRules == undefined) {
            rule.weightRules = new Array();
        }
        // console.log(`${JSON.stringify(rule)}`);
        var newRule = new CarrierWeightRuleDto();
        newRule.init({
            minWeight: 0,
            maxWeight: 0,
            autoCarrierRuleId:rule.id
        });
        rule.weightRules.push(newRule);
    }

    deleteLine(rule: CarrierRuleDto, weightRule: CarrierWeightRuleDto) {


        var deleteIndex: number;
        $.each(rule.weightRules, (index, item) => {

            if (item.minWeight == weightRule.minWeight
                && item.maxWeight == weightRule.maxWeight
                && item.id == weightRule.id
                && item.carrierCode == weightRule.carrierCode) {
                deleteIndex = index;
                return false;
            }
        });
        rule.weightRules.splice(deleteIndex, 1);
    }

    save(rule: any) {

        abp.ui.setBusy();

        this._autoCarrierService
            .updateOrInsertAutoCarrierRule(rule)
            .finally(() => {
                abp.ui.clearBusy();
            }).subscribe((result) => {
                this.getCarrierRulesByCompanyCode(rule.companyCode);
                this.notify.info(this.l('SavedSuccessfully'));
            });

        
    }
}

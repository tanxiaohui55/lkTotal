import { Component, Injector, ViewChild, ElementRef, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AutoCarrierServiceProxy, CarrierRuleDto, CarrierWeightRuleDto, UpdateAutoCarrierRuleInput, PutRuleCloneInput } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './auto-carrier-rule-clone.component.html',
    styleUrls: ['./auto-carrier-rule-clone.component.less'],
    animations: [appModuleAnimation()]
})
export class AutoCarrierRuleCloneComponent extends AppComponentBase implements OnInit, OnChanges {

    cloneInput:PutRuleCloneInput = new PutRuleCloneInput();
    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {

    }

    constructor(
        private _autoCarrierService: AutoCarrierServiceProxy,
        injector: Injector,
    ) {
        super(injector);
    }

    cloneRule() {
        console.log(`${JSON.stringify(this.cloneInput)}`);

        abp.ui.setBusy();

        this._autoCarrierService
            .putRuleClone(this.cloneInput)
            .finally(() => {
                abp.ui.clearBusy();
            }).subscribe((result) => {
                this.notify.info(this.l('SavedSuccessfully'));
            });
    }
}

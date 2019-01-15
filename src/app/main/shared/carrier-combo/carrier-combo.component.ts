import { AfterViewInit, Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CompanyCodeListDto, AutoCarrierServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppConsts } from '@shared/AppConsts';

@Component({
    selector: 'carrier-combo',
    templateUrl: './carrier-combo.component.html'
})
export class CarrierComboComponent extends AppComponentBase implements OnInit, AfterViewInit {

    @ViewChild('CarrierCombobox') carrierComboboxElement: ElementRef;

    carriers: any;

    @Input() selectedCarrier: string = undefined;
    @Output('selectedCarrierChange') selectedCarrierChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        injector: Injector) {
        super(injector);
        this.carriers = AppConsts.carrierList;
    }

    ngOnInit(): void {
        let self = this;
        setTimeout(() => {
            $(self.carrierComboboxElement.nativeElement).selectpicker('refresh');
        }, 0);
    };


    ngAfterViewInit(): void {
        $(this.carrierComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    }
}

import { AfterViewInit, Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AutoCarrierServiceProxy, CarrierWeightRuleDto } from '@shared/service-proxies/service-proxies';
import * as noUiSlider from 'nouislider';

@Component({
    selector: 'no-ui-slider',
    templateUrl: './no-ui-slider.component.html'
})
export class NoUiSliderComponent extends AppComponentBase implements OnInit, OnChanges, AfterViewInit {


    @ViewChild('Slider') slider: ElementRef;

    @Input()
    selectedWeight: CarrierWeightRuleDto = undefined;

    constructor(
        private _autoCarrierService: AutoCarrierServiceProxy,
        injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        let self = this;

        setTimeout(() => {
            noUiSlider.create(self.slider.nativeElement, {
                range: {
                    'min': 0,
                    'max': 100
                },
                start: [this.selectedWeight.minWeight, this.selectedWeight.maxWeight],
                connect: true,
            });

            self.slider.nativeElement.noUiSlider.on('update', function (values, handle) {
                var i = values[handle];
                handle ? self.selectedWeight.maxWeight = i : self.selectedWeight.minWeight = i;
            });
        }, 0);
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngAfterViewInit(): void {

    }

    minWeightChange(event): void {
        this.slider.nativeElement.noUiSlider.set([event, null]);
        this.selectedWeight.minWeight = event;
    }

    maxWeightChange(event): void {
        this.slider.nativeElement.noUiSlider.set([null, event]);
        this.selectedWeight.maxWeight = event;
    }
}

import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, Injector } from '@angular/core';
import { CompanyCodeListDto, AutoCarrierServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-company-select',
  templateUrl: './company-select.component.html',
  styleUrls: ['./company-select.component.css']
})
export class CompanySelectComponent extends AppComponentBase implements OnInit {

  @ViewChild('CompanyCombobox') companyComboboxElement: ElementRef;

  companies: CompanyCodeListDto[] = [];

  @Input() selectedCompany: string = undefined;
  @Output('selectedCompanyChange') selectedCompanyChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _autoCarrierService: AutoCarrierServiceProxy,
    injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    let self = this;
    abp.ui.setBusy();
    this._autoCarrierService.getCompanyCodeListAsync()
      .finally(() => {
        abp.ui.clearBusy();
      })
      .subscribe(result => {
        $.each(result.items, (index, item) => {
          item.name = item.code + '---' + item.name;
        });

        this.companies = result.items;
        setTimeout(() => {
          $(self.companyComboboxElement.nativeElement).selectpicker('refresh');
        }, 0);
      });
  }

  ngAfterViewInit(): void {
    $(this.companyComboboxElement.nativeElement).selectpicker({
      iconBase: 'famfamfam-flag',
      tickIcon: 'fa fa-check'
    });
  }

}

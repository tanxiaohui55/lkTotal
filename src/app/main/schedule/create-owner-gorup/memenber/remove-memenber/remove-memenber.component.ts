import { Component, OnInit, ViewChild, Injector, ElementRef, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AutoCarrierServiceProxy, OwnerGroupMembersServiceProxy, CompanyCodeListDto, OwnerGroupMemberDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-remove-memenber',
  templateUrl: './remove-memenber.component.html',
  styleUrls: ['./remove-memenber.component.css']
})
export class RemoveMemenberComponent extends AppComponentBase implements OnInit {

  @ViewChild('CompanyCombobox') companyComboboxElement: ElementRef;
  @Output() saveResult: EventEmitter<boolean> = new EventEmitter<boolean>();

  companies: OwnerGroupMemberDto[] = [];


  @ViewChild('removeModal') modal: ModalDirective;
  selectedCompanyCode: string = undefined;
  selectedCompanyName: string = undefined;
  selectedCompanyId: number = undefined;
  saving = false;


  groupName;
  groupId;

  constructor(
    Injector: Injector,
    private _autoCarrierService: AutoCarrierServiceProxy,
    private _MembersServiceProxy: OwnerGroupMembersServiceProxy
  ) {
    super(Injector)
  }

  ngOnInit() {

  }

  show(ownerGroup): void {
    this.groupName = ownerGroup.groupName;
    this.groupId = ownerGroup.id;
    this.modal.show();
    this.getCompany()
    // this._userService.getUserPermissionsForEdit(userId).subscribe(result => {
    //     this.permissionTree.editData = result;
    // });
  }

  selectedCompanyHandler(event: string) {
    console.log(event);
    if (event != undefined || event != null) {
      this.selectedCompanyCode = event.slice(0, event.indexOf('---'));
      this.selectedCompanyName = event.slice(event.indexOf('---') + 3);

    }
    if (this.selectedCompanyCode == undefined || this.selectedCompanyCode == null) {
      return;
    }

  }




  save(): void {
    // let input = new ();
    if (this.selectedCompanyId > 0) {
      abp.ui.setBusy();
      this._MembersServiceProxy
        .delete(this.selectedCompanyId)
        .finally(() => { abp.ui.clearBusy(); })
        .subscribe(() => {
          this.notify.info(this.l('SavedSuccessfully'));
          this.saveResult.emit(true);
          this.close();
        })
    }


  }



  close(): void {
    this.modal.hide();
  }


  getCompany() {
    let self = this;
    this.companies = [];
    abp.ui.setBusy();
    this._MembersServiceProxy
      .getAll(undefined, undefined, undefined, this.groupName, undefined, undefined, 1000)
      .finally(() => {
        abp.ui.clearBusy();
      })
      .subscribe(result => {
        $.each(result.items, (index, item) => {
          // item.name = item.code + '---' + item.name;
          this.companies.push(item.ownerGroupMember);
        });
        console.log(this.companies);
        // this.companies = result.items;
        // setTimeout(() => {
        //   $(self.companyComboboxElement.nativeElement).selectpicker('refresh');
        // }, 0);
      });
  }

}

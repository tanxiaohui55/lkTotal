import { Component, OnInit, ViewChild, Injector, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AutoCarrierServiceProxy, CarrierRuleDto, CreateOrEditOwnerGroupMemberDto, OwnerGroupMembersServiceProxy } from '@shared/service-proxies/service-proxies';


@Component({
  selector: 'app-add-memenber',
  templateUrl: './add-memenber.component.html',
})
export class AddMemenberComponent extends AppComponentBase implements OnInit {

  @ViewChild('addModal') modal: ModalDirective;
  @Output() saveResult:EventEmitter<boolean>=new EventEmitter<boolean>()

  selectedCompanyCode: string = undefined;
  selectedCompanyName: string = undefined;
  selectedCarrierRules: CarrierRuleDto[];
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

    // this._userService.getUserPermissionsForEdit(userId).subscribe(result => {
    //     this.permissionTree.editData = result;
    // });
  }

  selectedCompanyHandler(event: string) {
    if (event != undefined || event != null) {
      this.selectedCompanyCode =event.slice(0,event.indexOf('---'));
      this.selectedCompanyName =event.slice(event.indexOf('---')+3);

    }
    if (this.selectedCompanyCode == undefined || this.selectedCompanyCode == null) {  
      return;
    }

  }




  save(): void {
    let input = new CreateOrEditOwnerGroupMemberDto();

    input.ownerCode = this.selectedCompanyCode;
    input.ownerName = this.selectedCompanyName;
    input.ownerGroupId = this.groupId;

    this.saving = true;

    this._MembersServiceProxy
      .createOrEdit(input)
      .finally(() => { this.saving = false; })
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
         this.saveResult.emit(true);
        this.close();       
      });
  }



  close(): void {
    this.modal.hide();
  }
}

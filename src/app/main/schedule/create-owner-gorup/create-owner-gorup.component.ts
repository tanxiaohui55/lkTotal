import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';
import { OwnerGroupDto, CreateOrEditOwnerGroupDto, OwnerGroupsServiceProxy } from '@shared/service-proxies/service-proxies';
import { LazyLoadEvent, Paginator } from 'primeng/primeng';
import { AddMemenberComponent } from './memenber/add-memenber/add-memenber.component';
import { RemoveMemenberComponent } from './memenber/remove-memenber/remove-memenber.component';

@Component({
  selector: 'app-create-owner-gorup',
  templateUrl: './create-owner-gorup.component.html',
  styleUrls: ['./create-owner-gorup.component.css'],
  animations: [appModuleAnimation()]

})
export class CreateOwnerGorupComponent extends AppComponentBase implements OnInit {


  @ViewChild('addMember') addMember: AddMemenberComponent;
  @ViewChild('removeMember') removeMember: RemoveMemenberComponent;


  ownerGroup: OwnerGroupDto = new OwnerGroupDto();
  saving = false;
  tableData;


  constructor(
    Injector: Injector,
    private _OwnerGroupsServiceProxy: OwnerGroupsServiceProxy
  ) {
    super(Injector);
    this.refresh()
  }

  ngOnInit() {


  }
  //添加组别
  addOwnerGroup() {
    let input = new CreateOrEditOwnerGroupDto();
    input.groupName = this.ownerGroup.groupName;
    input.groupCode = this.ownerGroup.groupCode;
    this.saving = true;
    this._OwnerGroupsServiceProxy.createOrEdit(input)
      .finally(() => { this.saving = false; })
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.refresh();
      });
  }

  getOwnerGroup(event?: LazyLoadEvent) {
    this._OwnerGroupsServiceProxy
      .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
      .subscribe(result => {
        this.primengTableHelper.totalRecordsCount = result.totalCount;
        this.primengTableHelper.records = result.items;
        this.primengTableHelper.hideLoadingIndicator();

      });
  }

  //打开添加成员对话框
  openAddDialog(ownerGroup): void {
    this.addMember.show(ownerGroup);
  }
  //打开删除成员对话框
  openRemoveDialog(ownerGroup): void {
    this.removeMember.show(ownerGroup);
  }

  refresh() {
    this._OwnerGroupsServiceProxy
      .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
      .subscribe(r => {
        this.tableData = r.items;
        // console.log(this.tableData);
      })
  }


  //修改组别信息
  editGroup(ownerGroup) {
  }
  //删除组别信息
  deleteGroup(ownerGroup) {
    if (window.confirm('您确定要删除"' + ownerGroup.groupName + '"吗？')) {
      abp.ui.setBusy();
      this._OwnerGroupsServiceProxy
        .delete(ownerGroup.id)
        .finally(() => { abp.ui.clearBusy(); })
        .subscribe(r => {
          this.notify.info(this.l('SavedSuccessfully'));
          this.refresh();
        })
    }
  }


  sucess(event: boolean) {
    if (event == true) {
      this.refresh();
    }
  }
}


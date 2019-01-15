import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Lk02OutboundOrderReportDatasServiceProxy, OwnerGroupMembersServiceProxy, OwnerGroupsServiceProxy, GetEachCarrierAssignStatusOrderAmountOutput } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment'
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  selector: 'app-find-production-schedule',
  templateUrl: './find-production-schedule.component.html',
  styleUrls: ['./find-production-schedule.component.css'],
  animations: [appModuleAnimation()]

})
export class FindProductionScheduleComponent extends AppComponentBase implements OnInit {

  private startDate;
  private endDate;
  // private order: Order;


  private companies = [];
  private selectedGroupCode: string;

  datas = [];
  carriLK01Datas = [];
  carriLK02Datas = [];
  carriCS01Datas = [];
  totalDatas = new tableData;
  carriTotalLK01Datas = new tableData;
  carriTotalLK02Datas = new tableData;
  carriTotalCS01Datas = new tableData;

  private state = [100, 200, 300, 400, 600];

  dataCaption = ["", "1号仓快递进度", "2号仓快递进度", "长沙仓快递进度"];

  constructor(
    injector: Injector,
    private _service: Lk02OutboundOrderReportDatasServiceProxy,
    private _GroupMembers: OwnerGroupMembersServiceProxy,
    private _Group: OwnerGroupsServiceProxy
  ) {
    super(injector);
    this.defaltTime();
    this.getGroupName();
  }

  ngOnInit() {


  }
  defaltTime() {
    let myDate = new Date();
    let y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    let m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    let d = myDate.getDate();
    this.startDate = moment(y + '-' + m + '-' + (d - 1) + " 16:00").format("YYYY-MM-DDTHH:mm");
    this.endDate = moment(y + '-' + m + '-' + (d) + " 09:00").format("YYYY-MM-DDTHH:mm");
  }

  getGroupName() {
    abp.ui.setBusy();
    this._Group
      .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
      .subscribe((result) => {
        $.each(result.items, (index, item) => {
          this.companies.push(item.ownerGroup)
        })
        abp.ui.clearBusy();
      })
  }



  //linkong
  searchLk() {
    this.datas = [];
    this.carriLK01Datas = [];
    this.carriLK02Datas = [];
    this.carriCS01Datas = [];
    // console.log(this.selectedGroupCode);
    abp.ui.setBusy();
    if (this.selectedGroupCode !== "" && this.selectedGroupCode !== undefined) {
      let companiesArrayCode = [];
      let companiesArrayName = [];
      for (let i = 0; i < this.companies.length; i++) {
        if (this.selectedGroupCode == this.companies[i]['groupCode']) {
          this.dataCaption[0] = this.companies[i]['groupName']
          for (let j = 0; j < this.companies[i]['ownerGroupMembers'].length; j++) {
            companiesArrayCode.push(this.companies[i]['ownerGroupMembers'][j]['ownerCode']);
            companiesArrayName.push(this.companies[i]['ownerGroupMembers'][j]['ownerName'])
          }
          break;
        }
      }

      //按组别进行查找
      for (let z = 0; z < companiesArrayCode.length; z++) {
        if (
          companiesArrayCode[z] == 'BLH' ||
          companiesArrayCode[z] == 'RB' ||
          companiesArrayCode[z] == 'YRWB' ||
          companiesArrayCode[z] == 'XGQQG' ||
          companiesArrayCode[z] == 'XGQQGTHC' ||
          companiesArrayCode[z] == 'ZK' ||
          companiesArrayCode[z] == 'FM'
        ) {
          this.oldFindOrder(companiesArrayCode[z]);
        } else {
          this.newFindOrder(companiesArrayCode[z], companiesArrayName[z]);
        }
      }
      // 
    } else {
      this.newFindCarrier();
    }

  }
  ////旧系统商家
  oldFindOrder(comopanyCode) {
    //   this._service
    //     .getOrdersLk01(
    //       oldLKcompany[i],
    //       undefined,
    //       undefined,
    //       undefined,
    //       undefined,
    //       undefined,
    //       undefined,
    //       undefined,
    //       'normal',
    //       undefined,
    //       this.startDate,
    //       undefined,
    //       this.endDate,
    //       undefined,
    //       undefined
    //     )
    //     .subscribe(r => {
    //       // console.log(typeof r.json());
    //       if (r.json() !== undefined) {
    //         this.oldDataDeal(r.json(), oldLKcompany[i]);
    //       }
    //     })
    // }
    // console.log(this.startDate, this.endDate);
  }
  ////新系统商家
  newFindOrder(comopanyCode, comopanyName) {
    this._service
      .getAssignOwnerAndStatusOrderAmount(comopanyCode, moment(this.startDate), moment(this.endDate), this.state)
      .subscribe(res => {
        console.log(res[0]);
        if (res[0]['amount'] > 0) {
          this.newDataDeal(res[0], comopanyName, 'eeee');
        }
      })
  }

  //旧系统数据处理
  oldDataDeal(orders, name) {
    // let a = 0, b = 0, c = 0, d = 0, e = 0;
    // if (orders != null) {
    //   for (let i in orders) {
    //     //订单池
    //     if (orders[i]['leadingSts'] <= 100) {
    //       a++; continue;
    //     }
    //     //波次中-拣货中
    //     if (orders[i]['leadingSts'] > 100 &&
    //       orders[i]['leadingSts'] <= 300) {
    //       b++; continue;
    //     }
    //     //拣货完成
    //     if (orders[i]['leadingSts'] > 300 &&
    //       orders[i]['leadingSts'] <= 750) {
    //       c++; continue;
    //     }
    //     //称重完成
    //     if (orders[i]['leadingSts'] > 750 &&
    //       orders[i]['leadingSts'] <= 800) {
    //       d++; continue;
    //     }
    //     //已发运
    //     if (orders[i]['leadingSts'] > 800) {
    //       e++; continue;
    //     }
    //   }
    //   let newArray = {
    //     'name': name, 'a': a, 'b': b,
    //     'c': c, 'd': d, 'e': e, 'f': a + b + c, 'g': a + b + c + d + e
    //   };


    //   this.datas.push(newArray)
    // }
  }

  //新系统数据处理
  newDataDeal(orders, name, type) {
    let a = 0, b = 0, c = 0, d = 0, e = 0;
    let newArray = new tableData;
    if (type == 'lk01' || type == 'lk02' || type == 'cs01') {
      a = orders['carrierStatusList'][0]['count'];
      b = orders['carrierStatusList'][1]['count'];
      c = orders['carrierStatusList'][2]['count'];
      d = orders['carrierStatusList'][3]['count'];
      e = orders['carrierStatusList'][4]['count'];
      newArray.name = orders.carrierCode;
      newArray.pool = a + b;
      newArray.picking = c;
      newArray.PickComplete = d + e;
      newArray.productComplete = orders['amount'] - a - b - c - d - e;
      newArray.unfinished = a + b + c + d + e;
      newArray.total = orders['amount'];
      if (type == 'lk02') {
        this.carriLK02Datas.push(newArray);
        this.OnPropChanged('lk02');
      }
      if (type == 'lk01') {
        this.carriLK01Datas.push(newArray);
        this.OnPropChanged('lk01');
      }
      if (type == 'cs01') {
        this.carriCS01Datas.push(newArray);
        this.OnPropChanged('cs01');
      }
    } else {
      a = orders['orderStatusList'][0]['count'];
      b = orders['orderStatusList'][1]['count'];
      c = orders['orderStatusList'][2]['count'];
      d = orders['orderStatusList'][3]['count'];
      e = orders['orderStatusList'][4]['count'];
      newArray.name = name;
      newArray.pool = a + b;
      newArray.picking = c;
      newArray.PickComplete = d + e;
      newArray.productComplete = orders['amount'] - a - b - c - d - e;
      newArray.unfinished = a + b + c + d + e;
      newArray.total = orders['amount']
      this.datas.push(newArray);
      this.OnPropChanged('data');

    }
    abp.ui.clearBusy();
  }

  newFindCarrier() {
    this._service
      .getEachCarrierAssignStatusOrderAmount(
        moment(this.startDate),
        moment(this.endDate),
        'lk01', this.state)
      .subscribe(r => {
        $.each(r, (index, item) => {
          item = item.toJSON();
          if (item['amount'] > 0) {
            this.newDataDeal(item, "", 'lk01');
          }
        })
      })
    this._service
      .getEachCarrierAssignStatusOrderAmount(
        moment(this.startDate),
        moment(this.endDate),
        'lk02', this.state)
      .subscribe(r => {
        $.each(r, (index, item) => {
          item = item.toJSON();
          if (item['amount'] > 0) {
            this.newDataDeal(item, "", 'lk02');
          }
        })
      })
    this._service
      .getEachCarrierAssignStatusOrderAmount(
        moment(this.startDate),
        moment(this.endDate),
        'cs01', this.state)
      .subscribe(r => {
        $.each(r, (index, item) => {
          item = item.toJSON();
          if (item['amount'] > 0) {
            this.newDataDeal(item, "", 'cs01');
          }
        })
      })
  }
  //计算总和
  OnPropChanged(name) {
    let at = 0, bt = 0, ct = 0, dt = 0, ft = 0, gt = 0;
    if (name == 'data') {
      for (let i = 0; i < this.datas.length; i++) {
        at += this.datas[i].pool;
        bt += this.datas[i].picking;
        ct += this.datas[i].PickComplete;
        dt += this.datas[i].productComplete;
        ft += this.datas[i].unfinished;
        gt += this.datas[i].total;
      }
      this.totalDatas.pool = at;
      this.totalDatas.picking = bt;
      this.totalDatas.PickComplete = ct;
      this.totalDatas.productComplete = dt;
      this.totalDatas.unfinished = ft;
      this.totalDatas.total = gt;
    }
    //carri1
    if (name == 'lk01') {
      for (let i = 0; i < this.carriLK01Datas.length; i++) {
        at += this.carriLK01Datas[i].pool;
        bt += this.carriLK01Datas[i].picking;
        ct += this.carriLK01Datas[i].PickComplete;
        dt += this.carriLK01Datas[i].productComplete;
        ft += this.carriLK01Datas[i].unfinished;
        gt += this.carriLK01Datas[i].total;
      }
      this.carriTotalLK01Datas.pool = at;
      this.carriTotalLK01Datas.picking = bt;
      this.carriTotalLK01Datas.PickComplete = ct;
      this.carriTotalLK01Datas.productComplete = dt;
      this.carriTotalLK01Datas.unfinished = ft;
      this.carriTotalLK01Datas.total = gt;
    }
    if (name == 'lk02') {
      for (let i = 0; i < this.carriLK02Datas.length; i++) {
        at += this.carriLK02Datas[i].pool;
        bt += this.carriLK02Datas[i].picking;
        ct += this.carriLK02Datas[i].PickComplete;
        dt += this.carriLK02Datas[i].productComplete;
        ft += this.carriLK02Datas[i].unfinished;
        gt += this.carriLK02Datas[i].total;
      }
      this.carriTotalLK02Datas.pool = at;
      this.carriTotalLK02Datas.picking = bt;
      this.carriTotalLK02Datas.PickComplete = ct;
      this.carriTotalLK02Datas.productComplete = dt;
      this.carriTotalLK02Datas.unfinished = ft;
      this.carriTotalLK02Datas.total = gt;
    }
    if (name == 'cs01') {
      for (let i = 0; i < this.carriCS01Datas.length; i++) {
        at += this.carriCS01Datas[i].pool;
        bt += this.carriCS01Datas[i].picking;
        ct += this.carriCS01Datas[i].PickComplete;
        dt += this.carriCS01Datas[i].productComplete;
        ft += this.carriCS01Datas[i].unfinished;
        gt += this.carriCS01Datas[i].total;
      }
      this.carriTotalCS01Datas.pool = at;
      this.carriTotalCS01Datas.picking = bt;
      this.carriTotalCS01Datas.PickComplete = ct;
      this.carriTotalCS01Datas.productComplete = dt;
      this.carriTotalCS01Datas.unfinished = ft;
      this.carriTotalCS01Datas.total = gt;
    }
  }
  // 

}


export class tableData {
  name: string = '总计';
  pool: number;
  picking: number;
  PickComplete: number;
  productComplete: number;
  unfinished: number;
  total: number;
}



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutoCarrierComponent } from './auto-carrier/auto-carrier.component';
import { AutoCarrierRuleCloneComponent } from './auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component';
import { FindProductionScheduleComponent } from './schedule/find-production-schedule/find-production-schedule.component';
import { CreateOwnerGorupComponent } from './schedule/create-owner-gorup/create-owner-gorup.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    { path: 'dashboard', component: DashboardComponent, data: { permission: 'Pages.Tenant.Dashboard' } }
                ]
            },
            {
                path: 'autoCarrier',
                children: [ 
                    { path: 'ruleSetting', component: AutoCarrierComponent, data: { permission: 'Pages.AutoCarrier.Rule.Settings' } },
                    { path: 'ruleClone', component: AutoCarrierRuleCloneComponent, data: { permission: 'Pages.AutoCarrier.Rule.Clone' } },
                ]
            },
            {
                path: 'schedule',
                children: [ 
                    { path: 'productSchedule', component: FindProductionScheduleComponent, data: { permission: 'Pages.Reports' } },
                    { path: 'ownerGroup', component: CreateOwnerGorupComponent, data: { permission: 'Pages.Reports' } }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }

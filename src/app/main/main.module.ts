import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { CountoModule } from 'angular2-counto';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ModalModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { AutoCarrierComponent } from './auto-carrier/auto-carrier.component';
import { CompanyComboComponent } from './shared/company-combo/company-combo.component';
import { NoUiSliderComponent } from './shared/no-ui-slider/no-ui-slider.component';
import { CarrierComboComponent } from './shared/carrier-combo/carrier-combo.component';
import { AutoCarrierRuleCloneComponent } from './auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component';
import { FindProductionScheduleComponent } from './schedule/find-production-schedule/find-production-schedule.component';
import { CreateOwnerGorupComponent } from './schedule/create-owner-gorup/create-owner-gorup.component';
import { AddMemenberComponent } from './schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component';
import { RemoveMemenberComponent } from './schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component';
import { CompanySelectComponent } from './schedule/company-select/company-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        TabsModule,
        TooltipModule,
        AppCommonModule,
        UtilsModule,
        MainRoutingModule,
        CountoModule,
        EasyPieChartModule
    ],
    declarations: [
        DashboardComponent,
        CompanyComboComponent,
        AutoCarrierComponent,
        NoUiSliderComponent,
        CarrierComboComponent,
        AutoCarrierRuleCloneComponent,
        FindProductionScheduleComponent,
        CreateOwnerGorupComponent,
        AddMemenberComponent,
        RemoveMemenberComponent,
        CompanySelectComponent
    ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { PredictionModelsCardCountComponent } from 'app/components/prediction-models-card-count/prediction-models-card-count.component';
import { LastYearComplainsComponent } from './last-year-complains/last-year-complains.component';
import { ComplainPredictionCountComponent } from './complain-prediction-count/complain-prediction-count.component';
import { ComplainWithoutEvaluationComponent } from './complain-without-evaluation/complain-without-evaluation.component';
import { PredictionModelHitPercentageComponent } from './prediction-model-hit-percentage/prediction-model-hit-percentage.component';
import { ComplainPredictionListComponent } from './complain-prediction-list/complain-prediction-list.component';
import { ComplainPredictionListDashboardComponent } from './complain-prediction-list-dashboard/complain-prediction-list-dashboard.component';
import { ModelHitPercentGraphComponent } from './model-hit-percent-graph/model-hit-percent-graph.component';
import { DonutModelsWinnersComponent } from './donut-models-winners/donut-models-winners.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { ComplainDetailPredictionComponent } from './complain-detail-prediction/complain-detail-prediction.component';
import { ComplainCreationAnswerDatediffComponent } from './complain-creation-answer-datediff/complain-creation-answer-datediff.component';
import { ComplainListByModelComponent } from './complain-list-by-model/complain-list-by-model.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PredictionModelsCardCountComponent,
    LastYearComplainsComponent,
    ComplainPredictionCountComponent,
    ComplainWithoutEvaluationComponent,
    PredictionModelHitPercentageComponent,
    ComplainPredictionListComponent,
    ComplainPredictionListDashboardComponent,
    ModelHitPercentGraphComponent,
    DonutModelsWinnersComponent,
    ComplainListComponent,
    ComplainDetailPredictionComponent,
    ComplainCreationAnswerDatediffComponent,
    ComplainListByModelComponent
  ]
})

export class AdminLayoutModule {}

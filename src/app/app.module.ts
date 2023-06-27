import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpenseComponent } from './expense/expense.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IncomeComponent } from './income/income.component';
import { Display2Component } from './display2/display2.component';
import { ExpdisComponent } from './expdis/expdis.component';
import { IncdisComponent } from './incdis/incdis.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'expdis', component: ExpdisComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'incdis', component: IncdisComponent },
  {path:'edit/:id',component:EditComponent}
  //{path:'**',component:NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ExpenseComponent,
    DisplayComponent,
    IncomeComponent,
    Display2Component,
    ExpdisComponent,
    IncdisComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

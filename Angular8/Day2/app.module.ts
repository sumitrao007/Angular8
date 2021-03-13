import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { CustomServiceComponent } from './custom-service/custom-service.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    StringInterpolationComponent,
    PropertybindingComponent,
    StyleBindingComponent,
    ClassbindingComponent,
    EventBindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    CustomServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

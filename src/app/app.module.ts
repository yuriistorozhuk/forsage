import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CourseComponent } from './components/course/course.component';
import { CPLComponent } from './components/cpl/cpl.component';
import { EngCPLComponent } from './components/eng-cpl/eng-cpl.component';
import { PPLComponent } from './components/ppl/ppl.component';
import { IRComponent } from './components/ir/ir.component';
import { SEPComponent } from './components/sep/sep.component';
import { K10Component } from './components/k10/k10.component';
import { At3Component } from './components/at3/at3.component';
import { P2006tComponent } from './components/p2006t/p2006t.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionCourseComponent } from './components/section-course/section-course.component';
import { CardComponent } from './components/card/card.component';
import { SectionPlaneComponent } from './components/section-plane/section-plane.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CourseComponent,
    CPLComponent,
    EngCPLComponent,
    PPLComponent,
    IRComponent,
    SEPComponent,
    K10Component,
    At3Component,
    P2006tComponent,
    HeaderComponent,
    SectionCourseComponent,
    CardComponent,
    SectionPlaneComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

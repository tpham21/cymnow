import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { ScrollDirective } from './scroll.directive';
import { Button1Component } from './button1/button1.component';
import { Header1Component } from './header1/header1.component';
import { InfoComponent } from './info/info.component';
import { CardComponent } from './card/card.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Info2Component } from './info2/info2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Info3Component } from './info3/info3.component';
import { Card2Component } from './card2/card2.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';
import { Card3Component } from './card3/card3.component';
import { LocationComponent } from './location/location.component';
import { SignatureComponent } from './signature/signature.component';
import { ServiceOfferComponent } from './service-offer/service-offer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { FaqComponent } from './faq/faq.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    ScrollDirective,
    Button1Component,
    Header1Component,
    InfoComponent,
    CardComponent,
    Template2Component,
    Template3Component,
    Info2Component,
    Info3Component,
    Card2Component,
    Template4Component,
    Template5Component,
    HorizontalScrollDirective,
    Card3Component,
    LocationComponent,
    SignatureComponent,
    ServiceOfferComponent,
    IntroductionComponent,
    ToolbarHeaderComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

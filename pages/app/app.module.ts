import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
import { HeaderComponent} from "./header.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PastoralTeamComponent } from "./welcome/pastoral-team.component";
import { FaqComponent } from "./welcome/faq.component";
import { VisitComponent } from "./visit/visit.component";
import { MapComponent } from "./visit/map.component";
import { BeliefComponent } from "./visit/belief.component";
import { KnowGodComponent } from "./visit/know-god.component";
import { EventsComponent } from "./events/events.component";
import { ActivitiesComponent} from "./church-life/activities.component";
import { BandComponent } from "./church-life/band.component";
import { SongstersComponent } from "./church-life/songsters.component";
import { TableComponent } from "./church-life/table.component";
import { BlogComponent } from "./church-life/blog.component";
import { VolunteeringComponent } from "./volunteering/volunteering.component";
import { ServingComponent } from "./serving/serving.component";
import { GivingComponent } from "./giving/giving.component";
import { GiftsComponent } from "./giving/gifts.component";
import { ReasonsComponent } from "./giving/reasons.component";
import { OnlineComponent } from "./giving/online.component";
import { ContactComponent } from "./contact/contact.component";
import { DonateComponent } from "./giving/donate.component"; 
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    declarations: [
                    AppComponent,
                    HeaderComponent,
                    WelcomeComponent,
                    FaqComponent,
                    PastoralTeamComponent,
                    VisitComponent,
                    MapComponent,
                    BeliefComponent,
                    KnowGodComponent,
                    EventsComponent,
                    ActivitiesComponent,
                    BandComponent,
                    SongstersComponent,
                    TableComponent,
                    BlogComponent,
                    VolunteeringComponent,
                    ServingComponent,
                    GivingComponent,
                    GiftsComponent,
                    ReasonsComponent,
                    OnlineComponent,
                    ContactComponent,
                    DonateComponent
                ],
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/pages/'}]
})
export class AppModule {

}

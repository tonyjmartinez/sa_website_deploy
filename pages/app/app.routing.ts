import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PastoralTeamComponent } from "./welcome/pastoral-team.component";
import { FaqComponent } from "./welcome/faq.component";
import { VisitComponent } from "./visit/visit.component";
import { MapComponent } from "./visit/map.component";
import { BeliefComponent } from "./visit/belief.component";
import { KnowGodComponent } from "./visit/know-god.component";
import { EventsComponent } from "./events/events.component";
import { ActivitiesComponent } from "./church-life/activities.component";
import { BandComponent} from "./church-life/band.component";
import { SongstersComponent } from "./church-life/songsters.component";
import { ModuleWithProviders } from "@angular/core";
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

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'pastoral-team', component: PastoralTeamComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'visit', component: VisitComponent },
    { path: 'map', component: MapComponent },
    { path: 'belief', component: BeliefComponent },
    { path: 'know-god', component: KnowGodComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'band', component: BandComponent },
    { path: 'songsters', component: SongstersComponent },
    { path: 'table', component: TableComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'volunteer', component: VolunteeringComponent },
    { path: 'serving', component: ServingComponent },
    { path: 'giving', component: GivingComponent},
    { path: 'gifts' , component: GiftsComponent},
    { path: 'reasons' , component: ReasonsComponent},
    { path: 'online' , component: OnlineComponent},
    { path: 'contact' , component: ContactComponent},
    { path: 'donate' , component: DonateComponent},

    { path: 'events', component: EventsComponent }];
    

export const routing = RouterModule.forRoot(APP_ROUTES);
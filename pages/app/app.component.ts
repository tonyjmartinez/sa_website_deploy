import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Inject } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(@Inject(APP_BASE_HREF) private baseHref:string) { 
    console.log(this.baseHref);
}
}
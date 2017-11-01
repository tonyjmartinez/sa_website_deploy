import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Email } from './email.model';
import { URLSearchParams, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['../volunteering/volunteering.component.css']
})
export class ContactComponent {
    
    email: Email;
    constructor(private http: Http){}
    
    onSubmit(form: NgForm){
        
        const body = {
            name: form.value.name,
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message
        };
        console.log(body);
        this.http.post('http://SaConcordWebsite-env.ymtkjqk55r.us-west-2.elasticbeanstalk.com/email2', body).subscribe();
        //this.http.post('localhost:3000/email2', body).subscribe();
    }
}

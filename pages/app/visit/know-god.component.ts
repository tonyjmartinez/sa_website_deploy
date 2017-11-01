import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Contact } from './contact.model';
import { URLSearchParams, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './know-god.component.html',
    styleUrls: ['../volunteering/volunteering.component.css']
})
export class KnowGodComponent {
    contact: Contact;
        
    constructor(private http: Http){}

    onSubmit(form: NgForm){
        console.log(form.value.subject);
        const body = {name: form.value.name,
                        email: form.value.email,
                        age: form.value.age,
                        gender: form.value.gender,
                        comments: form.value.comments,
                        subject: form.value.subject
                     };
        this.http.post('http://SaConcordWebsite-env.ymtkjqk55r.us-west-2.elasticbeanstalk.com /email',body).subscribe();
        //this.http.post('http://localhost:3000/email',body).subscribe();

    }
}

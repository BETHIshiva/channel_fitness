import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // name:any;
  // onsubmit(){
  //   console.log(name);
  // }
  constructor (private fb:FormBuilder,private http: HttpClient,private demoservice:ApiService){}
  handleButtonClick(event: Event): void {
    event.preventDefault();
    const inputElement1 = document.getElementById('name') as HTMLInputElement;
    const inputElement2 = document.getElementById('contact') as HTMLInputElement;
    const inputElement3 = document.getElementById('requirement') as HTMLInputElement;
    const inputElement4 = document.getElementById('describe') as HTMLInputElement;

    const inputnameValue = inputElement1.value;
    const inputcontactValue = inputElement2.value;
    const inputrequirementValue = inputElement3.value;
    const inputdescribeValue = inputElement4.value;
    
    console.log(inputnameValue)
    console.log(inputcontactValue)
    console.log(inputrequirementValue)
    console.log(inputdescribeValue)
     
    this.demoservice.onInsert({
      name: inputnameValue,
      contact: inputcontactValue,
      requirement: inputrequirementValue,
      describe: inputdescribeValue
    }).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.error(error);
      }
    );
    
  }

}

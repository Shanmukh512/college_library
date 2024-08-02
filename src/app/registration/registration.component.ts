import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  login! :FormGroup;
  student: Registration = new Registration();
  constructor(private service: RegistrationService,private form:FormBuilder) {
    this.login = this.form.group({
      username : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
      name : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(6)]],
      email : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(4),Validators.email]],
      password : ['',[Validators.required,Validators.maxLength(8),Validators.minLength(4),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
    })
   }
  ngOnInit(): void { }
  submit(): void {
    this.service.onclick(this.student).subscribe(
      response => {
        console.log("Successfully registered", response);
        Swal.fire("Successfully Registered",'success','success');
      },

      error => {
        console.log("error", error);
        Swal.fire("Error",'error','error');
      }
    )
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  myData={};
  myForm:FormGroup;
  constructor(private fb: FormBuilder){
  }
  ngOnInit() {
    this.validate();
  }
  validate()
  {
    this.myForm=this.fb.group(
      {
        'name':['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
        'mobile':['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
        'email':['',Validators.compose([Validators.required,Validators.email])],
      }
    )
  }
  Contact()
  {  
    this.myData = true;
    if (this.myForm.invalid) {
      return;
  }
    // if (this.myForm.invalid) {
    //     return true;
    // }
    Swal('Good job!', 'Form Submited successfully', 'success');
    this.myForm.reset();
    this.myData = false
  }

}

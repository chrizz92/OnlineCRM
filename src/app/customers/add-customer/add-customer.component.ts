import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstname :string = '';
  terms:boolean = false;
  customerType:string='1';
  description:string='';
  
  constructor() { }

  ngOnInit(): void {
    
  }

  addCustomer(formValue:NgForm){
    console.log(formValue.value);
  }

  resetForm(form:NgForm){
    form.reset();
    //form.resetForm();
  }

  loadValues(form:NgForm){
    let userDetails = {
      firstname:'Demo',
      terms:false,
      customerType:'1',
      description:'Zusatzinfos'
    };

    form.setValue(userDetails);
  }

}

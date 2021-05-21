import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css']
})
export class LoanTypesComponent implements OnInit {

  //ReactiveForm --> http://localhost:4200/loan-types/add-loan
  addLoanType:FormGroup;
  hasSubscription: boolean = false;
  formSubscription:Subscription;
  loanNameSubscription:Subscription;
  validators:Validators;

  resetFormValues = {
    'loanName':'Name of Loan',
    'loanDescription': 'This is \n the description',
    'loanType':'Type of Loan'
  }

  constructor(private formBuilder:FormBuilder) { }
  
  

  ngOnInit(): void {
    /* this.addLoanType = new FormGroup({
      'loanName':new FormControl(),
      'loanDescription': new FormControl(),
      'loanType':new FormControl()
    }); */

  //Combine Validators and reuse them
  this.validators = Validators.compose([
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10)
  ]);

  this.addLoanType = this.formBuilder.group({
      'loanName':new FormControl('init', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'loanDescription': new FormControl('initial\nloanDescription',Validators.compose([
        Validators.required,
        Validators.maxLength(200)
      ])),
      'loanType':new FormControl('initial loanType',this.validators)
  });

  this.addLoanType.statusChanges.subscribe(data=>{
    console.log(data);
  });

  }

  addType(){
    console.log(this.addLoanType.value);//Gets all the data of the form
  }

  resetForm(){
    this.addLoanType.reset();
  }

  setFormValues(){
    this.addLoanType.setValue(this.resetFormValues);
    //this.addLoanType.patchValue(); --> if not all fields should get initial Values
  }

  getLoanName(){
    console.log(this.addLoanType.get('loanName').value);
  }

  getLoanType(){
    console.log(this.addLoanType.get('loanType').value);
  }

  getLoanDescription(){
    console.log(this.addLoanType.get('loanDescription').value);
  }

  getChangesFormValues(){
    this.hasSubscription = !this.hasSubscription;

    if(this.hasSubscription){
      this.formSubscription = this.addLoanType.valueChanges.subscribe(data=>{
        console.log(data);
      });
    }
    else{
      this.formSubscription.unsubscribe();
    }
  }

  getFormStatus(){
    console.log('');
    console.log('Valid : ' + this.addLoanType.valid);
    console.log('Invalid : ' + this.addLoanType.invalid);
    console.log('Pending : '+ this.addLoanType.pending);
    console.log('Pristine : '+ this.addLoanType.pristine);
    console.log('Dirty : '+ this.addLoanType.dirty);
    console.log('Touched : '+ this.addLoanType.touched);
    console.log('Untouched : '+ this.addLoanType.untouched);
  }

  trackLoanNameChanges(){
    this.addLoanType.get('loanName').valueChanges.subscribe(data=>{
      console.log(data);
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  regForm!:FormGroup;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
     this.regForm = this.fb.group({
       name:['',Validators.required],
      mobileNumber:['',[Validators.required, Validators.pattern('[0-9]{10}')]],
      email:['',[Validators.required, Validators.email]],
      password:['']
    })
  }
  
  onSubmit(){
    console.log(this.regForm.value);
    this.authservice.signUp(this.regForm.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }
}

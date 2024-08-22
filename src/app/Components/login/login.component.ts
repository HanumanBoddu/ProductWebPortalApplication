import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authservice.getUsers().subscribe({
      next:(res:any)=>{
        console.log(res);
        res.forEach((element:any) => {
          if(element.email===this.loginForm.value.email && element.password===this.loginForm.value.password){
            console.log("Login Successful");
            this.router.navigate(['']);
          }
        });
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }

}

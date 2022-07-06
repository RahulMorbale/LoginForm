import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void {
  }
  formobj = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern("^[0-9]{6,10}$")])
  })
  // hide = true;
  next() {
    this.userdetails.filter((item: any) => {
      if (item.username == this.formobj.value.username &&
        item.password == this.formobj.value.password) {
        // this.route.navigateByUrl('/user',{state:item.user})
        // this.route.navigate(['routetodetailscomponent'], { state: {data: order} });
        this.route.navigateByUrl('/user', { state: { data: item.user } })
      } 
    })
    
       
  }
  userdetails = [
    {
      username: 'rahul@gmail.com',
      password: 123456,
      user: 'Welcome Rahul ',
    },
    {
      username: 'manohar@gmail.com',
      password: 12345678,
      user: 'Welcome Manohar'
    },
    {
      username: 'jyoti@gmail.com',
      password: 654321,
      user: 'Welcome Jyoti'
    },
    {
      username: 'ragini@gmail.com',
      password: 87654321,
      user: 'Welcome Ragini'
    },
    {
      username: 'macchindra@gmail.com',
      password: 11223344,
      user: 'Welcome Macchindra'
    }
  ]
}

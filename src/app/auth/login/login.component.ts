import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('password') passwordRef!: ElementRef;
  @ViewChild('togglePassword') togglePasswordRef!: ElementRef;

  loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [localStorage.getItem('remember') || '']
  })

  constructor(private fb: FormBuilder, private router: Router, private authSvc: SidebarService) { }

  ngOnInit(): void {
  }



  async onGoogleLogin() {


  }

  async login() {
    localStorage.setItem('guard','log')
    this.router.navigateByUrl('dashboard')
  }

  onCheckboxChhange(e: any) {

    
  }

  hideShowPass() {

   
  }



}

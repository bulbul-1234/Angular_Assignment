import { Component,OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonServiceService } from './common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  loginPage=true;
  loginForm: FormGroup;
  submitted = false;
  href="";
  toggleNav: boolean = false;
  
  lat = 13;
  lng = 80;
  constructor( private rt: Router,
               private fb: FormBuilder,
               private cs: CommonServiceService
                ) {
   
  }

 
  ngOnInit(): void {
       
  }
  storeOption() {
    this.toggleNav=true;
  // alert("gggg");
  }
  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}

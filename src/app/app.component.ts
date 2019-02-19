import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestHello';
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log("onOninit Work");
  }

  onSubmit(feedBackForm: NgForm) {
    
    console.log('userName ==> ' + feedBackForm.value.userName);
    
  }



}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    // let data = {userName: 'Doramon123', passWord: 'dora1234'}
    // this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
    //   alert(JSON.stringify(result));
    // });

  }

  onSubmit(userName: string) {

    console.log('userName ==> ' + userName);

    let data = {userName: userName, passWord: 'dora1234'};

    console.log('data ==> ' + JSON.stringify(data));

    alert(JSON.stringify(data));
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
      alert(JSON.stringify(result));
    });
  }



}



import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  resData: any;
  letNews: any;
  ngOnInit() {
    this.letNewss();
  }
  letNewss()
  {
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32578531dba04580b24d506734b339ee";
    // console.log("url***",url);
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
      this.resData=res;
      this.letNews=this.resData.articles;
    },err=>
    
  {
    console.log(err)
  })
  
  }
 

}

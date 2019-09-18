import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-hotle',
  templateUrl: './hotle.component.html',
  styleUrls: ['./hotle.component.css']
})
export class HotleComponent implements OnInit {

  constructor(private http:HttpClient) { }
  resData: any = [];
  pData1;
  ngOnInit() {
    this.pData();
  }
  pData()
  {
    // let url="http://jsonplaceholder.typicode.com/posts/";
    let url="http://webhose.io/productFilter?token=a5add60a-f03f-4eb1-9fda-38ef94488d7b&format=json&q=name%3Anike%20price%3A%3C50";
    console.log("url***",url);
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res,res["products"] );
      this.resData=res["products"];
      this.pData1=this.resData;
    },err=>
  {
    console.log(err)
  })
  }
}

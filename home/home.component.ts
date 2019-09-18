import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title="carasoul"
  images=["https://cdn.pixabay.com/photo/2017/04/01/11/03/animals-2193366_1280.jpg","https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg","https://cdn.pixabay.com/photo/2016/09/04/20/14/sunset-1645103_1280.jpg","https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_1280.jpg","https://cdn.pixabay.com/photo/2017/07/23/16/01/nature-2531761_1280.jpg"];
  imagesCard=["https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_1280.jpg","https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg","https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg","https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg","https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg",
"https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg"];
  number = [0,1,2,3,4];
  constructor() { }
  ngOnInit() {
    for(let i = 0; i < 5; i++) {
      // console.log(i);
    }

    $(document).ready(function(){
      $("#myDIV").addClass("active")
      $(".carousel-indicators>li:first-child").addClass("active");
    });
    }
    
}

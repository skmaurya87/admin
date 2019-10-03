import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images=[
    {"img":"https://images.freeimages.com/images/large-previews/b8d/irish-landscape-1393571.jpg", "badge":"Light badge", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum 1", "h3": "First slide label 1", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/c5a/chapada-1-1361193.jpg", "badge":"Light badge new", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 2", "h3": "First slide label 2", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg", "badge":"Light badge old", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 3", "h3": "First slide label 3", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/680/alpine-climbing-1405845.jpg", "badge":"Light badge prev", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 4", "h3": "First slide label 4", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/9ee/panorama-of-ovan-lake-1637186.jpg", "badge":"Light badge new", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 2", "h3": "First slide label 2", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/535/valle-nevado-resort-1636928.jpg", "badge":"Light badge new", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 2", "h3": "First slide label 2", "btn":"https://themeforest.net/"},
    {"img":"https://images.freeimages.com/images/large-previews/025/aurora-470633631-1638810.jpg", "badge":"Light badge next", "text":"Nulla vitae elit libero, a pharetra augue mollis interdum. 5", "h3": "First slide label 5", "btn":"https://themeforest.net/"},];
  constructor() { }
  ngOnInit() {
    $(document).ready(function(){
      $("#myDIV").addClass("active")
      $(".carousel-indicators>li:first-child").addClass("active");
    });
  }
}

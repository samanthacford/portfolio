import { Component, OnInit,Input } from '@angular/core';
import slideData from "src/assets/json/carouselDataAlt.json"
@Component({
  selector: 'app-carousel-element',
  templateUrl: './carousel-element.component.html',
  styleUrls: ['./carousel-element.component.css']
})
export class CarouselElementComponent implements OnInit{
  private intervalId;

  slides: any[];
  firstSlide = {src:'', slideVal:'', slideNum:''}
  @Input() inputIndex: string;
  ngOnInit():void{
    let index = Number.parseInt(this.inputIndex);
    let tempDic = Object.values(slideData);
    this.slides =  new Array(tempDic[index].length - 1).fill({src:'', slideVal:'', slideNum:''});
    this.firstSlide = {src: tempDic[index][0].imageSRC, slideVal: tempDic[index][0].slideVal, slideNum: tempDic[index][0].slideNum};
    for(let i = 0; i < tempDic[index].length - 1; i++){
      this.slides[i] = {src: tempDic[index][i+1].imageSRC, slideVal: tempDic[index][i+1].slideVal, slideNum: tempDic[index][i+1].slideNum};
    }

  }
  constructor() {
    this.intervalId = null;
    
    window.onload = (event) => {
      
      document.getElementsByClassName('active')
    }
    
  };

  slide_bar() {
    let timeValue = 2.5;
    if(this.intervalId === null){
    for (let i = 0; i < document.getElementById('horizontal-bar')!.children.length; i++) {
      for (let k = 0; k < document.getElementById('horizontal-bar')!.children[i].classList.length; k++) {
        if (document.getElementById('horizontal-bar')!.children[i].classList[k] == 'active') {
          let startPos = document.getElementById('horizontal-bar')!.scrollLeft
          let endPos = (document.getElementById('slide 1')!.offsetWidth + 2) * i;
          let counter = 0;
          this.intervalId = setInterval(() => {
            counter = counter + 0.05;
            
            if (counter > timeValue){
              clearInterval(this.intervalId);
              this.intervalId = null;
              document.getElementById('horizontal-bar')!.scrollLeft = endPos;
            } else {
              document.getElementById('horizontal-bar')!.scrollLeft = startPos + (endPos - startPos) * (counter / timeValue);
            }
             
          }, 10)
          
        }
        

      }

    }
  }
  }
}

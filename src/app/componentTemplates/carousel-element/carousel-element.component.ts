import { Component, OnInit, Input } from '@angular/core';
//imports the json file of carousel data
import slideData from "src/assets/json/carouselDataAlt.json"
@Component({
  selector: 'app-carousel-element',
  templateUrl: './carousel-element.component.html',
  styleUrls: ['./carousel-element.component.css']
})
export class CarouselElementComponent implements OnInit {
  //variable for tracking if timer is active
  private intervalId;
  //array to be populated with slide data from Json file
  slides: any[];
  //variable responsible specifically for the first slide of the carousel
  firstSlide = { src: '', slideVal: '', slideNum: '' }
  //input that receives the positon in the Json file to pull from
  @Input() inputIndex: string;
  //compiles and sets data on initialization
  ngOnInit(): void {
    //create a variable to use the parsed index that was passed in
    let index = Number.parseInt(this.inputIndex);
    //create a temp storage space to recieve the values from slide data
    let tempDic = Object.values(slideData);
    //initialize slides array with values for the length of the Json values
    this.slides = new Array(tempDic[index].length - 1).fill({ src: '', slideVal: '', slideNum: '' });
    //set the value of the first slide of the carousel
    this.firstSlide = { src: tempDic[index][0].imageSRC, slideVal: tempDic[index][0].slideVal, slideNum: tempDic[index][0].slideNum };
    //loop through the rest of the values and populate the array
    for (let i = 0; i < tempDic[index].length - 1; i++) {
      this.slides[i] = { src: tempDic[index][i + 1].imageSRC, slideVal: tempDic[index][i + 1].slideVal, slideNum: tempDic[index][i + 1].slideNum };
    }
  }

  constructor() {
    //initialize the intervalId
    this.intervalId = null;
  };

  slide_bar() {
    //set the max time value between transitions
    let timeValue = 2.5;
    //confirm if no timer is active
    if (this.intervalId === null) {
      //loop through the all the thumbnails
      for (let i = 0; i < document.getElementById('horizontal-bar')!.children.length; i++) {
        //loop through all of the classes of the that thumbnail
        for (let k = 0; k < document.getElementById('horizontal-bar')!.children[i].classList.length; k++) {
          //Check if the thumbnail has the active class
          if (document.getElementById('horizontal-bar')!.children[i].classList[k] == 'active') {
            //Set the start position for the lerp
            let startPos = document.getElementById('horizontal-bar')!.scrollLeft
            //calculate the end position for the lerp
            let endPos = (document.getElementById('slide 1')!.offsetWidth + 2) * i;
            //set a counter variable
            let counter = 0;
            //setInterval which starts a timer
            this.intervalId = setInterval(() => {
              counter = counter + 0.05;
              //Check if the timer reaches the max time value
              if (counter > timeValue) {
                //Clear the timer
                clearInterval(this.intervalId);
                //null the timer for checks
                this.intervalId = null;
                //Set the scrollbar's position to the final position of the scroll
                document.getElementById('horizontal-bar')!.scrollLeft = endPos;
              } else {
                //increment the scrollbar's position along the timer using a mathmatic lerp calculation
                document.getElementById('horizontal-bar')!.scrollLeft = startPos + (endPos - startPos) * (counter / timeValue);
              }
              //update every 10 miliseconds
            }, 10)
          }
        }
      }
    }
  }
}

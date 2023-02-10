import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { count } from 'rxjs';

@Component({
  selector: 'app-basezero',
  templateUrl: './basezero.component.html',
  styleUrls: ['./basezero.component.css']
})

export class BasezeroComponent {
  private intervalId;
  constructor() {
    this.intervalId = null;
    window.onload = (event) => {
      console.log("hur");
      

      // const button: any = document.getElementById('next-image');

      // button.onclick = () => {
      //   console.log(document.getElementById('horizontal-bar')!.scrollLeft);
      //   document.getElementById('horizontal-bar')!.scrollLeft += document.getElementById('slide 1')!.offsetWidth +  2;
      // };

      // console.log(document.getElementById('horizontal-bar')!.children[0]);
      document.getElementsByClassName('active')
    }
    
  };

  slide_bar() {
    let timeValue = 2.5;
    if(this.intervalId === null){
    let buttonArray: [] = HTMLElement[document.getElementById('horizontal-bar')!.children.length];
    for (let i = 0; i < document.getElementById('horizontal-bar')!.children.length; i++) {
      for (let k = 0; k < document.getElementById('horizontal-bar')!.children[i].classList.length; k++) {
        if (document.getElementById('horizontal-bar')!.children[i].classList[k] == 'active') {
          let startPos = document.getElementById('horizontal-bar')!.scrollLeft
          let endPos = (document.getElementById('slide 1')!.offsetWidth + 2) * i;
          let counter = 0;
          this.intervalId = setInterval(() => {
            counter = counter + 0.05;
            console.log(counter)
            
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
  } else {
    console.log("problem");
  }
  }

}


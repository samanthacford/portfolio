import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import modelModalData from "src/assets/json/threeDGridData.json"

@Component({
  selector: 'app-threeddesign',
  templateUrl: './threeddesign.component.html',
  styleUrls: ['./threeddesign.component.css']
})


export class ThreeddesignComponent implements PipeTransform {
  private intervalId;
  constructor(private sanitizer: DomSanitizer) { 
    this.intervalId = null;
  }
  ngOnInit():void{
    let modelCatRef = 0;
    let modelRef = 0;
    this.modelTitle = this.modelModalArray[modelCatRef][modelRef].title;
    this.modelFrameTitle = this.modelModalArray[modelCatRef][modelRef].frameTitle;
    this.modelDesc = this.modelModalArray[modelCatRef][modelRef].modelDesc;
    this.modelSrc = this.transform(this.modelModalArray[modelCatRef][modelRef].modelSRC);  
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  modelModalArray = Object.values(modelModalData);
  modelTitle: string;
  modelFrameTitle: string;
  modelDesc: string;
  modelSrc;
  onClick(catIndex: string, index: string) {
    let modelCatRef = Number.parseInt(catIndex);
    let modelRef = Number.parseInt(index);
    this.modelTitle = this.modelModalArray[modelCatRef][modelRef].title;
    this.modelFrameTitle = this.modelModalArray[modelCatRef][modelRef].frameTitle;
    this.modelDesc = this.modelModalArray[modelCatRef][modelRef].modelDesc;
    this.modelSrc = this.transform(this.modelModalArray[modelCatRef][modelRef].modelSRC);      
  }

  slide_bar(direction: string, btnLeftId: string, btnRightId: string, horzBar: string) {
    let timeValue = 2.5;
    if(this.intervalId === null){
      let startPos = document.getElementById(horzBar)!.scrollLeft
      let endPos = 0;
      if(direction === "right"){
        if(document.getElementById(btnLeftId)!.hidden === true){
          document.getElementById(btnLeftId)!.hidden = false;
        }
        endPos = startPos + (document.getElementById('btn-1')!.offsetWidth) * 5;
        if(endPos + 30 >= (document.getElementById(horzBar)!.scrollWidth - document.getElementById(horzBar)!.clientWidth)){
          endPos = (document.getElementById(horzBar)!.scrollWidth - document.getElementById(horzBar)!.clientWidth);
          document.getElementById(btnRightId)!.hidden = true;
        }
      } else{
        if(document.getElementById(btnRightId)!.hidden === true){
          document.getElementById(btnRightId)!.hidden = false;
        }
        endPos = startPos - (document.getElementById('btn-1')!.offsetWidth) * 5;
        if(endPos <= 30){
          endPos = 0;
          document.getElementById(btnLeftId)!.hidden = true;
        }
      }
        
          let counter = 0;
          this.intervalId = setInterval(() => {
            counter = counter + 0.05;
            console.log(document.getElementById(horzBar)!.scrollLeft)
            if (counter > timeValue){
              clearInterval(this.intervalId);
              this.intervalId = null;
              document.getElementById(horzBar)!.scrollLeft = endPos;
            } else {
              document.getElementById(horzBar)!.scrollLeft = startPos + (endPos - startPos) * (counter / timeValue);
            }
             
          }, 10)

  }
  }
} 

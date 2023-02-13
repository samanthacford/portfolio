import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
//imports the json file of model display data
import modelModalData from "src/assets/json/threeDGridData.json"

@Component({
  selector: 'app-threeddesign',
  templateUrl: './threeddesign.component.html',
  styleUrls: ['./threeddesign.component.css']
})


export class ThreeddesignComponent implements PipeTransform {
  //variable for tracking if timer is active
  private intervalId;
  //set an array of the model data
  modelModalArray = Object.values(modelModalData);
  //create a string variable for the title of the model
  modelTitle: string;
  //create a string variable for the frame title of the model
  modelFrameTitle: string;
  //create a string variable for the description of the model
  modelDesc: string;
  //create a variable for the url of the model
  modelSrc;
  //create a model catagory ref number and set it to 0 for the first element
  modelCatRef: number;
  //create a model ref number and set it to 0 for the first element
  modelRef: number;
  //constructor that creates domSanitizer
  constructor(private sanitizer: DomSanitizer) {
    //initialize the intervalId
    this.intervalId = null;
  }
  //compiles and sets data on initialization
  ngOnInit(): void {
    //initialize it at 0 for the first element
    this.modelCatRef = 0;
    //initialize it at 0 for the first element
    this.modelRef = 0;
    //set the current model title to the first in the array
    this.modelTitle = this.modelModalArray[this.modelCatRef][this.modelRef].title;
    //set the current model frame title to the first in the array
    this.modelFrameTitle = this.modelModalArray[this.modelCatRef][this.modelRef].frameTitle;
    //set the current model description to the first in the array
    this.modelDesc = this.modelModalArray[this.modelCatRef][this.modelRef].modelDesc;
    //set the current model src to the first in the array that has been sanitized
    this.modelSrc = this.transform(this.modelModalArray[this.modelCatRef][this.modelRef].modelSRC);
  }
  //return a sanitized url for security
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  //an on click event that changes the data for the model modal box
  // takes in a an index of the catagory and index of the model
  onClick(catIndex: string, index: string) {
    //set the modelCatRef to the catIndex passed in
    this.modelCatRef = Number.parseInt(catIndex);
    //set the modelRef to the Index passed in
    this.modelRef = Number.parseInt(index);
    //set the initial modal box to the first element's title, frame title, description and src
    this.modelTitle = this.modelModalArray[this.modelCatRef][this.modelRef].title;
    this.modelFrameTitle = this.modelModalArray[this.modelCatRef][this.modelRef].frameTitle;
    this.modelDesc = this.modelModalArray[this.modelCatRef][this.modelRef].modelDesc;
    this.modelSrc = this.transform(this.modelModalArray[this.modelCatRef][this.modelRef].modelSRC);
  }
  //moves the horizontal bar by a set amount on button press
  //pass in the direction to move hte bar, the left and right button id's and the horizontal bar to be moved
  slide_bar(direction: string, btnLeftId: string, btnRightId: string, horzBar: string) {
    //set the max time value between transitions
    let timeValue = 2.5;
    //confirm if no timer is active
    if (this.intervalId === null) {
      //create and set the start position for the lerp
      let startPos = document.getElementById(horzBar)!.scrollLeft
      //create and intialize the end point for the lerp
      let endPos = 0;
      //check which direction button is pressed
      if (direction === "right") {
        //check if the left button is hidden and if so unhide when right is pressed
        if (document.getElementById(btnLeftId)!.hidden === true) {
          document.getElementById(btnLeftId)!.hidden = false;
        }
        //set the endpos using the width of the thumbnail * the number of slides to move
        endPos = startPos + (document.getElementById('btn-1')!.offsetWidth) * 5;
        //if the endPos + a pixel ammount is greater than the max width of the horizontal scrollbar then set its final postion to the max width
        if (endPos + 30 >= (document.getElementById(horzBar)!.scrollWidth - document.getElementById(horzBar)!.clientWidth)) {
          endPos = (document.getElementById(horzBar)!.scrollWidth - document.getElementById(horzBar)!.clientWidth);
          //if the endPos is at the max width of the screen then hide the right slide button
          document.getElementById(btnRightId)!.hidden = true;
        }
      } else {
        //check if the right button is hidden and if so unhide when left is pressed
        if (document.getElementById(btnRightId)!.hidden === true) {
          document.getElementById(btnRightId)!.hidden = false;
        }
        //set the endpos using the width of the thumbnail * the number of slides to move
        endPos = startPos - (document.getElementById('btn-1')!.offsetWidth) * 5;
        //if the endPos + a pixel ammount is less than 0 or the start of the page then set its endPos to 0
        if (endPos <= 30) {
          endPos = 0;
          //if the endPos is the start of the window then hide the left slide button
          document.getElementById(btnLeftId)!.hidden = true;
        }
      }
      //set a counter variable
      let counter = 0;
      //setInterval which starts a timer
      this.intervalId = setInterval(() => {
        //increment the counter by a set amount
        counter = counter + 0.05;
        //Check if the timer reaches the max time value
        if (counter > timeValue) {
          //Clear the timer
          clearInterval(this.intervalId);
          //null the timer for checks
          this.intervalId = null;
          //Set the scrollbar's position to the final position of the scroll
          document.getElementById(horzBar)!.scrollLeft = endPos;
        } else {
          //increment the scrollbar's position along the timer using a mathmatic lerp calculation
          document.getElementById(horzBar)!.scrollLeft = startPos + (endPos - startPos) * (counter / timeValue);
        }
        //update every 10 miliseconds
      }, 10)
    }
  }
} 

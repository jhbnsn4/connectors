import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IReview } from 'src/app/model/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input()
  review?: IReview;

  submittedDate: string | null = null;

  // We need two arrays for our *ngFors
  starsFilled: number[] = [];
  starsEmpty: number[] = [];

  // Is our review X.0 or X.5?
  reviewIsWholeNumber: boolean = true;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.reviewStarsSetup();  

    // Our formatted date for when review was submitted
    this.submittedDate = this.datePipe.transform(this.review?.submitted, 'd MMMM, y, h:mm a');    
  }


  /**
   * Set up everything needed to display the review stars in HTML.
   */
  reviewStarsSetup() {
    if (this.review?.stars) {

      // Store the number of stars as a floored integer value
      let starNum = Math.floor(this.review.stars);

      // Calculate how many stars out of five we are missing
      let numEmpty = Math.floor(5 - this.review.stars);
      
      // Is our review a whole number? (is it the same even after being floored?)
      this.reviewIsWholeNumber = (this.review.stars) === starNum;

      // Create an array with size = starNum. The contents of the array is irrelevant
      this.starsFilled = Array.from(new Array(starNum).keys());
  
      // Create an array with size = numEmpty. 
      this.starsEmpty = Array.from(new Array(numEmpty).keys());
    }
  }

}

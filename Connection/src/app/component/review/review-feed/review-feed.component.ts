import { Component, OnInit } from '@angular/core';
import { IReview } from 'src/app/model/review';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-review-feed',
  templateUrl: './review-feed.component.html',
  styleUrls: ['./review-feed.component.css']
})
export class ReviewFeedComponent implements OnInit {

  reviews: IReview[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fillExampleReviews();
  }

  /**
   * Method to fill a list of reviews with hard-coded values for testing
   */
  fillExampleReviews() {
    // fill reviews with hard-coded data
    this.reviews.push({
      author: this.userService.getUsers()[0],
      stars: 3.5,
      text: "example review",
      submitted: new Date()
    });

    this.reviews.push({
      author: this.userService.getUsers()[1],
      stars: 1,
      text: "example review TWO",
      submitted: new Date()
    });
  }

}

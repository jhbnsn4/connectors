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
    // fill reviews with hard-coded data
    this.reviews.push({
      author: this.userService.getUsers()[0],
      stars: 5,
      text: "example review",
      submitted: new Date()
    });
  }

}

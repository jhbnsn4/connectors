import { Component, OnInit } from '@angular/core';
import { IReview } from 'src/app/model/review';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review: IReview | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

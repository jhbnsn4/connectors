import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit { 

  features = [
    {
      "featureId": "1",
      "featureDescription" : "Provides insight when no record is available (\"no hit\") for a consumer on The Work Number database"
    },
    {
      "featureId": "2",
      "featureDescription" : "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Feugiat in ante metus dictum at tempor commodo ullamcorper."
    },
    {
      "featureId": "3",
      "featureDescription" : "Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Dui id ornare arcu odio ut. "
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
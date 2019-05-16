import { Component, OnInit, Input } from '@angular/core';
import { Laureate } from '../nobels.model';

@Component({
  selector: 'app-laureate-card',
  templateUrl: './laureate-card.component.html',
  styleUrls: ['./laureate-card.component.scss']
})
export class LaureateCardComponent implements OnInit {
  @Input() laureate: Laureate;

  ImageURL: string = '/assets/images/';

  constructor() { }

  ngOnInit() {
    if (this.laureate.gender === "male") {
      this.ImageURL = this.ImageURL + "avatar-male.png";
    }
    else {
      this.ImageURL = this.ImageURL + "avatar-female.png";
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Laureate } from '../nobels.model';

@Component({
  selector: 'app-laureate-card',
  templateUrl: './laureate-card.component.html',
  styleUrls: ['./laureate-card.component.sass']
})
export class LaureateCardComponent implements OnInit {
  @Input() laureate: Laureate;

  constructor() { }

  ngOnInit() {
  }

}

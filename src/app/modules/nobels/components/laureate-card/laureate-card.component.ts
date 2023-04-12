import { Component, OnInit, Input } from '@angular/core';
import { Laureate } from '../../models/nobels.model';

@Component({
	selector: 'app-laureate-card',
	templateUrl: './laureate-card.component.html',
	styleUrls: ['./laureate-card.component.scss']
})
export class LaureateCardComponent implements OnInit {
	@Input() person: Laureate;

	ImageURL: string = './assets/images/nobels/';

	constructor() { }

	ngOnInit() {
		if (this.person.gender === "male") {
			this.ImageURL = this.ImageURL + "avatar-male.png";
		}
		else if (this.person.gender === "female") {
			this.ImageURL = this.ImageURL + "avatar-female.png";
		}
		else {
			this.ImageURL = this.ImageURL + "avatar-org.png";
		}
	}
}

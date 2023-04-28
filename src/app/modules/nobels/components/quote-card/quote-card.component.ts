import { Component, OnInit, Input } from '@angular/core';
import { Laureate } from '../../models/nobels.model';

@Component({
	selector: 'app-quote-card',
	templateUrl: './quote-card.component.html',
	styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {
	public person: Laureate;
	public imageURL: string;
	public quote: string | undefined;

	constructor() { }

	ngOnInit() {
		this.loadAQuote();
	}

	loadAQuote() {
		// Hardcoding for now, TODO: fetch randomly, or based on a relavent date
		this.person = {
			id: "266",
			firstname: "John C.",
			surname: "Polanyi",
			born: "1929-01-23",
			died: "0000-00-00",
			bornCountry: "Germany",
			bornCountryCode: "DE",
			bornCity: "Berlin",
			gender: "male",
			prizes: [{
				year: 1986,
				category: "chemistry",
				share: 3,
				motivation: "\"for their contributions concerning the dynamics of chemical elementary processes\"",
				affiliations: [{
					name: "University of Toronto",
					city: "Toronto",
					country: "Canada"
				}]
			}],
			quotes: [{
				short: 'Science never gives up searching for truth, since it never claims to have achieved it.',
				long: 'Science never gives up searching for truth, since it never claims to have achieved it. It is civilizing because it puts truth ahead of all else, including personal interests. These are grand claims, but so is the enterprise in which scientists share.'
			}]
		};

		this.quote = this.person['quotes']![0]!.short;
		this.imageURL = './assets/images/laureates/' + this.person['id'] + '.png';
	}
}

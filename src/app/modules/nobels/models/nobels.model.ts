export interface Location {
	name?: string;
	city?: string;
	country?: string;
}

export interface Prize {
	year?: number;
	category?: string;
	share?: number;
	motivation?: string;
	affiliations?: Location[];
}

export interface Quote {
	short?: string;
	long?: string;
}

export interface Laureate {
	id: string;
	firstname: string;
	surname?: string;
	born?: string;
	died?: string;
	bornCountry?: string;
	bornCountryCode?: string;
	bornCity?: string;
	diedCountry?: string;
	diedCountryCode?: string;
	diedCity?: string;
	gender?: string;
	prizes?: Prize[];
	quotes?: Quote[];
}

export interface Root {
	laureates: Laureate[];
}

export interface Location {
  Name: string;
  City: string;
  Country: string;
}

export interface Prize {
  Year: number,
  Category: string;
  Share: number;
  Motivation: string;
  Affiliations: Location[];
}

export interface Laureates {
  Id: string;
  Firstname: string;
  Surname: string;
  Born: Date;
  Died: string;
  BornCountry: string;
  BornCountryCode: string;
  BornCity: string;
  DiedCountry: string;
  DiedCountryCode: string;
  DiedCity: string;
  Gender: string;
  Prizes: Prize[];
}

export interface Root {
  laureates: Laureates[];
}

export class Filter {
  firstname: string;
  surname: string;
  born: Date;
  died: string;
  bornCountry: string;
  bornCountryCode: string;
  bornCity: string;
  diedCountry: string;
  diedCountryCode: string;
  diedCity: string;
  gender: string;

  year: number;
  category: string;
  share: number;

  name: string;
  city: string;
  country: string;

  constructor() {
      this.DefaultValues();
  }

  Reset() {
      this.DefaultValues();
  }

  DefaultValues() {
    this.firstname = null;
    this.surname = null;
    this.born = null;
    this.died = null;
    this.bornCountry = null;
    this.bornCountryCode = null;
    this.bornCity = null;
    this.diedCountry = null;
    this.diedCountryCode = null;
    this.diedCity = null;
    this.gender = null;
  
    this.year = null;
    this.category = null;
    this.share = null;
  
    this.name = null;
    this.city = null;
    this.country = null;
  }
}

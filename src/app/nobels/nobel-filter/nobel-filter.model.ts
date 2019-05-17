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

  area: string;
  sortOn: string;

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

    this.area = '';
    this.sortOn = '';
  }

  allOptions() {
    return {
      firstname:  { id: 'firstname', label: 'First name',       image: 'nobel-firstname' },
      born:       { id: 'born',      label: 'Born between',     image: 'nobel-dob' },
      died:       { id: 'died',      label: 'Died between',     image: 'nobel-dod' },
      awarded:    { id: 'awarded',   label: 'Awarded in',       image: 'nobel-awarded' },
      count:      { id: 'count',     label: 'Number of Awards', image: 'nobel-awards' },

      sortOn: {
        born:  { id: 'sortOn', field: 'born',  key: 'born',  label: 'Birth Year'},
        died:  { id: 'sortOn', field: 'died',  key: 'died',  label: 'Death Year'},
        year:  { id: 'sortOn', field: 'year',  key: 'year',  label: 'Year Awarded'},
        count: { id: 'sortOn', field: 'count', key: 'count', label: 'No. Awards'}
      },

      area: {
        id: 'area',
        title: 'Field:',
        buttonsInRow: 3,
        multiselect: true,
        options: [
          { value: 'physics',    text: 'Physics' },
          { value: 'chemistry',  text: 'Chemistry' },
          { value: 'medicine',   text: 'Medicine' },
          { value: 'peace',      text: 'Peace' },
          { value: 'literature', text: 'Literature' },
          { value: 'economics',  text: 'Economics' }
        ]
      },
    };
  }
}

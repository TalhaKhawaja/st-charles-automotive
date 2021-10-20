import { CustomerInfo } from './interfaces/customer-info';

export const CUSTOMERINFO: CustomerInfo[] = [
  {
    id: 1,
    firstName: 'Talha',
    lastName: 'Khawaja',
    address: '43 Elm Street',
    city: 'Medford',
    zipcode: 11763,
    state: 'NY',
    phoneNumber: '631-xxx-xxx',
    vehicleInfo: {
      brand: 'Honda',
      model: 'Accord',
      year: '2016',
      color: 'Grey',
    }
  },
  {
    id: 2,
    firstName: 'Alan',
    lastName: 'Krome',
    address: '234 Applegate Dr',
    city: 'Wantagh',
    zipcode: 11793,
    state: 'NY',
    phoneNumber: '631-xxx-xxx',
    vehicleInfo: {
      brand: 'Honda',
      model: 'Pilot',
      year: '2010',
      color: 'Silver',
    }
  },
  {
    id: 3,
    firstName: 'George',
    lastName: 'Thomadis',
    address: '6 Plum Street',
    city: 'Bethpage',
    zipcode: 11704,
    state: 'NY',
    phoneNumber: '631-xxx-xxx',
    vehicleInfo: {
      brand: 'Chevrolet',
      model: 'Eqinox',
      year: '2019',
      color: 'Silver',
    }
  }
];

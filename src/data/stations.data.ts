import { Station } from 'src/models/station.model';

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: 'Osrednje slovenska',
    stream: 'https://aktual.netlify.com/api/Aktual',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual'
  },
  {
    name: 'Obala',
    stream: 'https://aktual.netlify.com/api/AktualO',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Studio D',
    stream: 'https://aktual.netlify.com/api/AktualD',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Dalmacija',
    stream: 'https://aktual.netlify.com/api/AktualDalmacija'
  },
  {
    name: 'Latino',
    stream: 'https://aktual.netlify.com/api/AktualLatino'
  }
];

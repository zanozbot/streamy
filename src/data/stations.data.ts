import { Station } from 'src/models/station.model';

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: 'Osrednje slovenska',
    stream: 'https://stream.radioaktual.si/Aktual',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual'
  },
  {
    name: 'Obala',
    stream: 'https://stream.radioaktual.si/AktualO',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Studio D',
    stream: 'https://stream.radioaktual.si/AktualD',
    lastSongsPath: 'https://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Dalmacija',
    stream: 'https://stream.radioaktual.si/AktualDalmacija'
  },
  {
    name: 'Latino',
    stream: 'https://stream.radioaktual.si/AktualLatino'
  }
];

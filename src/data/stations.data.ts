import { Station } from 'src/models/station.model';

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: 'Osrednje slovenska',
    stream: 'http://stream.radioaktual.si/Aktual',
    lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual'
  },
  {
    name: 'Obala',
    stream: 'http://stream.radioaktual.si/AktualO',
    lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Studio D',
    stream: 'http://stream.radioaktual.si/AktualD',
    lastSongsPath: 'http://api2.kme.si/v2/radio-live/aktual-osrednja'
  },
  {
    name: 'Dalmacija',
    stream: 'http://stream.radioaktual.si/AktualDalmacija'
  },
  {
    name: 'Latino',
    stream: 'http://stream.radioaktual.si/AktualLatino'
  }
];

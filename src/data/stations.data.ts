import { Station } from 'src/models/station.model';

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: 'Classic Rock Florida HD',
    stream: 'http://198.58.98.83:8258/stream',
    lastSongsPath: 'http://198.58.98.83:8258/played?type=json'
  },
  {
    name: 'Dance UK Radio',
    stream: 'http://uk2.internet-radio.com:8024/stream',
    lastSongsPath: 'http://uk2.internet-radio.com:8024/played?type=json'
  },
  {
    name: 'Pigpen Radio',
    stream: 'http://178.79.158.160:8213/stream',
    lastSongsPath: 'http://178.79.158.160:8213/played?type=json'
  }
];

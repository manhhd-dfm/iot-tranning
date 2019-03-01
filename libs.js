import Intl from 'intl';
import 'intl/locale-data/jsonp/en';
import Moment from 'moment';
import NfcManager, { Ndef } from 'react-native-nfc-manager';
import {AsyncStorage,Platform,Alert} from 'react-native';
import CryptoJS from 'crypto-js';

export function cleanUp() {
    NfcManager.closeTechnology()
    NfcManager.unregisterTagEvent();
}

export function calDedution(price, deduction) {
    return (price - (price * deduction/100));
}

export function convertStringToNum(str) {
    let tmp = str.split(',');
    return parseInt(tmp.join(''));
}

export async function checkModuleApp(key) {
    const s = await AsyncStorage.getItem('@shift');
    const shift = JSON.parse(s);
    const index = shift.findIndex(el => el.active==1);
    return shift[index].module_company.includes(key);
}

export function format_ticket(num) {
    switch (num.length) {
      case 6:
        return `0${num}`;

      case 5:
        return `00${num}`;

      case 4:
        return `000${num}`;

      case 3:
        return `0000${num}`;

      case 2:
        return `00000${num}`;

      case 1:
        return `000000${num}`;

      default:
        break;
    }
}

export async function getStation(data) {
    const p = await AsyncStorage.getItem('@position');
    const position = JSON.parse(p);

    let arrayM = [];
    for (let i = 0; i < data.length; i++) {
      arrayM.push(
        distance(
          position.lat,
          position.lng,
          data[i].lat,
          data[i].lng
        )
      );
    }
    // console.log(...arrayM)
    const min = Math.min(...arrayM);
    const station = data[arrayM.indexOf(min)];
    return station;
}

export function findUri(txt) {
  return txt.indexOf('/') == -1;
}

export function buildUrlPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.uriRecord(valueToWrite)]);
}

export function buildTextPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.textRecord(valueToWrite)]);
}

export function parseUriNFC(tag) {
  try {
    if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
      return Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
    }
  } catch (e) {
    // console.log(e);
  }
  return null;
}

export function parseTextNFC(tag) {
  try {
    if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
      return Ndef.text.decodePayload(tag.ndefMessage[0].payload);
    }
  } catch (e) {
    console.log(e);
  }
  return null;
}

export function distance(lat1, lng1, lat2, lng2, unit = null) {

    if ((lat1 == lat2) && (lng1 == lng2)) return 0;

    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lng1 - lng2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) dist = 1;
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;

}

export function encrypt(data, key) {
    return CryptoJS.TripleDES.encrypt(JSON.stringify(data), key).toString();
}

export function decrypt(data, key) {
    return JSON.parse(CryptoJS.TripleDES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
}

export function getTimeLogin(timestamp) {
  return Moment.unix(timestamp).format('HH:mm:ss DD-MM-YYYY')
}

export function getNow() {
  return Moment().format('YYYY-MM-DD HH:mm:ss')
}

export function getHours(timestamp) {
  return Moment.unix(timestamp).format('HH:mm:ss')
}

export function getDay(timestamp) {
  return Moment.unix(timestamp).format('DD-MM-YYYY')
}

export function getDateTime(timestamp = null) {
    if(timestamp === null) return '';
    return Moment.unix(timestamp).format('DD-MM-YYYY HH:mm:ss')
}

export function getIndexShiftById(arr, shift_id) {

   return arr.findIndex(el => el.shift_id==shift_id);

}

export function getIndexShiftByActive(arr) {

   return arr.findIndex(el => el.active==1);
}

export function getTimestamp(timestamp=null) {
   if(timestamp == null) timestamp = new Date().getTime();
   return parseInt(timestamp/1000, 0);

}

export function format_number_milion(number) {
      if(number !== null){
         let Nber = number.toLocaleString().split(',').join('');
         const fm = new Intl.NumberFormat();
         result = fm.format(parseInt(Nber));
         return result;
      }


}

export function format_number(value,dv=null){
  if(value>1000 && dv !==null) {
    value = Number.parseFloat(value/1000).toFixed(0);
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
    });
    return formatter.format(value);
}

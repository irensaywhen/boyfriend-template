import moment from 'moment';
// Adding localization
moment.locale('pl');

/**
 * Function formatting timestamp into a human-readable format
 * When the given time (in timestamp) is less than a day ago, show hours and minutes
 * Othervise, show date and month
 * @param {Number} timestamp - timestamp in milliseconds to format
 */
export default function formatTime(timestamp) {
  timestamp = parseInt(timestamp);

  if (typeof timestamp !== 'number') throw new TypeError('Invalid time');

  let now = moment().format('x');

  let duration = Math.round(moment.duration(now - timestamp).asHours());

  return duration < 24
    ? moment(timestamp).format('HH:mm')
    : moment(timestamp).format('DD MMM');
}

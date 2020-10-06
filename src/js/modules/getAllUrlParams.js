import getUrlParams from './getUrlParams.js';

export default function getAllUrlParams() {
  let queries = window.location.search.substring(1).split('&');

  if (queries[0].length === 0) return false;
  let params = {};

  queries.forEach(item => {
    let [key, value] = item.split('=');
    params[key] = value;
  });
  return params;
}

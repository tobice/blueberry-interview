import request from 'reqwest'
import when from 'when'
import debugFactory from './debug'

const debug = debugFactory('rest');

const apiEndpoint= 'http://localhost:8001/application';

export default function rest(url) {
  debug('API call: ' + url);
  return fetch(apiEndpoint + '/' + url).then(r => r.json())
};

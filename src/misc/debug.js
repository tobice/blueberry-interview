import debug from 'debug'

debug.enable('blueberry:*');

export default function(name) {
    return debug('blueberry:' + name);
}
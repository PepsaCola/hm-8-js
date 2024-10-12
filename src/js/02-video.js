const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const throttledFunction = _.throttle(videoPlayerCurrentTime, 1000);

player.on('timeupdate', throttledFunction);

function videoPlayerCurrentTime({ seconds }) {
  // console.log('played the video!');
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

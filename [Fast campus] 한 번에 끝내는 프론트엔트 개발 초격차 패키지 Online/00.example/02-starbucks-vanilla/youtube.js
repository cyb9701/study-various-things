// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '4Syo6Qbe3oY',
    playerVars: {
      autoplay: 1,
      loop: true,
      playlist: '4Syo6Qbe3oY',
    },
    events: {
      onReady: (event) => {
        event.target.mute();
      },
    },
  });
}

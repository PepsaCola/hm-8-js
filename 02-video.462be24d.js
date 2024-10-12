!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),r="videoplayer-current-time",o=_.throttle((function(e){var t=e.seconds;localStorage.setItem(r,t)}),1e3);t.on("timeupdate",o),t.setCurrentTime(localStorage.getItem(r)||0)}();
//# sourceMappingURL=02-video.462be24d.js.map

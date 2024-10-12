const e=document.querySelector("iframe"),t=new Vimeo.Player(e),r=_.throttle((function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)}),1e3);t.on("timeupdate",r),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0);
//# sourceMappingURL=02-video.c53f4793.js.map

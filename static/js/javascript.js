'use strict';
/* -------------------------------------------------------------------------
   begin Video Youtube
 * ------------------------------------------------------------------------- */

function onYouTubePlayerAPIReady() {
    var playerYoutube;

    playerYoutube = new YT.Player("video-youtube__content", {
        videoId: "X4x7vXvwcs4",
        playerVars: {
            // 'controls': 0,
            // 'showinfo': 0,
            // 'autohide': 1
        },
        events: {
            onReady: onYouTubePlayerReady
        }
    });
}

function onYouTubePlayerReady(event) {
    // https://developers.google.com/youtube/iframe_api_reference#Events
    var targetYoutubeVideo = event.target;
    var videoDomElem = document.getElementById(
        event.target.getIframe().getAttribute("id")
    );
    console.log(videoDomElem)
    var newPLayBtn = videoDomElem.nextElementSibling;

    newPLayBtn.addEventListener("click", function (event) {
        targetYoutubeVideo.playVideo();
        this.classList.add('hidden');
        console.log(videoDomElem)
        videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
        videoDomElem.parentNode.classList.remove('video-youtube_overlay');
        document.getElementById("video_image").style.zIndex = "-1";
    });
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */
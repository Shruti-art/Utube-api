// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = "AIzaSyDvspe_8cRCgXIkJ8YlQdm18qW_BwJeUNE";

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube Video ID
const videoId = "UCh2kMMfCkClbOVzVtk40Q9w";

// Load the YouTube IFrame Player API asynchronously
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "480",
    width: "640",
    videoId: videoId,
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 1, // Show video controls
      rel: 0, // Do not show related videos at the end
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  // You can add custom logic here when the player is ready
}

function onPlayerStateChange(event) {
  // You can add custom logic here based on player state changes
}

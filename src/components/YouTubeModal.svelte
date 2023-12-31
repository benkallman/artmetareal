<script>
  export let videos = [];

  const openModal = video => {
    const highQualityVideoUrl = `https://www.youtube.com/embed/${video.id}`;

    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal">
        <span class="close">&times;</span>
        <div class="video-container">
          <iframe id="youtube-iframe" src="${highQualityVideoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const modalContent = modal.querySelector('.modal');
    const closeButton = modal.querySelector('.close');
    closeButton.onclick = () => {
      modalContent.style.display = 'none';
      document.body.removeChild(modal);
    };
    modalContent.style.display = 'block';

    // Set the iframe width and height to the maximum size of the screen
    const iframe = modal.querySelector('iframe');
    iframe.style.width = '90vw';
    iframe.style.height = '90vh';

    // Use the YouTube Iframe API to set the playback quality
    const player = new YT.Player('youtube-iframe', {
      events: {
        'onReady': onPlayerReady,
      },
    });

    function onPlayerReady(event) {
      // Set the playback quality to HD720
      event.target.setPlaybackQuality('hd720');
    }
  };

  // Load the YouTube Iframe API script
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Callback function called when the API script is loaded
  let onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    if (onYouTubeIframeAPIReady) {
      onYouTubeIframeAPIReady();
    }
  };
</script>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
  }
</style>

<div class="sidenav">
  {#each videos as video}
    <button on:click={() => openModal(video)}>{video.title}</button>
  {/each}
</div>

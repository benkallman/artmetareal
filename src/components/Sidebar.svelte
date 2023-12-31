<script>
  import TikTokModal from './TikTokModal.svelte';
  import InstagramModal from './InstagramModal.svelte';
  import Modal from './Modal.svelte';
  import YouTubeModal from './YouTubeModal.svelte';
  import SoundCloudModal from './SoundCloudModal.svelte';
  import BeatstarsModal from './BeatstarsModal.svelte';
  import SpotifyModal from './SpotifyModal.svelte';

  export let isHomeScreen = false;
  export let isDarkMode = false;
  
  const handleHover = (event) => {
    const description = event.target.nextElementSibling;
    description.style.display = 'block';
  };
  
  const handleLeave = (event) => {
    const description = event.target.nextElementSibling;
    description.style.display = 'none';
  };

  let showTikTokModal = false;
  let tiktokUrl;
  let tiktokVideos = [
    { id: '7311325624440835358', title: '1' },
    { id: '7313017431599926570', title: '2' },
    { id: '7312076959536663839', title: '3' },
    { id: '7312624271791050026', title: '4' },
    { id: '7312566637633293610', title: '5' },
    { id: '7314888265453194542', title: '6' },
    { id: '7317309640461651242', title: '7' },
    { id: '7316693475687206190', title: '8' }
  ];
  let showTikTokDropdown = false;
  const toggleTikTokDropdown = () => {
    showTikTokDropdown = !showTikTokDropdown;
  };
  const openTikTokVideo = videoId => {
    tiktokUrl = `https://www.tiktok.com/embed/v2/${videoId}`;
    showTikTokModal = true;
  };

  let showVideoModal = false;
  let videoUrl = '/video/benbanker-book.mp4';

  let showYouTubeDropdown = false;
  let videos = [
    {id: 'ffGh6Wwv_lo', title: '1'},
    {id: 'zZ0Ktxkm6Qs', title: '2'},
    {id: 'tqPBh9_Urp4', title: 'Notes'},
    {id: '3K4JUJXq4y0', title: '9 hour'},
    {id: 'g1upozzan14', title: 'Glitch'},
    {id: 'uqoSR7VRPW8', title: 'Art'},
    {id: 'IhDGzNtpfiM', title: 'Book'}
  ];
  const toggleYouTubeDropdown = () => {
    showYouTubeDropdown = !showYouTubeDropdown;
  };
  const openModal = video => {
    // ... Modal logic ...
  };

  let showInstagramModal = false;
  let instagramUrl;
  let instagramPosts = [
    { id: 'C0w6EsWv-nY', title: 'Reel 1' },
    { id: 'C0iLJs7NBHj', title: 'Reel 2' },
    { id: 'C0sjcEltpSv', title: 'Reel 3' },
    { id: 'C00BquTtxC_', title: 'Reel 4' },
    { id: 'C1S9C8Ct5_t', title: 'Reel 5' }
  ];
  let showInstagramDropdown = false;
  const toggleInstagramDropdown = () => {
    showInstagramDropdown = !showInstagramDropdown;
  };
  const openInstagramModal = (postId) => {
    instagramUrl = `https://www.instagram.com/p/${postId}/embed`;
    showInstagramModal = true;
  };

  let showSoundCloudModal = false;
  let soundcloudUrl;
  let soundcloudTracks = [
    { id: '1594765656', title: 'When U Cry' },
    { id: '1598724702', title: 'juke mix' },
    { id: '1578378215', title: 'JERK' },
    { id: '1553309950', title: 'I<3U' },
    { id: '1555831423', title: 'Gypsy' }
  ];
  let showSoundCloudDropdown = false;
  const toggleSoundCloudDropdown = () => {
    showSoundCloudDropdown = !showSoundCloudDropdown;
  };
  const openSoundCloudTrack = (trackId) => {
    soundcloudUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    showSoundCloudModal = true;
  };

  let showBeatstarsModal = false;
  let beatstarsUrl = 'https://player.beatstars.com/?storeId=144669';
  const toggleBeatstarsModal = () => {
    showBeatstarsModal = !showBeatstarsModal;
  };

  let showSpotifyModal = false;
  let spotifyUrl = '';
  let spotifyContent = [
    { title: 'Song 1', url: 'https://open.spotify.com/embed/track/0TYXpxZxevdnW7RedM1W3H?si=12070629abfb4e7b'},
    { title: 'Song 2', url: 'https://open.spotify.com/embed/track/3vf5djq0k28LPYc005jIkX?si=6eb8ef6e2e594607'}
  ];
  let showSpotifyDropdown = false;
  const toggleSpotifyDropdown = () => {
    showSpotifyDropdown = !showSpotifyDropdown;
  };
  const toggleSpotifyModal = (url) => {
    spotifyUrl = url;
    showSpotifyModal = true;
  };

  let showMusicDropdown = false;
  const toggleMusicDropdown = () => {
    showMusicDropdown = !showMusicDropdown;
  };
</script>

<main>
  <div class="sidebar-container {isDarkMode ? 'dark-mode' : ''}">
    <div class="sidebar">
      <!-- Book Link Section -->
      <div class="book-link">
        <a href="/books/book_ben-banker_woodblock-2nd-edition.pdf"
          on:mouseover={handleHover}
          on:mouseleave={handleLeave}
        >Free<br> Book<br> PDF</a>
        <div class="description">This is a free book in PDF format. Click the link to download.</div>
      </div>

      <!-- TikTok Section -->
      <div class="video-link">
        <button on:click={toggleTikTokDropdown}>888Tok</button>
        {#if showTikTokDropdown}
          {#each tiktokVideos as video}
            <button on:click={() => openTikTokVideo(video.id)}>{video.title}</button>
          {/each}
        {/if}
      </div>

      <!-- Instagram Section -->
      <div class="video-link">
        <button on:click={toggleInstagramDropdown}>0xGram</button>
        {#if showInstagramDropdown}
          {#each instagramPosts as post}
            <button on:click={() => openInstagramModal(post.id)}>{post.title}</button>
          {/each}
        {/if}
      </div>

      <!-- YouTube Section -->
      <div class="youtube-link">
        <div class="youtube-container">
          <button class="youtube-button" on:click={toggleYouTubeDropdown}>
            <img src="/images/youtube-vector-logo-png-9.png" alt="YouTube Logo" width="43" height="43">
          </button>
          {#if showYouTubeDropdown}
            {#each videos as video}
              <button on:click={() => openModal(video)}>{video.title}</button>
            {/each}
          {/if}
        </div>
      </div>

      <!-- Music Section with SoundCloud, Beatstars, and Spotify -->
      <div class="music-link">
        <button on:click={toggleMusicDropdown}>Music</button>
        {#if showMusicDropdown}
          <div class="dropdown-content">
            <button on:click={toggleSoundCloudDropdown}>Azyro</button>
            {#if showSoundCloudDropdown}
              {#each soundcloudTracks as track}
                <button on:click={() => openSoundCloudTrack(track.id)}>{track.title}</button>
              {/each}
            {/if}
            <button on:click={toggleBeatstarsModal}>1Azyro - Beatstars</button>
            <button on:click={toggleSpotifyDropdown}>Spotify</button>
            {#if showSpotifyDropdown}
              {#each spotifyContent as content}
                <button on:click={() => toggleSpotifyModal(content.url)}>{content.title}</button>
              {/each}
            {/if}
          </div>
        {/if}
      </div>

      <!-- Book Video Section -->
      <div class="video-link">
        <button on:click={() => showVideoModal = true}>Book <br> video</button>
      </div>

      <!-- Modals -->
      {#if showVideoModal}
        <Modal videoUrl={videoUrl} onClose={() => showVideoModal = false} />
      {/if}  
      {#if showTikTokModal}
        <TikTokModal tiktokUrl={tiktokUrl} onClose={() => showTikTokModal = false} />
      {/if}
      {#if showInstagramModal}
        <InstagramModal instagramUrl={instagramUrl} onClose={() => showInstagramModal = false} />
      {/if}
      {#if showSoundCloudModal}
        <SoundCloudModal soundcloudUrl={soundcloudUrl} onClose={() => showSoundCloudModal = false} />
      {/if}
      {#if showBeatstarsModal}
        <BeatstarsModal beatstarsUrl={beatstarsUrl} onClose={toggleBeatstarsModal} />
      {/if}
      {#if showSpotifyModal}
        <SpotifyModal spotifyUrl={spotifyUrl} onClose={() => showSpotifyModal = false} />
      {/if}
    </div>
  </div>
</main>

<script>
  export let soundcloudUrl;
  export let onClose;

  function closeModal() {
    onClose();
  }
</script>

<style>
  /* Similar styling as your other modal components */
  .modal-overlay {
    /* styles... */
  }

  .modal {
    /* styles... */
  }

  .modal iframe {
    width: 80vw;
    max-width: 500px;
    height: 80vh;
    max-height: 80vh;
    border: none;
  }

  .close-button {
    /* styles... */
  }
</style>

<div class="modal-overlay">
  <div class="modal">
    <button class="close-button" on:click={closeModal}>&times;</button>
    <iframe 
      title="SoundCloud Track" 
      src={soundcloudUrl} 
      frameborder="0" 
      allow="autoplay">
    </iframe>
  </div>
</div>

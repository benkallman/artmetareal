<!-- TikTokModal.svelte -->

<script>
  export let tiktokUrl;
  export let onClose;

  function closeModal() {
    onClose();
  }

</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }

  .modal {
    background-color: white;
    padding: 20px;
    z-index: 4;
  }

  .modal iframe {
    width: 90vw;
    height: 90vh;
  }
</style>

<div class="modal-overlay">
  <div class="modal">
    <button on:click={closeModal}>Close</button>
    <!-- Use the provided TikTok embed code -->
    <iframe src={tiktokUrl} frameborder="0" allowfullscreen></iframe>
  </div>
</div>

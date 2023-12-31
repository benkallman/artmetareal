<script>
  export let instagramUrl;
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
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .modal {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .modal iframe {
    width: 80vw; /* Adjusted width for better view */
    max-width: 500px; /* Max width can be adjusted as needed */
    height: 80vh; /* Adjusted height for better view */
    max-height: 80vh; /* Max height can be adjusted as needed */
    border: none;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-size: 2rem;
    border: none;
    background: transparent;
    color: #333;
  }
</style>

<div class="modal-overlay">
  <div class="modal">
    <button class="close-button" on:click={closeModal}>&times;</button>
    <iframe 
      title="Instagram Post" 
      src={instagramUrl} 
      frameborder="0" 
      scrolling="no" 
      allowtransparency="true" 
      allowfullscreen="true">
    </iframe>
  </div>
</div>

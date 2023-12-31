<!-- Modal.svelte -->

<script>
  export let videoUrl;
  export let onClose;
  
  function closeModal() {
    onClose();
  }
</script>

<div class="modal-overlay">
  <div class="modal">
    <button on:click={closeModal}>Close</button>
    <video src={videoUrl} controls></video>
  </div>
</div>

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
</style>

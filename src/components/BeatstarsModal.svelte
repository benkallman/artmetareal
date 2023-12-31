<script>
    export let beatstarsUrl;
    export let onClose;
</script>

<style>
    /* Add your styles here */
    .modal-overlay { /* styles for overlay */ }
    .modal { /* styles for modal */ }
    .modal iframe { /* styles for iframe */ }
</style>

<div class="modal-overlay">
    <div class="modal">
        <button on:click={onClose}>Close</button>
        <iframe 
            src={beatstarsUrl} 
            width="100%" 
            height="800" 
            style="max-width:1024px;">
        </iframe>
    </div>
</div>

<script>
    export let spotifyUrl;
    export let onClose;
</script>

<style>
    .spotify-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Adjust as needed */
    }

    .spotify-modal {
        background-color: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .spotify-modal iframe {
        width: 100%;
        height: 352px; /* Adjust as needed */
        border-radius: 12px;
    }

    /* Add styles for close button */
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        /* other styling as needed */
    }
</style>

<div class="spotify-modal-overlay">
    <div class="spotify-modal">
        <button class="close-button" on:click={onClose}>&times;</button>
        <iframe src={spotifyUrl} frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
</div>

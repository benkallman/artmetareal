<script>
  import { onMount } from 'svelte';
  
  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
  
  onMount(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.horizontal-menu');
    
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show-menu');
    });
  });
</script>

<style>
  nav {
    background-color: rgba(51, 51, 51, 0.8);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .horizontal-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .horizontal-menu li {
    margin: 0 10px;
  }

  .horizontal-menu li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  .menu-toggle {
    display: none;
  }

  @media screen and (max-width: 900px) {
    .horizontal-menu {
      display: none;
      flex-direction: column;
      width: 100%;
    }

    .horizontal-menu.show-menu {
      display: flex;
    }

    .horizontal-menu li {
      margin: 10px 0;
    }

    .menu-toggle {
      display: block;
      cursor: pointer;
      font-size: 20px;
    }
  }
</style>

<nav>
  <ul class="horizontal-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/painting">Painting</a></li>
    <li><a href="/Print">Prints</a></li>
    <li><a href="/Lease">Lease</a></li>
    <li><a href="/Class">Class</a></li>
    <li><a href="/about">About</a></li>
  </ul>
  <div class="menu-toggle" on:click={toggleMenu}>☰</div>
  <ul class="horizontal-menu show-menu">
   
  </ul>
</nav>

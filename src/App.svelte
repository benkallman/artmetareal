<script>
  import page from 'page';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Classes from './pages/Classes.svelte';
  import Teachers from './pages/Teachers.svelte';

  // set default component
  let current = Home;

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  page('/', () => (current = Home));
  page('/about', () => (current = About));
  page('/Classes', () => (current = Classes));
  page('/Teachers', () => (current = Teachers));
  // activate router
  page.start();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  nav a {
    padding-right: 3rem;
  }
</style>

<main>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/Classes">Classes</a>
  </nav>

  <svelte:component this={current} />
</main>


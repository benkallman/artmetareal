<script>
  export let name;
  import Sidebar from './components/Sidebar.svelte';
  import Footer from './components/Footer.svelte';
  import Menu from './components/Menu.svelte';
  import Home from './pages/Home.svelte';  
  import About from './pages/About.svelte';
  import Painting from './pages/painting.svelte';
  import Lamp from './pages/Lamp.svelte';
  import Gouache from './pages/Gouache.svelte';
  import Wine from './pages/Wine.svelte';
  import Dance from './pages/Dance.svelte';
  import Dance2 from './pages/Dance2.svelte';
  import Chiro from './pages/Chiro.svelte';
  import Dark from './pages/Dark.svelte';
  import NFT from './pages/NFT.svelte';
  import Gallery from './pages/Gallery.svelte';
  import Gallery2 from './pages/Gallery2.svelte';
  import Gallery3 from './pages/Gallery3.svelte';
  import Gallery4 from './pages/Gallery4.svelte';
  import Gallery5 from './pages/Gallery5.svelte';
  import Gallery6 from './pages/Gallery6.svelte';
  import Gallery7 from './pages/Gallery7.svelte';
  import Gallery8 from './pages/Gallery8.svelte';
  import Class from './pages/Class.svelte';
  import School from './pages/School.svelte';
  import Teacher from './pages/Teacher.svelte';
  import Print from './pages/Print.svelte';
  import Lease from './pages/Lease.svelte';
  import ArtworkLeasingTerms from './pages/ArtworkLeasingTerms.svelte';
  import Digital from './pages/Digital.svelte';
  import AI from './pages/AI.svelte';
  import Glitch from './pages/Glitch.svelte';
  import Glitch2 from './pages/Glitch2.svelte';
  import Glitch3 from './pages/Glitch3.svelte';
  import MontanaPicasso from './pages/MontanaPicasso.svelte';
  import MontanaPicassoTwo from './pages/MontanaPicassoTwo.svelte';
  import Smoke from './pages/Smoke.svelte';
  import SmokeTwo from './pages/SmokeTwo.svelte';
  import SmokeThree from './pages/SmokeThree.svelte';
</script>

<Menu />

<main>

<div>
 <h1 style="text-align:center">0x {name}</h1> 
 <!-- your navigation and content goes here -->
</div>

<div class="container">
  <!-- Your main content here -->
  <Sidebar />
</div>
  
  {#if location.pathname === '/'}
    <Home />
  {:else if location.pathname === '/about'}
    <About />
  {:else if location.pathname === '/painting'}
    <Painting />
  {:else if location.pathname === '/Lamp'}
    <Lamp />
  {:else if location.pathname === '/Gouache'}
    <Gouache />
  {:else if location.pathname === '/Wine'}
    <Wine />
  {:else if location.pathname === '/Dance'}
    <Dance />
  {:else if location.pathname === '/Dance2'}
    <Dance2 />
  {:else if location.pathname === '/Chiro'}
    <Chiro />
  {:else if location.pathname === '/Dark'}
    <Dark />
  {:else if location.pathname === '/NFT'}
    <NFT />  
  {:else if location.pathname === '/Gallery'}
    <Gallery />
  {:else if location.pathname === '/Gallery2'}
    <Gallery2 />
  {:else if location.pathname === '/Gallery3'}
    <Gallery3 />
  {:else if location.pathname === '/Gallery4'}
    <Gallery4 />
  {:else if location.pathname === '/Gallery5'}
    <Gallery5 />
  {:else if location.pathname === '/Gallery6'}
    <Gallery6 />
  {:else if location.pathname === '/Gallery7'}
    <Gallery7 />
  {:else if location.pathname === '/Gallery8'}
    <Gallery8 />
  {:else if location.pathname === '/Class'}
    <Class />
  {:else if location.pathname === '/School'}
    <School />
  {:else if location.pathname === '/Teacher'}
    <Teacher />
  {:else if location.pathname === '/Print'}
    <Print />
  {:else if location.pathname === '/Lease'}
    <Lease />
  {:else if location.pathname === '/ArtworkLeasingTerms'}
    <ArtworkLeasingTerms />
  {:else if location.pathname === '/Digital'}
    <Digital />  
  {:else if location.pathname === '/AI'}
    <AI />
  {:else if location.pathname === '/Glitch'}
    <Glitch />  
  {:else if location.pathname === '/Glitch2'}
    <Glitch2 />
  {:else if location.pathname === '/Glitch3'}
    <Glitch3 />
  {:else if location.pathname === '/MontanaPicasso'}
    <MontanaPicasso />
  {:else if location.pathname === '/MontanaPicassoTwo'}
    <MontanaPicassoTwo />
  {:else if location.pathname === '/Smoke'}
    <Smoke />
  {:else if location.pathname === '/SmokeTwo'}
    <SmokeTwo />
  {:else if location.pathname === '/SmokeThree'}
    <SmokeThree />
  {/if}
</main>

<Footer />

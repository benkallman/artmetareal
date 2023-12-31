import App from './App.svelte';
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';;
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
import Gallery2 from './pages/Gallery2.svelte'
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

const routes = {
  '/': Home,
  '/about': About,
  '/painting': Painting,
  '/lamp': Lamp,
  '/gouache': Gouache,
  '/wine': Wine,
  '/dance': Dance,
  '/Dance2': Dance2,
  '/Chiro': Chiro,
  '/Dark': Dark,
  '/NFT': NFT,
  '/gallery': Gallery,
  '/gallery2': Gallery2,
  '/Gallery3': Gallery3,
  '/Gallery4': Gallery4,
  '/Gallery5': Gallery5,
  '/Gallery6': Gallery6,
  '/Gallery7': Gallery7,
  '/Gallery8': Gallery8,
  '/Class': Class,
  '/School': School,
  '/Teacher': Teacher,
  '/Print': Print,
  '/Lease': Lease,
  '/ArtworkLeasingTerms': ArtworkLeasingTerms,
  '/Digital': Digital,
  '/AI': AI,
  '/Glitch': Glitch,
  '/Glitch2': Glitch2,
  '/Glitch3': Glitch3,
  '/MontanaPicasso': MontanaPicasso,
  '/MontanaPicassoTwo': MontanaPicassoTwo,
  '/Smoke': Smoke,
  '/SmokeTwo': SmokeTwo,
  '/SmokeThree': SmokeTwo,
  
};

const app = new App({
  target: document.body,
  props: {
    name: '888',
    routes: routes,
  },
});

function blockImageDownloads(event) {
  event.preventDefault();
  event.stopPropagation();
}

// add event listener to all images with data-block-download attribute to block right-click download
const images = document.querySelectorAll('[data-block-download]');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('contextmenu', blockImageDownloads);
}

function openTwitter() {
  var appUrl = "twitter://user?screen_name=encryptionmusic";
  var webUrl = "https://twitter.com/encryptionmusic";
  
  // Check if the Twitter app is installed
  window.location.href = appUrl;
  setTimeout(function() {
    window.location.href = webUrl;
  }, 1000);
}

export default app;

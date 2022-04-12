<link rel="stylesheet" href="style.css" />

<h2 style="text-align:center">Slideshow Gallery</h2>

<div class="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
    <img src="images/benbenker.jpg" style="width:50%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
    <img src="images/close.jpg" style="width:50%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
    <img src="images/closelamp.jpg" style="width:50%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
    <img src="images/dadart.jpg" style="width:50%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src="images/dragon.jpg" style="width:50%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src="images/lamp.jpg" style="width:50%">
  </div>
  
  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src="images/ninja.jpg" style="width:50%">
  </div>

    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="images/benbenker.jpg" style="width:25%" onclick="currentSlide(1)" alt="benbenker">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/close.jpg" style="width: 25%" onclick="currentSlide(2)" alt="close">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/closelamp.jpg" style="width:25%" onclick="currentSlide(3)" alt="closelamp">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/dadart.jpg" style="width:25%" onclick="currentSlide(4)" alt="dadart">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/dragon.jpg" style="width:25%" onclick="currentSlide(5)" alt="dragon">
    </div>    
    <div class="column">
      <img class="demo cursor" src="images/lamp.jpg" style="width:25%" onclick="currentSlide(6)" alt="lamp">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/ninja.jpg" style="width:25%" onclick="currentSlide(6)" alt="ninja">
    </div>
  </div>
</div>

[data-component="slideshow"] .slide {
	display: none;
  text-align: center;
}

[data-component="slideshow"] .slide.active {
	display: block;
}



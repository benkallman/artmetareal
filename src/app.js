const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages + docuemnt.querySelectorAll('.carousel-slide img');


//Buttons
const prevBtn = document.querySelector('m#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Counter
let counter = 1;
const size = carouselImages[0] .clientWidth;

carouselSlide.style.transform = 'translateX('  +  (-size * counter ) + 'px';

//button listeners
nextBtn.addEventListener('click",()=>{
    if (counter  <= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('  +  (-size * counter ) + 'px';
});

prevBtn.addEventListener('click",()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('  +  (-size * counter ) + 'px';

});                                          


carousel-slide.addEventListener('transitioned', ()=>(
 if (carouselImages[counter].id === 'lastClone')  {
      carouselSlide.style.transition = "none";
      counter = carousekImages.length -2 ;
      carouselSlide.style.transform = 'translateX('  +  (-size * counter ) + 'px';
  {
carousel-slide.addEventListener('transitioned', ()=>(
 if (carouselImages[counter].id === 'firstClone')  {
      carouselSlide.style.transition = "none";
      counter = carousekImages.length -  counter;
      carouselSlide.style.transform = 'translateX('  +  (-size * counter ) + 'px';

}
  });
                         
    


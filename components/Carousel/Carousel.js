/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//attempt 1

// const Carousel = imgs => {
//   let index = 0;
//   const updateCarosel = carouselImgs => {
//     carouselImgs.forEach(
//       carouselImg => (carouselImg.style.transform = `translateX(${150 - index * 100}%)`)
//     );
//   };

//   const carousel = document.createElement('div');
//   const carouselLeft = document.createElement('div');
//   const carouselRight = document.createElement('div');

//   const carouselImgs = imgs.map(img => {
//     const carouselImg = document.createElement('img');
//     carouselImg.src = img;
//     return carouselImg;
//   });

//   carousel.className = 'carousel';
//   carouselLeft.className = 'left-button';
//   carouselRight.className = 'right-button';

//   carouselLeft.textContent = '<';
//   carouselRight.textContent = '>';

//   carouselLeft.addEventListener('click', () => {
//     index--;
//     if (index < 0) index = imgs.length - 1;
//     updateCarosel(carouselImgs);
//   });

//   carouselRight.addEventListener('click', () => {
//     index++;
//     if (index > imgs.length - 1) index = 0;
//     updateCarosel(carouselImgs);
//   });

//   updateCarosel(carouselImgs);
//   carousel.append(carouselLeft);
//   carousel.append(...carouselImgs);
//   carousel.append(carouselRight);

//   return carousel;
// };

// const carouselContainer = document.querySelector('.carousel-container');
// carouselContainer.append(
//   Carousel([
//     './assets/carousel/mountains.jpeg',
//     './assets/carousel/computer.jpeg',
//     './assets/carousel/trees.jpeg',
//     './assets/carousel/turntable.jpeg',
//   ])
// );



//attempt 2
class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      this.carouselImage = document.querySelectorAll('.carousel-image');
      this.leftButton = document.querySelector('.left-button');
      this.rightButton = document.querySelector('.right-button');

      console.log(this.carouselImage);

      this.carouselImage[0].style.display = 'block';

      this.leftButton.addEventListener('click', () => this.scrollLeft());
      this.rightButton.addEventListener('click', () => this.scrollRight());

  }

  scrollRight() {
      console.log('right clicked')
  };
  scrollLeft() {
      console.log('left clicked')
  };

}

class CarouselImage {
  constructor(image) {
      this.image = image;
  }
  selectImage() {
      this.image.style.display = 'block';
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

'use strict'

document.addEventListener('DOMContentLoaded', function () {

    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    const CAROUSEL_SIZE = carouselItems.length;
    let timer;
  
    // leftBtn.addEventListener('click', swipe);
    // rightBtn.addEventListener('click', swipe);
  
    leftBtn.addEventListener('click', () => {
  
        clearInterval(timer);
        swipe('left');
        startTimer();
  
    });
  
    rightBtn.addEventListener('click', () => {
  
        clearInterval(timer);
        swipe('right');
        startTimer();
  
    });
  
    function startTimer() {
  
        timer = setInterval(() => {
  
            swipe('right');
  
        }, 5000);
    }
  
    function swipe(e) {
  
        const currentCarouselItem = document.querySelector('.carousel-item.active');
        const currentIndex = carouselItems.indexOf(currentCarouselItem);
        let nextIndex;
  
        if (e === 'left') {
  
            if (currentIndex === 0) {
  
                nextIndex = CAROUSEL_SIZE - 1;
  
            } else {
  
            nextIndex = currentIndex - 1;
  
            }
  
        } else {
  
            if (currentIndex === CAROUSEL_SIZE - 1) {
  
                nextIndex = 0;
  
            } else {
  
                nextIndex = currentIndex + 1;
  
            }
        }
  
        handleSlideChange(currentIndex, nextIndex);
  
    }
  
    function handleSlideChange(currentIndex, nextIndex) {
  
        carouselItems[currentIndex].classList.remove('active');
        carouselItems[nextIndex].classList.add('active');
  
    }
  
    startTimer();
  
})

window.addEventListener("load", function() {

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
    
        modal.style.display = "block";
    
    }
    
    span.onclick = function() {
    
        modal.style.display = "none";
    
    }
    
    window.onclick = function(event) {
    
        if (event.target == modal) {
    
            modal.style.display = "none";
    
        }

    }

});

// Credit to https://github.com/lukePeavey/quotable/tree/master for the random quote generator API.

/*document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {

      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {

        quote.textContent = data.content;
        cite.textContent = '- ' + data.author;

      } else {

        quote.textContent = "An error occured";
        console.log(data);

      }

    }

    updateQuote();

});*/

document.addEventListener("DOMContentLoaded", function() {

    var links = document.querySelectorAll(".nav-li a");
    links.forEach(function(link) {

        if (link.href === window.location.href) {

            link.parentElement.classList.add("current");

        }
  
        link.addEventListener("click", function(event) {

            links.forEach(function(link) {

                link.parentElement.classList.remove("current");

            });

            event.target.parentElement.classList.add("current");

        });

    });

});
  
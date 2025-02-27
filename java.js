
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=== counter section ===*/

  let valueDisplay = document.querySelectorAll('.num');
  let interval =10000;

  valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
  });



  // ----------contact button------- //

  document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thankyou Your Feedback has been Send to Carvan");
        document.getElementById("contactform").reset();
    } else {
        alert("Please fill in all fields.");
    }
});



// -------------filters-------//

function filterCars() {
  const condition = document.getElementById('condition').value;
  const brand = document.getElementById('brand').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  const bodytype = document.getElementById('bodytype').value;

  document.querySelectorAll('.arr-col').forEach(car => {
      let carCondition = car.getAttribute('data-condition');
      let carBrand = car.getAttribute('data-brand');
      let carYear = car.getAttribute('data-year');
      let carPrice = parseInt(car.getAttribute('data-price'));
      let carBodytype = car.getAttribute('data-bodytype');


      let priceMin = price.split('-')[0];
      let priceMax = price.split('-')[1];

      if ((condition === "" || carCondition === condition) &&
          (brand === "" || carBrand === brand) &&
          (year === "" || carYear === year) &&
          (price === "" || (carPrice >= priceMin && carPrice <= priceMax)) &&
          (bodytype === "" || carBodytype === bodytype)

        ) {
          car.style.display = 'block';
      } else {
          car.style.display = 'none';
      }
  });
}



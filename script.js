/* Slider */

const sliderBlocks = document.querySelectorAll('.slider__block'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot');
 
let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

setInterval(() => {
     nextSlide()
 }, 3000);

function showSlide() {
    sliderWidth = document.querySelector('.slider__block').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderBlocks.length + 'px';
    sliderBlocks.forEach(item => item.style.width = sliderBlocks + 'px');

    rollSlider();
}
showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderBlocks.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderBlocks.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

if( window.screen.width <= 425 ){
    function rollSlider() {
        sliderLine.style.transform = `translateX(${(-sliderCount * sliderWidth) }px) `;
    }
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${(-sliderCount * sliderWidth) + 200 }px) `;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})


/* Mobile menu */

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
})


/* Countries map */

const countries = [
    {
        'name': 'Portugal',
        'city': 'Lisbon',
        'time': 'local time: 6:00 pM',
    },

    {
        'name': 'USA',
        'city': 'Miami',
        'time': 'local time: 6:00 pM'
    },
    {
        'name': 'India',
        'city': 'New Delhi',
        'time': 'local time: 6:00 pM'
    },
    {
        'name': 'Ukraine',
        'city': 'Kyiv',
        'time': 'local time: 6:00 pM'
    }
]

function getAll() {
    let cards = "";
    for (let item of countries) {
        const countrySingleDiv = document.createElement('div');
        countrySingleDiv.setAttribute('class', item.name.toLowerCase());
        countrySingleDiv.classList.add('global-expertise__mark');

        countrySingleDiv.innerHTML = `
            <div class="country">
                <p class="country__name"> ${item.name} </p>
                <p class="country__text"> ${item.city} </p>
                <p class="country__text">${item.time} </p>
                <a href="" class="country__link">hire here a team</a>
            </div>`
      document.querySelector('.global-expertise__map').appendChild(countrySingleDiv);
    }
}

getAll();

let items = document.querySelectorAll('.global-expertise__mark');
let countryList = document.querySelector('.country-list');
let country = document.querySelector('country-list__item');

function show() {
countryList.addEventListener('click', event => {
    const targetId = event.target.dataset.id 
            items.forEach(item => {
                if (item.classList.contains(targetId)) {
                  item.classList.add('active');
                }
                else {
                    item.classList.remove('active');
                }
            })
    });
}

show();


const menuBtn = document.getElementById('menu-btn');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu')

let scrollDisplay = false;

menuBtn.addEventListener('click', navToggle)

function navToggle() {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('show-mobile-menu');
    document.body.classList.toggle('stop-scroll')
}



const TypeWriter = function(txtElement, words, wait = 3000 ) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method-----------
TypeWriter.prototype.type = function() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of cuurent word
    const fullTxt = this.words[current];
    // check If Deleting 
    if(this.isDeleting) {
        // remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        // add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert txt into element

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
    // initial type speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2
    }
    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
    // Make Pause at end
    typeSpeed = this.wait;
    // set delete true
    this.isDeleting = true;
    }else if(this.isDeleting && this.txt === '') {
        // isDelete false
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }



    setTimeout(() => this.type(), 200);
}



// Init on DOM Load
document.addEventListener('DOMContentLoaded', init)


// Init App
function init() {
    const txtElement = document.querySelector('.type-text');
    const words = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-word')

    new TypeWriter(txtElement, words, wait);
}



// tabs section

const tabContents = document.querySelectorAll('.tab-content');
const tabItems = document.querySelectorAll('.tab-items')

tabContents.forEach(tab => tab.addEventListener('click', () => {

    removeBorder()

    removeShow()

    tab.classList.add('border')
    const tabContentItem = document.querySelector(`#${tab.id}-content`)

    tabContentItem.classList.add('show')


}))

function removeBorder() {
    tabContents.forEach(tab => tab.classList.remove('border'))
}
function removeShow() {
    tabItems.forEach(tab => tab.classList.remove('show'))
}


// Testimonials
// const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')



const testimonials = [
    {
        name: 'Vishal Singh',
        position: 'Software Developer',
        photo: 'https://i.imgur.com/bv1acT2.jpg',
        text: " This guy is an amazing frontend developer that delivered the task exactly how we need it, do  yourself a favour and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are with your project. i will surely work again with him.",
    },
    {
        name: 'Umar Iftikhar',
        position: 'Marketing',
        photo: 'https://i.imgur.com/kVGIFvG.jpg',
        text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancer. We'll definitely repeat with him.",
    },
    {
        name: 'Mohammad Haroon',
        position: 'Marketing',
        photo: 'https://i.imgur.com/U04QzX3.jpeg',
        text: " This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in HTML/CSS and JS technology, He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },

]

let idx = 1;

function updateTestimonials() {
    const { name, position, photo, text } = testimonials[idx]
    username.innerHTML = name
    role.innerHTML = position
    userImage.src = photo
    testimonial.innerHTML = text
       
    idx++

    if(idx > testimonials.length - 1){
        idx = 0
        
    }   
}

setInterval(updateTestimonials, 10000)

// Dots
const dots = document.querySelectorAll('.dot')
let dotidx = 0

let interval = setInterval(run, 10000)

function run() {
    dotidx++


    activeDot()
}

function activeDot() {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active')
    }else{
        dots[0].classList.add('active')
    }

}


// // Search Event

const search_Container = document.querySelector('.search-container')

const search = document.querySelector('.search')
const searchBtn = document.querySelector('.btn-search')
const searchInput = document.querySelector('.input')





searchBtn.addEventListener('click', () => {
    search.classList.toggle('active')
    

    if(search_Container.classList.toggle('active')){
        searchInput.focus()
    }else{
        searchInput.value = ''
    }
    
})

console.log('hello')

// const form = document.getElementById('form')

//grab item from search input

const form = document.querySelector('form')
const web_Projects = document.querySelectorAll('.clones')
const js_Projects = document.querySelectorAll('.js_project_design')

form.addEventListener('input', (e) => filterdata(e.target.value))
// form.addEventListener('keyup', (e) => filterdata(e.target.value))

function filterdata(searchTerm){
    web_Projects.forEach(web_Project => {
        if(web_Project.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            web_Project.classList.remove('hide')
        }else {
            web_Project.classList.add('hide')
        }
    })
    js_Projects.forEach(js_Project => {
        if(js_Project.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            js_Project.classList.remove('hide')
        }else{
            js_Project.classList.add('hide')
        }
    })
}







let btn = document.getElementById('icon')
let links = document.getElementsByClassName('links')[0]
let logo = document.getElementById('logox')
let isOpen = false

btn.addEventListener('click', () => {
    if(isOpen) {
        links.style.top = '-100%';
        logo.style.display = 'none'
        isOpen = false;
    }
    else{
        links.style.top = '70px';
        logo.style.display = 'block'
        isOpen = true;
    }
})
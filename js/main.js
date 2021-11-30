let btn = document.getElementById('icon')
let links = document.getElementsByClassName('links')[0]
let isOpen = false

btn.addEventListener('click', () => {
    if(isOpen) {
        links.style.display = 'block';
        isOpen = false;
    }
    else{
        links.style.display = 'none';
        isOpen = true;
    }
})
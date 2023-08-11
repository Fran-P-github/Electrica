const nav_slide = () => {
    const brg = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    brg.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        brg.classList.toggle('brg-active');
    }); 
}

const app = () => {
    nav_slide();
}

app();
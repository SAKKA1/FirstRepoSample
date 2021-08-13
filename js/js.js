const navSlide = () => {
    const humburger = document.querySelector(".humburger");
    const nav = document.querySelector("ul");

    humburger.addEventListener('click' ,() =>{
        nav.classList.toggle('ul-active');
        humburger.classList.toggle('burger');

    });
   
}
navSlide();
 

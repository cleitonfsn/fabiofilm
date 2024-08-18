
//configuração carrossel 1

let slideIndex1 = 0;
let slideInterval;

function showSlide1(index) {
    const slides1 = document.querySelectorAll('.carousel-item');
    const totalSlides1 = slides1.length;

    if (index >= totalSlides1) {
        slideIndex1 = 0;
    } else if (index < 0) {
        slideIndex1 = totalSlides1 - 1;
    } else {
        slideIndex1 = index;
    }

    const offset = -slideIndex1 * 100;
    const carousel = document.querySelector('.carousel1');
    carousel.style.transform = `translateX(${offset}%)`;
}

function moveSlideC1(step) {
    showSlide1(slideIndex1 + step);
    2();
}

function autoSlide() {
    slideInterval = setInterval(() => {
        moveSlideC1(1);
    }, 3000); // Ajuste o tempo de intervalo conforme necessário
}

function resetInterval() {
    clearInterval(slideInterval);
    autoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide1(slideIndex1);
    autoSlide();
});

//CONFIGURAÇÃO CARROSSEL
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

function autoSlide() {
  slideInterval = setInterval(() => {
      moveSlide(1);
  }, 3000); // Ajuste o tempo de intervalo conforme necessário
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
//FIM DE CONFIGURAÇÃO CARROSSEL

//Abre e fecha o menu quando clicar no icone

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for ( const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
    
    
  })
}

// Deixar o Header fixo quando rolar o scroll

const header = document.querySelector('#header');

window.addEventListener('scroll', function(){
  let getScrollposition = window.scrollY;

  if(getScrollposition > 10){
    header.style.position = 'fixed'
    header.style.background = '#FFF'
    header.style.borderBottom = '1px solid rgb(248,248,248)'
  }else{
    header.style.position = 'relative';
    header.style.background = 'transparent'
    header.style.border = '0'
  }
})


// FORMULARIO

// VERIFICAÇÃO
const validForm = function(event){

  var inputName = document.querySelector('#name');
  var inputPhone = document.querySelector('#phone');
  var inputEmail = document.querySelector('#email');
  var inputMessage = document.querySelector('#message');

  if(inputName.value === ""){
    alert("Preencha seu nome");
    inputName.focus();
    return false;
  }

  if(inputPhone.value === ""){
    alert("Preencha seu Telefone");
    inputPhone.focus();
    return false;
  }
  if(inputEmail.value === ""){
    alert("Preencha seu Email");
    inputEmail.focus();
    return false;
  }
  if(inputMessage.value === ""){
    alert("Digite uma mensagem");
    inputMessage.focus();
    return false;
  }

  
  //Envia dados do formulário para o whatsapp da loja cadastrada.
    if(inputName !=''){
      var mensagem = "*▪Nome/Cliente:*\n" +
      document.querySelector('#name').value +
      "\n*📱Whatsapp:* \n" + 
      document.querySelector('#phone').value +
      "\n*📬E-mail:* \n" + 
      document.querySelector('#email').value +
      "\n*📝Mensagem:* \n" + 
      document.querySelector('#message').value;
  
      var numero = '5577988099394';
      var url = 'https://api.whatsapp.com/send?phone=' + numero + '&text=' + encodeURIComponent(mensagem);
      window.open(url, '_blank');
    } 

  alert("Mensagem enviada")


}

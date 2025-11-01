// Scroll para links de navegação

const navLinks = document.querySelectorAll('Header a')

navLinks.forEach(link=> {
    link.addEventListener('click', (e)=> {
        const href = link.getAttribute('href');

        if(!href || !href.startsWith('#')){
            return
        }

        e.preventDefault()

        // Se for a logo, continua para o scroll, mas pula a lógica do menu.
        if (link.classList.contains('logo')) {
             // O bloco fica vazio. O código IGNORA a função toggle.
             // E o JS continua lendo o código abaixo (o scroll)
        } else if (window.innerWidth <= 768) {
           
            navMenu.classList.toggle('active');
        }

        const target = document.querySelector(link.getAttribute('href'))

        if(target){
            // offsetHeight = altura total do elemento em px
            const headerHeight = document.querySelector('header').offsetHeight;

            // offsetTop = posição no eixo Y do elemento
            const targetPosition = target.offsetTop - headerHeight -30 ;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
     
    })
})


// Menu Hambúrguer

const menuButton = document.getElementById('menu-toggler')
const navMenu = document.getElementById('main-nav')

menuButton.addEventListener('click', ()=> {

    navMenu.classList.toggle('active')

   
    
})


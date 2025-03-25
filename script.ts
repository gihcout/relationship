let currentSlide: number = 0;
const images: string[] = [
    'images/IMG-20230714-WA0038.jpg'
];

const carousel = document.getElementById('carousel');
const nextButton = document.getElementById('nextButton');

if (carousel && nextButton) {
    const imagesElement = carousel.getElementsByTagName('img');
    
    // Função para atualizar o slide
    function updateSlide() {
        for (let i = 0; i < imagesElement.length; i++) {
            imagesElement[i].src = images[(currentSlide + i) % images.length];
        }
    }

    // Evento para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % images.length; // Avança para a próxima imagem
        updateSlide();
    });
}
const typedTitle = document.getElementById('textTitle');
const text = 'The creative crew';
const authorText = document.getElementById('author')

const typeWriter = (index = 0) => {
  if (index < text.length) {
    typedTitle.textContent = text.substring(0, index) + '|';
    setTimeout(() => typeWriter(index + 1), 200);
  } else {
    typedTitle.textContent = text; // Mostrar el texto completo sin el cursor
  }
};

typeWriter();

authorText.addEventListener('click', () => {
    window.location.href = 'https://linkedin.com/in/franciscomyers';
  });
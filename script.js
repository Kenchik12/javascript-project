function initGallery() {
  const figures = document.querySelectorAll('figure');

  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute('tabindex', '0');

    figures[i].addEventListener('mouseover', () => {
      figures[i].style.border = '2px solid #007BFF';
    });

    figures[i].addEventListener('mouseleave', () => {
      figures[i].style.border = 'none';
    });

    figures[i].addEventListener('focus', () => {
      figures[i].style.outline = '2px solid #28a745';
    });

    figures[i].addEventListener('blur', () => {
      figures[i].style.outline = 'none';
    });
  }

  console.log("Галерея загружена. Все события добавлены.");
}

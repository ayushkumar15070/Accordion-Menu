const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
      const button = item.querySelector('.accordion-button');
      button.addEventListener('click', () => {
            item.classList.toggle('active');

            accordionItems.forEach(i => {
                  if (i !== item) {
                        i.classList.remove('active');
                  }
            });
      });
});

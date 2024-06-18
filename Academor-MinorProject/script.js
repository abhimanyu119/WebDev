document.addEventListener('DOMContentLoaded', () => {
      const readMore = document.querySelectorAll('.read-more');
      const scrollMargin = 70; // Adjust this value as needed

      readMore.forEach(button => {
        button.addEventListener('click', (e) => {
          const card = e.target.closest('.card');
          card.classList.add('expanded');

          // Create a temporary element to act as a scroll offset
          const tempElement = document.createElement('div');
          tempElement.style.position = 'absolute';
          tempElement.style.top = `${card.getBoundingClientRect().top - scrollMargin + window.scrollY}px`;
          document.body.appendChild(tempElement);

          // Scroll to the temporary element
          tempElement.scrollIntoView({ behavior: 'smooth' });

          // Remove the temporary element after scrolling
          setTimeout(() => document.body.removeChild(tempElement), 200);
        });
      });

      const closeButtons = document.querySelectorAll('.close-button');

      closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', (e) => {
          const card = e.target.closest('.card');
          card.classList.remove('expanded');
        });
      });
    });
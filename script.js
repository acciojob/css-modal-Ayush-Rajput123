const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-modal');
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });


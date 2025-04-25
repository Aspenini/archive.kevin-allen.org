function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  }
  
  function showCategory(category) {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i++) {
      categories[i].style.display = 'none';
    }
    document.getElementById(category).style.display = 'flex';
  }
  
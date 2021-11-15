const imagesToFind = Array.from(document.querySelectorAll('.images-to-find'));

imagesToFind.forEach(element => {
  element.addEventListener('click', () => {
    element.style.display = 'none';
  })
})

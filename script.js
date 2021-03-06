const imagesToFind = Array.from(document.querySelectorAll('.images-to-find'));


imagesToFind.forEach(element => {
  element.addEventListener('click', () => {
    element.style.display = 'none';

    const modalBackground = document.querySelector('.modal-background');

    if (element.className.includes('calendar')) {

      modalBackground.style.display = 'block';

      const twelveDays = document.querySelector('.twelve-days');
      twelveDays.style.display = 'block';

      const close = document.createElement('img');
      close.src = 'images/game_controls/close.png';
      modalBackground.appendChild(close).classList.add('close');

      close.addEventListener('click', () => {
        twelveDays.src = '';
        modalBackground.style.display = 'none';
      })
    }

    if (element.className.includes('snowman')) {

      modalBackground.style.display = 'block';
      
      const frosty = document.querySelector('.frosty');
      frosty.style.display = 'block';

      const close = document.createElement('img');
      close.src = 'images/game_controls/close.png';
      modalBackground.appendChild(close).classList.add('close');

      close.addEventListener('click', () => {
        frosty.src = '';
        modalBackground.style.display = 'none';
      })
    }

  })
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  alert('make this button reset game later');
})

const mute = document.querySelector('.mute');
mute.addEventListener('click', () => {
  alert('make this button mute');
})

// `
//         <iframe width="80%" height="auto"
//         src="https://youtu.be/QYyhDvuq8_Y?controls=0">
//         </iframe>
//         `
      // const twelveDaysVid = document.createElement('iframe');
      // twelveDaysVid.src = 'https://youtu.be/QYyhDvuq8_Y?controls=0';
      // modalContent.appendChild(twelveDaysVid);


      // <iframe class="twelve-days" width="420" height="315" src="https://youtu.be/QYyhDvuq8_Y?controls=0"></iframe>

            // const modalBackground = document.createElement('div');
      // document.body.appendChild(modalBackground).classList.add('modal-background');

      // const modalContent = document.createElement('div');
      // modalBackground.appendChild(modalContent).classList.add('modal-content');

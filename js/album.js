'use strict';
(() => {
  const row = document.querySelector('.row');
  const getID = new URL(location.href).searchParams.get('id');

  function albumPhoto() {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${getID}`)
      .then((respond) => respond.json())
      .then((data) => {
        for (let item of data) {
          const div = document.createElement('div');
          div.className = 'card mt-1 mx-1';

          const img = document.createElement('img');
          img.className = 'card-img';
          img.src = item.url;

          const divCard = document.createElement('div');
          divCard.className = 'card-body';

          const paragraph = document.createElement('p');
          paragraph.className = 'card-text';
          paragraph.innerHTML = item.title;

          div.append(img);
          div.append(divCard);
          divCard.append(paragraph);

          row.append(div);
        }
      });
  }

  albumPhoto();
})();

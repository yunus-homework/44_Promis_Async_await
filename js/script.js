'use strict';
(() => {
  const ul = document.querySelector('.list-group');

  function letterFirst(str) {
    if (!str) {
      return str;
    }
    return str[0].toUpperCase() + str.slice(1);
  }

  async function renderAlbumList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    for (let item of data) {
      const li = document.createElement('li');
      li.className = 'list';
      const aTagLink = document.createElement('a');
      aTagLink.setAttribute('href', `./photo.html?id=${item.id}`);
      aTagLink.innerText = letterFirst(`${item.title}`);
      ul.append(li);
      li.append(aTagLink);
    }
  }

  renderAlbumList();

  const url = 'https://jsonplaceholder.typicode.com/photos?albumId=3';

  async function request() {
    let response = await fetch(url);

    if (response.status === 200) {
      let data = await response.json();
      console.log(data);
    } else {
      alert('Error' + response.status);
    }
  }

  request();
})();

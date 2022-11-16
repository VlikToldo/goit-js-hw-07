import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');

const imgEl = galleryItems
  .map(({ preview, original, description }) => 
   `<a class="gallery__item" href="${original}">
       <img class="gallery__image" 
       src="${preview}" 
       alt="${description}"
       title="${description}" />
    </a>`)
  .join("");

  listEl.insertAdjacentHTML("beforeend", imgEl);

  new SimpleLightbox('.gallery a', { 
    captionData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    overlayOpacity: 0.8,
    scrollZoom: false,
   });

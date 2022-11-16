import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    listEl: document.querySelector('.gallery'),
}

const imgEl = galleryItems
  .map(({preview, original, description}) => 
   `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
         <img 
            class="gallery__image"
            src='${preview}' 
            data-source='${original}' 
            alt='${description}'/>
        </a>
    </div>`)
  .join("");

  refs.listEl.insertAdjacentHTML("beforeend", imgEl);

  const instance = basicLightbox.create(`
  <img>
  `);

//   console.log(instance.visible())

refs.listEl.addEventListener ('click', openModal)

function openModal(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
      return
    } 

    const originalImg = e.target.dataset.source;
    instance.element().querySelector('img').src = originalImg;
    instance.show();
    window.addEventListener('keydown', closeEsc)
}

function closeEsc(e) {
    if (!(instance.visible() && e.key === 'Escape')) {
        return
    }

    instance.close();
    window.removeEventListener('keydown', closeEsc)
}

// console.log(galleryItems);

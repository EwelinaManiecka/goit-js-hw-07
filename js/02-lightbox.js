import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhoto = document.querySelector(".gallery");
const galleryPhotoItems = makeGallery(galleryItems);
galleryPhoto.insertAdjacentHTML("beforeend", galleryPhotoItems);
// galleryPhoto.addEventListener("click", openModal);

function makeGallery(photos) {
  return photos
  .map(({preview, original, description}) => {
    return `<a class="gallery__item" 
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`
  })
  .join("");
}

// const instance = basicLightbox.create(
//   `<img src = "" />`,
//   {
//     onShow: () => {
//     console.log("add listener");
//     document.addEventListener("keydown", escBtn);
//   },
// onclose: () => {
//   console.log("remove listener");
//   document.removeEventListener("keydown", escBtn);
// },
// }
// );

// instance.show();

// function escBtn(el) {
//   if (el.code === "Escape") {
//     instance.close();
//   }
// };

const lightbox = new SimpleLightbox(".gallery a", { 
    captionData: "alt",
    captionDelay: 250,
    enableKeyboard: true,
    animationSlide: true,
    animationSpeed: 250,
 });

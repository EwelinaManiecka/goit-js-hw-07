import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhoto = document.querySelector(".gallery");
const galleryPhotoItems = makeGallery(galleryItems);
galleryPhoto.insertAdjacentHTML("beforeend", galleryPhotoItems);
galleryPhoto.addEventListener("click", openModal);

function makeGallery(photos) {
  return photos
  .map(({preview, original, description}) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"/>
    </a>
    </div>`
  })
  .join("");
}

const instance = basicLightbox.create(
  `<img src = "" />`,
  {
    onShow: () => {
    console.log("add listener");
    document.addEventListener("keydown", escBtn);
  },
onclose: () => {
  console.log("remove listener");
  document.removeEventListener("keydown", escBtn);
},
}
);

instance.show();

function escBtn(el) {
  if (el.code === "Escape") {
    instance.close();
  }
};

//ta funkcja nie działa!!!
function openModal(ev) {
  ev.preventDefault();
  instance.element().querySelector("img").src = ev.target.dataset.source;
  instance.show();
};
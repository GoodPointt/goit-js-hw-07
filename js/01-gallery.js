import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
const imgModal = document.querySelector(".basicLightbox");

ulRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
  <a href="${original}" class="gallery__link">
    <img
      data-source="${original}"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
  `;
    })
    .join("");
}

ulRef.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="1024" height="768">
  `);
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

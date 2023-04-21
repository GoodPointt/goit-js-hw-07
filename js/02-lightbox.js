import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

ulRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
  <a href="${original}" class="gallery__link">
    <img
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

let gallery = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: "250",
});

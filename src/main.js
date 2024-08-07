import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showNoResultsMessage } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = event.target.elements.searchQuery.value.trim();

    if (query === '') {
        return iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight'
        });
    }

    clearGallery();
    showLoading();

    try {
        const images = await fetchImages(query);

        if (images.length === 0) {
            showNoResultsMessage();
        } else {
            renderImages(images);
            lightbox.refresh();
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight'
        });
    } finally {
        hideLoading();
    }
});

function showLoading() {
    loader.style.display = 'block';
}

function hideLoading() {
    loader.style.display = 'none';
}

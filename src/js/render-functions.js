import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <a href="${largeImageURL}" class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                        <b>Likes:</b> ${likes}
                    </p>
                    <p class="info-item">
                        <b>Views:</b> ${views}
                    </p>
                    <p class="info-item">
                        <b>Comments:</b> ${comments}
                    </p>
                    <p class="info-item">
                        <b>Downloads:</b> ${downloads}
                    </p>
                </div>
            </a>
        `;
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

export function showNoResultsMessage() {
    iziToast.warning({
        title: 'Warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
    });
}

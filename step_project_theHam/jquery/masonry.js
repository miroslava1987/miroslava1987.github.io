'use strict';

const masonry = document.querySelector('.grid-gallery-list');

const msnr = new Masonry(masonry, {
    itemSelector: '.grid-gallery-item',
    columnWidth: 370,
    gutter: 21,
})

// jQuery(function($) {
//     $('.grid-gallery-list').masonry({
//         itemSelector: '.grid-gallery-item',
//         columnWidth: 370,
//         gutter: 21,
//     })
// })
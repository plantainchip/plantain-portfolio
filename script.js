// jQuery("#animated-thumbnails-gallery")
//   .justifiedGallery({
//     captions: false,
//     lastRow: "hide",
//     rowHeight: 180,
//     margins: 5
//   })
//   .on("jg.complete", function() {
//     window.lightGallery(
//       document.getElementById("animated-thumbnails-gallery"),
//       {
//         autoplayFirstVideo: false,
//         pager: false,
//         galleryId: "nature",
//         plugins: [lgZoom, lgThumbnail],
//         mobileSettings: {
//           controls: false,
//           showCloseIcon: false,
//           download: false,
//           rotate: false
//         }
//       }
//     );
//   });


// var grid = document.querySelector('.grid');
// if (grid) {
//   var msnry = new Masonry(grid, {
//     // options...
//     itemSelector: '.grid-item',
//     columnWidth: 200
//   });
// }

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  download: false,
  // ... other settings
});


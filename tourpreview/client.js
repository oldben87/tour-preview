
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });
 
  r360.renderToSurface(
    r360.createRoot('Slideshow', {
      photos: [
        {uri: './static_assets/pic1.jpg', title: 'Entrance', format: '2D'},
        {uri: './static_assets/pic2.jpg', title: 'Propogation House', format: '2D'},
        {uri: './static_assets/pic3.jpg', title: 'Atlantic Islands', format: '2D'},
        {uri: './static_assets/pic4.jpg', title: 'Pelargonium Collection', format: '2D'},
        {uri: './static_assets/pic5.jpg', title: 'Southern Hemisphere', format: '2D'},
        {uri: './static_assets/pic6.jpg', title: 'Tropical Corridor', format: '2D'},
        {uri: './static_assets/pic7.jpg', title: 'Conservatory', format: '2D'},
        {uri: './static_assets/pic8.jpg', title: 'Fernery', format: '2D'},
        {uri: './static_assets/pic9.jpg', title: 'Elsewhere!', format: '2D'},
        {uri: './static_assets/pic10.jpg', title: 'The Office', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};

import {general} from './strings';

const constants = {
  WEBVIEW_URL: 'https://www.lipsum.com/',
  WEBVIEW_HTML: `
  <html>
  <h1>Lorem Ipsum</h1>
  <h2>Test Heading 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat est. Aliquam suscipit dictum ante, vitae dictum mauris sodales et. Morbi a lorem ligula. Nunc nec rutrum ligula, ac fringilla sapien. Curabitur lacus lectus, vestibulum quis ultrices in, viverra bibendum enim. Etiam elit sapien, volutpat quis dapibus eu, lobortis vel dolor. Suspendisse nec nisl enim. Cras nec augue non ex consequat tempor. Quisque euismod eget felis rutrum suscipit. Curabitur urna ex, maximus in orci ac, pharetra blandit arcu. Aliquam erat volutpat</p>
  <h2>Test Heading 2</h2>
  <p>Ut volutpat ipsum a molestie mollis. Donec suscipit consectetur rutrum. Cras scelerisque at dui eu hendrerit. Nulla dictum bibendum erat a viverra. Donec tincidunt ipsum in porttitor sagittis. Sed consectetur felis sed tincidunt ultricies. Etiam congue turpis ut nulla mattis, quis laoreet risus euismod. Integer facilisis ligula lectus, vel placerat ante tristique interdum. Aliquam dignissim, quam vel tristique consequat, risus sem condimentum neque, a volutpat felis dolor sit amet sem. Sed eu faucibus velit. Pellentesque tristique vitae dui id consequat. Proin dignissim diam eu molestie imperdiet. Sed suscipit metus eu neque feugiat, a eleifend odio iaculis. Sed non nisi vitae eros tincidunt molestie. Nunc quis molestie nisl.</p>  
  <h2>Test Heading 3</h2>
  <p>Aliquam vestibulum tellus sem, eu volutpat tellus molestie nec. Aliquam posuere interdum malesuada. Maecenas luctus ligula eget metus pharetra tincidunt. Aenean vitae ipsum ex. Curabitur finibus ante ut pharetra interdum. Aliquam nec mauris eget dolor tincidunt blandit ut nec augue. In tellus mi, vehicula at vestibulum at, tempor non enim.</p>
  <h2>Test Heading 4</h2>
  <p>Sed iaculis eget orci ut maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque arcu eros, cursus id feugiat porttitor, tincidunt eu nibh. Etiam volutpat arcu et sem mollis, porttitor fermentum lectus maximus. Suspendisse sit amet ullamcorper purus. Proin porttitor non urna ut vestibulum. Quisque sed velit quis lorem auctor dignissim non rhoncus ex.</p>
  <h2>Test Heading 5</h2>
  <p>Aenean eget massa in massa auctor bibendum hendrerit fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel iaculis libero, eget pellentesque felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lorem elit, a feugiat ante sodales quis. Vestibulum gravida suscipit mi fringilla auctor. Etiam volutpat efficitur risus nec bibendum. Sed dui metus, venenatis ac cursus vitae, aliquam eu diam. Suspendisse consectetur nunc nec magna convallis ullamcorper. Vivamus malesuada finibus nibh non placerat. Maecenas dignissim blandit neque nec iaculis. Suspendisse tristique ut ligula at tincidunt. Vestibulum viverra vulputate mauris, nec ullamcorper justo mollis non. Nulla at nisl a quam mattis sagittis id et ex.</p>
  <h2>Test Heading 6</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat est. Aliquam suscipit dictum ante, vitae dictum mauris sodales et. Morbi a lorem ligula. Nunc nec rutrum ligula, ac fringilla sapien. Curabitur lacus lectus, vestibulum quis ultrices in, viverra bibendum enim. Etiam elit sapien, volutpat quis dapibus eu, lobortis vel dolor. Suspendisse nec nisl enim. Cras nec augue non ex consequat tempor. Quisque euismod eget felis rutrum suscipit. Curabitur urna ex, maximus in orci ac, pharetra blandit arcu. Aliquam erat volutpat</p>
  <h2>Test Heading 7</h2>
  <p>Ut volutpat ipsum a molestie mollis. Donec suscipit consectetur rutrum. Cras scelerisque at dui eu hendrerit. Nulla dictum bibendum erat a viverra. Donec tincidunt ipsum in porttitor sagittis. Sed consectetur felis sed tincidunt ultricies. Etiam congue turpis ut nulla mattis, quis laoreet risus euismod. Integer facilisis ligula lectus, vel placerat ante tristique interdum. Aliquam dignissim, quam vel tristique consequat, risus sem condimentum neque, a volutpat felis dolor sit amet sem. Sed eu faucibus velit. Pellentesque tristique vitae dui id consequat. Proin dignissim diam eu molestie imperdiet. Sed suscipit metus eu neque feugiat, a eleifend odio iaculis. Sed non nisi vitae eros tincidunt molestie. Nunc quis molestie nisl.</p>  
  <h2>Test Heading 8</h2>
  <p>Aliquam vestibulum tellus sem, eu volutpat tellus molestie nec. Aliquam posuere interdum malesuada. Maecenas luctus ligula eget metus pharetra tincidunt. Aenean vitae ipsum ex. Curabitur finibus ante ut pharetra interdum. Aliquam nec mauris eget dolor tincidunt blandit ut nec augue. In tellus mi, vehicula at vestibulum at, tempor non enim.</p>
  <h2>Test Heading 9</h2>
  <p>Sed iaculis eget orci ut maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque arcu eros, cursus id feugiat porttitor, tincidunt eu nibh. Etiam volutpat arcu et sem mollis, porttitor fermentum lectus maximus. Suspendisse sit amet ullamcorper purus. Proin porttitor non urna ut vestibulum. Quisque sed velit quis lorem auctor dignissim non rhoncus ex.</p>
  <h2>Test Heading 10</h2>
  <p>Aenean eget massa in massa auctor bibendum hendrerit fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel iaculis libero, eget pellentesque felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lorem elit, a feugiat ante sodales quis. Vestibulum gravida suscipit mi fringilla auctor. Etiam volutpat efficitur risus nec bibendum. Sed dui metus, venenatis ac cursus vitae, aliquam eu diam. Suspendisse consectetur nunc nec magna convallis ullamcorper. Vivamus malesuada finibus nibh non placerat. Maecenas dignissim blandit neque nec iaculis. Suspendisse tristique ut ligula at tincidunt. Vestibulum viverra vulputate mauris, nec ullamcorper justo mollis non. Nulla at nisl a quam mattis sagittis id et ex.</p>
  <h2>Test Heading 11</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat est. Aliquam suscipit dictum ante, vitae dictum mauris sodales et. Morbi a lorem ligula. Nunc nec rutrum ligula, ac fringilla sapien. Curabitur lacus lectus, vestibulum quis ultrices in, viverra bibendum enim. Etiam elit sapien, volutpat quis dapibus eu, lobortis vel dolor. Suspendisse nec nisl enim. Cras nec augue non ex consequat tempor. Quisque euismod eget felis rutrum suscipit. Curabitur urna ex, maximus in orci ac, pharetra blandit arcu. Aliquam erat volutpat</p>
  <h2>Test Heading 12</h2>
  <p>Ut volutpat ipsum a molestie mollis. Donec suscipit consectetur rutrum. Cras scelerisque at dui eu hendrerit. Nulla dictum bibendum erat a viverra. Donec tincidunt ipsum in porttitor sagittis. Sed consectetur felis sed tincidunt ultricies. Etiam congue turpis ut nulla mattis, quis laoreet risus euismod. Integer facilisis ligula lectus, vel placerat ante tristique interdum. Aliquam dignissim, quam vel tristique consequat, risus sem condimentum neque, a volutpat felis dolor sit amet sem. Sed eu faucibus velit. Pellentesque tristique vitae dui id consequat. Proin dignissim diam eu molestie imperdiet. Sed suscipit metus eu neque feugiat, a eleifend odio iaculis. Sed non nisi vitae eros tincidunt molestie. Nunc quis molestie nisl.</p>  
  <h2>Test Heading 13</h2>
  <p>Aliquam vestibulum tellus sem, eu volutpat tellus molestie nec. Aliquam posuere interdum malesuada. Maecenas luctus ligula eget metus pharetra tincidunt. Aenean vitae ipsum ex. Curabitur finibus ante ut pharetra interdum. Aliquam nec mauris eget dolor tincidunt blandit ut nec augue. In tellus mi, vehicula at vestibulum at, tempor non enim.</p>
  <h2>Test Heading 14</h2>
  <p>Sed iaculis eget orci ut maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque arcu eros, cursus id feugiat porttitor, tincidunt eu nibh. Etiam volutpat arcu et sem mollis, porttitor fermentum lectus maximus. Suspendisse sit amet ullamcorper purus. Proin porttitor non urna ut vestibulum. Quisque sed velit quis lorem auctor dignissim non rhoncus ex.</p>
  <h2>Test Heading 15</h2>
  <p>Aenean eget massa in massa auctor bibendum hendrerit fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel iaculis libero, eget pellentesque felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lorem elit, a feugiat ante sodales quis. Vestibulum gravida suscipit mi fringilla auctor. Etiam volutpat efficitur risus nec bibendum. Sed dui metus, venenatis ac cursus vitae, aliquam eu diam. Suspendisse consectetur nunc nec magna convallis ullamcorper. Vivamus malesuada finibus nibh non placerat. Maecenas dignissim blandit neque nec iaculis. Suspendisse tristique ut ligula at tincidunt. Vestibulum viverra vulputate mauris, nec ullamcorper justo mollis non. Nulla at nisl a quam mattis sagittis id et ex.</p>
  <h2>Test Heading 16</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat est. Aliquam suscipit dictum ante, vitae dictum mauris sodales et. Morbi a lorem ligula. Nunc nec rutrum ligula, ac fringilla sapien. Curabitur lacus lectus, vestibulum quis ultrices in, viverra bibendum enim. Etiam elit sapien, volutpat quis dapibus eu, lobortis vel dolor. Suspendisse nec nisl enim. Cras nec augue non ex consequat tempor. Quisque euismod eget felis rutrum suscipit. Curabitur urna ex, maximus in orci ac, pharetra blandit arcu. Aliquam erat volutpat</p>
  <h2>Test Heading 17</h2>
  <p>Ut volutpat ipsum a molestie mollis. Donec suscipit consectetur rutrum. Cras scelerisque at dui eu hendrerit. Nulla dictum bibendum erat a viverra. Donec tincidunt ipsum in porttitor sagittis. Sed consectetur felis sed tincidunt ultricies. Etiam congue turpis ut nulla mattis, quis laoreet risus euismod. Integer facilisis ligula lectus, vel placerat ante tristique interdum. Aliquam dignissim, quam vel tristique consequat, risus sem condimentum neque, a volutpat felis dolor sit amet sem. Sed eu faucibus velit. Pellentesque tristique vitae dui id consequat. Proin dignissim diam eu molestie imperdiet. Sed suscipit metus eu neque feugiat, a eleifend odio iaculis. Sed non nisi vitae eros tincidunt molestie. Nunc quis molestie nisl.</p>  
  <h2>Test Heading 18</h2>
  <p>Aliquam vestibulum tellus sem, eu volutpat tellus molestie nec. Aliquam posuere interdum malesuada. Maecenas luctus ligula eget metus pharetra tincidunt. Aenean vitae ipsum ex. Curabitur finibus ante ut pharetra interdum. Aliquam nec mauris eget dolor tincidunt blandit ut nec augue. In tellus mi, vehicula at vestibulum at, tempor non enim.</p>
  <h2>Test Heading 19</h2>
  <p>Sed iaculis eget orci ut maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque arcu eros, cursus id feugiat porttitor, tincidunt eu nibh. Etiam volutpat arcu et sem mollis, porttitor fermentum lectus maximus. Suspendisse sit amet ullamcorper purus. Proin porttitor non urna ut vestibulum. Quisque sed velit quis lorem auctor dignissim non rhoncus ex.</p>
  <h2>Test Heading 20</h2>
  <p>Aenean eget massa in massa auctor bibendum hendrerit fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel iaculis libero, eget pellentesque felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lorem elit, a feugiat ante sodales quis. Vestibulum gravida suscipit mi fringilla auctor. Etiam volutpat efficitur risus nec bibendum. Sed dui metus, venenatis ac cursus vitae, aliquam eu diam. Suspendisse consectetur nunc nec magna convallis ullamcorper. Vivamus malesuada finibus nibh non placerat. Maecenas dignissim blandit neque nec iaculis. Suspendisse tristique ut ligula at tincidunt. Vestibulum viverra vulputate mauris, nec ullamcorper justo mollis non. Nulla at nisl a quam mattis sagittis id et ex.</p>
  </html>
  `,
  TEST_ID: 'traverser',
  GO_TO_PREVIOUS_HEADING_JS: `
      headers[currentHeaderIndex].classList.remove("traverserSelectedHeading") // clear border
      currentHeaderIndex = currentHeaderIndex <= 0 ? headers.length - 1 : currentHeaderIndex - 1;
      headers[currentHeaderIndex].scrollIntoView({behavior: 'smooth'});
      headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // Show border so we see current position
      true;
    `,
  GO_TO_NEXT_HEADING_JS: `
        headers[currentHeaderIndex].classList.remove("traverserSelectedHeading") // clear border
        currentHeaderIndex = currentHeaderIndex >= headers.length - 1 ? 0 : currentHeaderIndex + 1;
        headers[currentHeaderIndex].scrollIntoView({ behavior: 'smooth' });
        headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // Show border so we see current position
        true;
    `,
  INIT_INJECTED_JAVASCRIPT: `
  let headers = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
  let currentHeaderIndex = 0;

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.traverserSelectedHeading {border: 2px solid blue;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  true;
  `,
};

export {general, constants};

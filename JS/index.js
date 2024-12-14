// // document.addEventListener('DOMContentLoaded', (event) => {
// //   const queryParams = new URLSearchParams(window.location.search);
// //   const userText = queryParams.get('text');
// //   if (userText) {
// //     document.getElementById('userText').textContent = userText;
// //   }
// // });

// // index.js
// document.addEventListener('DOMContentLoaded', () => {
//   const params = new URLSearchParams(window.location.search);
//   const text = params.get('text');
//   // if (shortUrl) {
//   //   fetch(`http://localhost:3000/${shortUrl}`)
//   //     .then(response => response.text())
//   //     .then(text => {
//   //       document.getElementById('userText').textContent = decodeURIComponent(text);
//   //     })
//   //     .catch(error => {
//   //       document.getElementById('userText').textContent = 'Error loading content';
//   //     });
//   // } else {
//   //   document.getElementById('userText').textContent = 'No content available';
//   // }

//   // index.js
//   const text = params.get('text');  // Lấy giá trị của tham số 'text'
//   if (text) {
//     document.getElementById('userText').textContent = decodeURIComponent(text);
//   } else {
//     document.getElementById('userText').textContent = 'No content available';
//   }
// });

    document.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);
      const text = params.get('text');
      if (text) {
        document.getElementById('userText').innerText = text;
      } else {
        document.getElementById('userText').innerText = 'No content available';
      }
    });


// document.addEventListener('DOMContentLoaded', (event) => {
//   const queryParams = new URLSearchParams(window.location.search);
//   const userText = queryParams.get('text');
//   if (userText) {
//     document.getElementById('userText').textContent = userText;
//   }
// });

// index.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const shortUrl = params.get('text');
  if (shortUrl) {
    fetch(`http://localhost:3000/${shortUrl}`)
      .then(response => response.text())
      .then(text => {
        document.getElementById('userText').innerText = decodeURIComponent(text);
      })
      .catch(error => {
        document.getElementById('userText').innerText = 'Error loading content';
      });
  } else {
    document.getElementById('userText').innerText = 'No content available';
  }
});

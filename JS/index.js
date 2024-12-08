document.addEventListener('DOMContentLoaded', (event) => {
  const queryParams = new URLSearchParams(window.location.search);
  const title = queryParams.get('title');
  const userText = queryParams.get('text');
  
  if (title) {
    document.querySelector('title').textContent = title;
  }
  
  if (userText) {
    document.querySelector('userText').textContent = userText;
  }
});

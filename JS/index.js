document.addEventListener('DOMContentLoaded', (event) => {
  const queryParams = new URLSearchParams(window.location.search);
  const title = queryParams.title('title')
  const userText = queryParams.get('text');
 if(title) {
  document.querySelector('title').textContent = title;
 }
  
 if (userText) {
    document.getElementById('userText').textContent = userText;
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const queryParams = new URLSearchParams(window.location.search);
    const userText = queryParams.get('text');
    if (userText) {
      document.getElementById('userText').textContent = userText;
    }
  });
  
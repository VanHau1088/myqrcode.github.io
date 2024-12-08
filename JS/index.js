document.addEventListener('DOMContentLoaded', (event) => {
    const queryParams = new URLSearchParams(window.location.search);
    const userText = queryParams.get('text');
    if (userText) {
      document.getElementsByClassName('userText').textContent = userText;
    }
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const queryParams = new URLSearchParams(window.location.search);
    const usertitle = queryParams.get('title');
    if (usertitle) {
      document.getElementsByClassName('usertitle').textContent = usertitle;
    }
  });
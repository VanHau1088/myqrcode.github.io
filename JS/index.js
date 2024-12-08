document.addEventListener('DOMContentLoaded', (event) => {
    const queryParams = new URLSearchParams(window.location.search);
    const userText = queryParams.get('text');
    const usertitle = queryParams.get('title');
    if (userText) {
      document.getElementsByClassName('userText').textContent = userText;
    }else if(usertitle) {
      document.getElementsByClassName('userTitle').textContent = usertitle;
    } 

  });
  
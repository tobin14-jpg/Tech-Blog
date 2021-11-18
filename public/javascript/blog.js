async function newBlogHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`api/blog/`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  };
  
  document.querySelector('.new-blog').addEventListener('submit', newBlogHandler);
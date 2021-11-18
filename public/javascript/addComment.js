const addComment = async (event) => {
    event.preventDefault();
  
    const content = document.getElementById("comment-text").value.trim();
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (content) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            content,
            blog_id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', addComment);
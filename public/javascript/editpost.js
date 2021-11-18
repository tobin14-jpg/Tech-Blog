const editBlogHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    if (title && content) {
      const response = await fetch(`/api/blog/${blog_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to edit blog');
      }
    }
  };  
  
  document
    .querySelector('#editbutton')
    .addEventListener('click', editBlogHandler);
  
  
  
  
    const deleteBlogHandler = async (event) => {
    event.preventDefault();
    const blog_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    {
      const response = await fetch(`/api/blog/${blog_id}`, {
        method: 'DELETE',
        body: JSON.stringify({ blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Post deleted');
        document.location.replace('/dashboard/');
      } else {
        alert('Failed to delete blog');
      }
    }
  };  
  
  document
    .querySelector('#deletebutton')
    .addEventListener('click',deleteBlogHandler);
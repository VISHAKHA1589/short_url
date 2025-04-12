document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready');
  
    const form = document.getElementById('shorten-form');
    const urlInput = document.getElementById('url');
    const slugInput = document.getElementById('slug');
    const messageDiv = document.getElementById('message');
  
    if (!form) {
      console.error('Form not found!');
      return;
    }
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('Form submitted');
  
      messageDiv.textContent = '';
      messageDiv.className = 'message';
  
      const url = urlInput.value;
      const slug = slugInput.value;
      console.log({ url, slug });
  
      try {
        const res = await fetch('/url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, slug }),
        });
  
        const data = await res.json();
        console.log('Response:', data);
  
        if (!res.ok) {
          throw new Error(data.message || 'Unknown error');
        }
  
        messageDiv.classList.add('success');
        messageDiv.innerHTML = `✅ Short URL created: <a href="/${data.slug}" target="_blank">short_url/${data.slug}</a>`;
      } catch (err) {
        messageDiv.classList.add('error');
        messageDiv.textContent = `❌ Error: ${err.message}`;
      }
    });
  });
  
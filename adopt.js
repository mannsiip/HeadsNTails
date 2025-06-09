document.querySelectorAll('.open-modal').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-frame');
    
    iframe.src = this.href;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

document.querySelector('.close').addEventListener('click', function () {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-frame');
  
  iframe.src = '';
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function (e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    modal.style.display = 'none';
    document.getElementById('modal-frame').src = '';
    document.body.style.overflow = 'auto';
  }
});

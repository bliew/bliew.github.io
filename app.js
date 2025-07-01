document.querySelectorAll('.nav-tab').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    document.querySelectorAll('.section-content').forEach(section => {
      section.style.display = section.id === target ? 'block' : 'none';
    });
  });
});

document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-buttons').classList.toggle('active');
});

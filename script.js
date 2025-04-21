// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Create Scroll-to-Top Button
  const topButton = document.createElement('button');
  topButton.innerText = '↑';
  topButton.id = 'topBtn';
  document.body.appendChild(topButton);
  
  // Style the button (could be done in CSS instead)
  topButton.style.position = 'fixed';
  topButton.style.bottom = '20px';
  topButton.style.right = '20px';
  topButton.style.padding = '10px 15px';
  topButton.style.border = 'none';
  topButton.style.borderRadius = '50%';
  topButton.style.background = '#1abc9c';
  topButton.style.color = 'white';
  topButton.style.fontSize = '20px';
  topButton.style.cursor = 'pointer';
  topButton.style.display = 'none';
  topButton.style.zIndex = '1000';
  
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });
  
  // Scroll to top on button click
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

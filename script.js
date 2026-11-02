
// Mobile Navigation Menu

const menu = document.getElementById('menu');
const links = document.getElementById('navlinks');

menu.addEventListener('click', () => {
  links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
  });
});


// Automatically Update Footer Year

document.getElementById('year').textContent = new Date().getFullYear();


// Scroll Reveal Animation

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


// Contact Form – Send Message Through Email

document.getElementById('contactForm').addEventListener('submit', e => {

  e.preventDefault();

  const subject = encodeURIComponent(
    'Portfolio enquiry from ' + document.getElementById('name').value
  );

  const body = encodeURIComponent(
    'Name: ' + document.getElementById('name').value +
    '\nEmail: ' + document.getElementById('email').value +
    '\n\n' + document.getElementById('message').value
  );

  window.location.href =
    'mailto:mahitunga7@gmail.com?subject=' + subject + '&body=' + body;

});

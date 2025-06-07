// Optional JavaScript for additional interactivity
// This example updates the copyright year automatically.

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Show footer only when scrolled to bottom
const footer = document.querySelector('footer');
function toggleFooter() {
    if (!footer) return;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
    footer.classList.toggle('visible', atBottom);
}

window.addEventListener('scroll', toggleFooter);
// Initial check in case page loads already at bottom
toggleFooter();

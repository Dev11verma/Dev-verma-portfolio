// --- New JavaScript for the profile photo modal ---
const profilePhoto = document.getElementById('profilePhoto');
const modal = document.getElementById('profilePhotoModal');
const modalImg = document.getElementById('img01');
const closeModalSpan = document.querySelector('.close-modal');

profilePhoto.addEventListener('click', () => {
    modal.classList.add('open');
    modalImg.src = profilePhoto.src; // Set the source of the modal image to the profile photo's source
});

closeModalSpan.addEventListener('click', () => {
    modal.classList.remove('open');
});

// Close the modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});

// Optional: Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
    }
});

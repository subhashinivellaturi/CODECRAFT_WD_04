document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio website loaded successfully!");
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Button clicked!");
        });
    });

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseover', () => {
            testimonial.style.backgroundColor = '#f0f0f0';
        });
        testimonial.addEventListener('mouseout', () => {
            testimonial.style.backgroundColor = '#f4f4f4';
        });
    });

    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            alert("Image clicked: " + image.alt);
        });
    });
});
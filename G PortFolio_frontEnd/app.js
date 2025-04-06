// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Here you would typically send the data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formObject);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.color = '#7e7ceb';
            successMessage.style.marginTop = '20px';
            successMessage.style.fontWeight = 'bold';
            
            // Clear the form
            this.reset();
            
            // Append the message and remove it after 3 seconds
            this.appendChild(successMessage);
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }

    // Add animation to skill boxes on scroll
    const skillBoxes = document.querySelectorAll('.skill-box');
    const projectBoxes = document.querySelectorAll('.project');
    
    function checkScroll() {
        skillBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (boxTop < windowHeight - 100) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
        
        projectBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (boxTop < windowHeight - 100) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize styles for animation
    skillBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    projectBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check scroll position on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);

    // Download resume button functionality
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download functionality would be implemented here. For now, this is a placeholder.');
        });
    }

    // Add hover effect to project boxes
    projectBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(126, 124, 235, 0.3)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Mobile menu toggle (you'll need to add a menu button in your HTML)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.fontSize = '24px';
    menuToggle.style.color = '#f6b6b6';
    document.querySelector('header').prepend(menuToggle);

    const navMenu = document.querySelector('.box2 ul');
    
    function toggleMenu() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Check screen size and adjust menu
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.style.display = 'none';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'black';
            navMenu.style.padding = '20px 0';
        } else {
            menuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    window.addEventListener('load', checkScreenSize);
    window.addEventListener('resize', checkScreenSize);
});
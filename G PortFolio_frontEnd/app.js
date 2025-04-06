document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector('.contact-form form')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Your message has been sent successfully!');
        e.target.reset();
    });

    
    document.querySelector('.resume-link')?.addEventListener('click', e => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'path/to/your/resume.pdf'; 
        link.download = 'Gayatri_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

   
    const animateOnScroll = () => {
        document.querySelectorAll('.skill-box, .project').forEach(el => {
            el.style.opacity = el.getBoundingClientRect().top < window.innerHeight - 100 ? '1' : '0';
        });
    };
    
    document.querySelectorAll('.skill-box, .project').forEach(el => {
        el.style.transition = 'opacity 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

   
    document.querySelectorAll('.project').forEach(project => {
        project.onmouseenter = () => project.style.transform = 'scale(1.03)';
        project.onmouseleave = () => project.style.transform = 'scale(1)';
    });

    const menu = document.querySelector('.box2 ul');
    const toggle = document.createElement('div');
    toggle.innerHTML = '☰';
    toggle.style.cssText = 'display:none;cursor:pointer;font-size:24px;color:#f6b6b6;';
    document.querySelector('header').prepend(toggle);

    toggle.onclick = () => menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            toggle.style.display = 'block';
            menu.style.display = 'none';
        } else {
            toggle.style.display = 'none';
            menu.style.display = 'flex';
        }
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});

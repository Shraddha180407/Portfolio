document.addEventListener('DOMContentLoaded', () => {

    // --- 3D PARALLAX TILT EFFECT ---
    const parallaxContainer = document.querySelector('.hero-content-parallax');
    if (parallaxContainer) {
        parallaxContainer.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = parallaxContainer;
            const xRotation = ((clientY - offsetHeight / 2) / offsetHeight) * -15; // Invert for natural feel
            const yRotation = ((clientX - offsetWidth / 2) / offsetWidth) * 15;

            parallaxContainer.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        parallaxContainer.addEventListener('mouseleave', () => {
            parallaxContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }


    // --- ON-SCROLL FADE-IN ANIMATIONS ---
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Animate skill bars specifically
                if (entry.target.classList.contains('skill')) {
                    const barFill = entry.target.querySelector('.skill-bar-fill');
                    if(barFill) {
                        barFill.style.width = barFill.dataset.width;
                    }
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- "MATCH & MOVE" PORTFOLIO ---
    const projects = [
        {
            title: "Basti ki Pathshala - NGO Website",
            description: "A modern web presence for an NGO helping children break the cycle of poverty.",
            video: "assets/videos/project1.mp4"
        },
        {
            title: "Fake News Detection",
            description: "An AI-powered application to identify misinformation.",
            video: "assets/videos/project2.mp4"
        },
        {
            title: "ARTX",
            description: "Different art styles and their impact.",
            video: "assets/videos/project3.mp4"
        }
    ];

    const projectListItems = document.querySelectorAll('.project-list-item');
    const highlightBg = document.querySelector('.project-highlight-bg');
    const projectVideo = document.querySelector('.project-video');
    const projectTitle = document.querySelector('.project-title');
    const projectDescription = document.querySelector('.project-description');
    const projectDisplay = document.querySelector('.project-display');
    let currentProjectIndex = 0;
    let isSwitching = false; // Prevents rapid switching

    function switchProject(projectIndex) {
        if (isSwitching || projectIndex === currentProjectIndex) return;
        isSwitching = true;
        currentProjectIndex = projectIndex;

        const projectData = projects[projectIndex];
        const activeListItem = projectListItems[projectIndex];

        // 1. Update active class on list
        projectListItems.forEach(item => item.classList.remove('active'));
        activeListItem.classList.add('active');

        // 2. Get position of the active list item
        const listItemRect = activeListItem.getBoundingClientRect();
        const showcaseRect = activeListItem.closest('.portfolio-showcase').getBoundingClientRect();
        
        // 3. "Move" the highlight to the list item's position
        highlightBg.style.top = `${listItemRect.top - showcaseRect.top}px`;
        highlightBg.style.left = `${listItemRect.left - showcaseRect.left}px`;
        highlightBg.style.width = `${listItemRect.width}px`;
        highlightBg.style.height = `${listItemRect.height}px`;

        // 4. Fade out text and video
        projectTitle.style.opacity = '0';
        projectDescription.style.opacity = '0';
        projectVideo.style.opacity = '0';

        // 5. After a short delay, "expand" the highlight and fade in new content
        setTimeout(() => {
            projectTitle.textContent = projectData.title;
            projectDescription.textContent = projectData.description;
            if (projectVideo.src !== projectData.video) {
                projectVideo.src = projectData.video;
            }

            const displayRect = projectDisplay.getBoundingClientRect();
            highlightBg.style.top = `${displayRect.top - showcaseRect.top}px`;
            highlightBg.style.left = `${displayRect.left - showcaseRect.left}px`;
            highlightBg.style.width = `${displayRect.width}px`;
            highlightBg.style.height = `${displayRect.height}px`;
            
            projectTitle.style.transition = 'opacity 0.3s ease 0.3s';
            projectDescription.style.transition = 'opacity 0.3s ease 0.4s';
            projectVideo.style.transition = 'opacity 0.3s ease 0.2s';
            
            projectTitle.style.opacity = '1';
            projectDescription.style.opacity = '1';
            projectVideo.style.opacity = '1';

            setTimeout(() => { isSwitching = false; }, 600); // Allow next switch after animation
        }, 300);
    }

    if (projectListItems.length > 0 && highlightBg) {
        projectListItems.forEach((item, index) => {
            item.addEventListener('click', () => switchProject(index));
        });
        
        // AUTOPLAY LOGIC
        projectVideo.addEventListener('ended', () => {
            const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
            switchProject(nextProjectIndex);
        });
        
        // Remove 'loop' attribute from video to enable 'ended' event
        projectVideo.loop = false;

        window.addEventListener('load', () => {
            const activeListItem = document.querySelector('.project-list-item.active');
            if(activeListItem) {
                 const showcaseRect = activeListItem.closest('.portfolio-showcase').getBoundingClientRect();
                 const displayRect = projectDisplay.getBoundingClientRect();
                 highlightBg.style.top = `${displayRect.top - showcaseRect.top}px`;
                 highlightBg.style.left = `${displayRect.left - showcaseRect.left}px`;
                 highlightBg.style.width = `${displayRect.width}px`;
                 highlightBg.style.height = `${displayRect.height}px`;
            }
        });
    }

    // --- CONTACT FORM SUBMISSION (Optional) ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            
            // This is a placeholder for form submission logic.
            // In a real project, you'd use fetch() to send data to a server.
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = 'var(--secondary-color)';
                this.reset();
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.style.backgroundColor = 'var(--primary-color)';
                }, 3000);
            }, 1500);
        });
    }

});


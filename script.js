/* ============================================
   ADHITHYA - Luxury GSAP Animations
   Enhanced with Premium Effects
   ============================================ */

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCustomCursor();
    initHeroAnimations();
    initParallaxEffects();
    initScrollAnimations();
    initRevealImages();
    initHeaderScroll();
    initSmoothScroll();
    initGoldFrameHover();
    initCounterAnimation();
    initMagneticElements();
    initFormAnimations();
    initFloatingButtons();
});

/* ============================================
   LUXURY LOADING SCREEN
   ============================================ */
function initLoader() {
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.loader-progress');
    const loaderLogo = document.querySelector('.loader-logo');
    const loaderText = document.querySelector('.loader-text');

    if (!loader) return;

    document.body.classList.add('loading');

    // Animate loader elements
    gsap.set([loaderLogo, loaderText], { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to(loaderLogo, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
        .to(loaderText, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .to(progress, {
            width: '100%',
            duration: 1.8,
            ease: 'power2.inOut'
        }, '-=0.2')
        .to(loader, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
                loader.classList.add('hidden');
                document.body.classList.remove('loading');
                // Trigger hero animations after loader
                initHeroAnimations();
            }
        }, '+=0.3');
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline || window.innerWidth < 992) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursorDot, {
            x: mouseX,
            y: mouseY,
            duration: 0.1
        });
    });

    // Smooth follow for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .gold-frame, .collection-item, .journal-item');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });
}

/* ============================================
   HERO ANIMATIONS
   ============================================ */
function initHeroAnimations() {
    const heroElements = document.querySelectorAll('.animate-hero');

    if (heroElements.length === 0) return;

    // Create timeline for hero reveal
    const heroTl = gsap.timeline({
        defaults: {
            ease: 'power3.out',
            duration: 1.2
        },
        delay: 0.5
    });

    // Animate hero elements with stagger
    heroTl.to(heroElements, {
        opacity: 1,
        y: 0,
        stagger: 0.15
    });

    // Animate scroll indicator
    gsap.to('.hero-scroll-indicator', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: 'power2.out'
    });

    // Hero title split animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTl.from(heroTitle, {
            letterSpacing: '0.3em',
            duration: 1.5,
            ease: 'power2.out'
        }, '-=0.8');
    }
}

/* ============================================
   PARALLAX EFFECTS
   ============================================ */
function initParallaxEffects() {
    // Hero background parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        gsap.to(heroBg, {
            yPercent: 35,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    }

    // Mission section background
    const missionBg = document.querySelector('.mission-bg');
    if (missionBg) {
        gsap.to(missionBg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.mission-vision',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // Parallax images
    const parallaxImages = document.querySelectorAll('.parallax-image');
    parallaxImages.forEach(img => {
        gsap.to(img.querySelector('img'), {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    // Animate sections on scroll
    const animateSections = document.querySelectorAll('.animate-section');

    animateSections.forEach((element) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Staggered grid animations
    const craftItems = document.querySelectorAll('.craft-item');
    if (craftItems.length > 0) {
        gsap.to(craftItems, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.craft-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-masonry .gallery-item');
    if (galleryItems.length > 0) {
        gsap.to(galleryItems, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.gallery-masonry',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Collection items animation
    const collectionItems = document.querySelectorAll('.collection-item');
    if (collectionItems.length > 0) {
        gsap.to(collectionItems, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.collections-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Journal items
    const journalItems = document.querySelectorAll('.journal-item');
    if (journalItems.length > 0) {
        gsap.to(journalItems, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.journal-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Mission & Vision
    const mvItems = document.querySelectorAll('.mv-item');
    if (mvItems.length > 0) {
        gsap.to(mvItems, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.mv-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate divider
        gsap.from('.mv-divider', {
            scaleY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.mv-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Section labels animation
    const sectionLabels = document.querySelectorAll('.section-label');
    sectionLabels.forEach(label => {
        gsap.from(label, {
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: label,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

/* ============================================
   LUXURY IMAGE REVEAL WITH GOLDEN SHIMMER
   ============================================ */
function initRevealImages() {
    const revealContainers = document.querySelectorAll('.reveal-image');

    revealContainers.forEach(container => {
        ScrollTrigger.create({
            trigger: container,
            start: 'top 85%',
            onEnter: () => {
                container.classList.add('revealed');
            },
            once: true
        });
    });
}

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;

        // Add scrolled class
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show based on scroll direction
        if (scrollY > lastScrollY && scrollY > 300) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}

/* ============================================
   SMOOTH SCROLL NAVIGATION
   ============================================ */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ============================================
   GOLD FRAME HOVER ANIMATIONS
   ============================================ */
function initGoldFrameHover() {
    const goldFrames = document.querySelectorAll('.gold-frame');

    goldFrames.forEach(frame => {
        const img = frame.querySelector('img');

        frame.addEventListener('mouseenter', () => {
            gsap.to(frame, {
                boxShadow: '0 25px 80px rgba(201, 168, 106, 0.35)',
                borderColor: '#D4B87A',
                duration: 0.5,
                ease: 'power2.out'
            });

            if (img) {
                gsap.to(img, {
                    scale: 1.06,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        });

        frame.addEventListener('mouseleave', () => {
            gsap.to(frame, {
                boxShadow: '0 10px 40px rgba(201, 168, 106, 0)',
                borderColor: '#C9A86A',
                duration: 0.5,
                ease: 'power2.out'
            });

            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Collection items hover
    const collectionItems = document.querySelectorAll('.collection-item');
    collectionItems.forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.collection-overlay');

        item.addEventListener('mouseenter', () => {
            if (img) {
                gsap.to(img, {
                    scale: 1.1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
            if (overlay) {
                gsap.to(overlay, {
                    background: 'linear-gradient(to top, rgba(14, 59, 46, 0.95) 0%, transparent 70%)',
                    duration: 0.4
                });
            }
        });

        item.addEventListener('mouseleave', () => {
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
            if (overlay) {
                gsap.to(overlay, {
                    background: 'linear-gradient(to top, rgba(14, 59, 46, 0.9) 0%, transparent 60%)',
                    duration: 0.4
                });
            }
        });
    });
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');

    if (stats.length === 0) return;

    stats.forEach(stat => {
        const countTo = parseInt(stat.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(stat, {
                    innerText: countTo,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        stat.innerHTML = Math.floor(stat.innerText);
                    }
                });
            },
            once: true
        });
    });
}

/* ============================================
   MAGNETIC ELEMENTS
   ============================================ */
function initMagneticElements() {
    const magneticElements = document.querySelectorAll('.magnetic-wrap');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

/* ============================================
   FORM ANIMATIONS
   ============================================ */
function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    const contactForm = document.getElementById('enquiry-form');
    const newsletterForm = document.querySelector('.newsletter-form');

    // Input focus animations
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');

        if (input) {
            input.addEventListener('focus', () => {
                gsap.to(group, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', () => {
                gsap.to(group, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('.form-btn');

            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    alert('Thank you for your enquiry! We will contact you shortly.');
                    contactForm.reset();
                }
            });
        });
    }

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('.newsletter-input').value;

            if (email) {
                gsap.to(newsletterForm, {
                    scale: 0.98,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        alert('Welcome to the Adhithya family! You have been subscribed.');
                        newsletterForm.reset();
                    }
                });
            }
        });
    }
}

/* ============================================
   FLOATING BUTTONS ANIMATION
   ============================================ */
function initFloatingButtons() {
    const floatingActions = document.querySelector('.floating-actions');
    const fabs = document.querySelectorAll('.fab');

    if (!floatingActions || fabs.length === 0) return;

    // Initial state
    gsap.set(fabs, { scale: 0, opacity: 0 });

    // Animate in after page load
    gsap.to(fabs, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 2.5
    });

    // Subtle pulse animation
    fabs.forEach(fab => {
        gsap.to(fab, {
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });

    // Show/hide based on scroll
    ScrollTrigger.create({
        start: 'top -400',
        onUpdate: (self) => {
            if (self.direction === 1) {
                gsap.to(floatingActions, {
                    y: 20,
                    opacity: 0.7,
                    duration: 0.3
                });
            } else {
                gsap.to(floatingActions, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3
                });
            }
        }
    });
}

/* ============================================
   TEXT SPLIT ANIMATION UTILITY
   ============================================ */
function splitText(element) {
    const text = element.innerText;
    element.innerHTML = text.split('').map(char =>
        `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    return element.querySelectorAll('.char');
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */
// Refresh ScrollTrigger on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Refresh on fonts loaded
document.fonts.ready.then(() => {
    ScrollTrigger.refresh();
});

// Intersection Observer for lazy animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-section').forEach(el => {
    animationObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

   






    





// Optional: Add scroll animation trigger later if needed
  document.addEventListener("DOMContentLoaded", function () {
    console.log("About section loaded.");
  });





    

    // Create dots for slides
    heroSlides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        slideDotsContainer.appendChild(dot);
    });

    const slideDots = document.querySelectorAll('.slide-dot');

    function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        slideDots.forEach(dot => dot.classList.remove('active'));
        
        heroSlides[index].classList.add('active');
        slideDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(currentSlide);
    }

    slideNextBtn.addEventListener('click', nextSlide);
    slidePrevBtn.addEventListener('click', prevSlide);

    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    const testimonialPrevBtn = document.querySelector('.testimonial-prev');
    const testimonialNextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    // Create dots for testimonials
    testimonials.forEach((testimonial, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDotsContainer.appendChild(dot);
    });

    const testimonialDots = document.querySelectorAll('.testimonial-dot');

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    testimonialNextBtn.addEventListener('click', nextTestimonial);
    testimonialPrevBtn.addEventListener('click', prevTestimonial);

    // Auto testimonial change
    setInterval(nextTestimonial, 7000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tracking Form Submission
    const trackingForm = document.getElementById('trackingForm');
    const trackingResults = document.getElementById('trackingResults');
    
    trackingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trackingNumber = document.getElementById('trackingNumber').value.trim();
        
        if (trackingNumber) {
            // In a real app, you would make an API call here
            simulateTrackingResponse(trackingNumber);
        }
    });

    function simulateTrackingResponse(trackingNumber) {
        // Show loading state
        trackingResults.innerHTML = `
            <div class="tracking-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Searching for shipment ${trackingNumber}...</p>
            </div>
        `;
        
        // Simulate API delay
        setTimeout(() => {
            // Random status for demo purposes
            const statuses = ['pending', 'in-transit', 'delivered'];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            
            // Generate random dates
            const today = new Date();
            const deliveredDate = new Date(today);
            deliveredDate.setDate(today.getDate() + Math.floor(Math.random() * 5) + 1);
            
            const shippedDate = new Date(today);
            shippedDate.setDate(today.getDate() - Math.floor(Math.random() * 3) - 1);
            
            const processedDate = new Date(shippedDate);
            processedDate.setDate(shippedDate.getDate() - 1);
            
            // Generate tracking details HTML
            trackingResults.innerHTML = `
                <div class="tracking-details">
                    <div class="tracking-status">
                        <div class="tracking-id">Tracking #: ${trackingNumber}</div>
                        <div class="status-badge ${randomStatus}">
                            ${randomStatus.replace('-', ' ')}
                        </div>
                    </div>
                    
                    <div class="tracking-progress">
                        <div class="progress-steps">
                            <div class="progress-bar" style="width: ${randomStatus === 'pending' ? '0%' : randomStatus === 'in-transit' ? '50%' : '100%'}"></div>
                            
                            <div class="progress-step">
                                <div class="step-icon ${randomStatus !== 'pending' ? 'completed' : 'active'}">
                                    <i class="fas fa-box"></i>
                                </div>
                                <div class="step-label ${randomStatus !== 'pending' ? 'active' : ''}">Processed</div>
                                <div class="step-date">${formatDate(processedDate)}</div>
                            </div>
                            
                            <div class="progress-step">
                                <div class="step-icon ${randomStatus === 'in-transit' ? 'active' : randomStatus === 'delivered' ? 'completed' : ''}">
                                    <i class="fas fa-shipping-fast"></i>
                                </div>
                                <div class="step-label ${randomStatus !== 'pending' ? 'active' : ''}">Shipped</div>
                                <div class="step-date">${formatDate(shippedDate)}</div>
                            </div>
                            
                            <div class="progress-step">
                                <div class="step-icon ${randomStatus === 'delivered' ? 'completed' : ''}">
                                    <i class="fas fa-check"></i>
                                </div>
                                <div class="step-label ${randomStatus === 'delivered' ? 'active' : ''}">Delivered</div>
                                <div class="step-date">${randomStatus === 'delivered' ? formatDate(deliveredDate) : 'Estimated: ' + formatDate(deliveredDate)}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tracking-history">
                        <h3>Shipment History</h3>
                        
                        <div class="history-item">
                            <div class="history-icon">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="history-content">
                                <h4 class="history-title">Order Processed</h4>
                                <div class="history-date">${formatDate(processedDate)}</div>
                                <div class="history-location">New York, USA</div>
                            </div>
                        </div>
                        
                        ${randomStatus !== 'pending' ? `
                        <div class="history-item">
                            <div class="history-icon">
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <div class="history-content">
                                <h4 class="history-title">Package Shipped</h4>
                                <div class="history-date">${formatDate(shippedDate)}</div>
                                <div class="history-location">New York, USA</div>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${randomStatus === 'in-transit' ? `
                        <div class="history-item">
                            <div class="history-icon">
                                <i class="fas fa-plane"></i>
                            </div>
                            <div class="history-content">
                                <h4 class="history-title">In Transit</h4>
                                <div class="history-date">${formatDate(new Date())}</div>
                                <div class="history-location">In transit to destination</div>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${randomStatus === 'delivered' ? `
                        <div class="history-item">
                            <div class="history-icon">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="history-content">
                                <h4 class="history-title">Delivered</h4>
                                <div class="history-date">${formatDate(deliveredDate)}</div>
                                <div class="history-location">Delivered to recipient</div>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }, 1500);
    }

    function formatDate(date) {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    
    function animateStats() {
        const sectionTop = statsSection.offsetTop;
        const sectionHeight = statsSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Check if stats section is in view
        if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const suffix = stat.textContent.includes('%') ? '%' : '';
                let count = 0;
                const duration = 2000; // Animation duration in ms
                const increment = target / (duration / 16); // 60fps
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        stat.textContent = Math.floor(count) + suffix;
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target + suffix;
                    }
                };
                
                updateCount();
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    }
    
    // Only start counting when stats section is in view
    window.addEventListener('scroll', animateStats);
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            // In a real app, you would send this data to your server
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            contactForm.reset();
        }
    });
});

// Helper function to go to specific slide
function goToSlide(index) {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const slideDots = document.querySelectorAll('.slide-dot');
    
    heroSlides.forEach(slide => slide.classList.remove('active'));
    slideDots.forEach(dot => dot.classList.remove('active'));
    
    heroSlides[index].classList.add('active');
    slideDots[index].classList.add('active');
    currentSlide = index;
}

// Helper function to go to specific testimonial
function goToTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentTestimonial = index;
}










// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate stats counters on About page
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        function animateStats() {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCount();
            });
        }
        
        // Only animate when stats are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.stats-grid').forEach(grid => {
            observer.observe(grid);
        });
    }

    // Tracking form submission
    const trackingForm = document.getElementById('trackingForm');
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const trackingNumber = document.getElementById('trackingNumber').value.trim();
            
            if (trackingNumber) {
                // Simulate API call
                simulateTrackingResponse(trackingNumber);
            }
        });
    }

    function simulateTrackingResponse(trackingNumber) {
        const resultsContainer = document.getElementById('trackingResults');
        const placeholder = resultsContainer.querySelector('.results-placeholder');
        const content = resultsContainer.querySelector('.results-content');
        
        // Show loading state
        placeholder.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Searching for shipment ${trackingNumber}...</p>
            </div>
        `;
        
        // Simulate API delay
        setTimeout(() => {
            // Generate random status for demo
            const statuses = ['in-transit', 'delivered', 'exception'];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            
            // Generate random dates
            const today = new Date();
            const deliveredDate = new Date(today);
            deliveredDate.setDate(today.getDate() + Math.floor(Math.random() * 5) + 1);
            
            const shippedDate = new Date(today);
            shippedDate.setDate(today.getDate() - Math.floor(Math.random() * 3) - 1);
            
            // Generate tracking details HTML
            content.innerHTML = `
                <div class="tracking-details">
                    <div class="tracking-header">
                        <h4>Shipment Details</h4>
                        <div class="tracking-id">Tracking #: ${trackingNumber}</div>
                    </div>
                    
                    <div class="status-badge ${randomStatus}">
                        ${randomStatus.replace('-', ' ').toUpperCase()}
                    </div>
                    
                    <div class="progress-tracker">
                        <div class="progress-steps">
                            <div class="step completed">
                                <div class="step-icon">
                                    <i class="fas fa-check"></i>
                                </div>
                                <div class="step-info">
                                    <div class="step-label">Processed</div>
                                    <div class="step-date">${formatDate(shippedDate)}</div>
                                </div>
                            </div>
                            
                            <div class="step ${randomStatus !== 'exception' ? 'completed' : 'active'}">
                                <div class="step-icon">
                                    <i class="${randomStatus === 'exception' ? 'fas fa-exclamation' : 'fas fa-check'}"></i>
                                </div>
                                <div class="step-info">
                                    <div class="step-label">${randomStatus === 'exception' ? 'Exception' : 'Shipped'}</div>
                                    <div class="step-date">${formatDate(new Date())}</div>
                                </div>
                            </div>
                            
                            ${randomStatus === 'delivered' ? `
                            <div class="step completed">
                                <div class="step-icon">
                                    <i class="fas fa-check"></i>
                                </div>
                                <div class="step-info">
                                    <div class="step-label">Delivered</div>
                                    <div class="step-date">${formatDate(deliveredDate)}</div>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="shipment-info">
                        <div class="info-row">
                            <div class="info-label">Origin:</div>
                            <div class="info-value">Rotterdam, Netherlands</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Destination:</div>
                            <div class="info-value">New York, USA</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">Estimated Delivery:</div>
                            <div class="info-value">${formatDate(deliveredDate)}</div>
                        </div>
                    </div>
                    
                    <div class="activity-log">
                        <h5>Activity History</h5>
                        <div class="activity-item">
                            <div class="activity-time">${formatTime(new Date())}</div>
                            <div class="activity-message">Shipment ${randomStatus === 'exception' ? 'encountered a delay in customs' : randomStatus === 'delivered' ? 'was successfully delivered' : 'is in transit'}</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">${formatTime(shippedDate)}</div>
                            <div class="activity-message">Shipment departed from origin facility</div>
                        </div>
                    </div>
                </div>
            `;
            
            placeholder.style.display = 'none';
            content.style.display = 'block';
        }, 1500);
    }

    function formatDate(date) {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric'
        });
    }

    function formatTime(date) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
});
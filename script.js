document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const downloadBtn = document.querySelector('.download-btn');
    const features = document.querySelectorAll('.feature');
    const logo = document.querySelector('.logo');
    
    // Add staggered animation to features
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Stagger the animation
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(feature);
    });

    // Add click event listener to the download button
    downloadBtn.addEventListener('click', (e) => {
        // Show loading state with animation
        const originalHTML = downloadBtn.innerHTML;
        downloadBtn.style.width = `${downloadBtn.offsetWidth}px`; // Prevent button width from changing
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        downloadBtn.style.opacity = '0.7';
        downloadBtn.style.transform = 'scale(0.98)';
        
        // Simulate download completion
        setTimeout(() => {
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Download Started!';
            downloadBtn.style.backgroundColor = 'var(--accent-color)';
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.opacity = '1';
                downloadBtn.style.transform = 'scale(1)';
                downloadBtn.style.backgroundColor = '';
                downloadBtn.style.width = '';
            }, 2000);
        }, 2000);
    });

    // Add hover effects to features
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-5px)';
            feature.style.boxShadow = '0 8px 20px rgba(59, 140, 124, 0.15)';
            feature.style.borderColor = 'rgba(59, 140, 124, 0.3)';
            
            // Animate the icon
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
            feature.style.boxShadow = 'none';
            feature.style.borderColor = 'rgba(59, 140, 124, 0.1)';
            
            // Reset icon animation
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });

    // Add subtle parallax effect to logo
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        logo.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
}); 
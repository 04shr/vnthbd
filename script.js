    // Tab navigation
    document.addEventListener('DOMContentLoaded', function() {
        // Tab navigation
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Navigation buttons
        const navNextButtons = document.querySelectorAll('.nav-btn-next');
        const navPrevButtons = document.querySelectorAll('.nav-btn-prev');
        
        navNextButtons.forEach(button => {
            button.addEventListener('click', () => {
                const nextTabId = button.getAttribute('data-next');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                document.querySelector(`[data-tab="${nextTabId}"]`).classList.add('active');
                document.getElementById(nextTabId).classList.add('active');
            });
        });
        
        navPrevButtons.forEach(button => {
            button.addEventListener('click', () => {
                const prevTabId = button.getAttribute('data-prev');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                document.querySelector(`[data-tab="${prevTabId}"]`).classList.add('active');
                document.getElementById(prevTabId).classList.add('active');
            });
        });
        
        // Pet cursor
        const petCursor = document.getElementById('petCursor');
        const petEmojis = ['🐱', '🐶', '🐰', '🐹', '🦊', '🐼'];
        let currentPetIndex = 0;
        
        document.addEventListener('mousemove', (e) => {
            petCursor.style.left = e.clientX + 'px';
            petCursor.style.top = e.clientY + 'px';
        });
        
        petCursor.addEventListener('click', () => {
            currentPetIndex = (currentPetIndex + 1) % petEmojis.length;
            petCursor.textContent = petEmojis[currentPetIndex];
        });
        
        // Movie player functionality
        const videoPlayer = document.getElementById('videoPlayer');
        const playBtn = document.getElementById('playBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const videoThumbnails = document.querySelectorAll('.video-thumbnail');
        
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const videoSrc = thumbnail.getAttribute('data-video');
                videoPlayer.src = videoSrc;
                videoPlayer.load();
                videoPlayer.play();
            });
        });
        
        playBtn.addEventListener('click', () => {
            videoPlayer.play();
        });
        
        pauseBtn.addEventListener('click', () => {
            videoPlayer.pause();
        });
        
        fullscreenBtn.addEventListener('click', () => {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        });
        
        // Load first video by default
        if (videoThumbnails.length > 0) {
            const firstVideoSrc = videoThumbnails[0].getAttribute('data-video');
            videoPlayer.src = firstVideoSrc;
            videoPlayer.load();
        }
    });

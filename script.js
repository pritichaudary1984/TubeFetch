document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Fetch Video Details
document.getElementById('fetchVideoDetails').addEventListener('click', function() {
    let videoUrl = document.getElementById('videoUrl').value;
    let videoPreview = document.getElementById('videoPreview');
    let videoFrame = document.getElementById('videoFrame');
    let videoTitle = document.getElementById('videoTitle');
    let videoQuality = document.getElementById('videoQuality');
    
    if (isValidYouTubeUrl(videoUrl)) {
        // Extract Video ID
        let videoId = extractVideoId(videoUrl);
        if (!videoId) {
            alert("Invalid YouTube URL!");
            return;
        }

        // Show Video Preview
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        videoTitle.innerText = "Fetching video details...";
        videoPreview.classList.remove('hidden');

        // Simulating API Call (Replace with actual backend API)
        setTimeout(() => {
            videoTitle.innerText = "Sample Video Title";
            videoQuality.innerHTML = `
                <option value="360p">360p (15MB)</option>
                <option value="720p">720p (50MB)</option>
                <option value="1080p">1080p (100MB)</option>
            `;
        }, 1000);
    } else {
        alert("Invalid YouTube URL! Please enter a correct link.");
    }
});

// Validate YouTube URL
function isValidYouTubeUrl(url) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(url);
}

// Extract Video ID
function extractVideoId(url) {
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/))([\w-]+)/);
    return match ? match[1] : null;
}


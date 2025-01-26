const heroVideo = document.getElementById('heroVideo');
const playButton = document.getElementById('playButton');
const playIcon = 'fa-play';
const pauseIcon = 'fa-pause';


  playButton.addEventListener('click', () => {
    if (heroVideo.paused) {
      heroVideo.play(); // Play the video if it's paused
      playButton.innerHTML = `<i class="fa-solid ${pauseIcon}"></i>`;
      
    } else {
      heroVideo.pause(); // Pause the video if it's playing
      playButton.innerHTML = `<i class="fa-solid ${playIcon}"></i>`; // Show the play button
    }
  });

  // Optional: Pause or play the video when clicked directly
  heroVideo.addEventListener('click', () => {
    if (heroVideo.paused) {
      heroVideo.play();
      playButton.innerHTML = `<i class="fa-solid ${pauseIcon}"></i>`
    } else {
      heroVideo.pause(); // Pause the video if it's playing
      playButton.innerHTML = `<i class="fa-solid ${playIcon}"></i>`;
    }
  });

  // Reset the Play button when the video ends
  heroVideo.addEventListener('ended', () => {
     playButton.innerHTML = `<i class="fa-solid ${playIcon}"></i>`
  });
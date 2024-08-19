document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const overlay = document.getElementById("overlay");
  const game = document.getElementById("game");
  const video = document.getElementById("video");

  startButton.addEventListener("click", (event) => {
    event.preventDefault();

    try {
      overlay.style.display = "none";
      game.style.display = "block";
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
        alert("Video playback failed. Please check your browser settings.");
      });

      requestFullScreen(document.documentElement);
    } catch (error) {
      console.error("An error occurred during the game start process:", error);
    }
  });

  function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen().catch((error) => {
        console.error("Fullscreen request failed (Firefox):", error);
      });
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      element.webkitRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed (WebKit):", error);
      });
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed (IE/Edge):", error);
      });
    } else {
      console.warn("Fullscreen API is not supported by this browser.");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fogOverlay = document.getElementById("fog-overlay");

  // Tunggu hingga animasi selesai, kemudian hapus overlay
  fogOverlay.addEventListener("animationend", () => {
    fogOverlay.style.display = "none";
  });
});

// script.js
const container = document.getElementById("particle-container");

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Menambahkan partikel ke dalam container
  container.appendChild(particle);

  // Mengatur animasi partikel
  const duration = Math.random() * 2 + 1; // Durasi animasi acak antara 1-3 detik
  particle.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
  particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
    Math.random() * 200 - 100
  }px)`;
  particle.style.opacity = "0";

  // Menghapus partikel setelah animasi selesai
  setTimeout(() => {
    container.removeChild(particle);
  }, duration * 1000);
}

// Menambahkan partikel saat klik
document.addEventListener("click", (event) => {
  for (let i = 0; i < 30; i++) {
    // Tambahkan lebih banyak partikel untuk efek lebih dramatis
    createParticle(event.clientX, event.clientY);
  }
});

// صوت عند الضغط على الأزرار
function playClick() {
    let sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

// تشغيل / إيقاف الموسيقى
let musicPlaying = false;

function toggleMusic() {
    let music = document.getElementById("bgMusic");

    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}

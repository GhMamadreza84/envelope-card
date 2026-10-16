let isPlaying = false; 

function openEnvelope() {
    const wrapper = document.getElementById('env-wrapper');
    const song = document.getElementById('wedding-song');
    const customBar = document.getElementById('custom-audio-bar');
    
    // اگر قبلاً باز شده، کاری نکن
    if (wrapper.classList.contains('open')) return;
    
    // باز کردن پاکت
    wrapper.classList.add('open');
    
    // تنظیم ولوم آهنگ روی 20 درصد (0.2)
    song.volume = 0.05; 
    
    // پخش آهنگ
    song.play();
    isPlaying = true;
    updateButtonText();
    
    // نمایش نوار کنترل آهنگ پس از 1.5 ثانیه
    setTimeout(() => {
        customBar.classList.add('show');
    }, 1500);
}

function toggleMusic() {
    const song = document.getElementById('wedding-song');
    
    if (isPlaying) {
        song.pause(); 
        isPlaying = false;
    } else {
        song.play(); 
        isPlaying = true;
    }
    
    updateButtonText(); 
}

function updateButtonText() {
    const btn = document.getElementById('play-pause-btn');
    if (isPlaying) {
        btn.innerHTML = '⏸ توقف آهنگ';
    } else {
        btn.innerHTML = '▶ پخش آهنگ';
    }
}
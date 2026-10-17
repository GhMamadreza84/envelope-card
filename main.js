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
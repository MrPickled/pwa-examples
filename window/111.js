window.onload = function runoob() {
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';

    if('serviceWorker' in navigator) {
    navigator.serviceWorker
                .register('./sw2.js')
                .then(function() { console.log('Service Worker Registered'); });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    addBtn.style.display = 'block';


    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
        console.log('点击添加');
        } else {
        console.log('取消添加');
        }
        deferredPrompt = null;
    });

    });

    window.addEventListener('appinstalled', (evt) => {
    console.log('应用安装');
    });
};
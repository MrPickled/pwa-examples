// 检查是否支持PWA安装
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => {
    console.log('Service Worker 注册成功');
    // 监听beforeinstallprompt事件
    window.addEventListener('beforeinstallprompt', (event) => {
    // 阻止事件的默认行为
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // 显示自定义的提示信息
    showInstallPrompt();
    });
    })
    .catch((error) => {
    console.error('Service Worker 注册失败:', error);
    });
    } else {
    console.log('Service Worker 不受支持');
    }

    function showInstallPrompt() {
    // 显示自定义的提示信息
    // 这里你可以使用alert、confirm或者自定义的模态框
    const answer = confirm('你想把本网站安装到桌面上吗?');

    if (answer) {
    // 如果用户点击了“确定”，则触发之前保存的beforeinstallprompt事件
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
    console.log('用户接受安装');
    } else {
    console.log('用户拒绝安装');
    }
    window.deferredPrompt = null;
    });
    }
    }
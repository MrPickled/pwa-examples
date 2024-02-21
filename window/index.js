window.onload=function(){
    window.addEventListener('beforeinstallprompt', (e) => {
        // 阻止浏览器默认的安装提示
        e.preventDefault();
        // 保存事件以便稍后触发
        deferredPrompt = e;
        // 显示自定义的安装按钮或提示
    });
};
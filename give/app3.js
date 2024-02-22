
// 下载按钮
let installBtn = document.querySelector('.installApp')
const addBtn = document.querySelector('.add-button');
// const addBtn = document.getElementById('.add-button');
const addBtn1 = document.querySelector('.installApp1');

 
// 下载对象
let appPromptEvent = null
 
// 浏览器地址支持下载的话触发此事件
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    appPromptEvent = e
})
// window.onload = function (){
//     // document.getElementById('installApp1').click()
//     let modalButton = document.getElementById('btn1');
//     // 触发按钮的点击事件
//     modalButton.click();
//     // document.getElementById('add-button').click()
//     // addBtn.click();
//     // alert("点击成功")
//     document.querySelector('.add-button').click()
//     addBtn.addEventListener('click', () => {
//         // alert(1)
//         // alert(appPromptEvent)
//         if (appPromptEvent !== null) {
//             // 调用安装
//             appPromptEvent.prompt()
//             // 回调
//             appPromptEvent.userChoice.then((res)=>{
//                 if (res.outcome === 'accepted') {
//                     console.log('install succeed')
//                 }
//                 else{
//                     console.log('cancel install')
//                 }
//                 appPromptEvent = null
//             })
//         }
//     })
// }
// alert(2)
addBtn.addEventListener('click', () => {
    // alert(1)
    // alert(appPromptEvent)
    // let modalButton = document.getElementById('btn1');
    // // 触发按钮的点击事件
    // modalButton.click();
    if (appPromptEvent !== null) {
        // 调用安装
        appPromptEvent.prompt()
        // 回调
        appPromptEvent.userChoice.then((res)=>{
            if (res.outcome === 'accepted') {
                console.log('install succeed')
            }
            else{
                console.log('cancel install')
            }
            appPromptEvent = null
        })
    }
})
// window.addEventListener('load', () => {
//     document.querySelector('.add-button').click()
// })
// const btn2 = document.querySelector(".btn2");
// btn2.addEventListener("click", () => {
// //   console.log("按钮1被点击了.");
//   alert("btn2")
// });

// 监听安装完成
window.addEventListener('appinstalled',() => {})
 
// 判断是否桌面打开
if (window.matchMedia('(display-mode: standalone)').matches) {}

// window.onload = function (){
//     alert(1)
//     document.querySelector('.add-button').click();
//     // btn2.click()
//     // //  document.getElementById('btn2').click()
// }
// import {myload} from 'load.js';
 
myload();
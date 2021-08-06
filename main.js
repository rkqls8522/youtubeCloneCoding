const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const goodActiveBtn = document.querySelector('.info .actions button i.goodActive');
const badActiveBtn = document.querySelector('.info .actions button i.badActive');
const plusActiveBtn = document.querySelector('.info .actions button i.plusActive');
const subscribeBtn = document.querySelector('.info .channel .subscribe');

moreBtn.addEventListener('click',()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})

goodActiveBtn.addEventListener('click',()=>{
    goodActiveBtn.classList.toggle('clicked');
})

badActiveBtn.addEventListener('click',()=>{
    badActiveBtn.classList.toggle('clicked');
})

plusActiveBtn.addEventListener('click',()=>{
    plusActiveBtn.classList.toggle('clicked');
})

subscribeBtn.addEventListener('click',()=>{
    subscribeBtn.classList.toggle('clicked');
})
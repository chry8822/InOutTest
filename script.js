

// 스노우

setInterval(makeSnow, 100);

function makeSnow (){
    const snow = document.createElement('i');
    let snowEl = document.querySelector('.snow');
    
    snow.classList.add('fas');
    snow.classList.add('fa-snowflake');
    snow.style.left = Math.random()*window.innerWidth - 20 + 'px';
    snow.style.animationDirection = Math.random() * 3 + 10 + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 5 + 20 + 'px'

    snowEl.appendChild(snow);

    function removeSnow(e) {
        if(e.target) {
            snow.style.opacity = "0"
        }
    }
    snow.addEventListener("click",removeSnow)

    setTimeout(() => {
        snow.remove();
    }, 4500 );

}


let sharetext = document.querySelector('.startshare');

function changtext() {
    sharetext.innerText = "아래 아이콘중 클릭!"
    function origin() {
        sharetext.innerText = "친구들도 테스트 시키기"
    };
    sharetext.addEventListener('mouseout',origin);
}
sharetext.addEventListener('mouseover',changtext)

// 카카오 공유


 

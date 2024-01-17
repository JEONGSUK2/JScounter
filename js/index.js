const $body = document.querySelector("body")

let $CountHead = document.createElement("div");
$CountHead.className = "CountHead"
$body.appendChild($CountHead)

let $CountHeadWrap = document.createElement("div")
$CountHeadWrap.className = "CountHeadWrap"
$CountHead.appendChild($CountHeadWrap)

let $Counter = document.createElement("h1")
$Counter.innerText = "Counter"
$CountHeadWrap.appendChild($Counter)

let $CountNum = document.createElement("span")
$CountNum.innerText = 0
$CountHeadWrap.appendChild($CountNum)

let $ul = document.createElement("ul")
$ul.className = "MenuLists"
$CountHeadWrap.appendChild($ul)

for(let i = 0; i < 3 ; i++){
    let $li = document.createElement("li")
    $li.className="MenuBtn"
    $ul.appendChild($li)

    if( i === 0){
        $li.innerText = "DECREASE"
    }else if( i === 1 ){
        $li.innerText = "RESET"
    }else if( i === 2){
        $li.innerText = "INCREASE"
    }
}

const $BtnLists = document.querySelectorAll(".CountHeadWrap ul li")
const $CountDown = document.querySelector(".CountHeadWrap span")

let counts = $CountDown.innerText

$BtnLists.forEach((e,i)=>{
    e.addEventListener("click",function(){
        if(i === 0){
            counts = counts - 1
        }else if(i === 1){
            counts = 0
        }else{
            counts = counts + 1
        }
        $CountDown.innerText = counts
        $BtnLists.forEach((e,_)=>{
            e.classList.remove("on") 
        })   
        e.classList.add("on")
    })
})








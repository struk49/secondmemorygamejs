const card = document.querySelectorAll('.card')
const front = document.querySelectorAll('.front-card')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')



suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){


        front[i].classList.add('see')

        setInterval(() => {
            front[i].classList.remove('see')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('turn')
           const filppedCard = document.querySelectorAll('.turn')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('turn') 
        cardTwo.classList.remove('turn') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('turn') 
            cardTwo.classList.remove('turn') 
        }, 1000);
    }
}
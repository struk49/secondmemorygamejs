const card = document.querySelectorAll('.card')
const front = document.querySelectorAll('.front-card')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')



dealCards()
clicking()
function dealCards(){


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
           const lookCard= document.querySelectorAll('.turn')

            if(lookCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                pair(lookCard[0] , lookCard[1])
            }
        })
    }
}




function pair(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('turn') 
        cardTwo.classList.remove('turn') 


        cardOne.classList.add('pair')
        cardTwo.classList.add('pair')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('turn') 
            cardTwo.classList.remove('turn') 
        }, 1000);
    }
}
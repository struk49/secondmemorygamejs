const card = document.querySelector('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('container');


suffleimage()
clicking()
function suffleimage(){
    card.forEach(c=>{
        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random()*card.length);

        c.style.order = num[random]
    })
}

function clicking(){
    for( let i = 0; i<card.length; i++){
        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        }

        card[i].addEventListene('click', ()=>{
            front[i].classList.add('flip')
            const filppedCard = document.querySelectorAll('.flip')
 
             if(filppedCard.length == 2){
 
                 container.style.pointerEvents ='none'
                 
                 setInterval(() => {
                     
                     container.style.pointerEvents ='all'
                 }, 1000);
  
                 match(filppedCard[0] , filppedCard[1])
             }
         })
     }
 
        
           

function match(cardOne, cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('match');
        cardTwo.classList.add('match');

    }else{
        setTimeout(() =>{

            cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        },1000);
        
    }
}
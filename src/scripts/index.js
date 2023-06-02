import { render } from "./render.js";
import {suggestUsers, posts} from './database.js';
import { createModal } from "./modal.js";


const handleModal = () =>{
    const modalController = document.querySelector('.modal__controller')
    const modalUl = document.querySelector('.modal__content')
    const buttons = document.querySelectorAll('.open-post__button')

    buttons.forEach(element =>{
        const button = element

        button.addEventListener('click', (event)=>{
            let dataSetNumber = parseInt(event.target.dataset.postId)

            const modalContent = createModal(dataSetNumber)

            modalUl.appendChild(modalContent)

            modalController.showModal()
            closeModal()
        })
    })

    const closeModal = () =>{
        const modalClose = document.querySelector('.modal__close')
        
        modalClose.addEventListener('click', ()=>{
            modalController.close()
        })
    }
}

const follow = () =>{
    const followButtons = document.querySelectorAll(".follow-button")

    followButtons.forEach(element =>{
        const button = element

        button.addEventListener('click', ()=>{
            if(button.innerText === 'seguir'){
                button.classList.toggle('following-button', button.innerText = 'seguindo')
            }else{
                button.classList.remove('following-button')
                button.classList.toggle('follow-button', button.innerText = 'seguir')
            }
        })
    })
}

const allLikes = () =>{
    const likeButtons = document.querySelectorAll('.like-button')

    likeButtons.forEach(element =>{
        const button = element
        
        button.addEventListener('click', () =>{
            button.src = './src/assets/img/btn-like-red.svg'    
        })
    })
}

render(suggestUsers, posts)
handleModal()
follow()
allLikes()
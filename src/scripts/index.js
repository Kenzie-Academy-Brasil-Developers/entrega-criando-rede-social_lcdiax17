import { render } from "./render.js";
import {suggestUsers, posts} from './database.js';
import { createModal } from "./modal.js";


const handleModal = () =>{
    const modalController = document.querySelector('.modal__controller')
    const modalUl = document.querySelector('.modal__content')
    const buttons = document.querySelectorAll('.open-post__button')
    const modalClose = document.querySelector('.modal__close')

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

render(suggestUsers, posts)

handleModal()
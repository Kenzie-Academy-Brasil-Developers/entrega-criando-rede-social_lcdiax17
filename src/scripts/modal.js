import { posts } from "./database.js";

export const createModal = (postId) =>{
    let userPost = {}

    const modalUl = document.querySelector('.modal__content')

    modalUl.innerHTML = " "

    posts.forEach(element =>{
        if(postId === element.id){
            userPost = element
        }
    })

    let modalLi = document.createElement('li')
    let userDiv = document.createElement('div')
    let userImg = document.createElement('img')
    let profileUserDiv = document.createElement('div')
    let userName = document.createElement('h3')
    let userStack = document.createElement('small')
    let titlePost = document.createElement('p')
    let descriptionPost = document.createElement('p')
    let closeModal = document.createElement('button')

    modalLi.classList.add('modal__li')
    userDiv.classList.add('suggest__users')
    profileUserDiv.classList.add('user-profile')
    titlePost.classList.add('title-post')
    descriptionPost.classList.add('post-description')
    closeModal.classList.add('modal__close')

    userImg.src = userPost.img
    userImg.alt = userPost.user
    userName.innerText = userPost.user
    userStack.innerText = userPost.stack
    titlePost.innerText = userPost.title
    descriptionPost.innerText = userPost.text
    closeModal.innerText = 'X'

    userDiv.append(userImg, profileUserDiv)
    profileUserDiv.append(userName, userStack)
    modalLi.append(userDiv, titlePost, descriptionPost, closeModal)

    return modalLi
}


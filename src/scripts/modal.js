import { posts } from "./database.js";

export const createModal = (postId) =>{
    let userPost = {}

    const modalUl = document.querySelector('.modal__content')

    modalUl.innerHTML = " "

    posts.forEach(element =>{
        parseInt(postId)

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


}


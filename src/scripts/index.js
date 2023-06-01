import {suggestUsers} from './database.js';
import {posts} from './database.js';


const render = (user, post) =>{
const suggestUsersUl = document.querySelector('.suggest')
const postsUsersUl = document.querySelector('.all-posts__ul')

    suggestUsersUl.innerHTML = ""
    postsUsersUl.innerHTML = ""

    user.forEach(element =>{
        let users = element
        let userPost = renderSuggestUsers(users)

        suggestUsersUl.appendChild(userPost)
    })

}

const renderSuggestUsers = (user) =>{
    
    let suggestLi = document.createElement('li')
    let suggestDiv = document.createElement('div')
    let userImg = document.createElement('img')
    let userProfileDiv = document.createElement('div')
    let userName = document.createElement('h3')
    let userStack = document.createElement('small')
    let followButton = document.createElement('button')

    suggestLi.classList.add('suggest__li');
    suggestDiv.classList.add('suggest__users');
    userProfileDiv.classList.add('user-profile');
    followButton.classList.add('follow-button');

    userImg.src = user.img
    userImg.alt = user.user
    userName.innerText = user.user
    userStack.innerText = user.stack
    followButton.innerText = 'seguir'


    userProfileDiv.append(userName, userStack)
    suggestDiv.append(userImg, userProfileDiv)
    suggestLi.append(suggestDiv, followButton)

    return suggestLi
}

const renderAllPosts = (post) =>{

}

render(suggestUsers)
export const render = (user, post) =>{
const suggestUsersUl = document.querySelector('.suggest')
const postsUsersUl = document.querySelector('.all-posts__ul')

    suggestUsersUl.innerHTML = ""
    postsUsersUl.innerHTML = ""

    user.forEach(element =>{
        let users = element
        let userPost = renderSuggestUsers(users)

        suggestUsersUl.appendChild(userPost)
    })

    post.forEach(element =>{
        let allPosts = element
        let post = renderAllPosts(allPosts)

        postsUsersUl.appendChild(post)
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

    let postLi = document.createElement('li')
    let suggestDiv = document.createElement('div')
    let userImg = document.createElement('img')
    let userProfileDiv = document.createElement('div')
    let userName = document.createElement('h3')
    let userStack = document.createElement('small')
    let titlePost = document.createElement('p')
    let descriptionPost = document.createElement('p')
    let openPostDiv = document.createElement('div')
    let openPostButton = document.createElement('button')
    let likeDiv = document.createElement('div')
    let likeImgButton = document.createElement('img')
    let likeNumber = document.createElement('small')

    postLi.classList.add('post')
    suggestDiv.classList.add('suggest__users')
    userProfileDiv.classList.add('user-profile')
    titlePost.classList.add('title-post')
    descriptionPost.classList.add('post-description')
    openPostDiv.classList.add('open-post')
    openPostButton.classList.add('open-post__button')
    likeDiv.classList.add('like')
    likeImgButton.classList.add('like-button')

    userImg.src = post.img
    userImg.alt = post.user
    userName.innerText = post.user
    userStack.innerText = post.stack
    titlePost.innerText = post.title
    descriptionPost.innerText = `${post.text.substring(0, 150)}...`
    openPostButton.innerText = 'Abrir post'
    openPostButton.dataset.postId = post.id
    likeImgButton.src = "./src/assets/img/btn-like-grey.svg"
    likeImgButton.alt = 'like'
    likeNumber.innerText = post.likes

    suggestDiv.append(userImg, userProfileDiv)
    userProfileDiv.append(userName, userStack)
    openPostDiv.append(openPostButton, likeDiv)
    likeDiv.append(likeImgButton, likeNumber)

    postLi.append(suggestDiv, titlePost, descriptionPost, openPostDiv)

    return postLi
}


function logoutClick(event) {
    var fetchOptions = {
        method: "POST",
        body: '',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let fetchURL = "http://localhost:3000/users/logout";
    fetch(fetchURL, fetchOptions)
        .then((data) => {
            console.log(data);
            let logButton = document.getElementById('login');
            logButton.innerHTML = "LOGIN";
            logButton.setAttribute('href', '/login');
            logButton.onclick = null;

            let commentLogButton = document.getElementById('comment-login');
            let commentButton = document.createElement("a");
            commentButton.setAttribute("href", "/login");

            commentButton.id = "comment-button";
            commentButton.parentNode.replaceChild(commentLogButton, commentButton);

            let likeButton = document.getElementById('like-button');
            let activeLikeButton = document.createElement("div");
            activeLikeButton.id = "active-like-button";
            activeLikeButton.parentNode.replaceChild(likeButton, activeLikeButton);

            let commentPlaceholder = document.getElementById('leave-comment');
            let commentTextBox = document.createElement("p");
            commentTextBox.id = 'leave-comment';
            commentTextBox.name = 'leave-comment';
            commentPlaceholder.parentNode.replaceChild(commentPlaceholder, commentTextBox);
        }).catch((err) => location.reload());

}

if (document.cookie.includes('csid')) {
    console.log('user is logged in');
    let logButton = document.getElementById('login');
    logButton.innerHTML = "LOGOUT";
    logButton.removeAttribute('href');
    logButton.onclick = logoutClick;


    let commentLogButton = document.getElementById('comment-login');
    let commentButton = document.createElement("INPUT");
    commentButton.setAttribute("type", "submit");
    commentButton.value = "Comment";
    commentButton.id = "comment-button";
    commentLogButton.parentNode.replaceChild(commentButton, commentLogButton);

    
    let likeButton = document.getElementById('like-button');
    let activeLikeButton = document.createElement("INPUT");
    activeLikeButton.setAttribute("type", "submit");
    activeLikeButton.value = "";
    activeLikeButton.id = "active-like-button";
    likeButton.parentNode.replaceChild(activeLikeButton, likeButton);

    
    let commentPlaceholder = document.getElementById('leave-comment');
    let commentTextBox = document.createElement("TEXTAREA");
    commentTextBox.id = 'comments';
    commentTextBox.name = 'comments';
    commentTextBox.placeholder = "Leave a comment..."
    commentTextBox.required = true;
    commentPlaceholder.parentNode.replaceChild(commentTextBox, commentPlaceholder);

    $('#comments').on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 2 + 'px';
    });

}
else {

    let logButton = document.getElementById('login');
    logButton.innerHTML = "LOGIN";
    logButton.setAttribute('href', '/login');
}
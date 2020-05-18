
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

    let commentPlaceholder = document.getElementById('leave-comment');
    let commentTextBox = document.createElement("TEXTAREA");
    //commentTextBox.setAttribute("type", "text");
    commentTextBox.id = 'comments';
    commentTextBox.name = 'comments';
    commentTextBox.placeholder = "Leave a comment..."
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
function lastCommit (username, token) {
    return fetch(`https://api.github.com/users/${username}/events/public`, //github API that will require a username you are target that is in a variable USERNAME
        {headers: {"Authorization": `token ${token}`} //API key that will be hidden, so it won't be exposed when pushed to github since the real key is ignored
        })
        .then(response => response.json())//convert to json
        // .then(data => console.log(data[0].payload.commits[0])) //userData at index 0 to get the last commit and the date by also using .created_at
        // .catch(error => console.log("Error" + error))
}
lastCommit('robertbuenodelacruz', GITHUB_API_KEY)
.then(data => {
    console.log(data)
    let commit = data.filter(event => event.types === "PushEvent")
    console.log(commit);
    console.log(new Date(commit[0].created_at))
})
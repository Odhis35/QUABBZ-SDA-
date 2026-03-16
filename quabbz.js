function mySongs(list){
    const container= document.getElementById("song-list")
    //container.innerHTML = " "
    let songsList = " "
        for(let i =0; i<list.length; i++){
            songsList +=`
            <div class = 'song-card'>
                <p> ${list[i].title}
                    <a target ='_blank' href = '${list[i].link}'>
                        ${list[i].link}
                    </a>
                </p>
            </div>`
        }
        container.innerHTML = songsList
}


const searchBox = document.getElementById("search-box")
searchBox.addEventListener("input", function(){
    let search = this.value.toLowerCase()
    let filteredSongs = songs.filter(song => song.title.toLowerCase().includes(search))

    mySongs(filteredSongs)
})

function showSongOfDay(){
    let randomIndex = Math.floor(Math.random() * songs.length)
    let song = songs[randomIndex]
    let container = document.getElementById("song-day")
    container.innerHTML = `
    <div class = "song-card">
    <p>${song.title}</p>
    <a href ="${song.link}" target = "_blank">▶️ Play</a>
    </div>
       `
}

let step = 0
const stepButton = document.getElementById("stp-btn")
const popMessage = document.getElementById("pop-msg")
stepButton.addEventListener("click", function(){
    step ++
    if(step===1){
        popMessage.textContent = "Hey Emily Oseko 😊, Donald made something for you."
    }
    else if(step===2){
        popMessage.textContent = "I hope these songs remind you of Quabbz"
    }
    else if(step===3){
        popMessage.textContent = "Okay...enjoy the music 🎶"
        document.getElementById("song-section").style.display = "block"
        mySongs(songs)
        showSongOfDay()
        stepButton.style.display = "none"
}
})
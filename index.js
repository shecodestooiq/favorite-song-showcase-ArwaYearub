function displaySongInfo(event) {
event.preventDefault();
//first i will take the value given by the user and save them in a const variables.
const favSongName = document.getElementById("name").value;
const ytLink = document.getElementById("yt-link").value;
const songDescription = document.getElementById("description").value;
const listenedYear = document.getElementById("year").value;

const ytChange = document.createElement("iframe")
ytChange.getElementsById("display-yt").appendChild(ytChange)
// updating the display-area div:
document.getElementById("display-name").innerHTML = favSongName;
document.getElementById("display-yt").innerHTML = ytLink;
document.getElementById("display-description").innerHTML = songDescription;
document.getElementById("display-year").innerHTML = listenedYear;

const formHide = document.getElementById("get-info")
formHide.style.display = 'none'
const divShow = document.getElementById("display-area");
divShow.style.display = 'block';

}
module.exports = {
    displaySongInfo: displaySongInfo,
};
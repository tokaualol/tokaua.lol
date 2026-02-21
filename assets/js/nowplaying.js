const USERNAME = "tokaua";
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let status
    let currentlyplaying
    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        document.getElementById("listening").innerHTML = `
        <a href="https://last.fm/user/tokaua">Last Played</a>
        <img src="${json.track.image[2]['#text']}">
        <div>
        <p>${json.track.name}<br>${json.track.artist['#text']}</p>
        </div>
        `
        return;
    }
    
    else {
        currentlyplaying = "Now Playing"
    }

    document.getElementById("listening").innerHTML = `
    <a href="https://last.fm/user/tokaua">${currentlyplaying}</a>
    <img src="${json.track.image[2]['#text']}" id="coverart">
    <div>
    <p>${json.track.name}<br>by ${json.track.artist['#text']}</p>
    </div>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 50000);
const key = ""; // YouTube Data API Key
const id = "UChNE29WeA7wbW5VC4JVb5Ag"; // Channel URL Here
const user = "Axorax"; // Channel Name
const image = "content/axorax.png" // Channel Image Here

const body = document.body
const settings = document.getElementById('settings');
const settingsBtn = document.getElementById('settingsBtn');
const settingsCloseBtn = document.querySelector('.settingsCloseBtn');
const videos = document.querySelector('.videos');
const views = document.querySelector('.views');
const subcount = document.querySelector('.count');
const videocount = document.querySelector('.videos-count');
const viewcount = document.querySelector('.views-count');
const hiddensubscribercount = document.querySelector('.hiddensubscribercount');
const advanced = document.querySelector('.advanced');
const advancedIndicator = document.querySelector('.advanced-indicator');
const advancedBtn = document.getElementById('advancedBtn');

let subscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subcount.innerHTML = data["items"][0].statistics.subscriberCount;
        videocount.innerHTML = data["items"][0].statistics.videoCount;
        viewcount.innerHTML = data["items"][0].statistics.viewCount;
        hiddensubscribercount.innerHTML = data["items"][0].statistics.hiddenSubscriberCount;
    })
}

subscribers();

document.title = 'YouTube - ' + user;
document.querySelector('#bannerName').innerText = user;
document.querySelector('#bannerLink').href = `https://www.youtube.com/channel/${id}`;
document.querySelector('#visitBtn').href = `https://www.youtube.com/channel/${id}`;
document.querySelector('#bannerImg').src = image;
document.querySelector('#shortcutIcon').href = image;
document.querySelector('#metaTitle').content = 'YouTube Statistics for ' + user;

document.addEventListener('contextmenu', event => event.preventDefault());

settingsBtn.onclick = function() {
settings.style.display = "block";
};
settingsCloseBtn.onclick = function() {
settings.style.display = "none";
};

window.onclick = function(event) {
if (event.target == settings) {
    settings.style.display = "none";
}};

advancedBtn.onclick = function() {
    if (advanced.style.display == 'block') {
        advanced.style.display = 'none';
        advancedIndicator.innerHTML = 'off';
    } else{
        advanced.style.display = 'block';
        advancedIndicator.innerHTML = 'on';
    }
};
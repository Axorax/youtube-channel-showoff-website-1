const key = "enter_key_here_dont_remove_the_strings"; // YouTube Data API Key
const user = "UChNE29WeA7wbW5VC4JVb5Ag";
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
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${user}&key=${key}`)
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
    if (advanced.style.display == 'none') {
        advanced.style.display = 'block';
        advancedIndicator.innerHTML = 'on';
    } else{
        advanced.style.display = 'none';
        advancedIndicator.innerHTML = 'off';
    }
};
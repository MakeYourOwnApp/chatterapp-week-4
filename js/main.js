/* start the external action and say hello */
console.log("App is alive");

/** create global variable for the currently selected channel */
let currentChannel = "0nlbop5f1e";

// Functions to execute when DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("App is initialized")
    getChannels();
    getMessages();
    loadMessagesIntoChannel();
    displayChannels();

});

//---------------- Channels-----------------------------------

// get existing channels from mock file or database
function getChannels(){
    channels = mockChannels;
}

// get existing messages from mock file or database
function getMessages(){
    messages = mockMessages;
}

// load existing messages into respective channel
function loadMessagesIntoChannel() {
    channels.forEach(channel => {
        messages.forEach(message => {
            if (message.channel === channel.id) {
                channel.messages.push(message)
            }
        })
    })
}

// display channels in channel area 
function displayChannels() {
    const favoriteList = document.getElementById('favorite-channels');
    const regularList = document.getElementById('regular-channels');
    favoriteList.innerHTML = ""
    regularList.innerHTML = ""
    channels.forEach(channel => {
        const channelString = ` <li id="` + channel.id + `" onclick="console.log(this.id)">
                                    <i class="material-icons">group</i>
                                    <span class="channel-name">` + channel.name + `</span>
                                    <span class="timestamp">`+ channel.latestMessage.toLocaleTimeString("de-DE", {hour:"numeric", minute:"numeric"}) + `</span>
                                </li>`
        if (channel.favorite) {
            favoriteList.innerHTML += channelString
        } else {
            regularList.innerHTML += channelString
        }
    })
}
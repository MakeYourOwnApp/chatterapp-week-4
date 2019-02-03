/* start the external action and say hello */
console.log("App is alive");

//Store name of currently selected channel 
let currentChannel = channel1;
let selectedChannel;

function switchChannel(selectedChannel) {
    console.log("selected channel with name: " + selectedChannel.name);
    document.getElementById(currentChannel.id).classList.remove("selected");
    document.getElementById(selectedChannel.id).classList.add("selected")
    currentChannel = selectedChannel;
    showHeader();
}

function showHeader() {
    //display currently selected Channel in App Bar
    document.getElementById('channelName').innerHTML = currentChannel.name;
}


function sendMessage() {
    let messageText = document.getElementById('message-input').value;
    console.log("The following message was send: " + messageText);
    let messageString;
    messageString = `<div class="message outgoing-message">
                        <div class="message-wrapper">
                            <div class="message-content">
                                <p>` + messageText + `</p>
                            </div>
                            <i class="material-icons">account_circle</i>
                        </div>
                        <span class="timestamp">11:45</span>
                    </div>`;
    document.getElementById('chat-area').innerHTML = messageString;
    document.getElementById('message-input').value = '';
}
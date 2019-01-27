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

function showHeader(){
        //display currently selected Channel in App Bar
    document.getElementById('channelName').innerHTML = currentChannel.name;
}


function sendMessage() {
    let message = document.getElementById('message-input').value;
    console.log("The following message was send: " + message);
    document.getElementById('myFirstMessage').innerHTML = message;
    document.getElementById('message-input').value = '';
}
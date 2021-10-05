const socket = io('/')
let myVideoStream;
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})
const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream)
    myPeer.on('call', (call) => {
        console.log(stream)
        console.log("Answering the call")
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
            console.log(stream)
            addVideoStream(video, userVideoStream)
        });
    });

    const muteButton = document.querySelector("#muteButton");
    const stopVideo = document.querySelector("#stopVideo");
    muteButton.addEventListener("click", () => {
        const enabled = myVideoStream.getAudioTracks()[0].enabled;
        if (enabled) {
            myVideoStream.getAudioTracks()[0].enabled = false;
            html = `<i class="fas fa-microphone-slash"></i>`;
            muteButton.classList.toggle("background__red");
            muteButton.innerHTML = html;
        } else {
            myVideoStream.getAudioTracks()[0].enabled = true;
            html = `<i class="fas fa-microphone"></i>`;
            muteButton.classList.toggle("background__red");
            muteButton.innerHTML = html;
        }
    });

    stopVideo.addEventListener("click", () => {
        const enabled = myVideoStream.getVideoTracks()[0].enabled;
        if (enabled) {
            myVideoStream.getVideoTracks()[0].enabled = false;
            html = `<i class="fas fa-video-slash"></i>`;
            stopVideo.classList.toggle("background__red");
            stopVideo.innerHTML = html;
        } else {
            myVideoStream.getVideoTracks()[0].enabled = true;
            html = `<i class="fas fa-video"></i>`;
            stopVideo.classList.toggle("background__red");
            stopVideo.innerHTML = html;
        }
    });


    socket.on('user-connected', userId => {
        setTimeout(connectToNewUser, 1000, userId, stream)
        //connectToNewUser(userId, stream)
    });
    // input value
    let text = $("input");
    // when press enter send message
    $('html').keydown(function (e) {
        if (e.which == 13 && text.val().length !== 0) {
            socket.emit('message', text.val());
            text.val('')
        }
    });
    socket.on("createMessage", message => {
        $("ul").append(`<li class="message"><b>user</b><br/>${message}</li>`);
        scrollToBottom()
    })
});


socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
});

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    console.log("sending info to client 2", userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        console.log(stream)
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })

    peers[userId] = call
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}

const scrollToBottom = () => {
    var d = $('.main__chat_window');
    d.scrollTop(d.prop("scrollHeight"));
}

// socket.on("createMessage", (message, userName) => {
//     messages.innerHTML =
//         messages.innerHTML +
//         `<div class="message">
//           <b><i class="far fa-user-circle"></i> <span> ${
//             userName === user ? "me" : userName
//           }</span> </b>
//           <span>${message}</span>
//       </div>`;
// });
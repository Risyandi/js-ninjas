/**
 * ini adalah sebuah sample latihan dan eksperimen menggunakan API's audio dan video menggunakan javascript
 * link untuk tutorial adalah berikut : https://www.html5rocks.com/en/tutorials/getusermedia/intro/
 * @ Risyandi
 * 
 * pada eksperimen ini akan dikenalkan dengan
 *  navigator.mediaDevices.getUserMedia()
 * adalah sebuah metode API's yang mengizinkan aplikasi web untuk mengakses kamera dan microphone user.
 */

// function hasGetUserMedia() {
//     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
// }

// if (hasGetUserMedia()) {
//  go ahead !
// } else {
//     alert('your browser not supported!')
// }


/**
 * #1 eksperimen video
 * ketika membuka browser, akan muncul notifikasi untuk mengakses camera user karena condition video "true".
 * const constraints berisi dua object yaitu {video:true, audio:true} 
 * link detail lengkap setup constraints nya https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia 
 */

// const constraints = {
// video: true
// video: {width: {exact: 640}, height: {exact: 480}}  //VGAConstraint
// video: {width: {min: 1280}, height: {min: 720}} //HDConstraint
// };

// const video = document.querySelector('.videoPlay');
// console.log(video, "get class video");

// navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//     video.srcObject = stream
//     console.log("complete access video");
// });


/**
 * #2 eksperimen select audio dan video
 */

const videoElement = document.querySelector('.videoPlay');
const audioSelect = document.querySelector('select#audioSource');
const videoSelect = document.querySelector('select#videoSource');

navigator.mediaDevices.enumerateDevices().then(gotDevices).then(getStream).catch(handleError);

audioSelect.onchange = getStream;
videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
    for (let index = 0; index !== deviceInfos.length; ++index) {
        let deviceInfo = deviceInfos[index];
        let option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
            option.text = deviceInfo.label || 'microphone' + (audioSelect.length + 1);
            audioSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || 'camera' + (videoSelect.length + 1);
            videoSelect.appendChild(option);
        } else {
            console.log('found another kind of device', deviceInfo);
        }
    }
}

function getStream() {
    if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }

    const constraints = {
        audio: { deviceId: { exact: audioSelect.value } },
        video: { deviceId: { exact: videoSelect.value } }
    };

    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
}
function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
}

function handleError(error) {
    console.log('Error: ', error);
}
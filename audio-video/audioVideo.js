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
 * pada eksperimen ke dua ini, kita akan mempunyai dua selector yang berisi 2 pilihan yaitu audio dan video. didalam selector tersebut berisi 
 * device apa saja yang terdeteksi oleh API's baik itu devices audio atau video.
 */

// const videoElement = document.querySelector('.videoPlay');
// const audioSelect = document.querySelector('select#audioSource');
// const videoSelect = document.querySelector('select#videoSource');

// navigator.mediaDevices.enumerateDevices().then(gotDevices).then(getStream).catch(handleError);

// audioSelect.onchange = getStream;
// videoSelect.onchange = getStream;

// function gotDevices(deviceInfos) {
//     for (let index = 0; index !== deviceInfos.length; ++index) {
//         let deviceInfo = deviceInfos[index];
//         let option = document.createElement('option');
//         option.value = deviceInfo.deviceId;
//         if (deviceInfo.kind === 'audioinput') {
//             option.text = deviceInfo.label || 'microphone' + (audioSelect.length + 1);
//             audioSelect.appendChild(option);
//         } else if (deviceInfo.kind === 'videoinput') {
//             option.text = deviceInfo.label || 'camera' + (videoSelect.length + 1);
//             videoSelect.appendChild(option);
//         } else {
//             console.log('found another kind of device', deviceInfo);
//         }
//     }
// }

// function getStream() {
//     if (window.stream) {
//         window.stream.getTracks().forEach(function (track) {
//             track.stop();
//         });
//     }

//     const constraints = {
//         audio: { deviceId: { exact: audioSelect.value } },
//         video: { deviceId: { exact: videoSelect.value } }
//     };

//     navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
// }
// function gotStream(stream) {
//     window.stream = stream; // make stream available to console
//     videoElement.srcObject = stream;
// }

// function handleError(error) {
//     console.log('Error: ', error);
// }

/**
 * #3 eskperimen ambil screenshot
 * canvas dan API's ctx.drawImage(video, 0, 0) metode yang akan membuat gambar <video> menjadi bingkai di <canvas>. 
 */
// const captureVideoButton = document.querySelector('');
// const screenShotButton = document.querySelector('');
// const img = document.querySelector('');
// const video = document.querySelector('');
// const canvas = document.createElement('canvas');

// captureVideoButton.onclick = function () {
//     navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
// };

// screenShotButton.onclick = video.onclick = function () {
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d').drawImage(video, 0, 0);

//     img.src = canvas.toDataURL('images/webp');
// };

// function handleSucess(stream) {
//     screenShotButton.disabled = false;
//     video.srcObject = stream;
// }


/**
 * utility
 */

// function get all selector
function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

// dropdown
let $dropdown = getAll('.dropdown');
if ($dropdown.length > 0) {
    $dropdown.forEach( $el => {
        $el.addEventListener('click', event => {
            event.stopPropagation();
            $el.classList.toggle('is-active');
        });
    });

    document.addEventListener('click', event => {
        closeDropdown();
    });
}

closeDropdown = () => {
    $dropdown.forEach( $el => {
        $el.classList.remove('is-active');
    });
}
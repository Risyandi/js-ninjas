/**
 * #2 eksperimen select audio dan video
 * pada eksperimen ke dua ini, kita akan mempunyai dua selector yang berisi 2 pilihan yaitu audio dan video. didalam selector tersebut berisi 
 * device apa saja yang terdeteksi oleh API's baik itu devices audio atau video.
 */

const videoElement = document.querySelector('.videoPlay');
const audioSelect = document.querySelector('div#content-audio');
const videoSelect = document.querySelector('div#content-video');

navigator.mediaDevices.enumerateDevices().then(gotDevices).then(getStream).catch(handleError);

audioSelect.onchange = getStream;
videoSelect.onchange = getStream;

function gotDevices(deviceInfos){
    for (let index = 0; index !== deviceInfos.length; ++index) {
        let deviceInfo = deviceInfos[index];
        let anchor = document.createElement('a');
        let attr = document.createAttribute('class');
        attr.value = "dropdown-item";
        anchor.setAttributeNode(attr);
        anchor.value = deviceInfo.deviceId;

        let lengthElmAudio = document.querySelector('div#content-audio').childElementCount;
        let lengthElmVideo = document.querySelector('div#content-video').childElementCount;
        if (deviceInfo.kind === 'audioinput') {
            anchor.text = deviceInfo.label || 'microphone ' + (lengthElmAudio + 1);
            audioSelect.appendChild(anchor);
        } else if (deviceInfo.kind === 'videoinput') {
            anchor.text = deviceInfo.label || 'camera ' + (lengthElmVideo + 1);
            videoSelect.appendChild(anchor);
        } else {
            console.log('found another kind of device', deviceInfo);
        }
    }
};
function getStream(){
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
};
function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
}
function handleError(error) {
    console.log('Error: ', error);
}


/**
 * utility for style bulma
 */
// function get all selector
getAll = (selector) => {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
// dropdown
let $dropdown = getAll('.dropdown');
// open dropdown
if ($dropdown.length > 0) {
    $dropdown.forEach($el => {
        $el.addEventListener('click', event => {
            event.stopPropagation();
            $el.classList.toggle('is-active');
        });
    });

    document.addEventListener('click', event => {
        closeDropdown();
    });
}
// close dropdown
closeDropdown = () => {
    $dropdown.forEach($el => {
        $el.classList.remove('is-active');
    });
}
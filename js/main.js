const videoElement = document.querySelector('#video');
const btn = document.querySelector('button');

// prompt media stream, pass to video element and play

async function stream() {

    try{
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = media;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch (error){

    }
}
btn.addEventListener('click', async () =>{
    // to disable the button
    btn.disabled = true;
    // start picture-in-picture
    await videoElement.requestPictureInPicture();
    // reset btn
    btn.disabled=false;
})

stream();
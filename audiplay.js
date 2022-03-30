//Create Elements ...

const ap_html = '<link href="/audiplay.css" rel="stylesheet" /><div class="ap_container"> <div class="ap_controls"> <span class="playpausebtn" onclick="justplay()"> </span><span class="ap_loop" onclick="ap_loopf()"></span> <span class="duration"> <input type="range" min="0" max="100" value="0" class="duration_slider" onchange="change_duration()"> </span> <span class="ap_time"></span> <span class="ap_download" onclick="ap_download()"></span> <span class="ap_sound" onclick="ap_mute()"> </span> </div> </div>';



//Constants
let ap_audio = o('.audiplay');
createcontainer();
let play = o('.playpausebtn');
let ap_loop = o('.ap_loop');
let slider = document.querySelector('.duration_slider');

let track = o('.audiplay');
let showtimer = o('.ap_time');
let ap_time = ap_audio.currentTime;
let Playing_song = false;
let playing_time = '  '+secondsToMinutes(ap_audio.duration);

let autoplay = false;
let loop = false;
function createcontainer() {
    ap_audio.insertAdjacentHTML( 'Beforebegin' ,ap_html)
  }

  

//Mains 

ap_audio.style.display = "none";
if(ap_audio.style.width!='') {
    o('.ap_container').style.width = ap_audio.style.width ;
}

// ------------------------ Functions

    //Settimg Audio Timing onload
//ap_audio.onloadeddata = o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration) ;
setTimeout(function () {o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration)}, 1000)
setTimeout(function () {o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration)}, 2000)

function showtime() {
    showtimer.innerHTML = '  -' + secondsToMinutes(ap_audio.duration - ap_audio.currentTime);
}
// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) {
        playsong();

    } else {
        pausesong();
    }
}

function secondsToMinutes(time) {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}


// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
    showtime();
}
if (track.getAttribute("nodownload") != null) {
    o('.ap_download').style.display = 'none';
}

function ap_download() {
    window.open(track.currentSrc)
}


function o(a) {
    return document.querySelector(a);
}

function range_slider() {
    let position = 0;
    showtime();
    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = ap_playsvg;
        if (autoplay == 1) {
            index_no += 1;
            //load_track(index_no);
            playsong();
        }
    }
}

function ap_mute() {
    if (!ap_audio.muted) {
        ap_audio.muted = 1;
        o('.ap_sound').innerHTML = ap_mutesvg;
    } else {
        ap_audio.muted = 0;
        o('.ap_sound').innerHTML = ap_volumnsvg;
    }
}

function ap_loopf() {
    if(!ap_audio.loop){
        ap_audio.loop = true ;
        o('.ap_loop').innerHTML = ap_loopedsvg ;
    } else {
        ap_audio.loop = false ;
        o('.ap_loop').innerHTML = ap_loopsvg ;
    }
}

//SVGs

const ap_playsvg = '<img height="35" src="/media/global/audioplayer_play.svg" />';
const ap_pausesvg = '<img height="35" src="/media/global/audioplayer_pause.svg" />';
const ap_loopsvg = '<img height="35" src="/media/global/audioplayer_loop_inactive.svg" />';
const ap_loopedsvg = '<img height="35" src="/media/global/audioplayer_loop_active.svg" />';
const ap_downloadsvg = '<img height="35" src="/media/global/audioplayer_download.svg" />';
const ap_volumnsvg = '<img height="35" src="/media/global/audioplayer_volume.svg" />';
const ap_mutesvg = '<img height="35" src="/media/global/audioplayer_mute.svg" />';

//Inner Htmls
ap_loop.innerHTML = ap_loopsvg;
o('.ap_download').innerHTML = ap_downloadsvg;
play.innerHTML = ap_playsvg;
o('.ap_sound').innerHTML = ap_volumnsvg;

// play song
function playsong() {
    setInterval(function () {
        range_slider()
    }, 700);
    track.play();
    Playing_song = true;
    play.innerHTML = ap_pausesvg;
}

//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = ap_playsvg;
}

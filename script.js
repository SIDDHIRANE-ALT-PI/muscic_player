const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer=document.getElementById('progress-container');
const progress=document.getElementById('progress');
const currentTimeEl=document.getElementById('current-time');
const durationEl=document.getElementById('duration');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

//Music
const songs = [
    // {
    //     name: 'BSNL RINGTONE',
    //     displayName:'bsnl',
    //     artist:'Jacinto Design',
    // },
    // {
    //     name: 'Airtel RINGTONE',
    //     displayName:'airtel',
    //     artist:'Jac',
    // },
    {
        name: 'Airtel kannada version RINGTONE',
        displayName:'airtel song',
        artist:'unkonwn',
    }
]

//check if playing
let isPlaying=false;

//play
function playsong()
{
    isPlaying=true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();

}
//pause
function pauseSong()
{
    isPlaying=false;
    playBtn.classList.replace('fa-play','fa-play');
    playBtn.setAttribute('title','Play');
    music.pause();
}
//Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : pauseSong() ));

//on load-select first song
loadSong(songs[songIndex]);

//update progress Bar & time
function updateProgressBar(e){
    if(isPlaying){
        const{duration,currentTime}=e.srcElement;
       console.log(duration,currentTime);

       //update progress bar width
       const progressPercent=(currentTime / duration)*100;
       console.log(progressPercent);
       progress.style.width =`${progressPercent}%`;

    //calculate display for duration
    const durationMinutes=Math.floor(duration/60);
    console.log('minutes' , durationMinutes); 
    let durationSeconds=Math.floor(duration % 60);
if(durationSeconds<10)
{
    durationSeconds=`0${durationSeconds}`;
}

        console.log('seconds',durationSeconds);
        durationEl.textContent=`${duartionMinutes}:${durationSeconds}`;

    // if(durationSeconds<10)
    // {
    //     durationSeconds=`0${durationSeconds}`;
    //     }

    // console.log('seconds',durationSeconds);
    

    //delay switching duration element to avoid NaN
    if(durationSeconds)
    {
        durationEl.textContent=`${durationMinutes}:${durationSeconds}`;
    }
     //calculate display for current
     const currentMinutes=Math.floor(currentTime/60);
     console.log('minutes' , currentMinutes); 
     let currentSeconds=Math.floor(current % 60);
        
     if(currentSeconds<10)
     {
         currentSeconds=`0${currentSeconds}`;
         }
 
     console.log('seconds',currentSeconds);
     currentTimeEl.textContent=`${durationMinutes}:${durationSeconds}`;
     
    }

}
// set progress bar


//{/* <script>
{/* function update() {
  let element = document.getElementById("myprogressBar");   
  var width = 1;
  var identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
</script> *///}






function setProgressBar(e)
{
    //console.log(e);
    const width=this.clientWidth;
   // console.log('width',width);
    const clickX=e.offsetX;
    //console.log('clickX',clickX);
    const{duration}=music;
    // console.log(clickX / width);
    // console.log((clickX / width)*duration);
    music.currentTime=(clickX / width) * duration;
}

// event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended' ,nextSong);
music.addEventListener('timeupdate' , updateProgressBar);
progressContainer.addEventListener('click',setProgressBar);
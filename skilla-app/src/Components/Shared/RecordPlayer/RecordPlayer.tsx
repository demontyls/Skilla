import React, {useEffect, useRef, useState} from 'react';
import {IShowRecord} from '../../Table/Row/Interface';
import 'react-h5-audio-player/lib/styles.css';
import { getTimeCodeFromNum } from "./Function";

interface IRecorPalye {
  record: string;
  partnership_id: string;
  setShowRecord: (value: IShowRecord)=> void
}

const RecordPlayer: React.FC<IRecorPalye> = ({ record, partnership_id, setShowRecord }) => {
  const [audio, setAudio] = useState<any>();
  const [duration, setDuration] = useState<any>(0);
  const [loaded, setLoaded] = useState(false);
  const [ seconds, setSeconds ] = React.useState<any>(25);
  const [ timerActive, setTimerActive ] = React.useState(false);
  const audioRef:any = useRef();
  const TimeRef:any = useRef();
  const audioPlayer:any = useRef();
  const progressRef:any = useRef();

  useEffect(()=> {
    fetch(`https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`, {
      method: "POST",
      headers: {
        Authorization: 'Bearer testtoken',
        "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": 'filename="record.mp3"'
      },
    })
      .then(response => response.blob() )
      .then( res => {
        setAudio(URL.createObjectURL(res));
        console.log('then')
      })
  },[]);

  // useEffect(()=> {
  //   console.log(audioRef.current.duration,'set d')
  //   setTimeout(()=> {
  //     if(audioRef.current) {
  //       audioRef.current.play();
  //       setDuration(audioRef.current.duration);
  //     }
  //   }, 2000)
  //
  // },[audio, audioRef]);

  useEffect(()=> {
    console.log(duration,'d')
  },[duration])

  // https://codepen.io/EmNudge/pen/rRbLJQ?editors=1111
  const play = (playBtn: any) => {
    if (audioRef.current.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audioRef.current.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audioRef.current.pause();
      // setSeconds(60)
    }
  }

  const timeLine = (e:any) => {
    const timeline = e.target.closest('.timeline');
    const timelineWidth = window.getComputedStyle(timeline).width;
    audioRef.current.currentTime = e.nativeEvent.offsetX / parseInt(timelineWidth) * audioRef.current.duration;
    setTimerActive(false);
    setSeconds(25 - e.nativeEvent.offsetX / parseInt(timelineWidth) * audioRef.current.duration)
    setTimerActive(true)
    getCurrentProgress();
  }

  const getCurrentProgress = () => {
    const progressBar = progressRef.current;
    progressBar.style.width = audioRef.current?.currentTime / audioRef.current?.duration * 100 + "%";
    TimeRef.current.textContent = getTimeCodeFromNum(audioRef.current.currentTime);
  }


  React.useEffect(() => {
    // let seconds2 = audioRef.current.duration;
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
      getCurrentProgress()
    } else {
      setTimerActive(false);
    }
  }, [ seconds, timerActive ]);

  return (
    <>
      <div>
        <div className="d-flex">
          <React.Fragment>
            <button onClick={() => setTimerActive(!timerActive)}>
              {timerActive ? 'stop' : 'start'}
            </button>
            <div>{seconds}</div>
          </React.Fragment>
          <button onClick={() => setSeconds(60)}>ещё раз</button>
        </div>

        <audio ref={audioRef} src={audio} />
        <div style={{width: '50px', height: '50px'}}></div>
        <div ref={audioPlayer} className="audio-player">
          <div className="timeline" onClick={(e) => timeLine(e)}>
            <div className="progress" ref={progressRef}></div>
          </div>
          <div className="controls">
            <div className="play-container">
              <div className="toggle-play play" onClick={(e)=> {
                play(e.target);
                setTimerActive(!timerActive);
              }}/>
            </div>
            <div className="time">
              <div className="current" ref={TimeRef}>0</div>
              <div className="divider">/</div>
              <div className="length">{getTimeCodeFromNum(audioRef.current?.duration)}</div>
              {/*<div className="length">{duration}</div>*/}
            </div>
            <div className="volume-container d-none">
              <div className="volume-button">
                <div className="volume icono-volumeMedium"></div>
              </div>

              <div className="volume-slider">
                <div className="volume-percentage"></div>
              </div>
            </div>
            <a className="d-flex align-items-center" onClick={()=> setShowRecord({isClose: true, show: false})}>
              <i className="fa-close"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;
import React, {useEffect, useRef, useState} from 'react';

import { IShowRecord } from '../../Table/Row/Interface';
import { getTimeCodeFromNum } from './Function';

import './RecordPlayer.scss';

interface IRecorPalye {
  record: string;
  partnership_id: string;
  setShowRecord: (value: IShowRecord)=> void
}

const RecordPlayer: React.FC<IRecorPalye> = ({ record, partnership_id, setShowRecord }) => {
  const [ audio, setAudio ] = useState<any>();
  const [ duration, setDuration ] = useState<any>(0);
  const [ seconds, setSeconds ] = useState<any>(0);
  const [ timerActive, setTimerActive ] = useState(false);
  const [ isPlay, setIsPlay] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const audioRef:any = useRef();
  const TimeRef:any = useRef();
  const audioPlayer: any  = useRef();
  const progressRef:any = useRef();
  const tooltipRef:any = useRef();

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
      .then( res => setAudio(URL.createObjectURL(res)));
  },[]);

  useEffect(()=> {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', (e:any) => {
        setDuration(getTimeCodeFromNum(e.target.duration));
        setSeconds(e.target.duration);
      });
    }
  }, []);

  const play = (playBtn: any) => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setTimerActive(true);
      setIsPlay(true)
      setShowClose(true);
    } else {
      audioRef.current.pause();
      setIsPlay(false);
      setTimerActive(false);
    }
  }
  const timeLine = (e:any) => {
    const timeline = e.target.closest('.timeline');
    const timelineWidth = window.getComputedStyle(timeline).width;

    audioRef.current.currentTime = e.nativeEvent.offsetX / parseInt(timelineWidth) * audioRef.current.duration;
    setSeconds(Math.trunc(audioRef.current.duration - e.nativeEvent.offsetX) / parseInt(timelineWidth) * audioRef.current.duration)
    getCurrentProgress();
  }

  const getCurrentProgress = () => {
    const progressBar = progressRef.current;
    progressBar.style.width = audioRef.current?.currentTime / audioRef.current?.duration * 100 + "%";
    TimeRef.current.textContent = getTimeCodeFromNum(audioRef.current.currentTime);
  }

  React.useEffect(() => {
      const time = Math.trunc(audioRef.current.duration - audioRef.current.currentTime);
      if (timerActive) {
        setTimeout(setSeconds, 1000, time - 1);
      } else {

      }
      if (audioRef.current.duration === audioRef.current.currentTime) {
        setIsPlay(false);
        setTimerActive(false);
      }

      getCurrentProgress()
  }, [ audioRef.current?.currentTime, timerActive ]);

  const move = (e: any) => {
    const timeline = e.target.closest('.timeline');
    const timelineWidth = window.getComputedStyle(timeline).width;
    tooltipRef.current.style.left = e.nativeEvent.offsetX + "px";
    tooltipRef.current.style.visibility = 'visible';
    tooltipRef.current.textContent = getTimeCodeFromNum(e.nativeEvent.offsetX / parseInt(timelineWidth) * audioRef.current.duration)
  }

  return (
    <>
      <div>
        <audio ref={audioRef} src={audio} />
        <div ref={audioPlayer} className="audio-player">
          <div className="controls">
            <div className="time">
              <div className="current d-none" ref={TimeRef}>0</div>
              <div className="divider d-none">/</div>
              <div className="length">{duration}</div>
            </div>
            <div className="play-container">
              <i className={`toggle-play text-accent ${isPlay ? 'fa-pause' : 'fa-play'}`} onClick={(e)=> {
                play(e.target);
              }}/>
            </div>
            <div className="timeline me-3" onMouseLeave={()=> tooltipRef.current.style.visibility = 'hidden'} onMouseMove={(e)=>{ move(e)}} onClick={(e) => timeLine(e)}>
              <div className="progress" ref={progressRef} />
              <div className="cursor-tooltip" ref={tooltipRef} />
            </div>
            <div className="d-flex align-items-center">
              <a className="d-flex align-items-center me-2" onClick={()=> console.log('Скачали документ') }>
                <i className="icon fa-download"/>
              </a>
              <a className={`d-flex align-items-center ${showClose ? '' : 'hidden' } `} onClick={()=> setShowRecord({isClose: true, show: false})}>
                <i className="icon fa-close"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;
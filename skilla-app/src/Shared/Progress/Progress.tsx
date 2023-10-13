import React from 'react';

import './../../App/custom.scss'
import './Style.scss'

interface IProgress {
  filled: number;
  progressColor?: string;
  filledColor?: string;
  height?: number;
  color?: string;
}
const Progress: React.FC<IProgress> = ({filled, height , progressColor, filledColor}) => {
  return (
    <div className={`progress ${progressColor ?? 'bg-main-gray'}`} style={{height: height}}>
      <div className={`progress__fill ${filledColor ?? 'bg-white'}`} style={{width: `${filled}%`}}></div>
    </div>
  );
};

export default Progress;
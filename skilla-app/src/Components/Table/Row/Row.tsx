import React, { useState } from 'react';
import { FormCheck } from 'react-bootstrap';

import Grade from '../../../Shared/Grade/Grade';
import { getCorrectFormat, getFormatPhoneNumber, getTimeFromDateString } from './Functions';
import RecordPlayer from '../../../Shared/RecordPlayer/RecordPlayer';

import './Row.scss'
import {IRow, IRowField, IShowRecord} from './Interface';

const Row: React.FC<IRow> = ({gradeValue, data}) => {
  const [rowField] = useState<IRowField>(data);
  const [ showRecord, setShowRecord ] = useState<IShowRecord>({
    show: false,
    isClose: false
  });

  return (
    <tr className="" onMouseLeave={()=> setShowRecord({...showRecord, isClose: false})} onMouseEnter={() => !showRecord.isClose && setShowRecord({...showRecord, show: true})}>
      <td className="">
        <FormCheck/>
      </td>
      <td className="ps-0">
        <i className={`fa-call-${Boolean(rowField.in_out) ? 'down' : 'up' } text-primary icon-3`}/>
      </td>
      <td className="time">
        {getTimeFromDateString(rowField.date)}
      </td>
      <td className="employee">
        <div className="d-flex align-items-center justify-content-between">
          <img src={rowField.person_avatar} alt="logo"/>
          {rowField.from_site ? <i className="fa-web icon-2"/> : ''}
        </div>
      </td>
      <td className="call">
        {rowField.partner_data.name ?
          <div>
            {rowField.partner_data.name}
          </div>
          : ''
        }
        <div>
          {getFormatPhoneNumber(rowField.partner_data.phone)}
        </div>
      </td>
      <td className="source">
        {rowField.sourse}
      </td>
      <td className="grade">
        <Grade value={gradeValue}/>
      </td>
      <td className="duration">
        {showRecord.show ? rowField.record && <RecordPlayer setShowRecord={setShowRecord} record={rowField.record} partnership_id={rowField.partnership_id}/> :
          getCorrectFormat(rowField.time)
        }
      </td>
    </tr>
  );
};

export default Row;
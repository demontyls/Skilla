import React, {useEffect, useState} from 'react';

import Row from './Row/Row';
import { FormCheck } from 'react-bootstrap';
import {IActiveSorts, IMainData} from './Interface';

import Filters from './Filters/Filters';
import SortButton from './HederComponents/SortButton/SortButton';

import './Table.scss'
import {IRowField} from "./Row/Interface";

const Table = () => {
  const [defaultData, SetDefaultData] = useState<IRowField[]>([])
  const [data, setData] = useState<IRowField[]>([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSorts, setActiveSorts] = useState<IActiveSorts>({
    duration: false,
    date: false
  })

  useEffect(()=> {
    // setData([]);
    fetch('https://api.skilla.ru/mango/getList?limit=172', {
      method: "POST",
      headers: {
        Authorization: 'Bearer testtoken'
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data.results)
        SetDefaultData(data.results);
      });
  }, []);

  const filter = (field? : string, value?: string | number) => {
    const copyData = JSON.parse(JSON.stringify(defaultData));
    if (field) {
      setData([]);
      setActiveFilter(true)
      setData(copyData.filter((elem : IRowField) => elem[field as keyof typeof elem] === value));
    } else {
      setData(copyData);
      setActiveFilter(false)
    }
  }
  useEffect(()=> {console.log(data)}, [data])

  return (
    <div className="table-wrapper">
      <Filters activeSorts={activeSorts} activeFilter={activeFilter} setActiveSorts={setActiveSorts} filter={filter}/>
      <table>
        <thead>
          <tr>
            <th><FormCheck/></th>
            <th className="ps-0" style={{width: 40}}>Тип</th>
            <th>
              <SortButton
                fieldSort={'date'}
                setData={setData}
                setActiveSorts={setActiveSorts}
                activeSorts={activeSorts}
                name="Время"
              />
            </th>
            <th>Сотрудник</th>
            <th>Звонок</th>
            <th>Источник</th>
            <th>Оценка</th>
            <th>
              <SortButton
                fieldSort={'duration'}
                setData={setData}
                setActiveSorts={setActiveSorts}
                activeSorts={activeSorts}
                name="Длительность"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(( field: any, i: number )=> {
            return <Row key={field.id} data={field} gradeValue={2}/>
          })}
        </tbody>
      </table>

    </div>
  );
};

export default Table;
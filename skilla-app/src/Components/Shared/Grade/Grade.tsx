import React, {ReactNode} from 'react';
import {Button} from "react-bootstrap";
import CustomBadge from "../CustomBadge/CustomBadge";

interface IGrade {
  value: any
}
const Grade: React.FC<IGrade> = ({value}) => {

  const getContent = (value: any) :ReactNode => {
    switch(true) {
      case value === 1:
       return <Button variant="outline-primary">Распознать</Button>
      case value === 2:
       return <CustomBadge status="danger" name="плохо" icon="fa-mark-1"/>
      case value === 3:
       return <CustomBadge status="standart" name="хорошо" icon="fa-mark-2"/>
      case value === 4:
       return <CustomBadge status="success" name="Отлично" icon="fa-mark-3"/>
      case value === 5:
        return <span className="text-danger">Скрипт не использован</span>
      default:
        return  <span className="empty"></span>
    }
  }
  return (
    <>
      { getContent(value) }
    </>
  );
};

export default Grade;
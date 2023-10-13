import React from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

const Organization = () => {
const linkContent = <span>ИП Сидорова Александра Михайловна</span>;
  return (
    <CustomDropdown linkContent={linkContent}/>
  );
};

export default Organization;
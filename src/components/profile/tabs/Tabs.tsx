import React, { useState } from 'react';
import { Tab } from './Tab';

export const Tabs = () => {
  const [selectProfileTab, setSelectProfileTab] = useState(true);
  const [selectCompetetionsTab, setSelectCompetetionsTab] = useState(false);

  return (
    <div>
      {/* <Tab isSelected={selectProfileTab} tabName={'Профиль'}/>
      <Tab isSelected={selectCompetetionsTab} tabName={'Компетенции'} /> */}
    </div>
  )
}

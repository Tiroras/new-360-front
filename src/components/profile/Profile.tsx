import React from 'react';
import { Info } from './info/Info';
import { Tabs } from './tabs/Tabs';

export const Profile: React.FC = () => {
  return(
    <div>
      <Tabs />
      <Info 
        name={'Федоросинков Петр Олегович'}
        position={'Менеджер'}
        lastTime='Вчера'
      />
    </div>
  )
}

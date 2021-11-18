import React from 'react';
import { PollsListElement } from './PollsListElement';

export const Polls = () => {
  return(
    <div>
      <div>
        <h2>Список опросов</h2>
      </div>
      <div>
        <PollsListElement name='Минтаров Федор Сидрович' position='Стажер' />
      </div>
    </div>
  )
}
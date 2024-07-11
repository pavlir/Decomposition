import React from 'react'
import { Item } from './Item';
import { Addition } from './Addition';

export const Quotes : React.FC = () => {
  const quotes = [{
    type: 'USD MOEX',
    value: '63.52',
    chg: '+0.09'
  }, {
    type: 'EUR MOEX',
    value: '70.86',
    chg: '+0.14'
  }, {
    type: 'НЕФТЬ',
    value: '64.90',
    chg: '+1.63%'
  }];

  return (
    <div className='quotes'>
      {quotes.map(q => {
        return <Item>
          <p key={q.type}><b>{q.type}</b> {q.value}</p>
          <Addition text={q.chg} />
        </Item>
      })}
      <div className='more'>...</div>
    </div>
  )
}

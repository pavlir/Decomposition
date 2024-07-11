import {useState} from 'react'
import { Item } from './Item';

export const News : React.FC = () => {
  const sections = [{
    id: 'popular',
    label: 'Сейчас в СМИ'
  }, {
    id: 'locally',
    label: 'В Германии'
  }, {
    id: 'recommendations',
    label: 'Рекомендации'
  }];

  const news = [{
    icon: '/*/',
    section: 'popular',
    text: 'Путин упростил получение'
  }, {
    icon: '///',
    section: 'popular',
    text: 'В команде Зеленского'
  }, {
    icon: '***',
    section: 'popular',
    text: 'Турпомощь прокоментировала'
  }, {
    icon: '...',
    section: 'locally',
    text: 'Суд закрыл дело'
  }, {
    icon: '---',
    section: 'recommendations',
    text: 'На Украине призвали'
  }];

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLElement;
    setSection(target.id);
  };

  function getFormattedDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

  const [section, setSection] = useState('popular');

  const items = news.filter(n => n.section == section);

  return (
    <div className='news'>
      <div className="sections">
        {sections.map(section => {
          return <div key={section.id} id={section.id} onClick={handleClick}>{section.label}</div>
        })}
        <div className="today">{getFormattedDate()}</div>
      </div>
      <div className="list">
        {items.map(i => {
          return <Item key={i.text} icon={i.icon}><p>{i.text}</p></Item>
        })}
      </div>
    </div>
  )
}

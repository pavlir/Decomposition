import { InfoSection } from "./InfoSection";

/**
 * 
 * вывод превью для статьи 
 */

export const Article : React.FC = () => {
  const [preview, title, link, text] = [
    'https://picsum.photos/150',
    'Работа над обишками',
    '...',
    'Смотрите на Яндекс и запоминайте'
  ];

  return (
    <div className="article">
      <img src={preview} alt="preview"/>
      <InfoSection title={title} link={link}>
        <p>{text}</p>
      </InfoSection>
    </div>
  )
}

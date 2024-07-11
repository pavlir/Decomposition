import {ReactNode} from 'react'

interface IInfoSectionProps {
    title : string,
    link : string,
    children : ReactNode
}

/**
 * 
 * секция для вывода разного типа информации
 * кликабельный тайтл
 * содержимое
 */

export const InfoSection : React.FC <IInfoSectionProps> = ({title, link, children}) => {
  return (
    <div className='info-section'>
        <a href={link} className="info-title">{title}</a>
        <div className="info-content">
          {children}
        </div>
    </div>
  )
}

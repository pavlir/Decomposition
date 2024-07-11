import { ReactNode } from "react"

interface IItemProps {
  icon? : string,
  children : ReactNode
}

export const Item : React.FC<IItemProps> = (props) => {
  return (
    <div className='list-item'>
      {
        props.icon ? 
          <div className="item-icon">
            <img src={props.icon} alt="Icon" />
          </div> 
          : null
      }
      {props.children}
    </div>
  )
}


export enum WeatherStatus {
    SUN = '',
    CLOUD = 'ooo',
    RAIN = '///'
}
interface IWeatherProps {
    status : WeatherStatus,
    temp : string,
    range : {
        day : string,
        night: string
    }
}

/**
 * виджет для вывода погоды
 * 
 */

export const Weather : React.FC <IWeatherProps> = ({status, temp, range}) => {
  return (
    <div className='weather'>
        <div className="icon">{status}</div>
        <div className="temp">{temp}°</div>
        <div className="temp-day">
            <span className="morning">Утром {range.day}</span>
            <span className="evening">Вечером {range.night}</span>
        </div>
    </div>
  )
}

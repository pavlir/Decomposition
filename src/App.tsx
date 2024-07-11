import './App.css'
import { Addition } from './components/Addition'
import { Article } from './components/Article'
import { Banner } from './components/Banner'
import { InfoSection } from './components/InfoSection'
import { Item } from './components/Item'
import { News } from './components/News'
import { Quotes } from './components/Quotes'
import { Search } from './components/Search'
import { Weather, WeatherStatus } from './components/Weather'

function App() {

  return (
    <div className='Yandex'>
      <div className="header">
        <div className="newsSection">
          <News />
          <Quotes />
        </div>
        <div className='articles'><Article/></div>
      </div>

      <div className="searchSection">
        <Search/>
      </div>

      <div className="advertisement">
        <Banner/>
      </div>

      <div className="mainSection">
        <InfoSection title='Погода' link='...'>
          <Weather status={WeatherStatus.CLOUD} temp='+17' range={{day: '+17', night: '-18'}} />
        </InfoSection>

        <InfoSection title='Карта Германии' link='...'>
          <p>Рассписание</p>
        </InfoSection>

        <InfoSection title='Эфир' link='...'>
          <Item icon='...'>
            <p>Управление как искуство</p>
            <Addition text='Успех' />
          </Item>
          <Item icon='...'>
            <p>Ночь. Мир в это время</p>
            <Addition text='earthTv' />
          </Item>
          <Item icon='...'>
            <p>Андрей в</p>
            <Addition text='Слвершенно секретно' />
          </Item>
        </InfoSection>

        <InfoSection title='Посещаемое' link='...'>
          <Item><p><b>Недвижемость</b> - о сталинках</p></Item>
          <Item><p><b>Маркет</b> - люстры и светильники</p></Item>
          <Item><p><b>Авто.ру</b> - привеод 4х4</p></Item>
        </InfoSection>

        <InfoSection title='Телепрограмма' link='...'>
          <Item>
            <p>02:00 ТНТ Best</p>
            <Addition text='ТНТ Internationsl' />
          </Item>
          <Item>
            <p>02:15 Джинглики</p>
            <Addition text='Карусель int' />
          </Item>
          <Item>
            <p>02:25 Наедине  со всеми</p>
            <Addition text='Первый' />
          </Item>
        </InfoSection>
      </div>
    </div>
  )
}

export default App


/**
 * 
 * панель поиска лого, инпут, кнопка, ссылки на разделы
 */

export const Search : React.FC = () => {
  const generatePrompt = () : string => {
    return '';
  };

  const CATEGORIES = ['Видео', 'Картинки', 'Новости'];

  return (
    <div className="search">
      <div className="categories">
        {CATEGORIES.map((value) => {
          return <a href="..." key={value}>value</a>
        })}
      </div>
      <div className="search-bar">
        <div className="logo">
          <img src="https://picsum.photos/150" alt="logo" />
        </div>
        <div className="input">
          <input type="text" name="search" id="search" />
          <button type="button">Найти</button>
        </div>
      </div>
      <div className="prompt">Пример: {generatePrompt()}</div>
    </div>
  )
}

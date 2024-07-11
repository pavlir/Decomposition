
/**
 *  просто баннер
 */
export const Banner : React.FC = () => {
  const {srcBanner, titleBanner} = (() => {
    return {srcBanner: 'https://picsum.photos/150', titleBanner: 'title'};
  })();

  return (
    <div className='banner'>
        <img src={srcBanner} title={titleBanner} alt="Banner"/>
    </div>
  )
}

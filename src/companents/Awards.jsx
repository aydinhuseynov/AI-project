import Award from '../companents/Award';
import awardsData from '../assets/awards.json';
import '../assets/css/awards.css';
const Awards = () => {


  return (
    <div style={{backgroundColor: "#020A18" }} className='mainAwards'>
      {
        awardsData.map(award=>(
            <Award key={award.Title}  titleOfPicture={award.Title} awardPicture={award.UrlOfPicture} aboutAward={award.AboutPicture}/>
        ))
      }
       
      
    </div>
  )
}

export default Awards

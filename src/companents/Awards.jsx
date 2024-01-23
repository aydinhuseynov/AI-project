import Award from '../companents/Award';
import awardsData from '../assets/awards.json';
import '../assets/css/awards.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Awards = () => {

  const [data,setData] = useState(null);

  useEffect(()=>{
axios.get("src/assets/awards.json")
.then((response)=>console.log(response.data))
  },[]
  
  )
  return (
    <div style={{backgroundColor: "#020A18" }} className='mainAwards'>
      {
        awardsData.map(award=>(
            <Award  titleOfPicture={award.Title} awardPicture={award.UrlOfPicture} aboutAward={award.AboutPicture}/>
        ))
      }
       
      
    </div>
  )
}

export default Awards

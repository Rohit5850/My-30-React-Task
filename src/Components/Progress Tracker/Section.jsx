import React, { useEffect, useState } from 'react';
import DsaList from './DsaList';

const Section = () => {
    const [overallProgress,setOverallProgress] = useState(30)
    const [dsaList,setDsaList] = useState([DsaList])


   console.log(dsaList)

  return (
    <div className='app_section'>

        <div className='progress_bar'>
             <div className='bar_heading'>
             <p>Progress:{overallProgress+'%' } </p>
             </div>

             <div className='bar_range'>
             <input type="range" id="points" name="points"  min="0" max="100" value={overallProgress} className="slider"/>
             </div>
              


        </div>

       
    </div>
  )
}

export default Section
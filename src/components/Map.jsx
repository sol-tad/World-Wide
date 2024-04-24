import React from 'react'
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
function Map() {
  const navigate=useNavigate();//navigate where ever we want 
 const[searchParam,setSearchParams] =useSearchParams();

 const lat= searchParam.get('lat');
 const lng= searchParam.get('lng');
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate('form')}}>
      <h1>map</h1>
      <h1>Position:{lat}, {lng}</h1>
    </div>
  )
}

export default Map

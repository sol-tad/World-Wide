import React from 'react'
import styles from "./Map.module.css";
import { useSearchParams } from 'react-router-dom';
function Map() {
 const[searchParam,setSearchParams] =useSearchParams();

 const lat= searchParam.get('lat');
 const lng= searchParam.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>map</h1>
      <h1>Position:{lat}, {lng}</h1>
    </div>
  )
}

export default Map

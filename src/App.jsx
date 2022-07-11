import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'
import ResidentInfo from './component/ResidentInfo';

function App() {

  const [locationRym, setLocationRym] = useState({})
  const random = Math.floor(Math.random() * 126) + 1
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocationRym(res.data))

  }, [])

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then(res => setLocationRym(res.data))
  }

  console.log(locationRym)

  document.body.style.background = "#054D48"

  return (
    <div className="App">
      <div className='header'>
        <img src="https://caracoltv.brightspotcdn.com/dims4/default/17770c0/2147483647/strip/true/crop/1500x720+0+0/resize/1000x480!/format/webp/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fshock%2Fcontent_files%2F2019_08%2Fimage_article%2Frick-y-morty-serie.jpg" alt="" />
      </div>
      <h2 style={{ color: "white" }}>Ricky and Morty Wiki</h2>
      <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Type a Location ID" style={{ marginBottom: "20px" }} />
      <button onClick={searchLocation}>Search</button>
      <br />
      <b style={{ color: "white", marginBottom: "20px" }}>{locationRym.name}</b>
      <div className="type" style={{ color: "white", marginBottom: "20px" }}>
        <ul>
          <li><b style={{ color: "darkgrey"}}>Type: </b> {locationRym.type}</li>
          <li><b style={{ color: "darkgrey"}}>Dimension: </b> {locationRym.dimension}</li>
          <li><b style={{ color: "darkgrey"}}>Population: </b> {locationRym.residents?.length}</li>
        </ul>
      </div>
      <div>
        <ul>
          {locationRym.residents?.map(ResidentList => (
            <ResidentInfo ResidentList={ResidentList} key={ResidentList} />
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App

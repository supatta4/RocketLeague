import React, { useState } from 'react'
import './App.css';
import AppHeader from './components/AppHeader';
import Caritem from './components/Caritem';
import cars from './data/data';
import CarPost from './components/CarPost';
import AppSearch from './components/AppSearch'



function App() {
  const [seletedCar,setSeletedCar] = useState(null);
  const [searchText, setSearchText] = useState('');

    function onCarOpenClick(car) {
    setSeletedCar(car);
    }

    function onCarCloseClick() {
      setSeletedCar(null);
    }

    const carItems = cars.filter((car) => {
      return car.title.includes(searchText);
    }).map((car,index)=>{
    return <Caritem key={index} car={car} onCarClick={onCarOpenClick}/>;
  });


    let carPost= null;
    if(!!seletedCar){
      carPost =<CarPost car={seletedCar} onBgclick={onCarCloseClick}/>
    }


  return (
    <div className="App">
      <AppHeader/>
      <br/>

      <div className="app-container"> 
        <AppSearch value={searchText} onValueChange={setSearchText} />
        <div className="app-grid">
        
            {carItems}
        
        </div>
      </div>
      {carPost}
    </div>
  );
}

export default App;

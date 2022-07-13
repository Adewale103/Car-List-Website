
import './App.css';
import Car from './components/Car';
import cars from './data/carlist';

function App() {
   
  function displayCar(cars){
    return(
      <Car
      key ={cars.id}
      name = {cars.name}
      image = {cars.image}
      speed = {cars.topSpeed}
      engine = {cars.engine}/>
    )
    
  }
  return (
    <div className="App">
      <h1 className='App-header'>Top 10 Fastest Cars in the World</h1>

      <div className="car-list">
          {cars.map(displayCar)}
      </div>

    </div>
  );
}

export default App;

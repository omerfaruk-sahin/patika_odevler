
import './App.css';
import Citysel from './components/citysel';
function App() {
  return (  
   <div >
    <div classname="row">
    <h1 classname="htc" style={{color:"orangered",fontSize:"300%",opacity:"100%"}}>Hava Durumu </h1>
    <Citysel />   
    </div>
    </div>
  );
}

export default App;

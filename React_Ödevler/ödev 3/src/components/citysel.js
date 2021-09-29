import {useState,useEffect} from 'react'
import { RegionDropdown } from 'react-country-region-selector';
import axios from 'axios';
import Hava from './hava'


function Citysel() {
    const [city, setdropdwn] = useState("İstanbul")
    const selectRegion = (val)=>{setdropdwn(val)}
    const [data, setdata] = useState([])
    const [isloading,setisloading]=useState(true)
    
    useEffect(() => {
    axios.get(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
        { headers: {
        'Content-Type': 'application/json',
        'Authorization': 'apikey 2EWvXpkeSTlJmFNivUiWtH:35JCJ52wJWetlkwfbM0Hiw',
        }}).then((data) => setdata(data.data.result))
          .catch((e)=> console.log(e))
          .finally(()=> setisloading(false))    
        }, [city])
      

    return (
        <div className="">
        
        <RegionDropdown
          classes="dawwd col-4"
          defaultOptionLabel={city}
          country={"Turkey"}
          value={city}
          onChange={(val) => selectRegion(val)}/>
        <Hava data={data} isloading={isloading}/>
      </div>
    )
}
export default Citysel

import React from 'react'

function Hava({data,isloading}) {
    return (
        
        <div className="row" style={{color:"orangered"}}>
            {isloading && <div> Loading ...</div>}
            {data.map((item,index) => (<div className="col">
                <div className={index===0? "krt":""}>
                    <h3>{item.day}</h3>
                    <img src={item.icon} className="jpg" alt="" />
                    <p className="sck">{item.description}</p>
                    <p className="max"><p className="mxx">Max sıcaklık</p>{Math.round(item.max)}°</p>
                    <p className="min"><p className="mxx">Min sıcaklık</p>{Math.round(item.min)}°</p>
                </div>
                
            </div>))}

        </div>
    )
}

export default Hava

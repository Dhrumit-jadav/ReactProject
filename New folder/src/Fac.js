import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import "./card.css"

function Fac()
{
    const [faclties,setFaclties]=useState([]);
    
    useEffect(()=>{
                    fetch("https://630d987bb37c364eb706c169.mockapi.io/SuperCar")
                    .then((res)=>{return res.json()})
                    .then((res)=>{setFaclties(res);});
                  } ,[]); 
    const formetedFac = faclties.map((f) => {
        return(<>
                    <div className="container">
                        <div className="float-sm-start card m-2 demo" style={{width:23+"%"}}>
                            <img src={f.CarImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fs-6" >CarName:{f.CarName}</h5>
                                <h5 className="card-title fs-6">CarPrice:{f.CarPrice}</h5>
                                <h5 className="card-title" style={{fontSize:12+"px"}}>{f.CarDescription}</h5>
                                <Link to={"../Fac/" + f.id}>
                                    <button className="btn btn-info">Info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                </>
            )})
    return (<>
        {formetedFac}
        <div className="clearfix"></div>
    </>);
}
export default Fac;
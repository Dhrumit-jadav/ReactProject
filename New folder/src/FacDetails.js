import { useEffect, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacDetails()
{
    const nav = useNavigate();
    const param = useParams();

    const url = "https://630d987bb37c364eb706c169.mockapi.io/SuperCar";

    const [data,setData] = useState({})
    
    useEffect(()=>{
        fetch(url+"/"+param.id,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
      },[]);
      return(
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={data.CarImage} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CarName:{data.CarName}</h5>
                            <h5 className="card-title">CarPrice:{data.CarPrice}</h5>
                            <h5 className="card-title">CarDescription:{data.CarDescription}</h5>
                            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                <button class="btn btn-info" className="btn btn-info" onClick={()=>{
                                    nav('../Fac/edit/'+param.id);}}>Edit</button>
                                <button class="btn btn-danger" onClick={()=>{
                                        fetch(url+"/"+param.id,{method:"DELETE"})
                                        .then(res=>{
                                        nav('/Fac');
                                        });}}>
                                            Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
}
export default FacDetails;
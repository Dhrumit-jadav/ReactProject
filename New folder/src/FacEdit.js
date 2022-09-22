import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";

function FacEdit()
{
    const param =useParams();
    const nav = useNavigate();
    const url = "https://630d987bb37c364eb706c169.mockapi.io/SuperCar";

    useEffect(()=>{
        fetch(url+"/"+param.id,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
      },[]);
    const[data, setData] = useState({})
    return(<>
        <h5> CarName:
            <input type="text" value={data.CarName} onChange={(e)=>{
            setData({...data,CarName:e.target.value});
            }} />
        </h5>
            <br/>
        <h5> CarImage:
            <input type="text" value={data.CarImage} onChange={(e)=>{
            setData({...data,CarImage:e.target.value});
            }} />
        </h5>
        <br/>
        <h5>CarPrice:
            <input type="text" value={data.CarPrice} onChange={(e)=>{
            setData({...data,CarPrice:e.target.value});
            }} />
        </h5>
        <br/>
        <h5>
            CarDescription:
            <input type="text" value={data.CarDescription} onChange={(e)=>{
            setData({...data,CarDescription:e.target.value});
            }} />
        </h5>
        <br/>
            <input type="button" value="Edit Faculty" onClick={()=>{

            fetch(url+"/"+param.id,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
            })
            .then((res)=>{
            
            nav('/Fac');
            })
            }} />

    </>)
}
export default FacEdit;
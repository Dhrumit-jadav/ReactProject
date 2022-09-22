import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacAdd()
{
    const nav = useNavigate();
    const url = "https://630d987bb37c364eb706c169.mockapi.io/SuperCar";

    const[data, setData] = useState({FacltieName:""});
    return(<>
        <h5> CarName:
        <input type="text" onChange={(e)=>{
        setData({...data,CarName:e.target.value});
        }} />
        </h5>
        <h5>CarImage:
        <input type="text" onChange={(e)=>{
        setData({...data,CarImage:e.target.value});
        }} />
        </h5>

        <h5>CarPrice:
        <input type="text" onChange={(e)=>{
        setData({...data,CarPrice:e.target.value});
        }} />
        </h5>
        
        <h5> CarDescription:
        <input type="text" onChange={(e)=>{
        setData({...data,CarDescription:e.target.value});
        }} />
        </h5>

        <input type="button" value="Add Faculty" onClick={()=>{
        fetch(url,{
        method:"POST",
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
export default FacAdd;
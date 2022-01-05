import react, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Login(){

   const [loginSelected, setLoginButtion] = useState()
    let navigate = useNavigate();
    function handleLoginClick(event){
        navigate(`/`);
    }

    return(
        <div>
            <Button variant="contained" onClick={handleLoginClick}>Login</Button>
        </div>
    )
}
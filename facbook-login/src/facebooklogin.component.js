import react, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";

function FacebookLoginComponent(){
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        console.log(response);
        //Login Failed
        if (response.status === "unknown"){
            alert("Login Failed");
            setLogin(false);
            return false;
        }
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken){
            setLogin(true);
        }else{
            setLogin(false);
        }
    };

    const logout = () => {
        setLogin(true);
        setData({});
        setPicture("");
    };
    return (
        <div className="container">
            {!login && (
                <FacebookLogin
                appId=""
                autoLoad={false}
                fields="name, email,picture"
                scope="public_profile,email,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
                />
            )}
            {login && (
                <div className="card">
                    <div className="card-body">
                        <img className="rounded" src={picture} alt="Profile"/>
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">Email ID: {data.email}</p>
                        <a href="#" className="btn btn-dnager btn-sm" onClick={logout}>
                            Logout
                        </a>
                    </div>
                </div>
            )}
        </div>

    );
    }
    export default FacebookLoginComponent;

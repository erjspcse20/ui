import React from 'react';
import './AjaxLoader.css';
const redirectToHomePage = () =>{
    window.location.href = "http://" + window.location.hostname;
}
export default class Footer extends React.Component{
    render(){
        return(
            <div className="wrap">
                <div className="top-bar"></div>
                <div className="welcome-container">
                    <div className="frowny-face">:(</div>
                    <h1>
                        404: Page Not Found
                    </h1>
                    <h4>
                        The page you're looking for isn't here.<br /><br />
                        <a href="" onclick={redirectToHomePage}>Home page</a>
                    </h4>
                </div>
            </div>
        )
    }
}
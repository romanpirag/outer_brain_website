import React from "react";
import "./TwitchAuth.css";

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        // Optionally provide visual feedback to the user
        // alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard:", error);
        // Handle errors
      });
}

function TwitchAuth(){
    const currentUrl = window.location.href;

    const regex = /#access_token=(.+)/;
    const match = currentUrl.match(regex);
    const authCode = match ? match[1] : null;
    const ampersandIndex1 = authCode ? authCode.indexOf('&') : -1;
    const formattedAuthCode = ampersandIndex1 !== -1 ? authCode.substring(0, ampersandIndex1) : null;
    
    const regex2 = /\?error=access_denied&error_description=(.+)/;
    const match2 = currentUrl.match(regex2);
    const failCode = match2 ? match2[1] : null;
    const formattedfailCode = failCode ? failCode.replace(/\+/g, ' ') : null;
    
    const regex3 = /\?error=(.+)/;
    const match3 = currentUrl.match(regex3);
    const errorCode = match3 ? match3[1] : null;
    const ampersandIndex = errorCode ? errorCode.indexOf('&') : -1; 
    const errorType = ampersandIndex !== -1 ? errorCode.substring(0, ampersandIndex) : null;

    if(currentUrl.includes("#access_token=")) {
        return (
            <section>
            <div>
                <h1>Your Authentication Succeeded!</h1>
                <p>
                    <span className="bold">Your Twitch Access Token:</span> 
                    <span style={{ display: 'block' }}>{formattedAuthCode}</span>
                    <button onClick={() => copyToClipboard(formattedAuthCode)}>Copy</button>
                </p>
            </div>
            <div>
                <p class= "color-warning">
                <span style={{ display: 'block' }}>Outer Brain Studios does not store this token.{' '}</span>  
                <span style={{ display: 'block' }}>Manage this and other twitch integrations at </span> 
                <span style={{ display: 'block' }}><a class="color-warning" href="https://www.twitch.tv/settings/connections" target="_blank" rel="noreferrer">https://www.twitch.tv/settings/connections</a></span>
                </p>
            </div>
            </section>
            
        );  
    }
        else{
            return(
                <section>
                <div>
                    <h1>Your Authentication Failed</h1>
                    <p> 
                        <span className="bold">Error Code:</span> 
                        <span style={{ display: 'block' }}>{errorType}</span>
                    </p>
                    <p>  
                        <span className="bold">Error Description:</span> 
                        <span style={{ display: 'block' }}>{formattedfailCode}</span>
                    </p>
                </div>
                </section>
            );
        }
}

export default TwitchAuth;
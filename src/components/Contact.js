import React from 'react';
import './Chat-app.css';


function Contact (props) {
    return(

        <div class="Contact">
            <img
            src= {props.image} 
            
            alt={props.name} class="avatar" />

            <div>

                <h4 class="name">{props.name}</h4>
                <h6 class="status-text">{props.email}</h6>

                <div class="status">

                <div class={props.status ? 'status-online' : 'status-offline'}></div>
                <div class="status-text">{props.status ? "Online" : "Offline"} </div>
                </div>

            </div>
        </div>

    );
};

export default Contact; 
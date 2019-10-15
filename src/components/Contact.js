import React from 'react';
import './Chat-app.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            online : false,
        }

    };


    render () {
        return(

        <div className="Contact">
                <img
                src= {this.props.image} 
            
                alt={this.props.name} className="avatar" />

                <div>

                    <h4 className="name">{this.props.name}</h4>

                    <div className="status" 
                        onClick ={event => {
                        const newOnline = !this.state.online;
                        this.setState ({online : newOnline});
                    }}>

                    <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">{this.state.online ? "Online" : "Offline"} </div>
                </div>

            </div>
        </div>

        );
    };
};

export default Contact; 
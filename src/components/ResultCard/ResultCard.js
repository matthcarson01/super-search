import React, { Component } from 'react';
import './ResultCard.css';

export default class ResultCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgURL: this.props.char.image.medium_url,
            charName: this.props.char.name,
            charDesc: this.props.char.deck
        }

    }
    componentWillMount(){
        if(!this.state.imgURL){
            this.setState({ imgURL:`https://avatars2.githubusercontent.com/u/1631803?s=88&v=4`})
        }
    }
    render(){
        return (<div className="card">
            <div className="wrapper">
                <img className="img-fluid" src={this.state.imgURL} alt="Character" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{this.state.charName}</h4>
                <p className="card-text">{this.state.charDesc}</p>
            </div>
        </div>

        );
    }
}
import React, { Component } from 'react';
// import axios from 'axios';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit} className="navbar-form" role="search">
                <input onChange={this.props.onChange} ref="search" type="text" name="search_text" placeholder="Super Hero Name" />
                <button className="btn btn-default" type="submit">Search</button>
            </form>
        );
    }
}
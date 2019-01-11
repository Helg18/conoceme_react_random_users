import React, {Component} from 'react';
import {results} from '../../user';
import './Body.css';

class Body extends Component {
    componentWillMount() {
        this.setState({results});
    }

    ucfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    getMaleFemale = (gender) => {
        if (gender === 'female') {
            return <i className="fa fa-1x fa-venus"/>
        }
        return <i className="fa fa-1x fa-mars"/>

    };

    getFNac = (string) => {
        const date = new Date(string['date']);
        return date.toDateString();
    };

    getAddress = (address) => {
        return address['street'] + ', ' + this.ucfirst(address['city']) + ', ' + this.ucfirst(address['state']);
    };

    getNewPerson = () => {
        console.log('request new person');
    };

    render() {
        const results = this.state.results;
        const name = this.ucfirst(results[0]['name']['title']) + " " + this.ucfirst(results[0]['name']['first']) + " " + this.ucfirst(results[0]['name']['last']);
        const genderInfo = this.ucfirst(results[0]['gender']);
        const gender = this.getMaleFemale(results[0]['gender']);
        const email = results[0]['email'];
        const fNac = this.getFNac(results[0]['dob']);
        const address = this.getAddress(results[0]['location']);
        const phone = results[0]['cell'];
        return (
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={results[0]['picture']['large']} alt={name} width="100%"/>
                                </div>
                                <div className="col-md-8">
                                    <span>Hey! My name is: </span>
                                    <h3>{name}</h3>
                                    <div className="row ml-1">
                                        <table className="table table-hover table-border">
                                            <tbody className="info">
                                            {/* Email */}
                                            <tr>
                                                <td className="ic-fa"><i className="fa fa-1x fa-at"/></td>
                                                <td>
                                                    <span className="info">{email}</span>
                                                </td>
                                            </tr>

                                            {/* Genero */}
                                            <tr>
                                                <td width="10px" className="ic-fa">{gender}</td>
                                                <td>
                                                    <span className="info">{genderInfo}</span>
                                                </td>
                                            </tr>

                                            {/* F. de nacimiento */}
                                            <tr>
                                                <td width="10px" className="ic-fa"><i
                                                    className="fa fa-1x fa-birthday-cake"/></td>
                                                <td>
                                                    <span className="info">{fNac}</span>
                                                </td>
                                            </tr>

                                            {/* Direccion */}
                                            <tr>
                                                <td width="10px" className="ic-fa"><i
                                                    className="fas fa-map-marked-alt"/></td>
                                                <td>
                                                    <span className="info">{address}</span>
                                                </td>
                                            </tr>

                                            {/* Telefono */}
                                            <tr>
                                                <td width="10px" className="ic-fa"><i className="fas fa-phone"/></td>
                                                <td>
                                                    <span className="info">+1{phone}</span>
                                                </td>
                                            </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 blocks-btn">
                                    <button className="btn btn-lg btn-danger mr-5" onClick={this.getNewPerson}>
                                        Next
                                    </button>
                                    <button className="btn btn-lg btn-success ml-5" onClick={this.getNewPerson}>
                                        Match
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
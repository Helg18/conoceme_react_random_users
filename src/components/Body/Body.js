import React, {Component} from 'react';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        body
                    </div>
                    <div className="card-footer">
                        footer
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
import React, {Component} from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="envoltorio">
            <div className="">
                <Header/>

                <div className="container">
                    <div className="row">
                        <Body/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
  }
}

export default App;

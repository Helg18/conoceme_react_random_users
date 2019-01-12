import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <span>Sitio de prueba desarrollado con React, usando <a href="https://randomuser.me/" target="_blank"
                                                                        rel="noopener noreferrer">RandomUser.me</a></span><br/>
                <span>Desarrollado por <a href="mailto:helg18@gmail.com" target="_blank"
                                          rel="noopener noreferrer">Ing. Henry Leon</a></span>
            </footer>
        );
    }
}

export default Footer;
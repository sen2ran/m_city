import React from 'react';

import '../Resources/css/app.css'
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';


const Layout = (props) => {
    return(
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;

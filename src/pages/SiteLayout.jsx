import {Outlet} from 'react-router-dom'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function SiteLayout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
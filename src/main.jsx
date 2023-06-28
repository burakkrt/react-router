import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages
import Header from './pages/Header.jsx'
import Welcome from './pages/Welcome.jsx'
import Footer from './pages/Footer.jsx'
import Public404 from './pages/Public404.jsx'
import BlogLayout from "./pages/Blog/index.jsx"
import Blogs from './pages/Blog/Blogs.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/blog" element={<BlogLayout/>}>
                <Route index={true} element={<Blogs/>}/>
            </Route>
            <Route path="*" element={<Public404/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>,
)
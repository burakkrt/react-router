import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Font Awesome Icons Import for All Project
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faDownload, faHippo, faArrowRight, faUser} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDownload, faHippo, faArrowRight, faUser)

// Pages
import Header from './pages/Header.jsx'
import Welcome from './pages/Welcome.jsx'
import Footer from './pages/Footer.jsx'
import Public404 from './pages/Public404.jsx'
import BlogLayout from "./pages/Blog/index.jsx"
import Blogs from './pages/Blog/Blogs.jsx'
import ContextProvider from "./ContextAPI/ContextProvider.jsx"
import Contact from "./pages/Contact.jsx"
import PostDetails from "./pages/Blog/PostDetails.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/blog" element={<BlogLayout/>}>
                    <Route index={true} element={<Blogs/>}/>
                    <Route path="post-details/post/:postId" element={<PostDetails/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Public404/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </ContextProvider>
);
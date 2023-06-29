import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContextProvider from "./contextapi/ContextProvider.jsx";

// Font Awesome Icons Import for All Project
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faDownload,
    faHippo,
    faArrowRight,
    faUser,
    faClock,
    faArrowUp,
    faFeather,
    faBlog,
    faHouse,
    faTriangleExclamation,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDownload, faHippo, faArrowRight, faUser, faClock, faArrowUp, faFeather, faBlog, faHouse, faTriangleExclamation, faRightFromBracket)

// Pages
import Welcome from './pages/Welcome.jsx'
import Public404 from './pages/Public404.jsx'
import BlogLayout from "./pages/blog/index.jsx"
import Blogs from './pages/blog/Blogs.jsx'
import PostDetails from "./pages/blog/PostDetails.jsx"
import SiteLayout from "./pages/SiteLayout.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider>
            <Routes>
                <Route path="/" element={<SiteLayout/>}>
                    <Route index={true} element={<Welcome/>}/>
                    <Route path="blog" element={<BlogLayout/>}>
                        <Route index={true} element={<Blogs/>}/>
                        <Route path="post-details/post/:postId" element={<PostDetails/>}/>
                    </Route>
                    <Route path="create-post" element={<PrivateRoute><CreatePost/></PrivateRoute>}/>
                    <Route path="*" element={<Public404/>}/>
                </Route>
                <Route path="auth/login" element={<Login/>}/>
            </Routes>
        </ContextProvider>
    </BrowserRouter>
);
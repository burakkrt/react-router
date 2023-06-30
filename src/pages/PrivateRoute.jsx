import {Auth} from '../contextapi/ContextProvider.jsx'
import {Navigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({children}) {

    const {login} = Auth();

    if (!login) {
        return <Navigate to="/auth/login" state={{return_url: '/blog'}} replace={true}/>
    } else return children;
}
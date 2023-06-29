import {Auth} from '../contextapi/ContextProvider.jsx'
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children}) {

    const {login} = Auth();

    if (!login) {
        return <Navigate to="/auth/login" state={{return_url: '/blog'}}/>
    } else return children;
}
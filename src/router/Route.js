import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function(props) {
    const { requireAuth, ...restProps } = props;
    const [authUser, setAuthUser] = useAuth();

    if(requireAuth) {
        return authUser ? <Route  {...restProps} /> : <Redirect to="/register" />
    }

    return <Route  {...restProps} />
}
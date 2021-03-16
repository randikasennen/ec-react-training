import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import RegisterUserPage from './pages/RegisterUserPage';

export default function App() {
    return (
        <BrowserRouter>
            <div><Link to="/register">Register User</Link></div>

            <Switch>
                <Route path="/register" component={RegisterUserPage} />
            </Switch>
        </BrowserRouter>
    )
}
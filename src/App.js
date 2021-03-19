import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserPage from './pages/UserPage';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={RegisterUserPage} />
                <Route path="/users/:id" component={UserPage} />
            </Switch>
        </BrowserRouter>
    )
}
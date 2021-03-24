import { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import Route from './router/Route';
import AuthContextProvider from './contexts/AuthContext';
import i18n from './locals/i18n';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import { loadAuthUser } from './api/auth.js';

export default function App() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const authUser = loadAuthUser();
        setAuthUser(authUser);
    }, []);

    if(authUser)
        return (
            <I18nextProvider i18n={i18n}>
                <AuthContextProvider value={[authUser, setAuthUser]}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/signin" component={SigninPage} />
                            <Route path="/register" component={RegisterUserPage} />
                            <Route exact path="/users" component={UsersPage} requireAuth />
                            <Route path="/users/:id" component={UserPage} requireAuth />
                        </Switch>
                    </BrowserRouter>
                </AuthContextProvider>
            </I18nextProvider>
        )
    

    return <h1>Loading...</h1>
}
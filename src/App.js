import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import AuthContextProvider from './contexts/AuthContext';
import i18n from './locals/i18n';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import RegisterUserPage from './pages/RegisterUserPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';

export default function App() {
    const [authUser, setAuthUser] = useState('Sennen');

    return (
        <I18nextProvider i18n={i18n}>
            <AuthContextProvider value={[authUser, setAuthUser]}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin" component={SigninPage} />
                        <Route path="/register" component={RegisterUserPage} />
                        <Route path="/users" component={UsersPage} />
                        <Route path="/users/:id" component={UserPage} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </I18nextProvider>
    )
}
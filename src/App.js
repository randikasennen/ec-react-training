import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import AuthContextProvider from './contexts/AuthContext';
import i18n from './locals/i18n';
import HomePage from './pages/HomePage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserPage from './pages/UserPage';

export default function App() {
    const [authUser, setAuthUser] = useState('Sennen');

    return (
        <I18nextProvider i18n={i18n}>
            <AuthContextProvider value={[authUser, setAuthUser]}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/register" component={RegisterUserPage} />
                        <Route path="/users/:id" component={UserPage} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </I18nextProvider>
    )
}
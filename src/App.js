import { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterUserPage from './pages/RegisterUserPage';
import UserPage from './pages/UserPage';
import LanguageContext from './contexts/LanguageContext.js';

export default function App() {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/register" component={RegisterUserPage} />
                    <Route path="/users/:id" component={UserPage} />
                </Switch>
            </BrowserRouter>
        </LanguageContext.Provider>
    )
}
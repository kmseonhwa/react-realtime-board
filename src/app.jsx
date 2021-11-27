import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
    return (
        <div className={styles.appContainer}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className={styles.loginComponent}>
                                    <Login authService={authService} />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/maker"
                        element={
                            <>
                                <Header authService={authService} />
                                <Maker authService={authService} />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

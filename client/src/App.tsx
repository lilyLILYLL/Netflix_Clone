import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, HomePage, SignUpPage } from "./pages";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUpPage />}
                    />
                    <Route
                        path="/login"
                        element={<SignInPage />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

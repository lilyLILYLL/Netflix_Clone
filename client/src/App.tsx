import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { SignInPage, HomePage, SignUpPage, BrowsePage } from "./pages";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Header } from "./components";

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
                    <Route
                        path="/"
                        element={<LayOut />}
                    >
                        <Route
                            path="/genre/83"
                            element={<SignInPage />}
                        />
                        <Route
                            path="/browse"
                            element={<BrowsePage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

function LayOut() {
    return (
        <div className="flex justify-center ">
            <header className="w-[95%] py-6  fixed px-4 z-100 bg-black">
                <Header />
            </header>

            <main className="w-[95%] h-[10000px]  flex justify-center scroll-x-hidden bg-black mt-[70px]">
                <Outlet />
            </main>
        </div>
    );
}

export default App;

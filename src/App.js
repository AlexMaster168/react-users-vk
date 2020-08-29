import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import Navbar from "./components/Navbar";
import './pages/About/About.css'
import {About} from "./pages/About/About";
import {Create} from "./pages/Create/Create";
import {rootReducer} from "./redux/reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";


function App() {

    const store = createStore(rootReducer, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4 my-5">
                    <Switch>
                        <Route path='/' exact render={() => {
                            return <Main/>
                        }}/>
                        <Route path='/create' exact render={() => {
                            return <Create/>
                        }}/>
                        <Route path='/about' exact render={() => {
                            return <About/>
                        }}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}


export default App;

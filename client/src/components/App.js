import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
    return (
        <div className="component ui">
            <BrowserRouter>
                <Header />
                <Route path="/" exact components={StreamList}></Route>
                <Route path="/streams/new" exact components={StreamCreate}></Route>
                <Route path="/streams/edit" exact components={StreamEdit}></Route>
                <Route path="/streams/delete" exact components={StreamDelete}></Route>
                <Route path="/streams/show" exact components={StreamShow}></Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
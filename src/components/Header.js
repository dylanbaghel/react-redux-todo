import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark mb-5">
                <div className="container">
                    <h1 className="navbar-brand">Todo App</h1>
                </div>
            </nav>
        );
    }
}
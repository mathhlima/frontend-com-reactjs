import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <> 
            <Header title="home page" >
                <ul>
                    <li>home page</li>
                    <li>projects</li>
                </ul>
            </Header>
            <Header title="projects" >
                <ul>
                    <li>home page</li>
                    <li>projects</li>
                    <li>login</li>
                </ul>
            </Header>
        </>
    )
}

export default App;
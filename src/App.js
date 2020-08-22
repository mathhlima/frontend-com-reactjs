import React, { useState } from 'react';
import './App.css';
import backgroundImg from  './assets/background.jpg';
import Header from './components/Header';

function App() {
    
    const [projects, setProjects] = useState(['Desenvolvimento de web', 'frontend web']);

    function handleAddProject() {
        //projects.push(`novo projeto ${Date.now()}`);

        setProjects([...projects, `novo projeto ${Date.now()}`]);

        console.log(projects);
    }
    
    return (
        <> 
            <Header title="home page" />

            <img width={300} src={backgroundImg} alt=""/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;
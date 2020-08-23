import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';
import Header from './components/Header';

function App() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        //setProjects([...projects, `novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `novo projeto ${Date.now()}`,
	        owner: "matheus"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }
    
    return (
        <> 
            <Header title="home page" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;
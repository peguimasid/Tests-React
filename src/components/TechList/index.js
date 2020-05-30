import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddSubmit() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddSubmit}>
      <ul data-testid="tech-list">
        {techs.map(tech => (<li key={tech}>{tech}</li>))}
      </ul>

      <label htmlFor="tech">Tech</label>

      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>

      <button type="submit">Adicionar</button>
    </form>
  );
}


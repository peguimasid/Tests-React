import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  function handleAddSubmit() {
    setTechs([...techs, 'Node.js']);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={handleAddSubmit}>Adicionar</button>
    </div>
  );
}


import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '../../src/components/TechList';

describe('TechList component', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    localStorage.clear();
  })
  
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  })

  it('should store techs in localstorage', () => {
    let { getByText, getByTestId, getByLabelText, debug } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    
    cleanup();

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']))
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  })
})
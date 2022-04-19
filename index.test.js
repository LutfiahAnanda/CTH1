import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index'  
import { Provider } from 'react-redux';     Provider' is defined but never used.

it ('Render all components', () => {
    Render (<Home />);

    const searchInput = screen.getByRole ('textbox');
    const searchButton = screen.getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
}); 
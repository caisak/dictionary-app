import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { useState } from 'react';
import { vi } from 'vitest';

describe('SearchBar Component', () => {
  it('should display an error message when form is submitted with empty input', () => {
    render(<SearchBar word="" setWord={() => {}} setDefinition={() => {}} />);
    
    const submitButton = screen.getByText('Search');
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a word to search!')).toBeInTheDocument();
  });


it('should update the input value when typing', () => {
  const TestComponent = () => {
    const [word, setWord] = useState('');
    return <SearchBar word={word} setWord={setWord} setDefinition={() => {}} />;
  };

  render(<TestComponent />);
  const input = screen.getByPlaceholderText('Type a word here') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'hello' } });
  expect(input.value).toBe('hello');
});

it('should not display an error message when a valid word is submitted', async () => {
  const mockSetWord = vi.fn();
  render(<SearchBar word="hello" setWord={mockSetWord} setDefinition={() => {}} />);
  const submitButton = screen.getByText('Search');
  fireEvent.click(submitButton);
  expect(screen.queryByText('Please enter a word to search!')).not.toBeInTheDocument();
});

it('should display an error message when form is submitted with empty input', () => {
  render(<SearchBar word="" setWord={() => {}} setDefinition={() => {}} />);
  
  const submitButton = screen.getByText('Search');
  fireEvent.click(submitButton);

  expect(screen.getByText('Please enter a word to search!')).toBeInTheDocument();
});
});
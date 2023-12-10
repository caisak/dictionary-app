import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('should display an error message when form is submitted with empty input', () => {
    render(<SearchBar word="" setWord={() => {}} setDefinition={() => {}} />);
    
    const submitButton = screen.getByText('Search');
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a word to search!')).toBeInTheDocument();
  });
});

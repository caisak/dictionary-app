import { render, screen, fireEvent } from '@testing-library/react';
import ReturnedWord from '../ReturnedWord';
import { vi } from 'vitest';

//This tests what is being returned from the API call.
//It tests the word, phonetics, meanings, license, and source URLs.
//It also tests the audio button and that the audio plays.

describe('ReturnedWord Component', () => {
  it('should render word and phonetics', () => {
    const definition = {
      word: 'hello',
      phonetics: [{ text: '/həˈləʊ/', audio: 'audio-url' }],
      meanings: [],
      license: { name: 'CC BY-SA', url: 'license-url' },
      sourceUrls: []
    };
    render(<ReturnedWord definition={definition} />);
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(screen.getByText('/həˈləʊ/')).toBeInTheDocument();
    expect(screen.getByTestId('audio-link')).toBeInTheDocument();
  });

      it('should render meanings with details', () => {
        const definition = {
          word: 'hello',
          phonetics: [],
          meanings: [{
            partOfSpeech: 'noun',
            definitions: [{ definition: 'A greeting', synonyms: ['hi'], antonyms: ['bye'] }],
            synonyms: [],
            antonyms: []
          }],
          license: { name: 'Mock License Name', url: 'mock-license-url' },
          sourceUrls: []
        };
        render(<ReturnedWord definition={definition} />);
        expect(screen.getByText('noun')).toBeInTheDocument();
        expect(screen.getByText('A greeting')).toBeInTheDocument();
        expect(screen.getByText('Synonyms: hi')).toBeInTheDocument();
        expect(screen.getByText('Antonyms: bye')).toBeInTheDocument();
      });

      it('should render license and source URLs', () => {
        const definition = {
          word: 'hello',
          phonetics: [],
          meanings: [],
          license: { name: 'CC BY-SA', url: 'license-url' },
          sourceUrls: ['source-url']
        };
        render(<ReturnedWord definition={definition} />);
        const licenseLink = screen.getByRole('link', { name: /CC BY-SA/i });
        expect(licenseLink).toBeInTheDocument();
        expect(licenseLink).toHaveAttribute('href', 'license-url');
        expect(screen.getByRole('link', { name: /source-url/i })).toHaveAttribute('href', 'source-url');
      });

      it('plays audio when the play button is clicked', () => {
        const mockPlay = vi.fn();
        window.HTMLMediaElement.prototype.play = mockPlay;
    
        const definition = {
          word: 'hello',
          phonetics: [{ text: '/həˈləʊ/', audio: 'audio-url' }],
          meanings: [],
          license: { name: 'CC BY-SA', url: 'license-url' },
          sourceUrls: ['source-url']
        };        
    
        render(<ReturnedWord definition={definition} />);
    
        const playButton = screen.getByTestId('audio-link');
        fireEvent.click(playButton);
    
        expect(mockPlay).toHaveBeenCalled();
      });
})

  
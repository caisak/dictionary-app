import { DictionaryEntry } from "./DictionaryEntry";
import styled from "styled-components";

type ReturnedWordProps = {
  definition: DictionaryEntry | null;
};

function ReturnedWord({ definition }: ReturnedWordProps) {
    return (
      <Container>
        <TextContainer>
          {definition ? (
            <div>
              <h2>{definition.word}</h2>
              {/* Render phonetics if audio is present */}
              {definition.phonetics.map((phonetic, index) =>
                phonetic.audio ? (
                  <div key={index}>
                    {phonetic.text && <p>Phonetic Text: {phonetic.text}</p>}
                    <p>
                      Audio:{" "}
                      <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
                        Listen
                      </a>
                    </p>
                  </div>
                ) : null
              )}
              {/* Render meanings, definitions, synonyms, antonyms, and examples if present */}
              {definition.meanings.map((meaning, index) => (
                <div key={index}>
                  <BlueText>{meaning.partOfSpeech}</BlueText>
                  {meaning.definitions.map((def, defIndex) => (
                    <div key={defIndex}>
                        <StyledList>
                        <li>{def.definition}</li>
                        </StyledList>
                      
                      {def.synonyms.length > 0 && <p>Synonyms: {def.synonyms.join(', ')}</p>}
                      {def.antonyms.length > 0 && <p>Antonyms: {def.antonyms.join(', ')}</p>}
                    </div>
                  ))}
                  {meaning.synonyms.length > 0 && <p>Synonyms: {meaning.synonyms.join(', ')}</p>}
                  {meaning.antonyms.length > 0 && <p>Antonyms: {meaning.antonyms.join(', ')}</p>}
                </div>
              ))}
              {/* Render license if present */}
              {definition.license && (
                <Text>License: <a href={definition.license.url} target="_blank" rel="noopener noreferrer">{definition.license.name}</a></Text>
              )}
              {/* Render source URLs if present */}
              {definition.sourceUrls.map((url, index) => (
                <StyledLink key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</StyledLink>
              ))}
            </div>
          ) : (
            <p>No word found</p>
          )}
        </TextContainer>
      </Container>
    );
  }
  
export default ReturnedWord;

const Container = styled.div`
  border: 1px solid var(--color-tech-blue);
  border-radius: 15px;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin: 0 auto;
  margin-bottom: 1rem;
  /* text-align: left; */

  @media(max-width: 768px) {
    max-width: 20rem;
  }

  @media(min-width: 769px) {
    max-width: 40rem;
  }
`;

const TextContainer = styled.div`
margin: 1rem;
`

const BlueText = styled.p`
color: var(--color-tech-blue);
margin-top: 2rem;
font-weight: 600;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Text = styled.p`
margin-top: 2rem;
font-size: 12px;
`

const StyledLink = styled.a`
font-size: 12px;
`
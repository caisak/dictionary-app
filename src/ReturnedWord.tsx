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
            {definition.phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>Phonetic Text: {phonetic.text}</p>
                <p>
                  Audio:{" "}
                  <a
                    href={phonetic.audio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen
                  </a>
                </p>
              </div>
            ))}
            {definition.meanings.map((meaning, index) => (
              <div key={index}>
                <p>Part of Speech: {meaning.partOfSpeech}</p>
                {meaning.definitions.map((def, defIndex) => (
                  <div key={defIndex}>
                    <p>Definition: {def.definition}</p>
                    <p>Example: {def.example}</p>
                  </div>
                ))}
              </div>
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;

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
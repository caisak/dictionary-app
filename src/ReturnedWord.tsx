import { DictionaryEntry } from "./DictionaryEntry";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

type ReturnedWordProps = {
  definition: DictionaryEntry | null;
};

function ReturnedWord({ definition }: ReturnedWordProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = (audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };
  return (
    <>
      <Container>
        <TextContainer>
          {definition ? (
            <div>
              <WordAndPhoneticContainer>
                <h2>{definition.word}</h2>
                {definition.phonetics.map((phonetic, index) => (
                  <PhoneticContainer key={index}>
                    {phonetic.text && (
                      <PhoneticText>{phonetic.text}</PhoneticText>
                    )}
                    {phonetic.audio && (
                      <>
                      <audio ref={audioRef} src={phonetic.audio} style={{ display: 'none' }}></audio>
                      <AudioButton data-testid="audio-link" onClick={() => playAudio(phonetic.audio)}>
                        <FontAwesomeIcon icon={faPlay} />
                      </AudioButton>
                    </>
                    )}
                  </PhoneticContainer>
                ))}
              </WordAndPhoneticContainer>
              {definition.meanings.map((meaning, index) => (
                <div key={index}>
                  <BlueText>{meaning.partOfSpeech}</BlueText>
                  {meaning.definitions.map((def, defIndex) => (
                    <div key={defIndex}>
                      <StyledList>
                        <li>{def.definition}</li>
                      </StyledList>
                      {def.synonyms.length > 0 && (
                        <p>Synonyms: {def.synonyms.join(", ")}</p>
                      )}
                      {def.antonyms.length > 0 && (
                        <p>Antonyms: {def.antonyms.join(", ")}</p>
                      )}
                    </div>
                  ))}
                  {meaning.synonyms.length > 0 && (
                    <p>Synonyms: {meaning.synonyms.join(", ")}</p>
                  )}
                  {meaning.antonyms.length > 0 && (
                    <p>Antonyms: {meaning.antonyms.join(", ")}</p>
                  )}
                </div>
              ))}
              {definition.license && (
                <Text>
                  License:{" "}
                  <StyledLink
                    href={definition.license.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {definition.license.name}
                  </StyledLink>
                </Text>
              )}
              {definition.sourceUrls.map((url, index) => (
                <StyledLink
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url}
                </StyledLink>
              ))}
            </div>
          ) : (
            <p>No word found</p>
          )}
        </TextContainer>
      </Container>
    </>
  );
}

export default ReturnedWord;

const Container = styled.div`
  border: 1px solid var(--color-tech-blue);
  border-radius: 15px;
  max-width: 40rem;
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 20rem;
  }

  @media (min-width: 769px) {
    max-width: 40rem;
  }
`;

const TextContainer = styled.div`
  margin: 1rem;
`;

const BlueText = styled.p`
  color: var(--color-tech-blue);
  margin-top: 2rem;
  font-weight: 600;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Text = styled.p`
  margin-top: 2rem;
  font-size: 12px;
`;

const StyledLink = styled.a`
  font-size: 12px;
`;

const WordAndPhoneticContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const PhoneticContainer = styled.span`
  margin-left: 10px;
`;

const PhoneticText = styled.span`
  font-size: 14px;
`;

const AudioButton = styled.button`
  margin-left: 1rem;
  color: var(--color-tech-blue);
  border: none;
  box-shadow: none;
  outline: none;
  background-color: transparent;
`;

import { DictionaryEntry } from "./DictionaryEntry";

type ReturnedWordProps = {
    definition: DictionaryEntry | null;
};

function ReturnedWord({ definition }: ReturnedWordProps) {
    return (
      <div>
        {definition ? (
          <div>
            <h2>{definition.word}</h2>
            {definition.phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>Phonetic Text: {phonetic.text}</p>
                <p>Audio: <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">Listen</a></p>
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
      </div>
    );
  }
  
  

export default ReturnedWord;

//This is the definition of the DictionaryEntry type.
//It is based on the data returned from the API call.
//It is used in the SearchBar and ReturnedWord components.
//It is also used in the tests for those components.
export type DictionaryEntry = {
  word: string;
  phonetics: Array<{
    text?: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }>;
    synonyms: string[];
    antonyms: string[];
  }>;
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
};

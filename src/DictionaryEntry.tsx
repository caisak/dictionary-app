export type DictionaryEntry = {
    word: string;
    phonetics: Array<{
      audio: string;
      text?: string;
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
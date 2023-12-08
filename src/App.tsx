import SearchBar from "./SearchBar";
import ReturnedWord from "./ReturnedWord";
import { useState } from "react";
import { DictionaryEntry } from "./DictionaryEntry";

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState<DictionaryEntry | null>(null);

  return (
    <div>
      <SearchBar setWord={setWord} word={word} setDefinition={setDefinition} />
      <ReturnedWord definition={definition} />
    </div>
  );
}
export default App;

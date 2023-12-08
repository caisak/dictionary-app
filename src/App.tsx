import SearchBar from "./SearchBar";
import ReturnedWord from "./ReturnedWord";
import { useState } from "react";
import { DictionaryEntry } from "./DictionaryEntry";
import Header from "./Header";

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState<DictionaryEntry | null>(null);

  return (
    <div>
      <Header />
      <SearchBar setWord={setWord} word={word} setDefinition={setDefinition} />
      <ReturnedWord definition={definition} />
    </div>
  );
}
export default App;

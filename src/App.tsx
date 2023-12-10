import SearchBar from "./SearchBar";
import ReturnedWord from "./ReturnedWord";
import { useState } from "react";
import { DictionaryEntry } from "./DictionaryEntry";
import Header from "./Header";

//This is the main App component.
//It renders the Header, SearchBar, and ReturnedWord components.
//It also sets the state for the word and definition.
//It passes the state and setState functions to the SearchBar and ReturnedWord components.
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

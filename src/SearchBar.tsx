import styled from "styled-components";
import { DictionaryEntry } from "./DictionaryEntry";

type SearchBarProps = {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  setDefinition: React.Dispatch<React.SetStateAction<DictionaryEntry | null>>;
};

function SearchBar({ setWord, word, setDefinition }: SearchBarProps) {
  async function searchWord(word: string) {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const data = await response.json();
      setDefinition(data[0]);
    } catch (error) {
      console.error("Error:", error);
      setDefinition(null);
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await searchWord(word);
    setWord('');
  };
  

  return (
    <Container>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Type a word here"
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  border-radius: 15px;
  height: 3rem;
  width: 30rem;
  margin: 1rem;
  border: 1px solid #2776ea;
  box-shadow: none;
  outline: none;
  text-align: center;

  @media (max-width: 768px) {
    width: 15rem;
  }

  @media (min-width: 769px) {
    width: 20rem;
  }
`;

const StyledButton = styled.button`
  border-radius: 15px;
  height: 3rem;
  width: 8rem;
  border: none;
  box-shadow: none;
  outline: none;
  background-color: #2776ea;
  color: white;

  &:hover {
    background-color: #3e8bff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
  }
`;

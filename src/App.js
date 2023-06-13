import Concepts from "./components/concepts/Concepts";
import keyConceptsImage from "./assets/images/key-concepts.png";

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <Concepts />
    </div>
  );
}

export default App;

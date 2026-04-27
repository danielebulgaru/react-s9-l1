import Button from "./components/Button";
import Img from "./components/Img";

function App() {
  return (
    <div>
      <h1>La mia app</h1>

      <Button text="Cliccami!" />

      <Img
        src="https://www.progettostoriadellarte.it/wp-content/uploads/2021/06/2.jpg"
        alt="Foto Pesaggio"
      />
    </div>
  );
}

export default App

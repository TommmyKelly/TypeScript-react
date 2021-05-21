import "./App.css";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <div className='App'>
      <h1>
        Search For a Package
        <RepositoriesList />
      </h1>
    </div>
  );
}

export default App;

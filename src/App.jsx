import ListaPokemons from './components/ListaPokemons';
import { Route, Routes } from 'react-router-dom';
import ShowPokemon from './components/ShowPokemon';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListaPokemons></ListaPokemons>}></Route>
        <Route
          path='/pokemon/:id'
          element={<ShowPokemon></ShowPokemon>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

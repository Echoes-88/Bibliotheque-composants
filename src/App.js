
import './App.css';
import Field from './components/Field'

function App() {
  return (
    <div className="App">
        <h1>Bibliotheque composants react</h1>
        <Field type="text" name="test" className="bg-grey-100 text-black text-s p-2"/>
    </div>
  );
}

export default App;


import './App.css';
import Tarif from './components/tarif';
import themeBlue from './components/themeBlue.module.css';
import themeRed from './components/themeRed.module.css';
import themeGreen from './components/themeGreen.module.css';
import themeBlack from './components/themeBlack.module.css';


function App() {
  return (
    <div className="App">
      <Tarif theme={themeBlue} name="300" price="300" speed="10" />
      <Tarif theme={themeGreen} name="450" price="450" speed="50" />
      <Tarif theme={themeRed} name="550" price="550" speed="100" />
      <Tarif theme={themeBlack} name="1000" price="1000" speed="200" />
    </div>
  );
}

export default App;

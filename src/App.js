import './App.css';
import Mainpage from './components/mainpage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="mainpage" >
      <Mainpage />
    </div>  
    </div>
  );
}

export default App;

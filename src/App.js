import logo from './logo.svg';
import './App.css';

const tg = window.Telegram.WebApp

function App(){

  useEffect( () => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

}


function App() {
  return (
    <div className="App">
      work
      <button>закрыть</button>
    </div>
  );
}

export default App;

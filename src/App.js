import './Styles/App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className='body'>
     <Header title ={["Green Sense"]}/>
     <Dashboard />
    </div>
  );
}

export default App;

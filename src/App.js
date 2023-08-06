import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import FormData from './components/FormData';
import { BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div>

    <Router>
    <Nav/>
        <Routes>
        <Route exact path="/form"  element={<Form key = "form"/>}/>
        <Route exact path="/formdata"  element={<FormData key = "formdata"/>}/>
        </Routes>
      </Router>
      

    </div>
    
    
    </>
  );
}

export default App;

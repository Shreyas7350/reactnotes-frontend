
import { BrowserRouter,Route,Switch,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
   <div >
      <Routes>
        <Route exact  path="/" element={<NotesList/>}/>
        <Route   path="*" element={<NotFound/>}/>
      </Routes>
    </div> 
    </div>
    </BrowserRouter>
   
  );
}

export default App;

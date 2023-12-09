import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './components/ViewUser';
import Search from './components/Search';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<ViewUser/>}/>
        <Route path='search' element={<Search/>}/>
        


      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

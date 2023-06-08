import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Sidebar from './components/Sidebar';
// import '../node_modules/bootstrap/dist/css/bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path = '/' element = {<Dashboard/>}/>
      {/* <Route path = '/dashboard' element = {<Dashboard/>}/> */}
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/analytics' element = {<Analytics/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
    
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route} from 'react-router-dom'

import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Practice from './views/Practice';
import NotFound from './views/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Create/>} path="/create" />
        <Route element={<Edit/>} path="/edit/:id" />
        <Route element={<Practice/>} path="/practice"/>
        <Route element={<NotFound/>} status={404} path="*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

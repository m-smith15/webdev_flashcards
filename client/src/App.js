import './App.css';
import { Routes, Route} from 'react-router-dom'

import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Practice from './views/Practice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Create/>} path="/create" />
        <Route element={<Edit/>} path="/edit/:id" />
        <Route element={<Practice/>} path="/practice"/>
        </Routes>
    </div>
  );
}

export default App;

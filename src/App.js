import Registration from './Page';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/registration" element={<Registration/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

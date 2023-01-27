import logo from './logo.svg';
import './App.css';
import Root from './Components/Root';
import AppRoot from './Components/AppRoot';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="users" element={<AppRoot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

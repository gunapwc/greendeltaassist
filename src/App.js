<<<<<<< Updated upstream
import './App.scss';
import SliderComponent from './component/slider/SliderComponent';
import Navigate from './NavigateFile/Navigate';

function App() {
  return (
    <>
    <Navigate/>
    </>
=======
import logo from './logo.svg';
import './App.css';
import Root from './Components/Root';
import Partner from './Components/partner';
import AppRoot from './Components/AppRoot';
import Header from './Components/header';
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
    <Header/>
    <div className="header-align"></div>{/* add this with header */}
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="users" element={<AppRoot />} />
        <Route path="partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;

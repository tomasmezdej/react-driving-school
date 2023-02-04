import './assets/styles/main/App.scss';
import MainPage from './pages/MainPage';
import Footer from "./components/Global/Footer/Footer";
import Header from "./components/Global/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
        <MainPage />
      <Footer/>
    </div>
  );
}

export default App;

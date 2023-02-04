import './assets/styles/main/App.scss';
import MainPage from './pages/MainPage';
import Footer from "./components/Global/Footer/Footer";
import Header from "./components/Global/Header/Header";
import ScrollUpButton from './components/Global/ScrollUpButton';

function App() {
  return (
    <div className="App">
      <Header/>
        <MainPage />
        <ScrollUpButton />
      <Footer/>
    </div>
  );
}

export default App;

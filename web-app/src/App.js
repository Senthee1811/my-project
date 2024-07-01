
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
         <Programs/>
         <About/>
      </div>
     
    </div>
  );
}

export default App;

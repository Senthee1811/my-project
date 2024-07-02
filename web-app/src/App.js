
import './App.css';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
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
         <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
         <Title subTitle='TESTIMONIALS' title='What Student Says'/>
         <Testimonials/>
         <Title subTitle='CONTACT US' title='Get In Touch'/>
      </div>
     
    </div>
  );
}

export default App;

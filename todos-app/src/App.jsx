import Header from './components/Header'
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="font-sans bg-gray-900">
      <Header />
      <Hero />
      
      <Features />
      <Footer />
    </div>
  );
}

export default App;
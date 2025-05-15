import Header from './components/Header';
import Hero from './components/Hero';
import AppMockup from './components/AppMockup';
import Features from './components/Features';
import Mission from './components/Mission';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <AppMockup />
        <Features />
        <Mission />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import CtaSection from "./components/CtaSection/CtaSection";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PeopleSection from "./components/PeopleSection/PeopleSection";
import Section from "./components/Section/Section";
import {Bottom} from './components/Footer/Footer'
function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Section />
      <CtaSection />
      <PeopleSection />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;

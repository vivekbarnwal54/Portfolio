import { BrowserRouter } from 'react-router-dom';
import {
  About, Contact, Experience, Feedbacks, Hero,
  Navbar, Tech, Works, StarsCanvas
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* Now these r different sections present */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* we need this to represent 3d stars */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

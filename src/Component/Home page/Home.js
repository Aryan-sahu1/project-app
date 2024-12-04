import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';
import SideSection from '../SideSection/SideSection';
import Service1 from '../../Assets/service1.png';
import Service2 from '../../Assets/service2.png';
import Service3 from '../../Assets/service3.png';
import Service4 from '../../Assets/service4.png';
import MiddleSection from '../MiddleSection/MiddleSection';
import Slider from "../Slider/Slider";
import Footer from '../Footer/Footer';
import './Home.css';
const Home = () => {
  const heading1 =
    "Creativity drives our approach to developing unique and effective solutions. We harness imaginative thinking to deliver innovative strategies and breakthrough results.";
  const heading2 =
    "Superiority reflects our commitment to delivering exceptional standards and outstanding results. We ensure that every solution and service we provide stands out in quality and effectiveness.";
  const heading3 =
    "Coordination underscores our focus on seamless teamwork and effective integration. We work closely with our clients to ensure that every project achieves optimal results through well-orchestrated efforts.";
  const heading4 =
    "Adaptable Partnerships emphasize our commitment to tailoring our services to meet diverse client needs. We adjust our approach to ensure flexibility and responsiveness in every engagement.";
  return (
    <div>
      <Header />
      <Slider />
      <Heading title="WHAT WE DO ?" />
      <div className="container">
        <div className="row">
          {/* Pass props correctly */}
          <SideSection img={Service1} heading={heading1} title="Creativity" />
          <SideSection img={Service2} heading={heading2} title="Superiority" />
          <SideSection img={Service3} heading={heading3} title="Coordination" />
          <SideSection img={Service4} heading={heading4} title="Adaptable Partnerships" />
        </div>
        <div className='text-center'>
         
        <button type="button" class="btn btn-primary"> All Services </button>
        
        </div>

      
      </div>
      <div className="bgwhite1">
        <Heading title="WHY CHOOSE US ?" />
        <MiddleSection />
      </div>
      <Footer />
    </div> 
  );
};

export default Home;
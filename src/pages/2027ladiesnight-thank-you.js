import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SideFooter from '../components/SideFooter';

const LadiesNightThankYouPage = () => (
  <Layout>
    <Helmet title="Booking details received | Brixton Ramblers Lodge" />
    <div id="wrapper">
      <section>
        <header>
          <h1>Thank you</h1>
        </header>
        <div className="content">
          <h2>Your details have been sent</h2>
          <p>The lodge secretary will contact you about the next steps for your booking.</p>
          <ul className="actions">
            <li>
              <a href="/2027ladiesnight/" className="button primary">
                Return to Ladies’ Night
              </a>
            </li>
          </ul>
        </div>
        <SideFooter />
      </section>
      <Footer />
    </div>
  </Layout>
);

export default LadiesNightThankYouPage;

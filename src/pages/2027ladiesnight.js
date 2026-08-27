import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SideFooter from '../components/SideFooter';
import LadiesNightForm from '../components/LadiesNightForm';

import heroImage from '../assets/images/Brixton-Ramblers-Penny-Farthings-Mark-Masons-Hall-London.jpg';

const LadiesNightPage = () => (
  <Layout>
    <Helmet
      title="Ladies’ Night 2027 | Brixton Ramblers Lodge"
      meta={[
        {
          name: 'description',
          content:
            'Brixton Ramblers Lodge Ladies’ Night, Saturday 6 February 2027 at the Civil Service Club in London.',
        },
      ]}
    />
    <div id="wrapper">
      <section className="intro">
        <header>
          <h1>Ladies’ Night 2027</h1>
          <p>Brixton Ramblers Lodge No. 3347</p>
          <ul className="actions">
            <li>
              <a href="#details" className="arrow">
                <span className="label">Event details</span>
              </a>
            </li>
          </ul>
        </header>
        <div className="content">
          <span className="image fill overlay" data-position="center">
            <img src={heroImage} alt="Brixton Ramblers penny farthing riders outside Mark Masons’ Hall" />
          </span>
        </div>
      </section>

      <section id="details">
        <header>
          <h2>Saturday 6 February 2027</h2>
          <p>Drinks reception from 6.00pm</p>
        </header>
        <div className="content">
          <p>
            The Worshipful Master and Brethren of Brixton Ramblers Lodge No. 3347 cordially invite you to join us for a wonderful evening of good food, music and dancing as we celebrate and thank the partners and friends who support our lodge.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-map-marker">Civil Service Club, 13–15 Great Scotland Yard, London</li>
            <li className="icon fa-gbp">£80 per person</li>
            <li className="icon fa-cutlery">Three-course dinner</li>
            <li className="icon fa-music">After-dinner singer</li>
            <li className="icon fa-black-tie">Men: black tie</li>
            <li className="icon fa-female">Ladies: evening dress</li>
            <li className="icon fa-users">Attendance is capped at 70 guests</li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#booking-form" className="button primary large">
                Complete the booking form
              </a>
            </li>
            <li>
              <a
                href="/downloads/brixton-ramblers-ladies-night-2027.pdf"
                className="button large"
                download
              >
                Download the flyer
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="booking-form">
        <header>
          <h2>Booking form</h2>
          <p>Send your details to the lodge secretary</p>
        </header>
        <div className="content">
          <p>
            Complete the form for yourself and any additional guests. The lodge secretary will use these details to follow up about your booking.
          </p>
          <LadiesNightForm />
        </div>
      </section>

      <section>
        <header>
          <h2>Questions?</h2>
        </header>
        <div className="content">
          <p>
            Use the contact form on the main lodge website. Your message will go directly to the lodge secretary.
          </p>
          <ul className="actions">
            <li>
              <a href="/#contact" className="button primary">
                Contact the lodge secretary
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

export default LadiesNightPage;

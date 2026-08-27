import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/Brixton-Ramblers-Penny-Farthings-Mark-Masons-Hall-London.jpg';
import pic2 from '../assets/images/W.Brown-Brixton Ramblers.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
// import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/ugle-meeting.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/ugle-meeting.jpg'),
    title: 'The Grand Temple',
    desc: 'A full meeting.',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/Front_exterior_of_Freemasons_Hall_London.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/Front_exterior_of_Freemasons_Hall_London.jpg'),
    title: 'Freemasons Hall',
    desc: 'Headquarters of the United Grand Lodge of England',
  },
  {
    src: require('../assets/images/gallery/fulls/masonic-apron.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/masonic-apron.jpg'),
    title: 'Masonic regalia',
    desc: 'Different aprons represent rank and region',
  },
  {
    src: require('../assets/images/gallery/fulls/freemasons-hall-inside.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/freemasons-hall-inside.jpg'),
    title: 'Inside Freemasons Hall',
    desc: 'One of the many art deco halls',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/pfmall.jpeg'),
    thumbnail: require('../assets/images/gallery/thumbs/pfmall.jpeg'),
    title: 'Cycling up the Mall',
    desc: 'Our penny farthing riders',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/victoria-memorial-penny-farthing.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/victoria-memorial-penny-farthing.jpg'),
    title: 'Around Buckingham Palace',
    desc: 'Good morning Your Majesty!',
  },
  {
    src: require('../assets/images/gallery/fulls/high-wheelers-masonic.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/high-wheelers-masonic.jpg'),
    title: 'Riding high',
    desc: 'Its a long way down from here',
  },
  {
    src: require('../assets/images/gallery/fulls/st-jamess-palace-penny-farthing.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/st-jamess-palace-penny-farthing.jpg'),
    title: "Passing St James's' Palace",
    desc: 'Next stop, the pub!',
    full: true,
  },
];

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill overlay" data-position="center">
            <img src={heroImage} alt=""/>
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Our history</h2>
        </header>
        <div className="content">
          <p>
            <strong>Brixton Ramblers Lodge #3347</strong> was formed in 1909 by several members of the Brixton Ramblers Cycling Club. A number of these daring gentlemen had made a name for themselves racing penny farthings in the UK and around the world. The lodge held meetings at Freemasons Hall in Covent Garden, and afterwards dined at the Cafe Royal on Regents Street.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
            <span className="caption">Fred Wood, of Leicester, England (acclaimed world cycling champion), and W. Brown, of the Brixton Ramblers, visited New Zealand in late 1887/early 1888 to compete in international races against local riders.</span>
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Freemasonry today</h2>
        </header>
        <div className="content">
          <p>
            <strong>Freemasonry is one</strong> of the world’s oldest social and charitable organisations in the world. Its roots lie in the traditions of the medieval stonemasons who built our cathedrals and castles.

For Freemasons, there are four important values that help define their path through life: Integrity, Friendship, Respect and Charity.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-shield">Integrity: Building good people</li>
            <li className="icon fa-users">Friendship: Building together</li>
            <li className="icon fa-globe">Respect: Building unity</li>
            <li className="icon fa-heart">Charity: Building compassion</li>
          </ul>
          <p>
            In today’s world filled with uncertainty, these principles ring as true as they have at any point in the organisation’s history.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Our lodge</h2>
        </header>
        <div className="content">
          <p>
            <strong>Brixton Ramblers Lodge </strong> currently meets several times a year at Mark Masons Hall, in the comfortable surroundings of St James's, right next door to St James's Palace.
            We have an active social calendar and regularly engage in charitable events. We are currently raising money to fund new 'super ladders' for the London Fire Brigade.
          </p>

          <section>
            <header>
              <h3>Life 'on the square'</h3>
              <p>
                London is a fantasic place to be a Freemason.  Indeed, Freemasonry was founded here in 1717, and there is a large and diverse masonic community with many lodges to visit around the city.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Charity events</h3>
              <p>
                Each year we raise money for several charities through a mix of events and challenges. Some of our memebters still retain a fondness for cycling penny farthings.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="ladies-night">
        <header>
          <h2>Ladies’ Night 2027</h2>
          <p>Saturday 6 February 2027 at the Civil Service Club</p>
        </header>
        <div className="content">
          <p>
            The Worshipful Master and Brethren of Brixton Ramblers Lodge No. 3347 invite you to an evening of good food, music and dancing in the heart of London.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-map-marker">13–15 Great Scotland Yard</li>
            <li className="icon fa-clock-o">Drinks reception from 6.00pm</li>
            <li className="icon fa-gbp">£80 per person</li>
            <li className="icon fa-music">Three-course dinner and after-dinner singer</li>
            <li className="icon fa-users">Attendance is capped at 70 guests</li>
          </ul>
          <ul className="actions">
            <li>
              <a href="/2027ladiesnight/" className="button primary large">
                Event details and booking
              </a>
            </li>
            <li>
              <a href="/downloads/brixton-ramblers-ladies-night-2027.pdf" className="button large" download>
                Download the flyer
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>Further information</h2>
        </header>
        <div className="content">
          <p>
            <strong>To request</strong> further information on Freemasonry please see the website of the United Grand Lodge of England (UGLE).
          </p>
          <p>For those under the age of 35 living or working in London, the social activities of the Connaught Club may also be of interest.</p>
          <ul className="actions">
            <li>
              <a href="https://www.ugle.org.uk/" className="button large">
                Grand Lodge
              </a>
            </li>
            <li>
              <a href="http://www.connaughtclub.org/" className="button large">
                Connaught CLub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;

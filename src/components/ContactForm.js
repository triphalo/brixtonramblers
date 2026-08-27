import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>If you would</strong> like to chat with us with a view to joining Freemasonry, or the Brixton Ramblers Lodge in particular, drop us a message. We're a friendly bunch and always happy to help.
        </p>
        <form
          name="contact"
          method="POST"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="subject" value="Brixton Ramblers website enquiry" />
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" required />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
                required
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

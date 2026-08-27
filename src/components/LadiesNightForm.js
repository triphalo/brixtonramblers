import React, { useState } from 'react';

export default function LadiesNightForm() {
  const [guests, setGuests] = useState([1]);

  const addGuest = () => {
    const nextGuest = Math.max(...guests) + 1;
    setGuests([...guests, nextGuest]);
  };

  const removeGuest = guestId => {
    setGuests(guests.filter(id => id !== guestId));
  };

  return (
    <form
      name="ladies-night-2027"
      method="POST"
      action="/2027ladiesnight-thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ladies-night-2027" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="subject" value="New Brixton Ramblers Ladies’ Night booking" />

      <div className="fields">
        <div className="field half">
          <label htmlFor="first-name">First name</label>
          <input type="text" name="first_name" id="first-name" required />
        </div>
        <div className="field half">
          <label htmlFor="last-name">Last name</label>
          <input type="text" name="last_name" id="last-name" required />
        </div>
        <div className="field half">
          <label htmlFor="booking-email">Email address</label>
          <input type="email" name="email" id="booking-email" required />
        </div>
        <div className="field half">
          <label htmlFor="rank">Rank, if applicable</label>
          <input type="text" name="rank" id="rank" placeholder="For example: Bro, W.Bro, or N/A" />
        </div>
        <div className="field">
          <label htmlFor="dietary-requirements">Dietary requirements</label>
          <textarea
            name="dietary_requirements"
            id="dietary-requirements"
            rows="3"
            placeholder="Leave blank if none"
          />
        </div>

        <div className="field">
          <h3>Additional guests</h3>
          <p>Add the name, rank and dietary requirements for each additional guest.</p>
        </div>

        {guests.map((guestId, index) => (
          <div className="field" key={guestId}>
            <fieldset className="guest-entry">
              <legend>Guest {index + 1} (optional)</legend>
              {guests.length > 1 && (
                <div className="guest-entry__actions">
                  <button type="button" className="small" onClick={() => removeGuest(guestId)}>
                    Remove guest
                  </button>
                </div>
              )}
              <div className="guest-grid">
                <div>
                  <label htmlFor={`guest-${guestId}-first-name`}>First name</label>
                  <input
                    type="text"
                    name={`guest_${guestId}_first_name`}
                    id={`guest-${guestId}-first-name`}
                  />
                </div>
                <div>
                  <label htmlFor={`guest-${guestId}-last-name`}>Last name</label>
                  <input
                    type="text"
                    name={`guest_${guestId}_last_name`}
                    id={`guest-${guestId}-last-name`}
                  />
                </div>
                <div>
                  <label htmlFor={`guest-${guestId}-rank`}>Rank, if applicable</label>
                  <input
                    type="text"
                    name={`guest_${guestId}_rank`}
                    id={`guest-${guestId}-rank`}
                    placeholder="Leave blank if not applicable"
                  />
                </div>
                <div>
                  <label htmlFor={`guest-${guestId}-dietary-requirements`}>
                    Dietary requirements
                  </label>
                  <input
                    type="text"
                    name={`guest_${guestId}_dietary_requirements`}
                    id={`guest-${guestId}-dietary-requirements`}
                    placeholder="Leave blank if none"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        ))}
      </div>

      <ul className="actions">
        <li>
          <button type="button" className="button" onClick={addGuest}>
            Add another guest
          </button>
        </li>
        <li>
          <input type="submit" value="Send booking details" className="button primary" />
        </li>
      </ul>
    </form>
  );
}

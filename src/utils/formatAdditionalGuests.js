const formatAdditionalGuests = (guestIds, valueFor) =>
  guestIds
    .map((guestId, index) => {
      const firstName = valueFor(guestId, 'first_name').trim();
      const lastName = valueFor(guestId, 'last_name').trim();
      const rank = valueFor(guestId, 'rank').trim();
      const dietaryRequirements = valueFor(
        guestId,
        'dietary_requirements'
      ).trim();

      if (!firstName && !lastName && !rank && !dietaryRequirements) {
        return null;
      }

      return [
        `Guest ${index + 2}`,
        `Name: ${[firstName, lastName].filter(Boolean).join(' ') ||
          'Not provided'}`,
        `Rank: ${rank || 'Not provided'}`,
        `Dietary requirements: ${dietaryRequirements || 'None provided'}`,
      ].join('\n');
    })
    .filter(Boolean)
    .join('\n\n');

module.exports = formatAdditionalGuests;

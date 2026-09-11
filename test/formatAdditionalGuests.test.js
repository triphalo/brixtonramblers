const test = require('node:test');
const assert = require('node:assert/strict');

const formatAdditionalGuests = require('../src/utils/formatAdditionalGuests');

test('serialises every populated guest after Guest 1', () => {
  const values = {
    '2:first_name': ' Ada ',
    '2:last_name': 'Lovelace',
    '2:rank': ' Guest ',
    '2:dietary_requirements': '',
    '3:first_name': 'Grace',
    '3:last_name': '',
    '3:rank': '',
    '3:dietary_requirements': 'Vegetarian',
  };

  const result = formatAdditionalGuests(
    [2, 3],
    (guestId, fieldName) => values[`${guestId}:${fieldName}`] || ''
  );

  assert.equal(
    result,
    [
      'Guest 2',
      'Name: Ada Lovelace',
      'Rank: Guest',
      'Dietary requirements: None provided',
      '',
      'Guest 3',
      'Name: Grace',
      'Rank: Not provided',
      'Dietary requirements: Vegetarian',
    ].join('\n')
  );
});

test('omits an additional guest with no entered details', () => {
  const result = formatAdditionalGuests([2, 3], (guestId, fieldName) => {
    if (guestId === 3 && fieldName === 'first_name') return 'Katherine';
    return '';
  });

  assert.equal(
    result,
    [
      'Guest 3',
      'Name: Katherine',
      'Rank: Not provided',
      'Dietary requirements: None provided',
    ].join('\n')
  );
});

import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <h3>Finde contacts by name</h3>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Finde contacts by name"
        required
      />
    </>
  );
};

PropTypes.Filter = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

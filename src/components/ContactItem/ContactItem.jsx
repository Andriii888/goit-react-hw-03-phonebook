import PropTypes from 'prop-types';
import { ContactItemStyle } from './contactItemStyle.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactItemStyle>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ContactItemStyle>
  );
};

PropTypes.ContactItem = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

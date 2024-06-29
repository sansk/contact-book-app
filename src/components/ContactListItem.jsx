const ContactListItem = ({
  contact,
  handleselectedContact,
  handleDeleteDetails,
}) => {
  return (
    <div className="contact-item">
      <div className="item-detail">
        <p>
          {contact.name}, {contact.place}
        </p>
        <p>{contact.phone}</p>
      </div>
      <div className="item-btns">
        <button onClick={() => handleselectedContact(contact.id)}>Edit</button>
        <button onClick={() => handleDeleteDetails(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactListItem;

import { useState } from "react";
import ContactListItem from "./ContactListItem";

const DisplayContactList = ({
  contactDetails,
  handleselectedContact,
  handleDeleteDetails,
}) => {
  return (
    <div className="display-contact-list">
      {contactDetails.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          handleselectedContact={handleselectedContact}
          handleDeleteDetails={handleDeleteDetails}
        />
      ))}
    </div>
  );
};

export default DisplayContactList;

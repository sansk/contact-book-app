import { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import DisplayContactList from "./components/DisplayContactList";
import Header from "./components/Header";
import TxtInpWthLabel from "./components/TxtInpWthLabel";

const details = [
  {
    id: 2345,
    name: "Logesh Kanagaraj",
    place: "Chennai",
    phone: 9865434545,
  },
  {
    id: 4567,
    name: "Achintyaa Sai",
    place: "Erode",
    phone: 8809845763,
  },
  {
    id: 2387,
    name: "Chandrasekaran",
    place: "Bangalore",
    phone: 9734598365,
  },
  {
    id: 7455,
    name: "Sundar Pichai",
    place: "Chennai",
    phone: 9747974797,
  },
];

const App = () => {
  const [contactDetails, setContactDetails] = useState(details);
  const [selectedContact, setSelectedContact] = useState({});

  const handleselectedContact = (id) => {
    setSelectedContact(
      ...contactDetails.filter((contact) => contact.id === id)
    );
  };

  const handleAddDetails = (newItem) => {
    setContactDetails((curItems) => [...curItems, newItem]);
  };

  const handleDeleteDetails = (id) => {
    setContactDetails(contactDetails.filter((contact) => contact.id !== id));
    if (selectedContact.id === id) {
      setSelectedContact({});
    }
  };

  return (
    <div className="app">
      <Header />
      <AddContactForm handleAddDetails={handleAddDetails} />
      <DisplayContactList
        contactDetails={contactDetails}
        handleselectedContact={handleselectedContact}
        handleDeleteDetails={handleDeleteDetails}
      />
    </div>
  );
};

export default App;

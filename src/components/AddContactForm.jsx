import { useState } from "react";
import TxtInpWthLabel from "./TxtInpWthLabel";

const AddContactForm = ({ handleAddDetails }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: name,
      place: place,
      phone: phone,
      id: crypto.randomUUID(),
    };
    handleAddDetails(newItem);
    setName("");
    setPlace("");
    setPhone("");
  };

  return (
    <div className="add-contact-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <TxtInpWthLabel id="name" value={name} onClickHandler={setName} />
        <TxtInpWthLabel id="place" value={place} onClickHandler={setPlace} />
        <TxtInpWthLabel id="phone" value={phone} onClickHandler={setPhone} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddContactForm;

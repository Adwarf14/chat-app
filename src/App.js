import React from 'react';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList';
function App() {
  return (
    <div className="App">

      <Contact
      image = "https://randomuser.me/api/portraits/women/20.jpg"
      name = "Felecia Hunter"
      status
      />  

      <Contact
      image = "https://randomuser.me/api/portraits/women/54.jpg"
      name = "Lucille Henderson"
      s
      />

      <Contact
      image = "https://randomuser.me/api/portraits/men/89.jpg"
      name = "Nelson Holland"
      status
      />

      <ContactList />

    </div>
  );
}


export default App;

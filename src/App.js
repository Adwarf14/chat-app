import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">

      <Contact
      image = "https://randomuser.me/api/portraits/women/20.jpg"
      name = "Felecia Hunter"
      status = "true"
      />  

      <Contact
      image = "https://randomuser.me/api/portraits/women/54.jpg"
      name = "Lucille Henderson"
      status = "true"
      />

      <Contact
      image = "https://randomuser.me/api/portraits/men/89.jpg"
      name = "Nelson Holland"
      status = ""
      />

    </div>
  );
}


export default App;

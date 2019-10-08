import React from 'react';
import Contact from './Contact'

const contactlist = [
    {
        name : "Dolores Pierce",
        email : "Dolores.Pierce@example.com",        
        image : "https://randomuser.me/api/portraits/women/59.jpg",

    },
    {
        name : 'Jayden Douglas' ,
        email : 'Jayden.Douglas@example.com',        
        image : 'https://randomuser.me/api/portraits/men/36.jpg',

    },

    {
        name : 'Mitchell Arnold',
        email : 'Mitchell.Arnold@example.com',        
        image : 'https://randomuser.me/api/portraits/men/96.jpg',

    },

    {
        name : 'Suzanne Meyer' ,
        email : 'Suzanne.Meyer@example.com',        
        image : 'https://randomuser.me/api/portraits/women/67.jpg',

    },

    {
        name : 'Mary Harper' ,
        email : 'Mary.Harper@example.com',        
        image :'https://randomuser.me/api/portraits/women/57.jpg',

    }
]

const ContactList = () => (
    <div>
        {contactlist.map(item =>(
            <Contact name={item.name} email={item.email} image={item.image} />
        ))}
    </div>
)


export default ContactList;
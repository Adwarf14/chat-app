import React from 'react';
import Contact from './Contact'

const contactlist = [
    {
        name : "Dolores Pierce",        
        image : "https://randomuser.me/api/portraits/women/59.jpg",

    },
    {
        name : 'Jayden Douglas' ,        
        image : 'https://randomuser.me/api/portraits/men/36.jpg',

    },

    {
        name : 'Mitchell Arnold',        
        image : 'https://randomuser.me/api/portraits/men/96.jpg',

    },

    {
        name : 'Suzanne Meyer' ,        
        image : 'https://randomuser.me/api/portraits/women/67.jpg',

    },

    {
        name : 'Mary Harper' ,        
        image :'https://randomuser.me/api/portraits/women/57.jpg',

    }
]

const ContactList = () => (
    <div>
        {contactlist.map(item =>(
            <Contact name={item.name} image={item.image} />
        ))}
    </div>
)


export default ContactList;
import React from 'react';

import classes from './ContactBox.css';
import Button from './Button/Button';


const ContactBox = props => {
  return ( 
    <div className={classes.ContactBox}>
      <div>
        <p>Pawia 5, 31-154 Kraków, Poland</p>
        <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
        <a href="tel:+148126287560">+48 12 628 75 60</a>
      </div>
      <ul>
        <li>
          <Button>
            <a href="#0">Bēhance</a>
          </Button>
        </li>
        <li>
          <Button>
            <a href="#0">dribbble</a>
          </Button>
        </li>
        <li>
          <Button>
            <a href="mailto:ouremail@gmail.com">Contact Us</a>
          </Button>
        </li>
      </ul>
    </div>
  )
}
 
export default ContactBox;
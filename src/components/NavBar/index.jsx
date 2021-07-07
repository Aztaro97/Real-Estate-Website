import React, {useState} from 'react';
import DropDown from './DropDown';
import NavBarElement from './NavBarElement';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <NavBarElement toggle={toggle} />
        </>
    )
}

export default NavBar

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.module.scss"; // Import CSS for animation classes

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        {title}
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300} // Animation duration
        classNames="dropdown"
        unmountOnExit
      >
        <div className="dropdown__menu">
          {items.map((item, index) => (
            <div className="dropdown__item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;

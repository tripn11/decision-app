import React from 'react';

//below is a stateless component. a component that just returns a jsx
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

//component.defaultProps sets the default value of a props incase it isn't passed in when the component is used
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;

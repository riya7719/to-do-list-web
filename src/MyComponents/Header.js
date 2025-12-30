import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">{title}</span>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "My Todos",
};

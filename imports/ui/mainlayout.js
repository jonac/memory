import React from 'react';

const MainLayout = ({ children }) => (
  <div>
  <header>
    <img src="/images/logo.jpg"/>
  </header>
    <main>
      {children}
    </main>

  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.any,
};

export default MainLayout;

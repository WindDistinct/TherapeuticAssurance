import React from 'react';

interface MenuProps {
    onSelectTab: (tab: number) => void;
  }
  const Menu: React.FC<MenuProps> = ({ onSelectTab }) => {
    return (
      <div className="d-flex justify-content-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary mx-5" onClick={() => onSelectTab(1)}>Conocenoss</button>
          <button type="button" className="btn btn-primary mx-5" onClick={() => onSelectTab(2)}>Sedes de lima</button>
          <button type="button" className="btn btn-primary mx-5" onClick={() => onSelectTab(3)}>Formulario Medico</button>
        </div>
      </div>
    );
  };

export default Menu;

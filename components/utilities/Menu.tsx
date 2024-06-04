import React from 'react';

interface MenuProps {
    onSelectTab: (tab: number) => void;
  }
  const Menu: React.FC<MenuProps> = ({ onSelectTab }) => {
    return (
      <div className="d-flex justify-content-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="custom-button" onClick={() => onSelectTab(1)}>Conócenoss</button>
          <button type="button" className="custom-button" onClick={() => onSelectTab(2)}>Sedes de lima</button>
          <button type="button" className="custom-button"onClick={() => onSelectTab(3)}>Formulario Medico</button>
        </div>
      </div>
    );
  };

export default Menu;

import React,{useState} from 'react';

interface MenuProps {
    onSelectTab: (tab: number) => void;
}


const Menu: React.FC<MenuProps> = ({ onSelectTab }) => {

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <nav className="nav nav-pills nav-fill">
        <a className={`nav-link cursor-pointer ${activeTab==1 ? "active" : ""} `}  aria-current="page"  onClick={() => {onSelectTab(1); setActiveTab(1)}}>Conócenos</a>
        <a className={`nav-link cursor-pointer ${activeTab==2 ? "active" : ""} `}  onClick={() => {onSelectTab(2); setActiveTab(2)}}>Sedes de lima</a>
        <a className={`nav-link cursor-pointer ${activeTab==3 ? "active" : ""} `} onClick={() => {onSelectTab(3); setActiveTab(3) }}>Formulario Medico</a>
      </nav>
    </>
  );
};

export default Menu;

import React from 'react';

interface TabContentProps {
  activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <div className="d-flex " style={{padding: '20px'}} >
      <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="pestaña1" role="tabpanel">
        <h2 style={{color:'#187ac9'}} >¿Quiénes Somos?</h2>
        <p style={{paddingTop: '20px'}} >Therapeutic Assurance nació con el propósito de transformar el acceso a la salud y el bienestar. 
            Nuestro objetivo es facilitar a los usuarios la reserva de citas médicas y la compra de productos
             médicos de manera segura y conveniente.</p>
             <p>Estamos comprometidos con brindar una experiencia
             optimizada a nuestros clientes a través de una interfaz amigable y funcional.</p>
      </div>
      <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="pestaña2" role="tabpanel">
      <h2 style={{color:'#187ac9'}}  >Nuestra Sedes</h2>
        <p style={{paddingTop: '20px'}} >Estamos comprometidos con brindar una experiencia
             optimizada a nuestros clientes a través de una interfaz amigable y funcional.</p>

      </div>
      <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="pestaña3" role="tabpanel">
      <h2 style={{color:'#187ac9'}} >Fomulario Médico</h2>
        <p style={{paddingTop: '20px'}} >Lorem ipsum dolor sit amet
             consectetur adipisicing elit. 
             Enim placeat modi amet dolores explicabo 
             optio soluta commodi tempore, rem laborum blanditiis 
             aliquam, distinctio recusandae at, aliquid facere officiis expedita quasi!</p>
      </div>
    </div>
  );
};

export default TabContent;
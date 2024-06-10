import React from 'react';

interface TabContentProps {
  activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <>
      <div>
        <div className={`contenedor position-absolute tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}  role="tabpanel">
          
          <h3 className="h-3 mb-5" >¿Quiénes Somos?</h3>

            <p>Therapeutic Assurance nació con el propósito de transformar el acceso a la salud y el bienestar. 
                Nuestro objetivo es facilitar a los usuarios la reserva de citas médicas y la compra de productos
                médicos de manera segura y conveniente.</p>
            <p>Estamos comprometidos con brindar una experiencia
            optimizada a nuestros clientes a través de una interfaz amigable y funcional.</p>
            
        </div>

        <div className={`position-absolute tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="pestaña2" role="tabpanel">
          
          <h3 className="h-3 mb-5"   >Nuestra Sedes</h3>
          
          <address className=''>
          
            <p><strong>Dirección</strong><br/>
            Calle General Recavarren 596, Miraflores<br/>
            Perú</p>

            <strong>Email:</strong><br/>
            info@therapueticassurance.com<br/>
            <br/>
            <strong>Teléfono:</strong><br/>
            +51987151798
        
          </address>
        
        </div>

        <div style={{height:'300px'}} className={` tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="pestaña3" role="tabpanel">
        
          <h3 className="h-3 mb-5 "  >Fomulario Médico</h3>
          
          <p>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. 
            Enim placeat modi amet dolores explicabo 
            optio soluta commodi tempore, rem laborum blanditiis 
            aliquam, distinctio recusandae at, aliquid facere officiis expedita quasi!
          </p>

        </div>
      </div>
    </>
  );
};

export default TabContent;
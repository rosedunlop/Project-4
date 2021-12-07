import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'


const OffCanvas = ({ isFilter, show, handleClose, handleRemoveFilter, handleClickCushion, handleClickRug, handleClickLamp, handleClickTable }) => {

  return (
    <>  
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header className='canvas-head' closeButton>
          <Offcanvas.Title className='canvas-title'>FILTER PRODUCTS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='list-canvas'>
            {isFilter ? (
              <button className='link-canvas' onClick={handleRemoveFilter}>Remove Filter</button>
                  
            ) : (
              <>
                <button className='link-canvas' onClick={handleClickLamp}>LAMPSHADES</button>
                <button className='link-canvas' onClick={handleClickCushion} >CUSHIONS</button>
                <button className='link-canvas' onClick={handleClickRug}>RUGS</button>
                <button className='link-canvas' onClick={handleClickTable}>TABLEWARE</button>
              </>
            )}    
        
          </div>  
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas

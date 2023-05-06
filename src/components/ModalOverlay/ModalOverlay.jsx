import React from 'react'
import ModalOverlayStyle from './ModalOverlay.module.css'
import Modal from '../Modal/Modal'

const ModalOverlay = ({body, setOpen, item={}}) => {
  document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') {
      setOpen(false)
    }
  });
  return (
    <div className={ModalOverlayStyle.wrapper} onClick={() => setOpen(false)}>
        <Modal body={body} item={item} setOpen={setOpen}/>
    </div>
  )
}

export default ModalOverlay
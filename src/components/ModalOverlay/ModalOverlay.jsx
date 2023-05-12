import ModalOverlayStyle from './ModalOverlay.module.css'
import { TModalOverlay } from '../../utils/types';

const ModalOverlay = ({ children, setOpen }) => (
  <div className={ModalOverlayStyle.wrapper} onClick={() => setOpen(false)}>
    <div
      className={ModalOverlayStyle.modal_container}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
ModalOverlay.propTypes = TModalOverlay
export default ModalOverlay
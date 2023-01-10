import { useNavigate } from "react-router-dom";

const Modal = ({children, open, setOpen}) => {

  const navigate = useNavigate();

  return (
    <div className={`modal-container ${open && "modal-open"}`} onClick={() => {
      setOpen(false);
      navigate("/answers");
    }}>
        
        <div className="modal-message" onClick={(e) => e.stopPropagation()}>

            {children}
            <button onClick={ () => {
                navigate("/answers");
                setOpen(false);
            }} id="close">Ver Respuestas</button>

        </div>
    </div>
  )
}

export default Modal
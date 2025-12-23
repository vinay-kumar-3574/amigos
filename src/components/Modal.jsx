const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h2 className="modal-title">{title}</h2>
        {children}
        <button onClick={onClose} className="modal-close">
          ✕
        </button>
      </div>
    </div>
  )
}

export default Modal


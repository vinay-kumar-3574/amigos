const Alert = ({ isOpen, message, onClose }) =>
  isOpen ? (
    <div id="customAlert" className="alert-backdrop">
      <div className="alert-card">
        <h3>Success 🎉</h3>
        <p id="alertMessage">{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  ) : null

export default Alert


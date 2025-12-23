const ContactAddress = ({ contactBlock }) => (
  <section className="contact-address">
    <div className="contact-column">
      <h3>Contact Us</h3>
      <p>Email:{contactBlock.email}</p>
      <p>Phone: {contactBlock.phone}</p>
      <p>Hours: {contactBlock.hours}</p>
    </div>
    <div className="address-column">
      <h3>Our Address</h3>
      {contactBlock.addressLines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </section>
)

export default ContactAddress


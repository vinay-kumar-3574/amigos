const ContactForm = () => (
  <section id="contact" className="contact">
    <div className="overlay">
      <h2>Contact Us</h2>
      <form action="https://amigos-private-limited.netlify.app/submit-form" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="number" name="phone" placeholder="Your number" required />
        <input type="text" name="state" placeholder="State" required />
        <input type="text" name="country" placeholder="Country" required />
        <input type="number" name="pin" placeholder="Pin Code" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
)

export default ContactForm


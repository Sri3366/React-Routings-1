import '../App.css'

function Contact(){
    return(
        <div className="contact-page">

      <h1>📩 Contact Us</h1>

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="email"
        placeholder="Your Email"
      />

      <textarea
        placeholder="Your Message"
      ></textarea>

      <button>
        Send Message
      </button>

    </div>
    )
}
export default Contact;
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
  const contactStyle = {
    backgroundImage: `url(https://robohash.org/${contact._id})`,
  }
  return (
    <Link to={`/contact/${contact._id}`} className="contact-preview">
      <div style={contactStyle} className="robohash"></div>
      <section className="contact-content">
        <h1>{contact.name}</h1>
        <p>{contact.phone}</p>
      </section>
    </Link>
  )
}

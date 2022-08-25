import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contactService'

export const ContactDetails = () => {
  const [contact, setContact] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [params.id])

  async function loadContact() {
    const contactId = params.id
    const contact = await contactService.getContactById(contactId)
    setContact(contact)
  }

  const onBack = () => {
    navigate('/contact')
  }

  if (!contact) return <div>Loading...</div>
  return (
    <div className="contact-details">
      <img src={`https://robohash.org/${contact._id}`} alt="" />

      <section>
        <h1 className="contact-name">{contact.name}</h1>
        <h1>{contact.phone}</h1>
        <h1>{contact.email}</h1>
      </section>
      <section className="actions">
        <button className="page-btn" onClick={onBack}>
          Back
        </button>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </section>
    </div>
  )
}

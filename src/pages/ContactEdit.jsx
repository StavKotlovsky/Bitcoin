import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contactService'
import { removeContact } from '../store/actions/contactActions'

export const ContactEdit = () => {
  const [contact, setContact] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    loadContact()
  }, [])

  const loadContact = async () => {
    const contactId = params.id
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact()
    setContact(contact)
  }

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setContact((prevContact) => ({ ...prevContact, [field]: value }))
  }

  const onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({ ...contact })
    navigate('/contact')
  }

  const onRemoveContact = async (contactId) => {
    await dispatch(removeContact(contactId))
    navigate('/contact')
  }

  const onBack = () => {
    navigate('/')
  }

  if (!contact) return <div>Loading...</div>
  return (
    <section className="contact-edit">
      <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
      <form onSubmit={onSaveContact}>
        <input
          type="text"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
          id="name"
        />

        <input
          type="text"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
          name="phone"
          id="phone"
        />

        <input
          type="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
          id="email"
        />
        <button className="page-btn">Save</button>
      </form>
      <section>
        {contact._id ? (
          <button
            className="page-btn delete"
            onClick={() => onRemoveContact(contact._id)}
          >
            Delete Contact
          </button>
        ) : (
          <button onClick={onBack} className="page-btn delete">
            Cancel
          </button>
        )}
      </section>
    </section>
  )
}

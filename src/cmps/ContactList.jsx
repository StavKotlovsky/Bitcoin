import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectedContactId }) {
  return (
    <ul className="contact-list clean-list">
      <li>
        {contacts.map((contact) => (
          <ContactPreview
            key={contact._id}
            contact={contact}
            onSelectedContactId={onSelectedContactId}
          />
        ))}
      </li>
    </ul>
  )
}

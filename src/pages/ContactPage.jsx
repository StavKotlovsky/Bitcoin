import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { contactService } from '../services/contactService'
import { ContactDetails } from './ContactDetails'

export class ContactPage extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    const contacts = await contactService.getContacts()
    this.setState({ contacts })
  }

  onSelectedContactId = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    const { contacts, selectedContactId } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <div className="contact-page">
        {selectedContactId ? (
          <ContactDetails
            contactId={selectedContactId}
            onBack={() => this.onSelectedContactId(null)}
          />
        ) : (
          <>
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <ContactList
              contacts={contacts}
              onSelectedContactId={this.onSelectedContactId}
            />
          </>
        )}
      </div>
      // <div className="contact-page">
      //   <ContactList contacts={contacts} />
      // </div>
    )
  }
}

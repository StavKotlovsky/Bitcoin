import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { contactService } from '../services/contactService'

export class ContactPage extends Component {
  state = {
    contacts: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    const { contacts } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <div className="contact-page">
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link className="add-link" to="/contact/edit/">
          Add new contact
        </Link>
        <ContactList
          contacts={contacts}
          onSelectedContactId={this.onSelectedContactId}
        />
      </div>
    )
  }
}

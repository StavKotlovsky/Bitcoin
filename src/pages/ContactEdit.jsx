import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact()
    this.setState({ contact })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }))
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({ ...this.state.contact })
    this.props.history.push('/contact')
  }

  onRemoveContact = async (contactId) => {
    await contactService.deleteContact(contactId)
    this.props.history.push('/contact')
  }

  onBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <section className="contact-edit">
        <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
        <form onSubmit={this.onSaveContact}>
          <input
            type="text"
            value={contact.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
            name="name"
            id="name"
          />

          <input
            type="text"
            value={contact.phone}
            onChange={this.handleChange}
            placeholder="Enter your phone"
            name="phone"
            id="phone"
          />

          <input
            type="email"
            value={contact.email}
            onChange={this.handleChange}
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
              onClick={() => this.onRemoveContact(contact._id)}
            >
              Delete Contact
            </button>
          ) : (
            <button onClick={this.onBack} className="page-btn delete">
              Cancel
            </button>
          )}
        </section>
      </section>
    )
  }
}

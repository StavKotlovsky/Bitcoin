import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    const contact = await contactService.getContactById(this.props.contactId)
    this.setState({ contact })
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <div className="contact-details">
        <img src={`https://robohash.org/${contact._id}`} alt="" />
        <section>
          <h1 className="contact-name">{contact.name}</h1>
          <h1>{contact.phone}</h1>
          <h1>{contact.email}</h1>
        </section>
        <button className="page-btn" onClick={this.props.onBack}>
          Back
        </button>
      </div>
    )
  }
}

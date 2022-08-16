import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    this.loadContact()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  async loadContact() {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    this.setState({ contact })
  }
  onBack = () => {
    this.props.history.push('/contact')
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
        <section className="actions">
          <button className="page-btn" onClick={this.onBack}>
            Back
          </button>
          <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
        </section>
      </div>
    )
  }
}

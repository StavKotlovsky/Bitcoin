import { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    term: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state })
    })
  }

  render() {
    const { term } = this.state
    return (
      <form className="contact-filter">
        <section>
          <input
            value={term}
            onChange={this.handleChange}
            type="text"
            name="term"
            id="term"
            placeholder="Search"
          />
        </section>
      </form>
    )
  }
}

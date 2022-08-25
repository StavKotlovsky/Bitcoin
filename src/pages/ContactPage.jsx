import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadContacts, setFilterBy } from '../store/actions/contactActions'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'

export const ContactPage = () => {
  const contacts = useSelector((state) => state.contactModule.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [])

  const onChangeFilter = useCallback((filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
  }, [])

  if (!contacts) return <div>Loading...</div>
  return (
    <div className="contact-page">
      <ContactFilter onChangeFilter={onChangeFilter} />
      <Link className="add-link" to="/contact/edit/">
        Add new contact
      </Link>
      <ContactList contacts={contacts} />
    </div>
  )
}

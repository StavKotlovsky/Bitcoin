import { userService } from '../../services/userService'

export function loadUser() {
  return async (dispatch, getState) => {
    try {
      // const { loggedInUser } = getState().contactModule
      const user = await userService.getUser()
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

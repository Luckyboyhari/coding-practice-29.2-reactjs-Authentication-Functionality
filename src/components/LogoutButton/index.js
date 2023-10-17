// Write your JS code here
import './index.css'

const LogoutButton = props => {
  const {logoutUser} = props

  const onClickButton = () => {
    logoutUser()
  }

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        Logout
      </button>
    </div>
  )
}
export default LogoutButton

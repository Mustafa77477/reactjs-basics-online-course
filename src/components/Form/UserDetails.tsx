import { IuserData } from "../../interfaces"

interface IProps {
    user: IuserData;
}
const UserDetails = ({user}: IProps) => {
  return (
    <div style={{margin: 30}}>
      <h3>Username: {user.FullName}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address}</h3>
      {/* <h3>phone: {user.phone}</h3> */}
    </div>
  )
}

export default UserDetails

const Message = ({ username, message }) => {
  return <>
    <h3>{username}</h3>
    <p>{message}</p>
  </>
}

export default Message
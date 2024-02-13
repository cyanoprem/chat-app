const Message = ({ username, message }) => {
  return <div className="box">
    <p className="is-size-7 has-text-weight-semibold has-text-link">{username}</p>
    <p>{message}</p>
  </div>
}

export default Message
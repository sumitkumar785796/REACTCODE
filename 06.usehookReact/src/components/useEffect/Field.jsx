const Field = ({firstName,lastName,email,id}) => {
  return (
    <>
        <tr>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
        </tr>
    </>
  )
}

export default Field
// const Main = (props) => {
//   return (
//     <div>
//     <h1>Name:{props.name}</h1>
//     <h1>Age:{props.age}</h1>
//     </div>
//   )
// }

// export default Main
import './style.css'
import propTypes from 'prop-types';
const Main = ({name,age,email}) => {
  return (
    <div>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}
Main.propTypes={
  name:propTypes.string,
  age:propTypes.number,
  email:propTypes.string
}
Main.defaultProps={
  name:'empty',
  age:0,
  email:'empty'
}
export default Main
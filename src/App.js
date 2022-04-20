
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
   
  }, []);
const handleSubmit = event => {
  event.preventDefault();
  const name = event.target.name.value
  const email = event.target.email.value
  const password = event.target.password.value
 const user = {name, email,password}

 fetch('http://localhost:5000/use', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => {
  const newUser = [...users, data]
  users.push(newUser)
  // console.log(newUser)
  // console.log('Success:', data);
})
}
  return (
    <div className="App">
     <h2>total user {users.length}</h2>
     <form onSubmit={handleSubmit}>
       <input type="text" name='name' placeholder="text" required/>
       <input type="email" name="email" placeholder="email" required/>
       <input type="password" name="password" placeholder="password" required/>
       <input type="submit" value="send" />
     </form>
     {
       users.map(user => <div key={user.id}>
         <h2>Name: {user.name}</h2>
         <h2>Phone: {user.phone}</h2>
       </div>)
     }
    </div>
  );
}

export default App;

import './App.css';
import { useState, } from 'react'
import styled from 'styled-components'

function App() {
  const team = [
    {name: 'Matthew', 
    email: 'matt.ryan.norris@gmail.com', 
    role: 'Developer in training'},
    {name: 'Angelo', 
    email: 'ajgiordani@icantrememberwhatheuses.com', 
    role: 'Friendarino'}
  ]
  const [teamMembers, setTeamMembers] = useState(team)

  function handleSubmit(e) {
    let nameId = document.getElementById('name')
    let emailId = document.getElementById('email')
    let roleId = document.getElementById('role')

    let newTeamMember = {
      name: nameId.value,
      email: emailId.value,
      role: roleId.value
    }

    setTeamMembers([...teamMembers, newTeamMember])
    nameId.value = ''
    emailId.value = ''
    roleId.value = ''
  }

  return (
    <Page className="App">
      <h1>Friends App!</h1>
      <ul>
      {teamMembers.map((info) => {
        return <h3>Name:
                <InfoSpan> {info.name} </InfoSpan>
                   E-mail:
                <InfoSpan> {info.email} </InfoSpan>    
                   Role:
                <InfoSpan> {info.role} </InfoSpan>
               </h3>
      })}
      </ul>
      <form>
        <label>
          Name:
          <input id="name" type="text" />
        </label>
        <label>
          Email:
          <input id="email" type="text" />
        </label>
        <label>
          Role:
          <input id="role" type="text" />
        </label>
      </form>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </Page>
  );
}

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: black;
color: cyan;
min-height: 100vh;
min-width: 100vh;
`

const InfoSpan = styled.span`
color: white;
font-size: 16px;
`

export default App;
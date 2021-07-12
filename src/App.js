import './App.css';
import { useState, } from 'react'
import styled from 'styled-components'

function App() {
  const team = [
    {name: 'Matthew', 
    email: 'matt.ryan.norris@gmail.com', 
    role: 'Developer in training'},
    {name: 'Angelo', 
    email: 'ajgiordani@gmail.com', 
    role: 'Friend'}
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
      <FriendContainer>
      {teamMembers.map((info) => {
        return <FriendDiv>
                <h3>Name:
                  <InfoSpan> {info.name} </InfoSpan>
                    E-mail:
                  <InfoSpan> {info.email} </InfoSpan>    
                    Role:
                  <InfoSpan> {info.role} </InfoSpan>
                </h3>
               </FriendDiv>
      })}
      </FriendContainer>
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
          <select id = "role">
            <option value = "Developer">Developer</option>
            <option value = "Friend">Friend</option>
            <option value = "TA">TA</option>
            <option value = "Instructor">Instructor</option>
          </select>
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

const FriendDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background: rgba(255,215,0,0.25);
border: 3px solid red;
border-radius: 25px;
padding: 0 2%;
width: 25%;
`

const FriendContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100vh;
`

const InfoSpan = styled.p`
color: white;
font-size: 16px;
`

export default App;
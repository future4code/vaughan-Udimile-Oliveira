import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px
  `

export default class List extends React.Component {
    componentDidMount = () => {
        this.props.getAllUsers()
    };

    render() {

        const userList = this.props.users.map((user) => {
            return (
                <div>
                    <Container>
                    <p>{user.name}</p>
                    <button onClick={() => this.props.deleteUsers(user.id)}>X</button>
                    </Container>

                    <button onClick={this.props.renderCreate}>Anterior</button>
                </div>
            )
        }
        )
        return (
            <div>
                {userList}
            </div>
        )
    }
}
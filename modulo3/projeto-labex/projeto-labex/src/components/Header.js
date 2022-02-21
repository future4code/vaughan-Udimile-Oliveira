import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Headers = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  div{
    display: flex;
    justify-content: space-between;
  }
`;


export default function Header () {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate("/", { state: true })
}
const handleClick = () => {
    navigate(-1)
}
  
    return (
      <Headers>
        <h5>LabEx</h5>
        <div>
          <button onClick={handleHome}>Home</button>
          <button onClick={handleClick}>
            Voltar
          </button>
        </div>
      </Headers>
    );
  }


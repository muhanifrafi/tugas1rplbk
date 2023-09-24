import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

const Nav = styled.nav`
  background: #302c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export default function Navbar() {
  return (
    <Nav>
      <span style={{ fontWeight: "bold" }}>Kelompok 26</span>
      <div>
        <TextInput />
        <Button>Search</Button>
      </div>
    </Nav>
  );
}

import styled from "styled-components";

const Div = styled.div`
  background: #302c34;
  min-width: 250px;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  line-height: 1.5;
`;

export default function User({ nama, nim, email }) {
  return (
    <Div>
      <div className="nama">{nama}</div>
      <div className="nim">{nim}</div>
      <div className="email">{email}</div>
    </Div>
  );
}

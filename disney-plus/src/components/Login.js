import React from 'react'
import styled from 'styled-components';
const Login = () => {
  return (
    <Container>
        <Content>
            <LogoOne src="./images/cta-logo-one.svg"/>
            <SignUp>Get All There</SignUp>
            <Description>
                    Exercitation irure aliquip in pariatur proident velit ipsum. Laborum velit non commodo ex exercitation proident do. Consequat laborum excepteur laboris qui consequat.
            </Description>
            <LogoTwo src="./images/cta-logo-two.png"/>
        </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: top;
  justify-content: center;
  


  &:before {
      /* background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed; */
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/images/login-background.jpg");
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0.8;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
  
`;
const LogoOne = styled.img`
  
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold ;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms ;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 7px;

  &:hover {
    background-color: #0483ee;
  }


  @media (max-width: 768px) {
    padding: 14px 0;
    font-size: 15px;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 1.5;
`;

const LogoTwo = styled.img`
  width: 95%;
`;
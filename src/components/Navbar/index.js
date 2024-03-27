import React from "react";
import { Link } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
import styled , {useTheme} from "styled-components";
import { DiVisualstudio } from "react-icons/di";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
      color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GitHubButton = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};     
  }
    @media screen and (max-width: 640px) { 
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};

`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
    return (
    <Nav>
        <NavContainer>

            <NavLogo to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px;', cursor: 'pointer' }} >
            <DiVisualstudio size="3rem" /> <Span>Portfolio</Span>        
          </a>
            </NavLogo>
            <MobileIcon>
            <FaBars 
            onClick={() => {
            setOpen(!open)
          }} />
            </MobileIcon>
            <NavItems>
              <NavLink href="#about">About</NavLink>
              <NavLink href='#skills'>Skills</NavLink>
              <NavLink href='#experience'>Experience</NavLink>
              <NavLink href='#projects'>Projects</NavLink>
              <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
            <GitHubButton to={Bio.github} target="_blank">Github Profile</GitHubButton>
            </ButtonContainer>
        </NavContainer>
        {
          open &&
          <MobileMenu open={open}>
            <MobileMenuLinks href="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLinks>
            <MobileMenuLinks href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileMenuLinks>
            <MobileMenuLinks href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileMenuLinks>
          </MobileMenu>
        }
    </Nav>
    )

};

export default Navbar
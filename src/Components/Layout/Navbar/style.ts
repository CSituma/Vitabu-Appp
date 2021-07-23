import styled from 'styled-components';

interface INav {
  open: boolean;

  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;                                                                
  height: 1.5rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color:white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.811);
  padding: 0.5rem 1.4em;

  @media (max-width: 678px) {
    width: 100vw;
  }

`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;

  a {
    cursor: pointer;

    &:hover {
      color: yellow;
    &:nth-child(3) {
      color:black;
      transition: all 0.2s ease-in-out;
    background: #fff;
    }

    } 
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:black;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 9.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
  }
`

export const Logo = styled.img`
  margin: 20px 50px 20px 7%;
  width: 160px;
  height: 70px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }

`

export const Icon = styled.div`
  width: 100vw;
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    pointer-events: none;
    object-fit: contain;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  }
`






















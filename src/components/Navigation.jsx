import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './PrimaryButton';
import logo from '../assets/img/logo.svg';

const Navigation = () => {
   useEffect(() => {
      const linkElements = document.querySelectorAll('.navigation-link');

      linkElements.forEach((linkElement, index) => {
         const marker = document.createElement('a-marker');
         marker.setAttribute('type', 'pattern');
         marker.setAttribute('url', `https://cdn.rawgit.com/AR-js-org/AR.js/master/three.js/examples/marker-training/examples/pattern-files/pattern-${index + 1}.patt`);
         marker.appendChild(linkElement);
         document.querySelector('scene').appendChild(marker);
      });
   }, []);

   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li>
               <scene>
                  <a-marker type="pattern" url="url-patron-1.patt">
                     <Link to="header" spy={true} smooth={true} className="navigation-link">Inicio</Link>
                  </a-marker>
               </scene>

            </li>
            <scene>
               <li>
                  <a-marker type="pattern" url="url-patron-2.patt">
                     <Link to="feathures" spy={true} smooth={true} className="navigation-link">Prueba</Link>
                  </a-marker>
               </li>
            </scene>

            <li>
               <a-marker type="pattern" url="url-patron-3.patt">
                  <Link to="pricing" spy={true} smooth={true} className="navigation-link">Prueba</Link>
               </a-marker>
            </li>
         </ul>
         <scene>
              <PrimaryButton name='Acceder' />
         </scene>
       
      </NavigationStyled>
   );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;

    li {
      cursor: pointer;
    }
  }
`;

export default Navigation;

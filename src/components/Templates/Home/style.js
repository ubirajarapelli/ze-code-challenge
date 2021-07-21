import styled from 'styled-components'
  
export const HomeTemplateElement = styled.div`
  display: grid;
  overflow: hidden;
  padding-top: 66px;
  background-color: var(--brand-primary);
  background-image: linear-gradient(140deg, rgba(236,124,4,1) 0%, rgba(252,196,4,1) 70%);
  background-repeat: no-repeat; 
  background-position: left;

  

  @media (min-width: 1280px) {

    grid-template-columns: 7% 35% auto;
    grid-auto-flow: dense;
    height: calc(100vh - 59px);

    & aside {
      grid-column-start: 1;
    }
    & section {
      grid-column-start: 2;
    }
    & main {
      grid-column-start: 3;
    }
  }
`

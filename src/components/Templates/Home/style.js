import styled from 'styled-components'
  
export const HomeTemplateElement = styled.div`
  /* height: calc(100vh - (6457px); */
  /* height: calc(100vh - 122px); */
  display: grid;
  grid-template-columns: 7% 35% auto;
  grid-auto-flow: dense;
  height: calc(100vh - 59px);
  overflow: hidden;
  padding-top: 66px;
  background-color: var(--brand-primary);
  background-image: linear-gradient(140deg, rgba(236,124,4,1) 0%, rgba(252,196,4,1) 70%);
  background-repeat: no-repeat; 
  background-position: left;

  & aside {
    grid-column-start: 1;
  }
  & section {
    grid-column-start: 2;
  }
  & main {
    grid-column-start: 3;
  }
`

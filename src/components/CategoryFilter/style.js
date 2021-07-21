import styled from 'styled-components'

export const CategoryFilterElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 1280px) {
    width: 60%;
    justify-content: space-between
  }
`
export const FilterCheckButton = styled.div`

  padding-top: 1em;
  padding-bottom: 1em;
  min-width: 105px;
  text-align: center;

  & label {
    padding: 8px 16px;
    font-family: 'Oswald';
    font-size: 18px;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all .3s ease-in;
    &:hover {
      background-color: var(--brand-primary-light);
    }
  }

  & input[type="radio"] {
    position: absolute;
    left: -100vw;

    &:checked ~ label {
      background-color: var(--brand-primary-light);
    }
  }
`

export const Skeleton = styled.div`
  width: 50%;
  margin-top: 32px;
  border-radius: 12px;
  background-size: 350%;
  background-image: linear-gradient(90deg, #CDCDCD 0%, #F8F8F8 40%, #CDCDCD 99%);
  color: transparent;
  cursor: wait;
  animation: skeleton 1.6s infinite reverse linear;
  @keyframes skeleton {
    0% { background-position: 0; } 
    40%, 100% { background-position: 90%; }
  };
`

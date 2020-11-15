import styled from 'styled-components'

export const BREAK_POINT_1 = 1000;
export const BREAK_POINT_2 = 700;

export const CenterDiv = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
`

export const ErrorMessage = styled.div`
display: ${props => props.showError ? "block" : "none"};
padding: 20px;
background-color: #a02117;
color: white;
`

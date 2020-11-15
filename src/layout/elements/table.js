import styled from 'styled-components'

export const Table = styled.table`
border-collapse: collapse;
border: 2px solid rgb(224 223 223);
letter-spacing: 1px;
font-family: sans-serif;
font-size: .8rem;
width: 100%;
text-align: center;
`
export const Thead = styled.thead`
background: #a8dca7;
`
export const Tbody = styled.tbody`
background-color: #e4f0f5;
`

export const Td = styled.td`
border: 1px solid rgb(190, 190, 190);
padding: 5px 10px;
`

export const Th = styled(Td)`
`

export const OverflowTable = styled.div`
overflow-x:auto;
max-width: 100%;
`
import styled from  'styled-components'

const Text = styled.div`
    color: ${props => props.error ? 'red' : 'green'};
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
`

export const BiggerText = Text.extend`
font-size: 40px;
`

export const BiggerBolderText = BiggerText.extend`
font-weight: bold;
`

export default Text
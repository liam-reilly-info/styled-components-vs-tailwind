import styled from "styled-components";

interface FormComponentProps {
    row: string // used to control the grid row
}

const ContactFormStyled = styled.form`
    display: grid;
    background-color: gray;
    color: black;
    border: white 2px solid;
    border-radius: .5rem;
    grid-template-rows: repeat(7, minmax(0, 1fr));
    padding: 1rem 2rem;
`

const HeaderOneStyled = styled.h1<FormComponentProps>`
    font-size: 2.5rem;
    justify-self: center;
    grid-row: ${ (props) => props.row };
    grid-column: 1 / span 2;
    margin-bottom: 2rem;
    text-transform: uppercase;
`

const LabelStyled = styled.label<FormComponentProps>`
    font-size: 1.1rem;
    grid-row: ${ (props) => props.row };
    margin-right: 1rem;
`

const InputStyled = styled.input<FormComponentProps>`
    border-radius: .25rem;
    color: black;
    padding: .5rem;
    grid-row: ${ (props) => props.row };
    height: 2rem;
`

const TextAreaStyled = styled.textarea<FormComponentProps>`
    border-radius: .25rem;
    color: black;
    padding: .5rem;
    grid-row: ${ (props) => props.row } / span 2;
    height: 8rem;
`

const ButtonStyled = styled.button<FormComponentProps>`
    background-color: blue;
    border-radius: .25rem;
    color: white;
    grid-column: span 2;
    height: 3rem;
    margin-top: 1.5rem;

    :hover {
        background-color: #0c0cef;
        cursor: pointer
    }
`

export {
    ContactFormStyled,
    HeaderOneStyled,
    LabelStyled,
    InputStyled,
    TextAreaStyled,
    ButtonStyled
}
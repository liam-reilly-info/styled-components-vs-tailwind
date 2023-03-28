import { 
    ContactFormStyled,
    HeaderOneStyled,
    LabelStyled,
    InputStyled,
    TextAreaStyled,
    ButtonStyled
} from "./contact-form.styled";

const ContactFormSC = () => <ContactFormStyled>
    <HeaderOneStyled row="1">Styled-Components Form</HeaderOneStyled>

    <LabelStyled row="2" placeholder="name">Name:</LabelStyled>
    <InputStyled row="2" />

    <LabelStyled row="3">Email:</LabelStyled>
    <InputStyled row="3" />

    <LabelStyled row="4">Phone:</LabelStyled>
    <InputStyled row="4" />

    <LabelStyled row="5">Message:</LabelStyled>
    <TextAreaStyled row="5"></TextAreaStyled>

    <ButtonStyled row="6">Send</ButtonStyled>
</ContactFormStyled>

export default ContactFormSC
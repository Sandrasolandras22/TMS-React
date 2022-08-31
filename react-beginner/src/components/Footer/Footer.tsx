import {
  FooterContainer,
  FooterSection
} from 'components/Footer/footer.styled';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <FooterContainer>
      <FooterSection>{`\u00A9${currentYear} TMS`}</FooterSection>
      <FooterSection>All rights reserved</FooterSection>
    </FooterContainer>
  );
}

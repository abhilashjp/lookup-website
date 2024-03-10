/** @jsxImportSource theme-ui */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Why is your solution open-source?',
    contents: (
      <div>
        Most of the information is already available in national databases ( <a href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation" target="_blank" rel="noopener noreferrer">VIES</a>, <a href="https://www.gov.uk/check-uk-vat-number" target="_blank" rel="noopener noreferrer">HMRC</a> etc). We want to make it easier to validate tax ID with a single API in one place. However, to build it out and maintain it for every country would be a very difficult task and can only be achieved with the help of a community supporting it.  
      </div>
    ),
  },
  {
    title: 'What countries do you support for Tax ID validation?',
    contents: (
      <div>
        We make use of <a href="https://lookuptax.com/docs/check-vat-number-free-links-to-official-national-database-search-VAT-number" target="_blank" rel="noopener noreferrer">national databases</a> to support Tax ID validation. Currently support exists for EU through <a href="https://lookuptax.com/docs/blog/guide-to-vat-vies-vat-validation" target="_blank" rel="noopener noreferrer">VIES</a>, <a href="https://lookuptax.com/docs/country/uk-vat-guidelines-sales-tax-indirect-tax-united-kingdom" target="_blank" rel="noopener noreferrer">UK</a> through HMRC, <a href="https://lookuptax.com/docs/country/india-gst-guidelines-indirect-tax-sales-tax-india" target="_blank" rel="noopener noreferrer">India</a> through GST portal, Australia through Australian Business Register. We understand that you might be selling globally in other countries too and we plan to expland our support ourselves and with the help of the community.
      </div>
    ),
  },
  {
    title: 'How can I contribute to your code base?',
    contents: (
      <div>
        You can access our Github repository here to contribute. <a href="https://github.com/lookuptax" target="_blank" rel="noopener noreferrer">Github Org.</a>
      </div>
    ),
  },
  {
    title: 'What do I do if I am facing trouble integrating or having any other questions?',
    contents: (
      <div>
        You can reach out to support@lookuptax.com for all questions. We promise to give you a response as soon as possible. You might sometimes see a delay in getting a response but please do bear with us as we are a very small team now.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}

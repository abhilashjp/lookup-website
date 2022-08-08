/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Why is your solution open-source?',
    contents: (
      <div>
        Most of the information is already available in national databases ( VIES, HMRC etc). We want to make it easier to validate tax ID with a single API in one place. However, to build it out and maintain it for every country would be a very difficult task and can only be achieved with the help of a community supporting it.  
      </div>
    ),
  },
  {
    title: 'What countries do you support for Tax ID validation?',
    contents: (
      <div>
        We make use of national databases to support Tax ID validation. Currently support exists for EU through VIES, UK through HMRC, India through GST portal, Australia through Australian Business Register. We understand that you might be selling globally in other countries too and we plan to expland our support ourselves and with the help of the community.
      </div>
    ),
  },
  {
    title: 'How can I contribute to your code base?',
    contents: (
      <div>
        You can access our Github repository here to contribute. Insert link in here.
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

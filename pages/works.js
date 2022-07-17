import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../componets/layouts/article'
import Section from '../componets/section'
import { WorkGridItem } from '../componets/layouts/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop.png'
import thumbWalknote from '../public/images/works/inkdrop.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Gliding Task Generator" thumbnail={thumbInkdrop}>
            Java
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../componets/chakra'
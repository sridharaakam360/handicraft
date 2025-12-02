import React from 'react';
import { Box, Container, Title, Text, Grid, Image, Stack } from '@mantine/core';

const AboutPage: React.FC = () => {
  return (
    <Box style={{ backgroundColor: 'white' }} py={64}>
      <Container size="xl">
        <Box maw={896} mx="auto" ta="center">
          <Title order={1} size="2.5rem" ff="Georgia, serif" fw={700} c="#3a0e0d" mb="md">
            About SI Handicrafts
          </Title>
          <Text size="lg" c="dimmed" mb="xl">
            Preserving Centuries of Tradition in Every Masterpiece
          </Text>
        </Box>

        <Grid maw={1120} mx="auto" gutter="xl" align="center" mt={48}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://source.unsplash.com/600x400/?indian,artisan,craft"
              alt="Artisan at work"
              radius="md"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md" c="#374151">
              <Title order={2} size="1.5rem" ff="Georgia, serif" fw={700} c="#6a1b1a">
                Our Story
              </Title>
              <Text>
                South Indian Handicrafts was born from a deep love and respect for the timeless artistry of our homeland. We witnessed the incredible skill of local artisans, whose talents have been passed down through generations, and felt a calling to share their magnificent creations with the world.
              </Text>
              <Text>
                Our journey began in the temple towns of Tamil Nadu, sourcing authentic bronze statues, and soon expanded to embrace the rich diversity of wooden sculptures from Kerala, radiant brass lamps, and the divine Tanjore paintings that adorn sacred spaces.
              </Text>
              <Title order={2} size="1.5rem" ff="Georgia, serif" fw={700} c="#6a1b1a" mt="md">
                Our Mission
              </Title>
              <Text>
                Our mission is twofold: to bring you authentic, high-quality handcrafted items that carry the essence of South Indian culture, and to support the artisan communities that are the custodians of this precious heritage. By choosing SI Handicrafts, you are not just buying a product; you are becoming part of a story and helping to sustain a legacy of unparalleled craftsmanship.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;

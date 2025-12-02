import React from 'react';
import { Box, Container, Title, Text, Grid, TextInput, Textarea, Button, Stack, Anchor } from '@mantine/core';

const ContactPage: React.FC = () => {
  return (
    <Box style={{ backgroundColor: '#fef3e3' }} py={64}>
      <Container size="xl">
        <Box ta="center" mb={48}>
          <Title order={1} size="2.5rem" ff="Georgia, serif" fw={700} c="#3a0e0d">
            Get In Touch
          </Title>
          <Text size="lg" c="dimmed" mt="xs">
            We'd love to hear from you. Visit our store or contact us for any queries.
          </Text>
        </Box>

        <Grid
          maw={1120}
          mx="auto"
          gutter="xl"
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: 8,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          {/* Contact Form */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Title order={2} size="1.5rem" fw={700} c="#6a1b1a" mb="md">
                Send us a Message
              </Title>
              <form>
                <Stack gap="md">
                  <TextInput
                    label="Full Name"
                    placeholder="Your name"
                    required
                  />
                  <TextInput
                    label="Email Address"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    fullWidth
                    radius="xl"
                    size="md"
                    style={{ backgroundColor: '#6a1b1a' }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: '#3a0e0d',
                        }
                      }
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Grid.Col>

          {/* Contact Information */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl" c="#374151">
              <Title order={2} size="1.5rem" fw={700} c="#6a1b1a" mb="md">
                Contact Information
              </Title>
              <div>
                <Text fw={600} c="#3a0e0d">Address:</Text>
                <Text>No6/135, Opposite to City Union Bank, North Street, Natchar Koil, Kumbakonam-612602, Tamil Nadu</Text>
              </div>
              <div>
                <Text fw={600} c="#3a0e0d">Email:</Text>
                <Anchor href="mailto:info@amirthasuperstore.com" c="#6a1b1a">
                  info@amirthasuperstore.com
                </Anchor>
              </div>
              <div>
                <Text fw={600} c="#3a0e0d">Phone:</Text>
                <Anchor href="tel:+911234567890" c="#6a1b1a">
                  +91-1234567890
                </Anchor>
              </div>
              <div>
                <Text fw={600} c="#3a0e0d">Business Hours:</Text>
                <Text>Monday - Saturday: 9:00 AM - 9:00 PM</Text>
                <Text>Sunday: Closed</Text>
              </div>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;

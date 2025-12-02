import React from 'react';
import { Box, Container, Title, SimpleGrid, Paper, Text } from '@mantine/core';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <Box component="section" py={64} style={{ backgroundColor: 'white' }}>
            <Container size="xl">
                <Title
                    order={2}
                    size="2rem"
                    ff="Georgia, serif"
                    fw={700}
                    c="#3a0e0d"
                    ta="center"
                    mb={40}
                >
                    What Our Customers Say
                </Title>
                <SimpleGrid
                    cols={{ base: 1, md: 3 }}
                    spacing="lg"
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <Paper
                            key={testimonial.id}
                            p="xl"
                            radius="md"
                            shadow="sm"
                            style={{
                                backgroundColor: '#fef3e3',
                                textAlign: 'center'
                            }}
                        >
                            <Text
                                c="#4b5563"
                                fs="italic"
                                mb="xl"
                                size="sm"
                            >
                                "{testimonial.quote}"
                            </Text>
                            <Text fw={700} c="#6a1b1a">
                                {testimonial.author}
                            </Text>
                            <Text size="sm" c="#6b7280">
                                {testimonial.location}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Testimonials;

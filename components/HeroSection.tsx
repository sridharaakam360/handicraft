import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Title, Text, Button } from '@mantine/core';

const HeroSection: React.FC = () => {
    return (
        <Box
            style={{
                position: 'relative',
                height: '80vh',
                backgroundImage: "url('https://source.unsplash.com/1600x900/?indian,handicrafts,artisan')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}
        >
            <Box
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'black',
                    opacity: 0.5
                }}
            />
            <Container style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <Title
                    order={1}
                    size="3.5rem"
                    ff="Georgia, serif"
                    fw={700}
                    mb="md"
                    style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    Timeless Artistry, <span style={{ color: '#f7941d' }}>Divine Craftsmanship</span>
                </Title>
                <Text
                    size="xl"
                    maw={800}
                    mx="auto"
                    mb="xl"
                    style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    }}
                >
                    Discover authentic, handcrafted idols and art from the heart of South India.
                </Text>
                <Button
                    component={Link}
                    to="/products"
                    size="lg"
                    radius="xl"
                    style={{
                        backgroundColor: '#f7941d',
                        color: '#3a0e0d',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        padding: '1rem 2rem',
                        transition: 'all 0.3s',
                    }}
                    styles={{
                        root: {
                            '&:hover': {
                                backgroundColor: '#d67e19',
                                transform: 'scale(1.05)',
                            }
                        }
                    }}
                >
                    Explore Collection
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    AppShell,
    Group,
    TextInput,
    ActionIcon,
    Burger,
    Drawer,
    Stack,
    Anchor,
    Box,
    Container,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        if (location.pathname !== '/products' && newSearchTerm.trim() !== '') {
            navigate('/products');
        }
    };

    return (
        <Box component="header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
            {/* Top bar */}
            <Box style={{ backgroundColor: '#6a1b1a', color: 'white', fontSize: '0.75rem', padding: '0.5rem 0' }}>
                <Container size="xl">
                    <Group justify="space-between">
                        <Text size="xs">Welcome to South Indian Handicrafts</Text>
                        <Group gap="md">
                            <Anchor href="tel:+911234567890" c="white" size="xs" style={{ textDecoration: 'none' }}>
                                Call Us: +91-1234567890
                            </Anchor>
                            <Anchor
                                href="mailto:info@sih.com"
                                c="white"
                                size="xs"
                                style={{ textDecoration: 'none' }}
                                visibleFrom="md"
                            >
                                info@sih.com
                            </Anchor>
                        </Group>
                    </Group>
                </Container>
            </Box>

            {/* Main header */}
            <Box style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Container size="xl" py="md">
                    <Group justify="space-between">
                        <Link to="/" style={{ textDecoration: 'none', color: '#6a1b1a', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>
                            SI<span style={{ color: '#f7941d' }}>Handicrafts</span>
                        </Link>

                        <TextInput
                            placeholder="Search for products..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            rightSection={<SearchIcon style={{ width: 20, height: 20, color: '#6a1b1a' }} />}
                            style={{ flex: 1, maxWidth: 500 }}
                            visibleFrom="lg"
                            styles={{
                                input: {
                                    borderRadius: 9999,
                                }
                            }}
                        />

                        <Group gap="sm">
                            <ActionIcon variant="subtle" color="gray" size="lg">
                                <UserIcon style={{ width: 24, height: 24 }} />
                            </ActionIcon>
                            <ActionIcon variant="subtle" color="gray" size="lg" style={{ position: 'relative' }}>
                                <CartIcon style={{ width: 24, height: 24 }} />
                                <Box
                                    style={{
                                        position: 'absolute',
                                        top: -8,
                                        right: -8,
                                        backgroundColor: '#f7941d',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 20,
                                        height: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    0
                                </Box>
                            </ActionIcon>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
                        </Group>
                    </Group>
                </Container>
            </Box>

            {/* Navigation */}
            <Box style={{ backgroundColor: '#3a0e0d', color: 'white' }} visibleFrom="lg">
                <Container size="xl">
                    <Group justify="center" gap="xl" py="sm">
                        {NAV_LINKS.map((link: NavLink) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#f7941d'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Group>
                </Container>
            </Box>

            {/* Mobile Menu */}
            <Drawer opened={opened} onClose={close} position="right" title="Menu" size="sm">
                <Stack gap="md">
                    {NAV_LINKS.map((link: NavLink) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={close}
                            style={{
                                color: '#6a1b1a',
                                textDecoration: 'none',
                                padding: '0.5rem 0',
                                borderBottom: '1px solid #e0e0e0'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </Stack>
            </Drawer>
        </Box>
    );
};

export default Header;
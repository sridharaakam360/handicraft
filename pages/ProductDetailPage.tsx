import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Image, Title, Text, Group, Button, Stack, Anchor } from '@mantine/core';
import { PRODUCTS } from '../constants';
import ProductGrid from '../components/ProductGrid';

const ArrowLeftIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Box style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box ta="center">
          <Title order={1} size="2.5rem" fw={700} c="#3a0e0d" mb="md">
            Product Not Found
          </Title>
          <Text c="dimmed" mb="xl">
            Sorry, we couldn't find the product you're looking for.
          </Text>
          <Button
            component={Link}
            to="/products"
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
            Back to Collection
          </Button>
        </Box>
      </Box>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Box style={{ backgroundColor: 'white' }}>
      <Container size="xl" py={48}>
        <Button
          variant="subtle"
          c="#6a1b1a"
          mb="lg"
          onClick={() => navigate(-1)}
          leftSection={<ArrowLeftIcon style={{ width: 20, height: 20 }} />}
          styles={{
            root: {
              paddingLeft: 0,
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline'
              }
            }
          }}
        >
          Back
        </Button>
        <Grid gutter="xl" align="flex-start">
          {/* Product Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={product.imageUrl.replace('400x400', '600x600')}
              alt={product.name}
              radius="md"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </Grid.Col>

          {/* Product Details */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Title order={1} size="2.5rem" ff="Georgia, serif" fw={700} c="#3a0e0d">
                {product.name}
              </Title>
              <Group gap="md">
                <Text size="2rem" fw={700} c="#6a1b1a">
                  ₹{product.price.toLocaleString('en-IN')}
                </Text>
                {product.originalPrice && (
                  <Text size="xl" c="dimmed" td="line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </Text>
                )}
              </Group>
              <div>
                <Title order={2} size="1.25rem" fw={700} c="#3a0e0d" mb="xs">
                  Description
                </Title>
                <Text c="#374151" style={{ lineHeight: 1.6 }}>
                  {product.description}
                </Text>
              </div>

              <Box style={{ borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <Text>
                  <Text component="span" fw={600} c="#1f2937">Category: </Text>
                  <Anchor component={Link} to={`/products?category=${product.category}`} c="#6a1b1a">
                    {product.category}
                  </Anchor>
                </Text>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {relatedProducts.length > 0 && (
        <Box style={{ backgroundColor: '#fef3e3' }}>
          <ProductGrid title="You might also like" products={relatedProducts} />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetailPage;

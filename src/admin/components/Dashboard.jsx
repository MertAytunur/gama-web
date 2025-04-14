import React from 'react';
import { Box, H1, H2, H4, Text, Illustration, IllustrationProps } from '@adminjs/design-system';

const Dashboard = () => {
  return (
    <Box bg="grey20" p="xl">
      <Box
        bg="white"
        p="xl"
        style={{
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          background: 'repeating-linear-gradient(45deg, #2a2a2a, #2a2a2a 10px, #303030 10px, #303030 20px)',
          color: 'white',
          padding: '30px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <H1 mb="xl" style={{ color: 'white' }}>GAMA Bina Güçlendirme Yönetim Paneli</H1>
          <H4 mt="lg" mb="md" style={{ color: '#e0e0e0' }}>
            Bu panel üzerinden:
          </H4>
          <Box mt="xl" mb="xl">
            <ul style={{ paddingLeft: '20px', color: '#e0e0e0' }}>
              <li style={{ marginBottom: '8px' }}>Ürün bilgilerini düzenleyebilirsiniz</li>
              <li style={{ marginBottom: '8px' }}>Proje içeriklerini güncelleyebilirsiniz</li>
              <li style={{ marginBottom: '8px' }}>Renk ve yazı tipi ayarlarını değiştirebilirsiniz</li>
              <li style={{ marginBottom: '8px' }}>Kullanıcı yorumlarını yönetebilirsiniz</li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box mt="xl" display="flex" flexDirection={['column', 'row']} flexWrap="wrap">
        <Box
          width={[1, 1/2, 1/2, 1/4]}
          p="md"
        >
          <Box
            bg="white"
            p="xl"
            style={{
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: '#2a2a2a',
              color: 'white',
            }}
          >
            <H2 style={{ color: 'white' }}>Ürünler</H2>
            <Text mt="md" style={{ textAlign: 'center', color: '#e0e0e0' }}>
              Ürün bilgilerini düzenleyin ve yönetin
            </Text>
          </Box>
        </Box>

        <Box
          width={[1, 1/2, 1/2, 1/4]}
          p="md"
        >
          <Box
            bg="white"
            p="xl"
            style={{
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: '#2a2a2a',
              color: 'white',
            }}
          >
            <H2 style={{ color: 'white' }}>Projeler</H2>
            <Text mt="md" style={{ textAlign: 'center', color: '#e0e0e0' }}>
              Proje içeriklerini güncelleyin
            </Text>
          </Box>
        </Box>

        <Box
          width={[1, 1/2, 1/2, 1/4]}
          p="md"
        >
          <Box
            bg="white"
            p="xl"
            style={{
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: '#2a2a2a',
              color: 'white',
            }}
          >
            <H2 style={{ color: 'white' }}>Tema</H2>
            <Text mt="md" style={{ textAlign: 'center', color: '#e0e0e0' }}>
              Site görünüm ayarlarını yönetin
            </Text>
          </Box>
        </Box>

        <Box
          width={[1, 1/2, 1/2, 1/4]}
          p="md"
        >
          <Box
            bg="white"
            p="xl"
            style={{
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: '#2a2a2a',
              color: 'white',
            }}
          >
            <H2 style={{ color: 'white' }}>İletişim</H2>
            <Text mt="md" style={{ textAlign: 'center', color: '#e0e0e0' }}>
              Gelen mesajları ve iletişim bilgilerini yönetin
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 
const resources = [
  {
    resource: {
      id: 'products',
      name: 'Ürünler',
      properties: {
        id: { type: 'string', isId: true },
        title: {
          type: 'string',
          isTitle: true,
          label: 'Ürün Adı',
        },
        description: {
          type: 'textarea',
          label: 'Açıklama',
        },
        imageSrc: {
          type: 'string',
          label: 'Resim URL',
        },
        href: {
          type: 'string',
          label: 'Bağlantı',
        },
        techSpecs: {
          type: 'mixed',
          label: 'Teknik Özellikler',
          subProperties: {
            label: {
              type: 'string',
              label: 'Özellik',
            },
            value: {
              type: 'string',
              label: 'Değer',
            },
          },
        },
      },
      features: ['list', 'show', 'edit', 'filter', 'delete'],
    },
    options: {
      navigation: {
        name: 'Ürünler',
        icon: 'Package',
      },
      actions: {
        list: {
          showFilter: true,
          layout: [
            ['title', 'imageSrc'],
            ['href'],
          ],
        },
        edit: {
          layout: [
            ['title'],
            ['description'],
            ['imageSrc'],
            ['href'],
            ['techSpecs'],
          ],
        },
      },
    },
  },
  {
    resource: {
      id: 'projects',
      name: 'Projeler',
      properties: {
        id: { type: 'string', isId: true },
        title: {
          type: 'string',
          isTitle: true,
          label: 'Proje Adı',
        },
        year: {
          type: 'string',
          label: 'Yıl',
        },
        description: {
          type: 'textarea',
          label: 'Açıklama',
        },
        imageSrc: {
          type: 'string',
          label: 'Resim URL',
        },
        imageAlt: {
          type: 'string',
          label: 'Resim Alt Metni',
        },
        href: {
          type: 'string',
          label: 'Bağlantı',
        },
      },
      features: ['list', 'show', 'edit', 'filter', 'delete'],
    },
    options: {
      navigation: {
        name: 'Projeler',
        icon: 'BarChart',
      },
    },
  },
  {
    resource: {
      id: 'theme',
      name: 'Tema Ayarları',
      properties: {
        id: { type: 'string', isId: true },
        primaryColor: {
          type: 'string',
          label: 'Ana Renk',
        },
        textColor: {
          type: 'string',
          label: 'Yazı Rengi',
        },
        headerBackground: {
          type: 'string',
          label: 'Header Arkaplan',
        },
        footerBackground: {
          type: 'string',
          label: 'Footer Arkaplan',
        },
        buttonTextColor: {
          type: 'string',
          label: 'Buton Yazı Rengi',
        },
        fontSize: {
          type: 'string',
          label: 'Yazı Boyutu',
        },
        spacing: {
          type: 'string',
          label: 'Boşluk (Spacing)',
        },
      },
      features: ['list', 'show', 'edit'],
    },
    options: {
      navigation: {
        name: 'Tema Ayarları',
        icon: 'Sliders',
      },
    },
  },
  {
    resource: {
      id: 'contact',
      name: 'İletişim',
      properties: {
        id: { type: 'string', isId: true },
        name: {
          type: 'string',
          isTitle: true,
          label: 'Ad Soyad',
        },
        email: {
          type: 'string',
          label: 'E-posta',
        },
        message: {
          type: 'textarea',
          label: 'Mesaj',
        },
        createdAt: {
          type: 'datetime',
          label: 'Mesaj Tarihi',
        },
        status: {
          type: 'string',
          label: 'Durum',
          enum: ['new', 'read', 'replied', 'archived'],
          enumNames: ['Yeni', 'Okundu', 'Cevaplandı', 'Arşivlendi'],
        },
      },
      features: ['list', 'show', 'edit', 'filter', 'delete'],
    },
    options: {
      navigation: {
        name: 'İletişim',
        icon: 'MessageSquare',
      },
    },
  },
];

module.exports = resources; 
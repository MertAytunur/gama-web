# S&P Akıllı Güçlendirme Türkçe Web Sitesi

Bu proje, S&P Reinforcement firmasının Türkçe web sitesini oluşturmak için Next.js, React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir. https://www.sp-reinforcement.eu/en-EU adresindeki orijinal İngilizce web sitesinin Türkçe uyarlamasıdır.

## Özellikler

- Next.js tabanlı modern web sitesi
- Türkçe içerik
- Duyarlı (responsive) tasarım
- SEO dostu yapı
- TypeScript ile tip güvenliği
- Tailwind CSS ile stil uygulaması

## Başlarken

Bu projeyi yerel geliştirme ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Ardından, tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Proje Yapısı

```
sp-reinforcement-tr/
├── components/     # Yeniden kullanılabilir UI bileşenleri
├── pages/          # Sayfalar ve API rotaları
├── public/         # Statik varlıklar (resimler, fontlar, vs.)
├── styles/         # Global stil dosyaları
├── next.config.js  # Next.js yapılandırması
└── ...
```

## Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/) - React tabanlı web uygulama çerçevesi
- [React](https://reactjs.org/) - UI kütüphanesi
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tip sistemi
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS çerçevesi

## Dağıtım

Bu projeyi üretim için derlemek için:

```bash
npm run build
```

Derlenen uygulamayı başlatmak için:

```bash
npm run start
```

## Lisans

Bu proje, orijinal içerik sahibi olan S&P Reinforcement'a aittir ve sadece eğitim amaçlı olarak klonlanmıştır. 
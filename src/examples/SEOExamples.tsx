/**
 * SEO Hook Usage Examples
 * 
 * This file contains practical examples of how to use the useSEO hook
 * in different scenarios across your React application.
 */

import { useSEO, SEO_CONFIGS, generateTitle, generateDescription } from '@/utils/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ============================================
// Example 1: Using Predefined SEO Configuration
// ============================================

export const HomePageExample = () => {
  // Simple usage with predefined config
  useSEO(SEO_CONFIGS.home);

  return (
    <div>
      <h1>Главная страница</h1>
    </div>
  );
};

// ============================================
// Example 2: Custom SEO Configuration
// ============================================

export const CustomSEOExample = () => {
  // Custom configuration for a specific page
  useSEO({
    title: 'Защита персональных данных по 152-ФЗ',
    description: 'Комплексные услуги по защите персональных данных. Аудит, внедрение СУИБ, подготовка к проверкам.',
    keywords: 'защита ПДн, 152-ФЗ, Роскомнадзор, СУИБ, аудит',
    ogImage: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/images/services/personal-data.jpg',
  });

  return (
    <div>
      <h1>Защита персональных данных</h1>
    </div>
  );
};

// ============================================
// Example 3: Dynamic SEO Based on Props
// ============================================

interface ServicePageProps {
  serviceTitle: string;
  serviceDescription: string;
  serviceKeywords: string[];
  serviceImage: string;
}

export const DynamicServicePage = ({
  serviceTitle,
  serviceDescription,
  serviceKeywords,
  serviceImage,
}: ServicePageProps) => {
  // Dynamic SEO based on component props
  useSEO({
    title: serviceTitle,
    description: serviceDescription,
    keywords: serviceKeywords.join(', '),
    ogImage: serviceImage,
  });

  return (
    <div>
      <h1>{serviceTitle}</h1>
      <p>{serviceDescription}</p>
    </div>
  );
};

// ============================================
// Example 4: Blog Post with Article Type
// ============================================

interface BlogPostProps {
  title: string;
  excerpt: string;
  coverImage: string;
  publishDate: string;
}

export const BlogPostExample = ({ title, excerpt, coverImage, publishDate }: BlogPostProps) => {
  useSEO({
    title,
    description: excerpt,
    keywords: 'информационная безопасность, статья, блог, КиифСтэк',
    ogImage: coverImage,
    ogType: 'article', // Special type for articles
  });

  return (
    <article>
      <h1>{title}</h1>
      <time>{publishDate}</time>
      <p>{excerpt}</p>
    </article>
  );
};

// ============================================
// Example 5: Using Helper Functions
// ============================================

export const LongContentExample = () => {
  const longTitle = 'Комплексная аттестация информационных систем персональных данных по требованиям ФСТЭК России и ФСБ РФ с гарантией';
  const longDescription = 'Наша компания предоставляет полный спектр услуг по аттестации информационных систем персональных данных в соответствии с требованиями ФСТЭК России. Мы имеем все необходимые лицензии и сертификаты для проведения работ любой сложности. Наши специалисты обладают многолетним опытом работы.';

  useSEO({
    title: generateTitle(longTitle, 60), // Truncates to optimal length
    description: generateDescription(longDescription, 160), // Truncates to optimal length
    keywords: 'аттестация, ФСТЭК, ИСПДн, сертификация',
  });

  return (
    <div>
      <h1>{longTitle}</h1>
      <p>{longDescription}</p>
    </div>
  );
};

// ============================================
// Example 6: Page with No Index (Private)
// ============================================

export const AdminPanelExample = () => {
  useSEO({
    title: 'Административная панель',
    description: 'Панель управления системой',
    noindex: true, // Prevent search engine indexing
    nofollow: true, // Prevent following links
  });

  return (
    <div>
      <h1>Панель администратора</h1>
      <p>Эта страница не индексируется поисковыми системами</p>
    </div>
  );
};

// ============================================
// Example 7: Product Page with Custom Canonical
// ============================================

interface ProductPageProps {
  productId: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: string;
}

export const ProductPageExample = ({
  productId,
  productName,
  productDescription,
  productImage,
  productPrice,
}: ProductPageProps) => {
  useSEO({
    title: `${productName} - Купить в КиифСтэк`,
    description: `${productDescription} Цена: ${productPrice}. Официальный дистрибьютор.`,
    keywords: `${productName}, купить, цена, ${productPrice}`,
    ogImage: productImage,
    ogType: 'product',
    canonicalUrl: `https://xn--80aaeib5aai5bc5eh.xn--p1ai/catalog/product/${productId}`,
  });

  return (
    <div>
      <h1>{productName}</h1>
      <img src={productImage} alt={productName} />
      <p>{productDescription}</p>
      <span>{productPrice}</span>
    </div>
  );
};

// ============================================
// Example 8: Complete Page Integration
// ============================================

export const CompletePage = () => {
  // Apply SEO configuration at the top of the component
  useSEO(SEO_CONFIGS.services.attestation);

  const features = [
    'Аттестация по ФСТЭК',
    'Аттестация по ФСБ',
    'Категорирование объектов КИИ',
    'Подготовка документации',
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Аттестация информационных систем
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Профессиональная аттестация по требованиям ФСТЭК и ФСБ
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Наши услуги
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <li key={index} className="p-6 border rounded-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// ============================================
// Example 9: Getting SEO Information
// ============================================

export const SEOInfoExample = () => {
  // The hook returns useful information about the current SEO state
  const seoInfo = useSEO({
    title: 'Контакты',
    description: 'Свяжитесь с нами для консультации',
  });

  return (
    <div>
      <h1>Контакты</h1>
      <p>Текущий URL: {seoInfo.currentUrl}</p>
      <p>Название сайта: {seoInfo.siteName}</p>
      <p>Базовый URL: {seoInfo.siteUrl}</p>
    </div>
  );
};

// ============================================
// Example 10: All Predefined Configs
// ============================================

export const AllConfigsExample = () => {
  // You can easily switch between predefined configs
  
  // Home page
  // useSEO(SEO_CONFIGS.home);
  
  // Service pages
  // useSEO(SEO_CONFIGS.services.personalData);
  // useSEO(SEO_CONFIGS.services.attestation);
  // useSEO(SEO_CONFIGS.services.consulting);
  
  // Catalog pages
  // useSEO(SEO_CONFIGS.catalog.antivirus);
  // useSEO(SEO_CONFIGS.catalog.accessControl);
  // useSEO(SEO_CONFIGS.catalog.trustedBoot);
  // useSEO(SEO_CONFIGS.catalog.firewall);
  
  // Company pages
  // useSEO(SEO_CONFIGS.company.about);
  useSEO(SEO_CONFIGS.company.contacts);

  return (
    <div>
      <h1>Контакты</h1>
    </div>
  );
};

// ============================================
// Usage in Your Actual Pages
// ============================================

/*
// In src/pages/Index.tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Index = () => {
  useSEO(SEO_CONFIGS.home);
  
  return (
    // Your page content
  );
};

// In src/pages/services/PersonalData.tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const PersonalData = () => {
  useSEO(SEO_CONFIGS.services.personalData);
  
  return (
    // Your page content
  );
};

// In src/pages/catalog/Antivirus.tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Antivirus = () => {
  useSEO(SEO_CONFIGS.catalog.antivirus);
  
  return (
    // Your page content
  );
};
*/

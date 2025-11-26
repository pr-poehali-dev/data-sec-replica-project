# SEO Utility Usage Examples

This document provides comprehensive examples of how to use the SEO utility (`src/utils/seo.tsx`) across your React application.

## Table of Contents
- [Basic Usage](#basic-usage)
- [Using Predefined Configs](#using-predefined-configs)
- [Custom SEO Configuration](#custom-seo-configuration)
- [Dynamic SEO](#dynamic-seo)
- [Helper Functions](#helper-functions)
- [Best Practices](#best-practices)

---

## Basic Usage

### Example 1: Home Page with Predefined Config

```tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Index = () => {
  // Apply predefined SEO configuration
  useSEO(SEO_CONFIGS.home);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Your content */}
    </div>
  );
};

export default Index;
```

### Example 2: Service Page - Personal Data Protection

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const PersonalData = () => {
  // Apply SEO for personal data service page
  useSEO(SEO_CONFIGS.services.personalData);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <h1>Защита персональных данных</h1>
        {/* Your content */}
      </main>
      <Footer />
    </div>
  );
};

export default PersonalData;
```

### Example 3: Catalog Page - Antivirus Solutions

```tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Antivirus = () => {
  // Apply SEO for antivirus catalog page
  useSEO(SEO_CONFIGS.catalog.antivirus);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <h1>Антивирусные решения</h1>
        {/* Your content */}
      </main>
      <Footer />
    </div>
  );
};

export default Antivirus;
```

---

## Using Predefined Configs

The utility includes predefined SEO configurations for common pages:

```tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

// Home page
useSEO(SEO_CONFIGS.home);

// Service pages
useSEO(SEO_CONFIGS.services.personalData);
useSEO(SEO_CONFIGS.services.attestation);
useSEO(SEO_CONFIGS.services.consulting);

// Catalog pages
useSEO(SEO_CONFIGS.catalog.antivirus);
useSEO(SEO_CONFIGS.catalog.accessControl);
useSEO(SEO_CONFIGS.catalog.trustedBoot);
useSEO(SEO_CONFIGS.catalog.firewall);

// Company pages
useSEO(SEO_CONFIGS.company.about);
useSEO(SEO_CONFIGS.company.contacts);
```

---

## Custom SEO Configuration

### Example 4: Custom Configuration for a Blog Post

```tsx
import { useSEO } from '@/utils/seo';

const BlogPost = () => {
  useSEO({
    title: 'Новые требования ФСТЭК к защите данных',
    description: 'Анализ последних изменений в требованиях ФСТЭК России к защите персональных данных и их влияние на бизнес.',
    keywords: 'ФСТЭК, требования, защита данных, изменения, 2025',
    ogImage: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/images/blog/fstek-requirements.jpg',
    ogType: 'article',
  });

  return (
    <article>
      <h1>Новые требования ФСТЭК к защите данных</h1>
      {/* Your content */}
    </article>
  );
};

export default BlogPost;
```

### Example 5: Custom Configuration with Canonical URL

```tsx
import { useSEO } from '@/utils/seo';

const NewsArticle = () => {
  useSEO({
    title: 'Компания КиифСтэк получила новый сертификат',
    description: 'КиифСтэк успешно прошла аудит и получила сертификат соответствия ISO 27001 в области информационной безопасности.',
    keywords: 'КиифСтэк, сертификат, ISO 27001, информационная безопасность',
    ogImage: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/images/news/iso-certificate.jpg',
    canonicalUrl: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/news/iso-certificate-2025',
  });

  return (
    <article>
      <h1>Компания КиифСтэк получила новый сертификат</h1>
      {/* Your content */}
    </article>
  );
};

export default NewsArticle;
```

### Example 6: Page with No Index (e.g., Admin Panel)

```tsx
import { useSEO } from '@/utils/seo';

const AdminPanel = () => {
  // Prevent search engines from indexing this page
  useSEO({
    title: 'Панель администратора',
    description: 'Административная панель управления',
    noindex: true,
    nofollow: true,
  });

  return (
    <div>
      <h1>Панель администратора</h1>
      {/* Your content */}
    </div>
  );
};

export default AdminPanel;
```

---

## Dynamic SEO

### Example 7: Dynamic SEO Based on Route Parameters

```tsx
import { useParams } from 'react-router-dom';
import { useSEO, generateTitle, generateDescription } from '@/utils/seo';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductPage = () => {
  const { productId } = useParams();
  
  // Fetch product data (example)
  const product: Product = {
    id: productId || '',
    name: 'Kaspersky Endpoint Security',
    description: 'Комплексная защита корпоративных рабочих станций от всех типов угроз. Сертифицировано ФСТЭК России.',
    image: '/images/products/kaspersky.jpg',
  };

  useSEO({
    title: generateTitle(product.name),
    description: generateDescription(product.description),
    keywords: 'антивирус, Kaspersky, защита endpoints, корпоративная безопасность',
    ogImage: `https://xn--80aaeib5aai5bc5eh.xn--p1ai${product.image}`,
    ogType: 'product',
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
```

### Example 8: Dynamic SEO with Data Fetching

```tsx
import { useEffect, useState } from 'react';
import { useSEO } from '@/utils/seo';

interface Article {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
}

const ArticlePage = ({ articleId }: { articleId: string }) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Fetch article data
    fetch(`/api/articles/${articleId}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [articleId]);

  // Apply SEO when article data is loaded
  useSEO({
    title: article?.title || 'Загрузка...',
    description: article?.excerpt || 'Статья загружается...',
    keywords: 'информационная безопасность, статья, КиифСтэк',
    ogImage: article?.coverImage,
  });

  if (!article) {
    return <div>Загрузка...</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
};

export default ArticlePage;
```

---

## Helper Functions

### Example 9: Using Title Generation Helper

```tsx
import { useSEO, generateTitle } from '@/utils/seo';

const LongTitlePage = () => {
  const longTitle = 'Комплексная аттестация информационных систем по требованиям ФСТЭК России и ФСБ РФ';
  
  useSEO({
    title: generateTitle(longTitle, 60), // Truncates to 60 chars
    description: 'Профессиональная аттестация ИС',
    keywords: 'аттестация, ФСТЭК, ФСБ',
  });

  return <div>{/* Your content */}</div>;
};
```

### Example 10: Using Description Generation Helper

```tsx
import { useSEO, generateDescription } from '@/utils/seo';

const NewsPage = () => {
  const longDescription = 'В рамках реализации национальной стратегии кибербезопасности компания КиифСтэк объявляет о расширении линейки услуг по защите критической информационной инфраструктуры. Новые решения включают в себя систему мониторинга угроз в реальном времени...';
  
  useSEO({
    title: 'Новости компании',
    description: generateDescription(longDescription, 160), // Truncates to 160 chars
    keywords: 'новости, КиифСтэк, кибербезопасность',
  });

  return <div>{/* Your content */}</div>;
};
```

---

## Best Practices

### 1. Always Use SEO Hook at Component Top Level

```tsx
// GOOD ✅
const MyPage = () => {
  useSEO({ title: 'My Page' });
  
  return <div>Content</div>;
};

// BAD ❌
const MyPage = () => {
  if (someCondition) {
    useSEO({ title: 'My Page' }); // Don't use hooks conditionally
  }
  
  return <div>Content</div>;
};
```

### 2. Keep Titles Between 50-60 Characters

```tsx
// GOOD ✅
useSEO({
  title: 'Защита персональных данных',
  // Length: 27 chars - perfect for SEO
});

// BAD ❌
useSEO({
  title: 'Комплексная защита персональных данных для корпоративных клиентов с гарантией',
  // Length: 79 chars - too long, will be truncated in search results
});
```

### 3. Keep Descriptions Between 150-160 Characters

```tsx
// GOOD ✅
useSEO({
  description: 'Комплексные услуги по защите персональных данных. Аудит, внедрение СУИБ, подготовка к проверкам Роскомнадзора.',
  // Length: 115 chars - good for SEO
});
```

### 4. Use Specific Keywords for Russian Market

```tsx
// GOOD ✅
useSEO({
  keywords: 'защита персональных данных, ПДн, Роскомнадзор, 152-ФЗ, СУИБ',
});

// BAD ❌
useSEO({
  keywords: 'data protection, GDPR, privacy', // English keywords for Russian site
});
```

### 5. Always Provide High-Quality OG Images

```tsx
// GOOD ✅
useSEO({
  ogImage: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/images/og-service-1200x630.jpg',
  // Recommended size: 1200x630px
});

// BAD ❌
useSEO({
  ogImage: '/small-logo.png', // Too small, not optimized for social sharing
});
```

### 6. Use Canonical URLs for Duplicate Content

```tsx
// GOOD ✅
const ProductPage = () => {
  useSEO({
    title: 'Kaspersky Endpoint Security',
    canonicalUrl: 'https://xn--80aaeib5aai5bc5eh.xn--p1ai/catalog/antivirus/kaspersky',
    // Prevents duplicate content issues
  });
};
```

### 7. Combine with React Router for Dynamic Pages

```tsx
import { useLocation } from 'react-router-dom';
import { useSEO } from '@/utils/seo';

const DynamicPage = () => {
  const location = useLocation();
  const seoInfo = useSEO({
    title: 'Dynamic Page',
  });

  console.log('Current URL:', seoInfo.currentUrl);
  console.log('Site Name:', seoInfo.siteName);
  
  return <div>Content</div>;
};
```

---

## Complete Example: Full Integration

Here's a complete example showing how to integrate SEO across an entire page:

```tsx
import { useSEO, SEO_CONFIGS } from '@/utils/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AttestationService = () => {
  // Apply SEO configuration
  useSEO(SEO_CONFIGS.services.attestation);

  const benefits = [
    {
      title: 'Экспертиза',
      description: 'Опыт работы более 10 лет',
    },
    {
      title: 'Сертификаты',
      description: 'Все необходимые лицензии ФСТЭК',
    },
    {
      title: 'Гарантия',
      description: 'Гарантия получения аттестата',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-secondary to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Аттестация информационных систем
            </h1>
            <p className="text-xl text-blue-100">
              Профессиональная аттестация по требованиям ФСТЭК и ФСБ
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AttestationService;
```

---

## Testing SEO Implementation

To verify that SEO tags are properly set:

1. Open browser DevTools (F12)
2. Go to Elements/Inspector tab
3. Look at `<head>` section
4. Verify the following tags exist:
   - `<title>` - Page title
   - `<meta name="description">` - Description
   - `<meta name="keywords">` - Keywords
   - `<meta property="og:title">` - Open Graph title
   - `<meta property="og:description">` - Open Graph description
   - `<meta property="og:image">` - Open Graph image
   - `<link rel="canonical">` - Canonical URL

You can also use browser extensions like:
- SEO Meta in 1 Click
- META SEO inspector
- Open Graph Preview

---

## Additional Resources

- [Google Search Central - Title Tags](https://developers.google.com/search/docs/appearance/title-link)
- [Open Graph Protocol](https://ogp.me/)
- [Yandex Webmaster Guidelines](https://yandex.ru/support/webmaster/)

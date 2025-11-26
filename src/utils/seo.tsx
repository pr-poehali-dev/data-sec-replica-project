import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SITE_NAME = 'ЧОП "СБ ЗВИ"';
const SITE_URL = 'https://xn--80aaeib5aai5bc5eh.xn--p1ai';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const useSEO = (config: SEOConfig) => {
  const location = useLocation();

  useEffect(() => {
    const {
      title,
      description,
      keywords,
      ogImage = DEFAULT_OG_IMAGE,
      ogType = 'website',
      canonicalUrl,
      noindex = false,
      nofollow = false,
    } = config;

    document.title = `${title} | ${SITE_NAME}`;
    document.documentElement.lang = 'ru';

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);

    const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
    setMetaTag('robots', robotsContent);

    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl || `${SITE_URL}${location.pathname}`, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:locale', 'ru_RU', true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl || `${SITE_URL}${location.pathname}`;

  }, [config, location.pathname]);
};

export const generateTitle = (baseTitle: string, maxLength = 60): string => {
  const suffix = ` | ${SITE_NAME}`;
  const availableLength = maxLength - suffix.length;
  
  if (baseTitle.length <= availableLength) {
    return baseTitle;
  }
  
  return baseTitle.substring(0, availableLength - 3) + '...';
};

export const generateDescription = (text: string, maxLength = 160): string => {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength - 3) + '...';
};

export const SEO_CONFIGS = {
  home: {
    title: 'Защита информации и кибербезопасность',
    description: 'ЧОП "СБ ЗВИ" — профессиональные услуги по защите информации: аттестация, защита персональных данных, аудит ИБ. 15 лет опыта, 100+ проектов. Москва.',
    keywords: 'защита информации, кибербезопасность, аттестация, защита данных, информационная безопасность, ЧОП СБ ЗВИ, Москва',
  },
  
  services: {
    personalData: {
      title: 'Защита персональных данных',
      description: 'Комплексные услуги по защите персональных данных. Аудит, внедрение СУИБ, подготовка к проверкам Роскомнадзора. Гарантия соответствия 152-ФЗ.',
      keywords: 'защита персональных данных, ПДн, Роскомнадзор, 152-ФЗ, СУИБ, аудит безопасности',
      canonicalUrl: `${SITE_URL}/services/personal-data`,
    },
    
    attestation: {
      title: 'Аттестация объектов информатизации',
      description: 'Профессиональная аттестация объектов информатизации по требованиям ФСТЭК. Полный цикл работ: обследование, документация, испытания, получение аттестата.',
      keywords: 'аттестация, ФСТЭК, объекты информатизации, аттестат соответствия, испытания',
      canonicalUrl: `${SITE_URL}/services/attestation`,
    },
    
    consulting: {
      title: 'Консалтинг в области информационной безопасности',
      description: 'Экспертный консалтинг по информационной безопасности. Разработка политик, анализ рисков, построение СУИБ, консультации по требованиям регуляторов.',
      keywords: 'консалтинг ИБ, информационная безопасность, СУИБ, анализ рисков, политики безопасности',
      canonicalUrl: `${SITE_URL}/services/consulting`,
    },
  },
  
  catalog: {
    antivirus: {
      title: 'Антивирусное ПО',
      description: 'Сертифицированные средства антивирусной защиты для бизнеса. Kaspersky, Dr.Web, Eset. Поставка, внедрение, техническая поддержка.',
      keywords: 'антивирус, Kaspersky, Dr.Web, антивирусное ПО, защита от вирусов',
      canonicalUrl: `${SITE_URL}/catalog/antivirus`,
    },
    
    accessControl: {
      title: 'Системы контроля доступа',
      description: 'СКУД и системы контроля доступа к информации. Сертифицированные решения для защиты конфиденциальных данных. Внедрение и настройка.',
      keywords: 'СКУД, контроль доступа, разграничение прав, защита данных',
      canonicalUrl: `${SITE_URL}/catalog/access-control`,
    },
    
    trustedBoot: {
      title: 'Средства доверенной загрузки',
      description: 'Сертифицированные средства доверенной загрузки для защиты от несанкционированного ПО. Соответствие требованиям ФСТЭК и ФСБ.',
      keywords: 'доверенная загрузка, ФСТЭК, ФСБ, защита загрузки, контроль целостности',
      canonicalUrl: `${SITE_URL}/catalog/trusted-boot`,
    },
    
    firewall: {
      title: 'Межсетевые экраны',
      description: 'Сертифицированные межсетевые экраны и системы обнаружения вторжений. Защита периметра, фильтрация трафика, мониторинг угроз.',
      keywords: 'межсетевой экран, firewall, МЭ, защита сети, IDS, IPS',
      canonicalUrl: `${SITE_URL}/catalog/firewall`,
    },
  },
  
  company: {
    about: {
      title: 'О компании ЧОП "СБ ЗВИ"',
      description: 'ЧОП "СБ ЗВИ" — 15 лет на рынке информационной безопасности. 100+ завершенных проектов, 50+ постоянных клиентов. Команда сертифицированных специалистов в Москве.',
      keywords: 'о компании, ЧОП СБ ЗВИ, информационная безопасность, партнер, Москва',
      canonicalUrl: `${SITE_URL}/company/about`,
    },
    
    contacts: {
      title: 'Контакты ЧОП "СБ ЗВИ"',
      description: 'Свяжитесь с ЧОП "СБ ЗВИ": +7 (901) 500-00-78, +7 (901) 500-00-87, info@security-center.ru. Офис в Москве: Партийный пер., д. 1. Консультации по ИБ.',
      keywords: 'контакты, телефон, адрес, офис Москва, ЧОП СБ ЗВИ',
      canonicalUrl: `${SITE_URL}/contacts`,
    },
  },
  
  info: {
    personalDataBasics: {
      title: 'Основы защиты персональных данных',
      description: 'Полное руководство по защите персональных данных: требования законодательства, уровни защиты, организационные и технические меры.',
      keywords: 'персональные данные, 152-ФЗ, требования, уровни защиты, методы защиты',
      canonicalUrl: `${SITE_URL}/info/personal-data-basics`,
    },
    
    penalties: {
      title: 'Штрафы за нарушение требований ИБ',
      description: 'Актуальные штрафы и санкции за нарушения в области информационной безопасности. Административная и уголовная ответственность.',
      keywords: 'штрафы, ответственность, КоАП, нарушения ИБ, санкции',
      canonicalUrl: `${SITE_URL}/info/penalties`,
    },
    
    articles: {
      title: 'Статьи по информационной безопасности',
      description: 'Экспертные статьи и аналитика по информационной безопасности. Обзоры технологий, анализ угроз, практические рекомендации.',
      keywords: 'статьи, аналитика, информационная безопасность, обзоры, экспертиза',
      canonicalUrl: `${SITE_URL}/info/articles`,
    },
    
    faq: {
      title: 'Часто задаваемые вопросы',
      description: 'Ответы на популярные вопросы по защите информации, аттестации, защите персональных данных и средствам информационной безопасности.',
      keywords: 'FAQ, вопросы и ответы, информационная безопасность, консультации',
      canonicalUrl: `${SITE_URL}/info/faq`,
    },
    
    news: {
      title: 'Новости информационной безопасности',
      description: 'Актуальные новости в сфере информационной безопасности: изменения законодательства, новые угрозы, обновления продуктов.',
      keywords: 'новости, ИБ, кибербезопасность, актуальное, законодательство',
      canonicalUrl: `${SITE_URL}/info/news`,
    },
    
    legislation: {
      title: 'Законодательство в области ИБ',
      description: 'База нормативных документов по информационной безопасности: федеральные законы, приказы ФСТЭК и ФСБ, стандарты ГОСТ.',
      keywords: 'законодательство, нормативы, ФСТЭК, ФСБ, законы ИБ',
      canonicalUrl: `${SITE_URL}/info/legislation`,
    },
  },
};
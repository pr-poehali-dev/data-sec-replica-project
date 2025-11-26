import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Company = () => {
  useSEO(SEO_CONFIGS.company.about);
  const sections = [
    {
      icon: 'Building',
      title: 'О компании',
      description: 'История, миссия и ценности нашей организации',
      link: '/company/about'
    },
    {
      icon: 'Clock',
      title: 'История',
      description: 'Путь развития компании и ключевые достижения',
      link: '/company/history'
    },
    {
      icon: 'Award',
      title: 'Лицензии и сертификаты',
      description: 'Документы, подтверждающие нашу квалификацию',
      link: '/company/licenses'
    },
    {
      icon: 'Users',
      title: 'Клиенты',
      description: 'Компании, которые доверяют нам защиту своей информации',
      link: '/company/clients'
    },
    {
      icon: 'Handshake',
      title: 'Партнеры',
      description: 'Наши партнеры и стратегические альянсы',
      link: '/company/partners'
    },
    {
      icon: 'Briefcase',
      title: 'Вакансии',
      description: 'Открытые позиции и карьерные возможности',
      link: '/company/careers'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                О компании
              </h1>
              <p className="text-xl text-blue-100 animate-fade-in">
                ЧОП "СБ ЗВИ" — эксперт в области информационной безопасности с 15-летним опытом
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, idx) => (
                <Link key={idx} to={section.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200 cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={section.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl text-secondary">{section.title}</CardTitle>
                      <CardDescription className="text-base">{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        Подробнее
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Наши достижения</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Завершенных проектов</p>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted-foreground">Лет на рынке</p>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;
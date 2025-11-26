import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Info = () => {
  const sections = [
    {
      icon: 'BookOpen',
      title: 'Ликбез по персональным данным',
      description: 'Основные понятия, требования законодательства и практические рекомендации',
      link: '/info/personal-data-basics'
    },
    {
      icon: 'AlertTriangle',
      title: 'Штрафы за нарушения',
      description: 'Актуальная информация об ответственности за нарушение требований ИБ',
      link: '/info/penalties'
    },
    {
      icon: 'FileText',
      title: 'Статьи и публикации',
      description: 'Экспертные материалы по различным аспектам информационной безопасности',
      link: '/info/articles'
    },
    {
      icon: 'MessageCircle',
      title: 'Вопросы и ответы',
      description: 'Ответы на частые вопросы по ИБ от наших экспертов',
      link: '/info/faq'
    },
    {
      icon: 'Newspaper',
      title: 'Новости о ПДн',
      description: 'Актуальные новости в сфере защиты персональных данных',
      link: '/info/news'
    },
    {
      icon: 'Scale',
      title: 'Законодательство',
      description: 'База нормативных документов и законодательных актов',
      link: '/info/legislation'
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
                Информация
              </h1>
              <p className="text-xl text-blue-100 animate-fade-in">
                Полезные материалы, статьи и новости по информационной безопасности
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
      </main>

      <Footer />
    </div>
  );
};

export default Info;

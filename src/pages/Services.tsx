import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'Shield',
      title: 'Аттестация объектов информатизации',
      description: 'Комплексная оценка защищенности информационных систем и объектов критической инфраструктуры в соответствии с требованиями регуляторов.',
      features: ['Анализ требований безопасности', 'Разработка документации', 'Проведение испытаний', 'Получение аттестата']
    },
    {
      id: 2,
      icon: 'Lock',
      title: 'Защита персональных данных',
      description: 'Разработка и внедрение системы защиты персональных данных, соответствующей требованиям ФЗ-152 и стандартам ФСТЭК.',
      features: ['Категорирование ИСПДн', 'Разработка модели угроз', 'Внедрение СЗИ', 'Обучение персонала']
    },
    {
      id: 3,
      icon: 'FileCheck',
      title: 'Аудит информационной безопасности',
      description: 'Всесторонний анализ текущего состояния ИБ, выявление уязвимостей и разработка рекомендаций по их устранению.',
      features: ['Анализ инфраструктуры', 'Тестирование на проникновение', 'Проверка документации', 'План устранения уязвимостей']
    },
    {
      id: 4,
      icon: 'Network',
      title: 'Проектирование систем защиты',
      description: 'Разработка архитектуры защищенных информационных систем с учетом специфики бизнеса и требований законодательства.',
      features: ['Анализ бизнес-процессов', 'Проектирование архитектуры', 'Выбор СЗИ', 'Техническая документация']
    },
    {
      id: 5,
      icon: 'Settings',
      title: 'Внедрение средств защиты',
      description: 'Установка и настройка сертифицированных средств защиты информации, включая DLP, SIEM, МЭ и антивирусные решения.',
      features: ['Подбор оборудования', 'Установка и настройка', 'Интеграция с инфраструктурой', 'Техническая поддержка']
    },
    {
      id: 6,
      icon: 'Users',
      title: 'Консалтинг по ИБ',
      description: 'Экспертное сопровождение по всем вопросам информационной безопасности, помощь в построении эффективной системы управления.',
      features: ['Консультации экспертов', 'Анализ рисков', 'Политики безопасности', 'Сопровождение проектов']
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
                Услуги и решения
              </h1>
              <p className="text-xl text-blue-100 animate-fade-in">
                Полный спектр услуг по обеспечению информационной безопасности вашей организации
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Icon name="CheckCircle" className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-primary hover:bg-blue-600">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Нужна консультация?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса
              </p>
              <Button size="lg" className="bg-primary hover:bg-blue-600">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

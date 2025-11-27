import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SecureApps = () => {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Соответствие требованиям',
      description: 'Разработка приложений с учетом требований ФСТЭК России'
    },
    {
      icon: 'Lock',
      title: 'Защита данных',
      description: 'Криптографическая защита и безопасное хранение информации'
    },
    {
      icon: 'FileCheck',
      title: 'Аттестация',
      description: 'Помощь в получении аттестата соответствия для вашего приложения'
    },
    {
      icon: 'Code',
      title: 'Безопасная разработка',
      description: 'Применение лучших практик безопасной разработки ПО'
    }
  ];

  const services = [
    {
      title: 'Разработка защищенных приложений',
      items: [
        'Проектирование архитектуры с учетом требований безопасности',
        'Разработка под мобильные и десктопные платформы',
        'Интеграция криптографических средств защиты',
        'Внедрение механизмов аутентификации и авторизации'
      ]
    },
    {
      title: 'Анализ и модернизация существующих приложений',
      items: [
        'Аудит безопасности исходного кода',
        'Выявление уязвимостей и рисков',
        'Доработка приложений для соответствия требованиям',
        'Тестирование на проникновение'
      ]
    },
    {
      title: 'Сопровождение и поддержка',
      items: [
        'Обновление средств защиты',
        'Мониторинг безопасности приложений',
        'Техническая поддержка 24/7',
        'Обучение персонала'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Icon name="Smartphone" className="text-primary" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Защищенные приложения
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разработка и адаптация приложений с учетом требований информационной безопасности
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Преимущества</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={benefit.icon} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-lg text-secondary">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Наши услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-secondary mb-2">
                    Нужна консультация по защищенным приложениям?
                  </CardTitle>
                  <CardDescription className="text-base">
                    Свяжитесь с нами для обсуждения вашего проекта
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+79015000078">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Icon name="Phone" className="mr-2" size={20} />
                      Связаться с нами
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecureApps;
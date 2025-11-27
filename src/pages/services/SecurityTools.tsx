import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SecurityTools = () => {
  const categories = [
    {
      icon: 'Lock',
      title: 'Криптографические средства',
      description: 'Шифрование данных и защищенный обмен информацией',
      features: [
        'Сертифицированные средства криптографической защиты',
        'Электронная подпись и ЭДО',
        'VPN и защищенные каналы связи',
        'Шифрование дисков и файлов'
      ]
    },
    {
      icon: 'Shield',
      title: 'Средства контроля доступа',
      description: 'Защита от несанкционированного доступа к информации',
      features: [
        'Контроль доступа к файлам и папкам',
        'Аутентификация пользователей',
        'Разграничение полномочий',
        'Аудит действий пользователей'
      ]
    },
    {
      icon: 'Network',
      title: 'Сетевая безопасность',
      description: 'Защита периметра и контроль сетевого трафика',
      features: [
        'Межсетевые экраны',
        'Системы обнаружения вторжений',
        'Антивирусная защита',
        'Системы предотвращения утечек (DLP)'
      ]
    },
    {
      icon: 'Database',
      title: 'Защита баз данных',
      description: 'Безопасность хранения и обработки данных',
      features: [
        'Защита СУБД от атак',
        'Шифрование данных в БД',
        'Мониторинг активности',
        'Резервное копирование'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Сертифицированные решения',
      description: 'Только средства, имеющие сертификаты ФСТЭК и ФСБ'
    },
    {
      icon: 'Users',
      title: 'Экспертная поддержка',
      description: 'Консультации и помощь в выборе оптимального решения'
    },
    {
      icon: 'Wrench',
      title: 'Внедрение "под ключ"',
      description: 'Полный цикл работ от проектирования до запуска'
    },
    {
      icon: 'LifeBuoy',
      title: 'Техподдержка',
      description: 'Сопровождение и обновление средств защиты'
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
                <Icon name="ShieldCheck" className="text-primary" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Средства защиты информации
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Комплексные решения для защиты информационных систем вашей организации
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Категории средств защиты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={category.icon} className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-secondary mb-2">{category.title}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Наши преимущества</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="border-gray-200 text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon name={advantage.icon} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-lg text-secondary">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
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
              <Card className="border-primary/20 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary text-center mb-2">
                    Подберем оптимальное решение для вашей организации
                  </CardTitle>
                  <CardDescription className="text-center text-base">
                    Наши специалисты помогут выбрать средства защиты под ваши задачи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+79015000078">
                      <Button size="lg" className="w-full sm:w-auto">
                        <Icon name="Phone" className="mr-2" size={20} />
                        Получить консультацию
                      </Button>
                    </a>
                    <Link to="/catalog/antivirus">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        <Icon name="BookOpen" className="mr-2" size={20} />
                        Каталог СЗИ
                      </Button>
                    </Link>
                  </div>
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

export default SecurityTools;
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {

  const services = [
    {
      id: 1,
      icon: 'Shield',
      title: 'Аттестация объектов информатизации',
      description: 'Комплексная оценка защищенности информационных систем и объектов критической инфраструктуры в соответствии с требованиями регуляторов.'
    },
    {
      id: 2,
      icon: 'Lock',
      title: 'Защита персональных данных',
      description: 'Разработка и внедрение системы защиты персональных данных, соответствующей требованиям ФЗ-152 и стандартам ФСТЭК.'
    },
    {
      id: 3,
      icon: 'FileCheck',
      title: 'Аудит информационной безопасности',
      description: 'Всесторонний анализ текущего состояния ИБ, выявление уязвимостей и разработка рекомендаций по их устранению.'
    },
    {
      id: 4,
      icon: 'Network',
      title: 'Проектирование систем защиты',
      description: 'Разработка архитектуры защищенных информационных систем с учетом специфики бизнеса и требований законодательства.'
    },
    {
      id: 5,
      icon: 'Settings',
      title: 'Внедрение средств защиты',
      description: 'Установка и настройка сертифицированных средств защиты информации, включая DLP, SIEM, МЭ и антивирусные решения.'
    },
    {
      id: 6,
      icon: 'Users',
      title: 'Консалтинг по ИБ',
      description: 'Экспертное сопровождение по всем вопросам информационной безопасности, помощь в построении эффективной системы управления.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Банковский сектор',
      description: 'Аттестация АБС крупного федерального банка',
      result: 'Успешная сертификация 150+ объектов'
    },
    {
      id: 2,
      title: 'Промышленность',
      description: 'Защита КИИ производственного предприятия',
      result: 'Категорирование и защита 45 объектов КИИ'
    },
    {
      id: 3,
      title: 'Государственный сектор',
      description: 'Внедрение ГИС регионального значения',
      result: 'Аттестация по 3 классу защищенности'
    }
  ];

  const faq = [
    {
      question: 'Сколько времени занимает аттестация объекта информатизации?',
      answer: 'Срок аттестации зависит от класса защищенности и сложности объекта. В среднем процесс занимает от 2 до 6 месяцев: анализ требований (2-3 недели), разработка документации (1-2 месяца), внедрение СЗИ (1-2 месяца), испытания и получение аттестата (1 месяц).'
    },
    {
      question: 'Какие документы необходимы для начала работ?',
      answer: 'Для старта проекта потребуются: техническое задание на систему, схема сети, перечень обрабатываемой информации, модель угроз (если есть), техническая документация на используемое оборудование и ПО.'
    },
    {
      question: 'Нужно ли получать лицензию ФСТЭК для работы с персональными данными?',
      answer: 'Лицензия требуется только операторам связи и компаниям, предоставляющим услуги по защите информации. Операторам ПДн достаточно выполнить требования ФЗ-152 и приказов ФСТЭК без получения лицензии.'
    },
    {
      question: 'Можно ли использовать несертифицированные средства защиты?',
      answer: 'При обработке информации, содержащей государственную тайну, или при защите КИИ обязательно применение сертифицированных ФСТЭК России СЗИ. Для других случаев допускается использование несертифицированных средств, но мы рекомендуем сертифицированные решения для максимальной защиты.'
    }
  ];

  const clients = [
    'ПАО "Сбербанк"',
    'АО "Газпром нефть"',
    'ФГУП "Почта России"',
    'Министерство промышленности и торговли РФ',
    'ПАО "Ростелеком"',
    'АО "РЖД"'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">

      <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in">
              Комплексная защита вашей информационной инфраструктуры
            </h2>
            <p className="text-xl mb-8 text-blue-100 animate-fade-in">
              Профессиональные услуги по аттестации, аудиту и внедрению средств защиты информации для бизнеса и государственных организаций
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/contacts">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white">
                  Заказать консультацию
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-secondary">
                  Наши услуги
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр решений для обеспечения информационной безопасности вашей организации
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Успешный опыт работы с крупнейшими компаниями и государственными структурами
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm font-medium text-secondary">{project.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ответы на наиболее частые вопросы по информационной безопасности
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Нам доверяют</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Крупнейшие компании и государственные организации выбирают нас
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-center font-medium text-secondary">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-secondary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg mb-6 text-blue-100">
              ООО "ЧОО "СБ ЗВИ" (Центр Безопасности данных) — это команда сертифицированных специалистов с опытом работы более 15 лет в области информационной безопасности.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              Мы помогаем организациям выполнить требования регуляторов, защитить критически важную информацию и построить эффективную систему управления информационной безопасностью.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-blue-100">Завершенных проектов</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <p className="text-blue-100">Лет на рынке</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-blue-100">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-12">
              Наши специалисты ответят на любой ваш вопрос
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79015000078" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">+7 (901) 500-00-78</a>
                  <a href="tel:+79015000087" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">+7 (901) 500-00-87</a>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Icon name="Mail" className="text-primary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@security-center.ru" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">info@security-center.ru</a>
                  <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-blue-600">
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
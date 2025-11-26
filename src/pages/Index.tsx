import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Index = () => {
  // Apply SEO configuration for home page
  useSEO(SEO_CONFIGS.home);

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
        <HeroCarousel />

      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Наши услуги
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">
              Комплексная защита<br />вашего бизнеса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для обеспечения информационной безопасности вашей организации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-gray-200 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Кейсы
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Реализованные проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Успешный опыт работы с крупнейшими компаниями и государственными структурами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="border-2 border-gray-100 hover:border-primary transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-secondary mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-100">
                    <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm font-medium text-green-900">{project.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-secondary">Вопросы и ответы</h2>
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

      <section id="clients" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Клиенты
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Нам доверяют</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Крупнейшие компании и государственные организации выбирают нас
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="group flex items-center justify-center p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300">
                <p className="text-center font-semibold text-secondary group-hover:text-primary transition-colors">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-br from-secondary via-blue-900 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
                О компании
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Надежная защита вашего бизнеса</h2>
              <p className="text-xl mb-6 text-blue-100 leading-relaxed">
                ЧОП "СБ ЗВИ" — это команда сертифицированных специалистов с опытом работы более 15 лет в области информационной безопасности.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Мы помогаем организациям выполнить требования регуляторов, защитить критически важную информацию и построить эффективную систему управления информационной безопасностью.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl font-bold text-primary mb-3">100+</div>
                <p className="text-lg text-blue-100 font-medium">Завершенных проектов</p>
              </div>
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl font-bold text-primary mb-3">15</div>
                <p className="text-lg text-blue-100 font-medium">Лет на рынке</p>
              </div>
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl font-bold text-primary mb-3">98%</div>
                <p className="text-lg text-blue-100 font-medium">Довольных клиентов</p>
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
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
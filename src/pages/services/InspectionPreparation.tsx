import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InspectionPreparation = () => {
  const whatChecked = [
    'Соответствие данных в уведомлении об обработке ПДн реальным процессам организации',
    'Наличие правовых оснований для обработки персональных данных',
    'Факты обработки биометрических данных и соблюдение условий такой обработки',
    'Обработка специальных категорий персональных данных и соблюдение требований',
    'Соблюдение правил трансграничной передачи персональных данных',
    'Порядок принятия решений на основе автоматизированной обработки данных',
    'Обработка данных для продвижения товаров и услуг, политической агитации',
    'Наличие письменного согласия субъекта на обработку его данных',
    'Соблюдение требований при поручении обработки данных третьим лицам',
    'Выполнение требований по уничтожению данных после достижения цели обработки',
    'Обеспечение конфиденциальности при обработке персональных данных',
    'Принятие мер для обеспечения безопасности персональных данных',
    'Информирование лиц о факте обработки их персональных данных',
    'Соблюдение требований к типовым формам документов с персональными данными',
    'Правильность ведения журналов и реестров с персональными данными',
    'Определение мест хранения данных и перечня лиц с доступом к ним',
    'Обеспечение раздельного хранения данных, обрабатываемых в разных целях',
    'Меры, обеспечивающие сохранность данных и исключающие несанкционированный доступ'
  ];

  const services = [
    {
      icon: 'FileSearch',
      title: 'Первичная консультация',
      description: 'Анализ текущей ситуации и выработка стратегии успешного прохождения проверки или профилактического визита'
    },
    {
      icon: 'FileText',
      title: 'Комплект документов',
      description: 'Разработка полного пакета внутренней документации, регламентирующей обработку и защиту персональных данных'
    },
    {
      icon: 'Database',
      title: 'Регистрация в реестре',
      description: 'Подготовка и подача уведомления для регистрации в качестве оператора персональных данных'
    },
    {
      icon: 'CheckCircle2',
      title: 'Анализ реестра',
      description: 'Проверка корректности сведений в реестре операторов ПДн и внесение необходимых изменений'
    },
    {
      icon: 'Mail',
      title: 'Работа с запросами',
      description: 'Анализ запросов Роскомнадзора и подготовка грамотных ответов на все поступившие вопросы'
    },
    {
      icon: 'Headphones',
      title: 'Сопровождение проверки',
      description: 'Консультации на всех этапах проверки, помощь в минимизации рисков штрафных санкций'
    }
  ];

  const risks = [
    {
      icon: 'AlertTriangle',
      title: 'Штрафы неизбежны для неподготовленных',
      description: 'Контрольные мероприятия в отношении организаций без надлежащей подготовки абсолютно точно заканчиваются штрафами и предписаниями об устранении нарушений'
    },
    {
      icon: 'TrendingUp',
      title: 'Повторные штрафы выше',
      description: 'Штраф не освобождает от необходимости выполнения требований закона, а только ужесточает последующие меры воздействия в виде повторных повышенных санкций'
    },
    {
      icon: 'Target',
      title: 'Отсутствие в реестре — сигнал',
      description: 'Если организация не зарегистрирована в Реестре операторов персональных данных, с большой вероятностью на нее обратят внимание контролирующие органы'
    },
    {
      icon: 'FileWarning',
      title: 'Документы проверяют первыми',
      description: 'Основное затруднение при проверках — отсутствие необходимых внутренних актов, регламентирующих вопросы обработки и защиты персональных данных'
    }
  ];

  const stages = [
    {
      number: '01',
      title: 'Анализ текущей ситуации',
      description: 'Изучаем все процессы обработки персональных данных в вашей организации, выявляем возможные проблемные зоны и риски',
      duration: '1-2 дня'
    },
    {
      number: '02',
      title: 'Разработка стратегии',
      description: 'Формируем четкий план подготовки к проверке с учетом специфики вашей деятельности и выявленных особенностей',
      duration: '1 день'
    },
    {
      number: '03',
      title: 'Подготовка документов',
      description: 'Разрабатываем или актуализируем весь необходимый комплект организационно-распорядительной документации по ПДн',
      duration: '1-2 недели'
    },
    {
      number: '04',
      title: 'Работа с реестром',
      description: 'Регистрируем вас как оператора ПДн или проверяем корректность имеющихся сведений, вносим изменения при необходимости',
      duration: '3-5 дней'
    },
    {
      number: '05',
      title: 'Обучение персонала',
      description: 'Проводим инструктаж ответственных лиц о том, как правильно себя вести при проверке и на какие вопросы как отвечать',
      duration: '1 день'
    },
    {
      number: '06',
      title: 'Сопровождение проверки',
      description: 'Консультируем на всех этапах, анализируем запросы проверяющих, готовим ответы, помогаем минимизировать риски',
      duration: 'Весь период проверки'
    }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Опыт взаимодействия с РКН',
      description: 'Большой опыт успешного сопровождения организаций в ходе проверок и профилактических визитов Роскомнадзора'
    },
    {
      icon: 'Shield',
      title: 'Минимизация рисков',
      description: 'Знаем все подводные камни и умеем предотвращать типичные ошибки, приводящие к штрафам'
    },
    {
      icon: 'FileCheck',
      title: 'Готовые решения',
      description: 'Предоставляем проверенные шаблоны документов и ответов на типовые запросы проверяющих'
    },
    {
      icon: 'MessageSquare',
      title: 'Постоянная связь',
      description: 'Оперативно отвечаем на вопросы и консультируем на протяжении всей проверки'
    },
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Учитываем особенности вашей деятельности и разрабатываем персональную стратегию прохождения проверки'
    },
    {
      icon: 'Award',
      title: 'Гарантия результата',
      description: 'Ведем до полного завершения проверки, помогаем закрыть все замечания и избежать санкций'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="ClipboardCheck" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Подготовка к проверке Роскомнадзора</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Приведение обработки персональных данных в соответствие требованиям Федерального закона № 152-ФЗ с целью успешного прохождения проверки и профилактического визита
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Оформите заявку на услугу, мы свяжемся с вами в ближайшее время и ответим на все интересующие вопросы
                </p>
                <Link to="/contacts">
                  <Button size="lg" className="bg-white text-secondary hover:bg-blue-50">
                    Заказать подготовку к проверке
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-6">Риски неподготовленных организаций</h2>
              <p className="text-lg text-gray-700 mb-8">
                Кодексом об административных правонарушениях России предусмотрены значительные штрафы за невыполнение требований, установленных законом о персональных данных. Риски привлечения к ответственности существуют всегда. Однако контрольные мероприятия в отношении неподготовленных организаций практически гарантированно заканчиваются штрафами и предписаниями.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {risks.map((risk, idx) => (
                <Card key={idx} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={risk.icon} className="text-red-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{risk.title}</CardTitle>
                        <p className="text-gray-600">{risk.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="ShieldAlert" className="text-red-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Важно понимать</h3>
                  <p className="text-gray-700">
                    Штраф не освобождает от необходимости реализации требований закона, а только ужесточает последующие меры государственного воздействия в виде повторных повышенных штрафов. Поэтому правильная подготовка к проверке — это не просто способ избежать санкций, но и инвестиция в спокойное будущее вашего бизнеса.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Проверка персональных данных Роскомнадзором</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              В ходе контрольных мероприятий, включая профилактический визит, представители Роскомнадзора проводят документарную проверку
            </p>

            <div className="mb-12">
              <Card className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Что проверяют в первую очередь</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">
                        <strong>Документы:</strong> Наличие необходимых внутренних актов, регламентирующих вопросы обработки и защиты ПДн
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Database" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">
                        <strong>Реестр:</strong> Регистрация в реестре операторов персональных данных
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CheckSquare" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">
                        <strong>Соответствие:</strong> Соответствие сведений в уведомлении реальным процессам обработки данных
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Shield" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">
                        <strong>Безопасность:</strong> Принятые меры по обеспечению защиты персональных данных
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-6">Полный перечень проверяемых вопросов</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {whatChecked.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Наши услуги по подготовке к проверке</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Специалисты ЧОП "СБ ЗВИ" имеют большой опыт взаимодействия с Роскомнадзором в ходе контрольных мероприятий
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Полное сопровождение</h3>
                  <p className="text-gray-700 mb-3">
                    Мы проанализируем все процессы обработки персональных данных в вашей компании, разработаем стратегию подготовки к проверке и её прохождения, подготовим все необходимые документы и рекомендации.
                  </p>
                  <p className="text-gray-700">
                    Мы ведем вас до окончания проверки и в случае поступления от проверяющих уточнений и замечаний консультируем и помогаем минимизировать риски штрафных санкций.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">По результатам подготовки вы получите</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Первичная консультация</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">С выработкой стратегии успешного прохождения проверки</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Комплект документов</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Внутренних организационно-распорядительных документов по ПДн</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Регистрацию в реестре</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">В качестве оператора персональных данных</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Анализ сведений</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">В реестре операторов и внесение изменений при необходимости</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Работу с запросами</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Анализ запросов РКН и подготовка профессиональных ответов</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                    <CardTitle>Консультации 24/7</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">По всем вопросам прохождения проверки и профилактического визита</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Этапы подготовки к проверке</h2>

            <div className="space-y-6 mb-16">
              {stages.map((stage, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{stage.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{stage.title}</CardTitle>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{stage.duration}</span>
                        </div>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Наши преимущества</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {advantages.map((adv, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={adv.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">{adv.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{adv.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Готовы к проверке Роскомнадзора?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Не ждите, пока придет уведомление о проверке. Подготовьтесь заранее и избежите штрафов и стресса
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contacts">
                  <Button size="lg" className="bg-primary hover:bg-blue-700">
                    Заказать подготовку к проверке
                  </Button>
                </Link>
                <Link to="/services/document-development">
                  <Button size="lg" variant="outline">
                    Узнать о разработке документов
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InspectionPreparation;
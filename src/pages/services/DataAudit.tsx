import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DataAudit = () => {
  const auditTypes = [
    {
      icon: 'FileCheck',
      title: 'Соответствие ФЗ-152',
      description: 'Проверка выполнения положений Федерального закона о персональных данных и подзаконных актов'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Готовность к проверке',
      description: 'Оценка готовности к прохождению проверки Роскомнадзора по типовому плану контролирующего органа'
    },
    {
      icon: 'Shield',
      title: 'Техническая защита',
      description: 'Анализ эффективности внедренных технических средств защиты персональных данных'
    },
    {
      icon: 'FileText',
      title: 'Документация',
      description: 'Проверка комплектности и соответствия организационно-распорядительной документации'
    }
  ];

  const stages = [
    {
      number: '01',
      title: 'Сбор исходной информации',
      description: 'Изучаем организационную структуру, порядок обработки ПДн, разработанную документацию и текущий уровень защиты. Проверяем согласия субъектов, договоры с контрагентами, бумажную работу с данными',
      icon: 'Search'
    },
    {
      number: '02',
      title: 'Правовой анализ',
      description: 'Оцениваем соблюдение статей 18.1 и 19 ФЗ-152, положений подзаконных актов. Составляем отчет с замечаниями и рекомендациями для достижения полного соответствия требованиям',
      icon: 'Scale'
    },
    {
      number: '03',
      title: 'Технический аудит',
      description: 'Исследуем характеристики информационных систем ПДн, технологии обработки данных, степень защищенности систем. Оцениваем активные меры безопасности и их эффективность',
      icon: 'Settings'
    },
    {
      number: '04',
      title: 'Проверка документов',
      description: 'Проводим аудит организационно-распорядительных документов согласно типовому плану Роскомнадзора. Проверяем полноту утверждения и соответствие заявленной информации',
      icon: 'FileSearch'
    },
    {
      number: '05',
      title: 'Формирование заключения',
      description: 'Составляем детальный отчет с оценкой текущего состояния, выявленными несоответствиями и конкретными рекомендациями по оптимизации системы безопасности',
      icon: 'FileText'
    },
    {
      number: '06',
      title: 'Выдача свидетельства',
      description: 'При положительном результате оформляем официальное Свидетельство о соответствии обработки персональных данных требованиям законодательства',
      icon: 'Award'
    }
  ];

  const whoNeeds = [
    {
      icon: 'Building',
      title: 'Кредитные и микрофинансовые организации',
      description: 'Обрабатывают большой объем финансовых и персональных данных клиентов'
    },
    {
      icon: 'Heart',
      title: 'Медицинские центры и клиники',
      description: 'Работают с особыми категориями персональных данных о здоровье'
    },
    {
      icon: 'Users',
      title: 'Кадровые агентства',
      description: 'Собирают и обрабатывают данные соискателей и работников'
    },
    {
      icon: 'Phone',
      title: 'Колл-центры и call-центры',
      description: 'Ежедневно работают с персональными данными клиентов'
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазины',
      description: 'Собирают данные покупателей для доставки и рассылок'
    },
    {
      icon: 'Briefcase',
      title: 'Страховые компании',
      description: 'Обрабатывают конфиденциальные данные застрахованных лиц'
    }
  ];

  const results = [
    {
      icon: 'FileCheck',
      title: 'Официальное заключение',
      description: 'Детальный отчет по результатам аудита с рекомендациями по приведению системы обработки и защиты ПДн в соответствие требованиям (при выявлении несоответствий)'
    },
    {
      icon: 'MessageSquare',
      title: 'Экспертные консультации',
      description: 'Профессиональные консультации по вопросам приведения обработки персональных данных в соответствие требованиям 152-ФЗ'
    },
    {
      icon: 'Award',
      title: 'Свидетельство о соответствии',
      description: 'Официальное свидетельство при положительном решении, которое можно предоставить партнерам и клиентам для подтверждения должного уровня защиты'
    }
  ];

  const checklist = [
    'Цели сбора и хранения персональной информации',
    'Получение только необходимого для поставленных задач объема данных',
    'Сроки хранения персональных данных',
    'Наличие четкого регламента обработки полученных сведений',
    'Получение согласия на операции с персональными данными',
    'Соответствие средств защиты вероятным угрозам',
    'Соответствие мер безопасности особенностям деятельности оператора',
    'Соответствие защиты техническим параметрам используемых систем'
  ];

  const advantages = [
    {
      icon: 'CheckCircle',
      title: 'Комплексная экспертиза',
      description: 'Юристы и технические специалисты проводят полный анализ документации и организационно-технических мер'
    },
    {
      icon: 'Shield',
      title: 'Большой опыт',
      description: 'Многолетний опыт в области обработки и защиты персональных данных, знание всех тонкостей законодательства'
    },
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Учитываем специфику вашей деятельности и особенности бизнес-процессов при проведении аудита'
    },
    {
      icon: 'FileText',
      title: 'Детальный отчет',
      description: 'Предоставляем подробный отчет с конкретными рекомендациями по устранению выявленных недостатков'
    },
    {
      icon: 'Award',
      title: 'Официальные документы',
      description: 'Выдаем заключение и свидетельство установленного образца при успешном прохождении аудита'
    },
    {
      icon: 'TrendingDown',
      title: 'Минимизация рисков',
      description: 'Помогаем избежать претензий Роскомнадзора и ФСТЭК, штрафов и предписаний'
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
                <h1 className="text-2xl md:text-4xl font-bold">Аудит персональных данных</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Выдача официальных документов, подтверждающих соответствие обработки персональных данных требованиям Федерального закона № 152-ФЗ и других нормативных актов
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Оформите заявку на услугу, мы свяжемся с вами в ближайшее время и ответим на все интересующие вопросы
                </p>
                <a href="tel:+79015000078">
                  <Button size="lg" className="bg-white text-secondary hover:bg-blue-50">
                    Заказать аудит
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">Кому необходим аудит персональных данных?</h2>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Под действие Федерального закона № 152-ФЗ подпадают все компании, ИП и физические лица, а также бюджетные структуры, которые получают, хранят и используют сведения о гражданах. Нанимая на работу персонал, собирая данные для электронной или SMS-рассылки, размещая на сайте форму заказа — во всех этих случаях необходимо позаботиться о внедрении эффективных средств защиты.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Определить, действительно ли информационные системы защищены от несанкционированного доступа, изменения, удаления или использования третьими лицами, позволяет аудит персональных данных. Успешное прохождение проверки даст возможность пройти аттестацию и избежать претензий со стороны ФСТЭК и Роскомнадзора.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whoNeeds.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Важно знать</h3>
                  <p className="text-gray-700">
                    В обязанности всех без исключения операторов входит не только подготовка документации и подбор технических средств защиты, но и регулярное проведение аудита для выявления отклонений от актуальных требований ФЗ-152 и подзаконных актов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Цель аудита персональных данных</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Подтверждение соответствия обработки персональных данных требованиям законодательства с выдачей официального заключения и свидетельства
            </p>

            <div className="mb-16">
              <Card className="border-l-4 border-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl">Что проверяется при аудите</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {checklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Виды аудита</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {auditTypes.map((type, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={type.icon} className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                        <p className="text-gray-600">{type.description}</p>
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
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Услуги по проведению аудита</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Специалисты ЧОП "СБ ЗВИ" имеют большой опыт в области обработки и защиты персональных данных
            </p>

            <div className="mb-16">
              <p className="text-lg text-gray-700 mb-6">
                Наши юристы и технические специалисты проведут для вашей компании комплексный анализ внутренней документации и существующих организационно-технических мер по защите персональных данных. По итогам проверки выдадим официальное заключение с подробными рекомендациями.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                При положительном результате оформим Свидетельство о соответствии обработки персональных данных в вашей организации требованиям законодательства и нормативных актов, которое вы сможете предоставить партнерам и клиентам для подтверждения должного уровня защиты.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">По результатам аудита вы получите</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {results.map((result, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={result.icon} className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" className="text-green-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Подготовка к аудиту</h3>
                  <p className="text-gray-700 mb-3">
                    При необходимости мы подготовим вас к проведению аудита: разработаем комплект организационно-распорядительных документов и рекомендации по внедрению необходимых административных и технических мер.
                  </p>
                  <p className="text-gray-700">
                    Выполнив наши рекомендации, вы со 100%-ной уверенностью получите защищенную систему обработки персональных данных, соответствующую всем требованиям, а также официальные подтверждающие документы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Этапы проведения аудита</h2>

            <div className="space-y-6 mb-16">
              {stages.map((stage, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{stage.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <CardTitle className="text-xl">{stage.title}</CardTitle>
                          <Icon name={stage.icon} className="text-primary flex-shrink-0" size={20} />
                        </div>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Предотвращение проблем</h3>
                  <p className="text-gray-700">
                    Осуществление всех предусмотренных законом подготовительных мероприятий не является гарантией отсутствия сложностей при проверке уполномоченного регулятора. Поэтому имеет смысл изначально привлечь опытных специалистов, которые выявят все недостатки до прихода проверяющих и помогут их своевременно устранить.
                  </p>
                </div>
              </div>
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
              <h3 className="text-2xl font-bold text-secondary mb-4">Готовы провести аудит персональных данных?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Получите официальное подтверждение соответствия обработки персональных данных требованиям законодательства
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contacts">
                  <Button size="lg" className="bg-primary hover:bg-blue-700">
                    Заказать аудит
                  </Button>
                </Link>
                <Link to="/services/document-development">
                  <Button size="lg" variant="outline">
                    Подготовиться к аудиту
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <Icon name="Award" className="mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">Стоимость аудита</h2>
              <p className="text-xl text-blue-100 mb-6">
                Цена аудиторской проверки устанавливается индивидуально после обсуждения спектра предоставляемых услуг, типа информационных систем ПДн, степени срочности получения отчетов и текущего состояния системы защиты.
              </p>
              <p className="text-lg text-blue-100">
                Финансовые условия и сроки прописываются в договоре на обслуживание, поэтому вы можете быть уверены, что аудит будет выполнен в полном объеме и без задержек.
              </p>
            </div>
            <div className="text-center">
              <Link to="/contacts">
                <Button size="lg" className="bg-white text-secondary hover:bg-blue-50">
                  Запросить коммерческое предложение
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataAudit;
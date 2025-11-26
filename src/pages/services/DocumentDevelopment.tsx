import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DocumentDevelopment = () => {
  const advantages = [
    {
      icon: 'FileCheck',
      title: '100% соответствие законодательству',
      description: 'Документация разрабатывается с учетом всех актуальных требований законодательства РФ о персональных данных, включая изменения 2026 года'
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки разработки',
      description: 'От момента заказа до получения готовой документации проходит в среднем 10-20 рабочих дней'
    },
    {
      icon: 'Shield',
      title: 'Защита от проверок',
      description: 'Документы, соответствующие требованиям Роскомнадзора и Роструда, позволят успешно пройти любые проверки'
    },
    {
      icon: 'Users',
      title: 'Экспертная разработка',
      description: 'Специалисты юридического и технического профиля с многолетним опытом в области защиты персональных данных'
    },
    {
      icon: 'FileText',
      title: 'Более 40 документов',
      description: 'Полный комплект от концепций и положений до шаблонов уведомлений и образцов обращений'
    },
    {
      icon: 'TrendingDown',
      title: 'Экономия ресурсов',
      description: 'Аутсорсинг документации дешевле найма и обучения штатного специалиста, персонал продолжает работу'
    }
  ];

  const documents = [
    {
      category: 'Приказы и распоряжения',
      items: [
        'О назначении ответственных лиц за обработку персональных данных',
        'Об определении границ контролируемой зоны',
        'Об организации режима защиты персональных данных',
        'О проведении внутренних проверок соблюдения требований ФЗ-152',
        'Об использовании криптографических средств защиты (при необходимости)',
        'Об ознакомлении работников с требованиями законодательства'
      ]
    },
    {
      category: 'Положения и политики',
      items: [
        'Политика обработки персональных данных',
        'Положение об организации обработки персональных данных',
        'Положение о защите персональных данных без использования средств автоматизации',
        'Положение об обеспечении безопасности персональных данных'
      ]
    },
    {
      category: 'Перечни и реестры',
      items: [
        'Перечень обрабатываемых персональных данных',
        'Перечень информационных систем персональных данных',
        'Перечень сотрудников с правом доступа к обработке ПДн',
        'Перечень средств защиты информации'
      ]
    },
    {
      category: 'Журналы учета',
      items: [
        'Журнал учета лиц, допущенных к обработке персональных данных',
        'Журнал учета доступа к средствам защиты информации',
        'Журнал регистрации проверок контролирующих органов',
        'Журнал учета обращений субъектов персональных данных'
      ]
    },
    {
      category: 'Акты и оценки',
      items: [
        'Акт оценки вреда субъектам персональных данных',
        'Акт оценки уровня защищенности персональных данных',
        'Акт категорирования информационных систем',
        'Акт классификации информационных систем'
      ]
    },
    {
      category: 'Инструкции и регламенты',
      items: [
        'Инструкция по организации работы с персоналом',
        'Инструкция по защите персональных данных при их обработке',
        'Инструкция по работе в информационных системах ПДн',
        'Регламент работы со съемными носителями информации',
        'Регламент использования антивирусной защиты и паролей',
        'Регламент действий при инцидентах информационной безопасности'
      ]
    },
    {
      category: 'Формы и шаблоны',
      items: [
        'Форма согласия субъекта на обработку персональных данных',
        'Шаблоны уведомлений в Роскомнадзор',
        'Образцы запросов и ответов субъектам ПДн',
        'Шаблоны писем для взаимодействия с контролирующими органами'
      ]
    }
  ];

  const workStages = [
    {
      number: '01',
      title: 'Консультация и заключение договора',
      description: 'Первичная консультация, обсуждение особенностей вашей деятельности, заключение официального соглашения с указанием сроков и ответственности сторон'
    },
    {
      number: '02',
      title: 'Сбор и анализ информации',
      description: 'Изучение структуры организации, бизнес-процессов, информационных систем и категорий обрабатываемых персональных данных'
    },
    {
      number: '03',
      title: 'Разработка документации',
      description: 'Подготовка индивидуального комплекта документов с учетом специфики вашей организации и требований законодательства'
    },
    {
      number: '04',
      title: 'Передача и внедрение',
      description: 'Передача готовой документации вместе с подробными инструкциями и рекомендациями по внедрению и использованию'
    }
  ];

  const reasons = [
    {
      icon: 'AlertCircle',
      title: 'Документы проверяются в первую очередь',
      description: 'При проведении государственного контроля Роскомнадзор и Роструд в первую очередь изучают организационно-распорядительную документацию по защите персональных данных'
    },
    {
      icon: 'Scale',
      title: 'Законодательная обязанность',
      description: 'Наличие документов по ПДн — это не рекомендация, а прямое требование ФЗ-152 для каждой организации, обрабатывающей персональные данные'
    },
    {
      icon: 'Building',
      title: 'Обязательно для всех операторов',
      description: 'Документы должны быть у каждой компании, ИП, физического лица, государственного органа — любого субъекта, работающего с персональными данными'
    },
    {
      icon: 'FileWarning',
      title: 'Без документов нет аудита',
      description: 'Если документация не соответствует требованиям, аттестационное заключение не будет выдано до устранения всех нарушений'
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
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Разработка документов по персональным данным</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Приведение в соответствие требованиям 152-ФЗ. Разработка и внедрение организационных мер и полного пакета локальной документации по вопросам обработки и защиты персональных данных
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Оформите заявку на услугу, мы свяжемся с вами в ближайшее время и ответим на все интересующие вопросы
                </p>
                <Link to="/contacts">
                  <Button size="lg" className="bg-white text-secondary hover:bg-blue-50">
                    Получить консультацию
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Почему документация так важна?</h2>
            
            <div className="mb-16">
              <p className="text-lg text-gray-700 mb-6">
                Разработка пакета внутренних документов по защите персональных данных является основной и первоочередной организационной мерой при внедрении комплексной системы защиты ПДн. Это требование законодательно закреплено в целях предотвращения утечки и неправомерного использования личной информации граждан.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Федеральный закон №152-ФЗ «О персональных данных» обязывает каждого оператора выполнять ряд требований по обеспечению защиты персональных данных. Разработка организационно-распорядительной документации входит в комплекс обязательных мероприятий наряду с назначением ответственных лиц, корректировкой бизнес-процессов и осуществлением внутреннего контроля.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {reasons.map((reason, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={reason.icon} className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Преимущества нашего решения</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Получите полный комплект документов, регламентирующих вопросы защиты персональных данных для вашей компании
            </p>

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

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Почему аутсорсинг выгоднее</h3>
                  <p className="text-gray-700 mb-4">
                    К сожалению, в штате большинства компаний отсутствует специалист, хорошо разбирающийся в вопросах обработки и защиты персональных данных. Обучение существующего работника предполагает отрыв от основных обязанностей и серьезные финансовые затраты.
                  </p>
                  <p className="text-gray-700">
                    Привлечение профессиональных исполнителей на договорной основе является наиболее выгодным решением. Наши специалисты подготовят полный пакет документации на основании предоставленных сведений в кратчайшие сроки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Комплект документов</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Индивидуальный пакет из более чем 40 документов, разработанных с учетом специфики вашей организации
            </p>

            <div className="space-y-6 mb-16">
              {documents.map((doc, idx) => (
                <Card key={idx} className="border-l-4 border-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary">{doc.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {doc.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="Award" className="text-green-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Соответствие законодательству</h3>
                  <p className="text-gray-700">
                    Все разрабатываемые документы полностью соответствуют нормам действующего законодательства Российской Федерации о персональных данных. Учтены требования ФЗ-152, Постановления Правительства №1119, Приказа ФСТЭК №21 и других актуальных нормативных актов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Этапы работы</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {workStages.map((stage, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{stage.number}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{stage.title}</CardTitle>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Готовы привести документы в соответствие?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Разработка документации занимает 10-20 дней. Получите консультацию специалиста и индивидуальное предложение для вашей организации
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contacts">
                  <Button size="lg" className="bg-primary hover:bg-blue-700">
                    Заказать разработку документов
                  </Button>
                </Link>
                <Link to="/services/personal-data">
                  <Button size="lg" variant="outline">
                    Узнать о комплексной защите ПДн
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Icon name="Shield" className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">ЧОП "СБ ЗВИ"</h2>
            <p className="text-xl text-blue-100 mb-6">
              Высокопрофессиональный интегратор систем защиты персональных данных. Лицензиат ФСТЭК России с многолетним опытом успешной реализации проектов.
            </p>
            <p className="text-lg text-blue-100">
              В нашем штате специалисты технического и юридического профиля, которые в синтезе обеспечивают разработку документации, соответствующей всем техническим требованиям и правовым нормам.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocumentDevelopment;
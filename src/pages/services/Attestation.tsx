import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Attestation = () => {
  // Apply SEO configuration for Attestation service page
  useSEO(SEO_CONFIGS.services.attestation);
  const objectTypes = [
    {
      icon: 'Database',
      title: 'Информационные системы ПДн',
      description: 'Аттестация ИСПДн УЗ-1 и УЗ-2 в соответствии с требованиями ФСТЭК',
      requirements: ['Уровни УЗ-1, УЗ-2', 'Приказ ФСТЭК № 21', 'Сертифицированные СЗИ']
    },
    {
      icon: 'Server',
      title: 'Автоматизированные системы',
      description: 'Аттестация АС, обрабатывающих сведения, составляющие государственную тайну',
      requirements: ['Класс 1Г и выше', 'Требования ФСБ', 'СКЗИ класса КС1-КС3']
    },
    {
      icon: 'Network',
      title: 'Объекты КИИ',
      description: 'Аттестация объектов критической информационной инфраструктуры',
      requirements: ['Категории значимости', 'Приказ ФСТЭК № 239', 'План мероприятий']
    },
    {
      icon: 'Building',
      title: 'Помещения',
      description: 'Аттестация выделенных помещений для работы с конфиденциальной информацией',
      requirements: ['Требования ФСТЭК', 'Защита от ПЭМИН', 'Контроль доступа']
    }
  ];

  const stages = [
    {
      number: 1,
      title: 'Предаттестационное обследование',
      tasks: [
        'Анализ объекта информатизации',
        'Инвентаризация оборудования и ПО',
        'Проверка наличия сертифицированных СЗИ',
        'Оценка готовности к аттестации'
      ]
    },
    {
      number: 2,
      title: 'Подготовка к аттестации',
      tasks: [
        'Разработка/актуализация документации',
        'Внедрение недостающих СЗИ',
        'Настройка систем защиты',
        'Обучение персонала'
      ]
    },
    {
      number: 3,
      title: 'Аттестационные испытания',
      tasks: [
        'Проверка организационных мер',
        'Испытания технических средств защиты',
        'Тестирование на проникновение',
        'Проверка журналов и регистрации событий'
      ]
    },
    {
      number: 4,
      title: 'Оформление результатов',
      tasks: [
        'Составление протоколов испытаний',
        'Подготовка заключения',
        'Оформление аттестата соответствия',
        'Передача документации заказчику'
      ]
    }
  ];

  const documents = [
    'Аттестат соответствия (сроком на 3-5 лет)',
    'Протоколы аттестационных испытаний',
    'Заключение по результатам аттестационных испытаний',
    'Акт классификации автоматизированной системы',
    'Частная модель угроз безопасности информации',
    'Техническое задание на создание системы защиты информации',
    'Организационно-распорядительная документация',
    'Эксплуатационная документация на СЗИ'
  ];

  const whyNeed = [
    {
      icon: 'Scale',
      title: 'Требование законодательства',
      description: 'Обязательная процедура для ИСПДн УЗ-1, УЗ-2 и систем с гостайной'
    },
    {
      icon: 'ShieldCheck',
      title: 'Подтверждение защищенности',
      description: 'Официальное документальное подтверждение соответствия требованиям'
    },
    {
      icon: 'FileCheck',
      title: 'Готовность к проверкам',
      description: 'Успешное прохождение проверок регулирующих органов'
    },
    {
      icon: 'TrendingDown',
      title: 'Минимизация рисков',
      description: 'Снижение вероятности инцидентов безопасности и утечек данных'
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
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Аттестация объектов информатизации</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Комплексная оценка защищенности информационных систем и получение аттестата соответствия
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Clock" size={20} />
                  <span>от 6 недель</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Award" size={20} />
                  <span>Аттестат на 3-5 лет</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Что такое аттестация?</h3>
                  <p className="text-gray-700">
                    Аттестация объекта информатизации — это комплекс организационных и технических мероприятий, 
                    в результате которых посредством специальных испытаний подтверждается, что объект соответствует 
                    требованиям стандартов или иных нормативных документов по безопасности информации. 
                    По результатам выдается аттестат соответствия сроком на 3-5 лет.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Типы объектов аттестации</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {objectTypes.map((type, idx) => (
                <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={type.icon as any} className="text-primary" size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-secondary mb-2">{type.title}</CardTitle>
                        <p className="text-sm text-gray-700">{type.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-secondary">Ключевые требования:</p>
                      {type.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Зачем нужна аттестация</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {whyNeed.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Этапы аттестации</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {stages.map((stage, idx) => (
                <Card key={idx} className="border-l-4 border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">{stage.number}</span>
                      </div>
                      <CardTitle className="text-xl text-secondary">{stage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stage.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="CheckCircle2" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Результаты аттестации</h2>

            <Card className="border-2 border-primary mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-3">
                  <Icon name="FileCheck" className="text-primary" size={28} />
                  Комплект документов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <Icon name="FileText" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Когда требуется аттестация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-red-50 rounded-lg p-4">
                  <Icon name="AlertCircle" className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Обязательная аттестация</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• ИСПДн уровней защищенности УЗ-1 и УЗ-2</li>
                      <li>• Автоматизированные системы, обрабатывающие гостайну</li>
                      <li>• Значимые объекты критической информационной инфраструктуры</li>
                      <li>• АС в защищенном исполнении для органов власти</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-yellow-50 rounded-lg p-4">
                  <Icon name="Info" className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Рекомендуемая аттестация</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• ИСПДн уровня защищенности УЗ-3 (повышение доверия)</li>
                      <li>• Системы электронного документооборота</li>
                      <li>• Системы дистанционного банковского обслуживания</li>
                      <li>• Корпоративные информационные системы с конфиденциальными данными</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Нужна аттестация объекта информатизации?</h2>
              <p className="text-xl mb-2 text-blue-100">
                Проведем полный цикл работ — от предаттестационного обследования до получения аттестата
              </p>
              <p className="text-sm mb-6 text-blue-200">
                Лицензия ФСТЭК на деятельность по аттестации объектов информатизации
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Получить консультацию
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Узнать стоимость
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Attestation;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  darkMode?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Приведение в соответствие Закону о персональных данных',
    description: 'Поможем разработать и внедрить комплект организационно-распорядительной документации по вопросам обработки и защиты персональных данных',
    image: 'https://cdn.poehali.dev/files/1c88f054-68f6-49d0-8605-4adca4e038b0.png',
    primaryButton: {
      text: 'Подробнее',
      link: '/services/personal-data',
    },
    secondaryButton: {
      text: 'Задать вопрос',
      link: '/contacts',
    },
  },
  {
    id: 2,
    title: 'Подготовка к проверкам Роскомнадзора',
    description: 'Поможем привести обработку персональных данных в соответствие требованиям закона с целью успешного прохождения проверки в области персональных данных',
    image: 'https://cdn.poehali.dev/files/3285f23b-b0c2-4871-958a-463b78cdfe60.png',
    primaryButton: {
      text: 'Подробнее',
      link: '/services/personal-data',
    },
    secondaryButton: {
      text: 'Проконсультироваться',
      link: '/contacts',
    },
  },
  {
    id: 3,
    title: 'Аудит соответствия обработки персональных данных',
    description: 'Выдача официальных документов, подтверждающих соответствие обработки персональных данных требованиям Федерального закона №152-ФЗ «О персональных данных»',
    image: 'https://cdn.poehali.dev/files/cbca6779-9669-4429-b699-a0c6f19ed397.png',
    primaryButton: {
      text: 'Подробнее',
      link: '/services/personal-data',
    },
    secondaryButton: {
      text: 'Задать вопрос',
      link: '/contacts',
    },
  },
  {
    id: 4,
    title: 'Обеспечение безопасности объектов КИИ',
    description: 'Услуги по категорированию и обеспечению безопасности объектов критической информационной инфраструктуры в соответствии с требованиями Федерального закона №187-ФЗ',
    image: 'https://cdn.poehali.dev/projects/d2c8f28a-afc1-4869-912c-685feedfe6a4/files/045efd71-acd4-41db-aa3b-b9d3a76687c3.jpg',
    primaryButton: {
      text: 'Подробнее',
      link: '/services/attestation',
    },
    secondaryButton: {
      text: 'Проконсультироваться',
      link: '/contacts',
    },
    darkMode: true,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      >
        <div className={`absolute inset-0 ${slide.darkMode ? 'bg-black/40' : 'bg-white/70'}`}></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${slide.darkMode ? 'text-white' : 'text-gray-900'}`}>
            {slide.title}
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${slide.darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to={slide.primaryButton.link}>
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
                {slide.primaryButton.text}
              </Button>
            </Link>
            {slide.secondaryButton && (
              <Link to={slide.secondaryButton.link}>
                <Button
                  size="lg"
                  variant="outline"
                  className={`${
                    slide.darkMode
                      ? 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900'
                      : 'border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {slide.secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-primary w-8' : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
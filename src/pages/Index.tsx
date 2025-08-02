import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');

  const services = [
    { name: 'Классический маникюр', price: '2500₽', duration: '60 мин', description: 'Обработка кутикулы, придание формы' },
    { name: 'Покрытие гель-лак', price: '3500₽', duration: '90 мин', description: 'Стойкое покрытие до 3 недель' },
    { name: 'Дизайн ногтей', price: '500₽', duration: '30 мин', description: 'Художественная роспись' },
    { name: 'Укрепление ногтей', price: '4000₽', duration: '120 мин', description: 'Биогель или полигель' }
  ];

  const masters = [
    { name: 'Анна Петрова', experience: '5 лет', specialty: 'Художественная роспись' },
    { name: 'Мария Иванова', experience: '7 лет', specialty: 'Классический маникюр' },
    { name: 'Елена Сидорова', experience: '3 года', specialty: 'Современный дизайн' }
  ];

  const portfolioImages = [
    { id: 1, src: '/img/69cb4fe1-eb43-438a-a28d-8eae74d93752.jpg', alt: 'Дизайн ногтей 1' },
    { id: 2, src: '/img/1628dcdd-1e03-4841-9965-c2ba110a1d5c.jpg', alt: 'Салон интерьер' }
  ];

  const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-xl text-accent">
              💅 Nail Therapy Master
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-accent hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-accent hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-accent hover:text-primary transition-colors">Портфолио</a>
              <a href="#booking" className="text-accent hover:text-primary transition-colors">Записаться</a>
              <a href="#contact" className="text-accent hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Мастер Гвозде Терапий
          </h1>
          <p className="text-xl text-accent/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональный уход за ногтями с индивидуальным подходом. Современные техники и качественные материалы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-montserrat">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-montserrat">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent">
            Наши Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-montserrat text-accent">{service.name}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      {service.duration}
                    </Badge>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Gallery */}
      <section id="portfolio" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent">
            Портфолио & Галерея
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
            <Card className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <Icon name="Plus" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-accent mb-2">Больше работ</h3>
                <p className="text-sm text-accent/70">Смотрите полную галерею в наших социальных сетях</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent">
            Онлайн Запись
          </h2>
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-accent">Выберите удобное время</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами для подтверждения</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="master" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="master">Мастер</TabsTrigger>
                  <TabsTrigger value="service">Услуга</TabsTrigger>
                  <TabsTrigger value="time">Время</TabsTrigger>
                </TabsList>
                
                <TabsContent value="master" className="space-y-4 mt-6">
                  <div className="grid gap-4">
                    {masters.map((master, index) => (
                      <Card 
                        key={index}
                        className={`cursor-pointer transition-all border-2 ${
                          selectedMaster === master.name 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-secondary'
                        }`}
                        onClick={() => setSelectedMaster(master.name)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-montserrat font-semibold text-accent">{master.name}</h3>
                              <p className="text-sm text-accent/70">Опыт: {master.experience}</p>
                              <p className="text-sm text-secondary">{master.specialty}</p>
                            </div>
                            <Icon name="User" size={32} className="text-primary" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="service" className="space-y-4 mt-6">
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <Card key={index} className="cursor-pointer hover:shadow-md transition-all border hover:border-secondary">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-montserrat font-semibold text-accent">{service.name}</h3>
                              <p className="text-sm text-accent/70">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-primary">{service.price}</p>
                              <p className="text-sm text-accent/70">{service.duration}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="time" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`${
                          selectedTime === time 
                            ? 'bg-primary text-white' 
                            : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat text-lg py-6">
                      <Icon name="Check" className="mr-2" size={20} />
                      Подтвердить запись
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent">
            Цены
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardTitle className="text-2xl font-montserrat">Базовые услуги</CardTitle>
                <CardDescription className="text-white/90">Основной уход за ногтями</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Классический маникюр</span>
                    <span className="font-bold">2500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Покрытие гель-лак</span>
                    <span className="font-bold">3500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Снятие покрытия</span>
                    <span className="font-bold">500₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-secondary to-tertiary text-white">
                <CardTitle className="text-2xl font-montserrat">Премиум услуги</CardTitle>
                <CardDescription className="text-white/90">Дизайн и укрепление</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Художественная роспись</span>
                    <span className="font-bold">1000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Укрепление биогелем</span>
                    <span className="font-bold">4000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Комплекс «Люкс»</span>
                    <span className="font-bold">6000₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <h3 className="font-montserrat font-semibold">Адрес</h3>
                      <p className="text-accent/70">ул. Красоты, 15, Москва</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <h3 className="font-montserrat font-semibold">Телефон</h3>
                      <p className="text-accent/70">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <h3 className="font-montserrat font-semibold">Время работы</h3>
                      <p className="text-accent/70">Пн-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Instagram" size={24} className="text-primary" />
                    <div>
                      <h3 className="font-montserrat font-semibold">Instagram</h3>
                      <p className="text-accent/70">@nail_therapy_master</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-lg mb-4">Написать нам</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон или Email" />
                  <Input placeholder="Сообщение" />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-montserrat font-bold text-xl mb-4">
            💅 Nail Therapy Master
          </div>
          <p className="text-white/70 mb-4">
            Профессиональный уход за ногтями с любовью к деталям
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Phone" size={24} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Mail" size={24} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="mt-6 text-sm text-white/50">
            © 2024 Nail Therapy Master. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
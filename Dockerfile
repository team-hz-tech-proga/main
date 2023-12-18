# Используем официальный образ Node.js, подходящий для вашего приложения
FROM node:14-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /

# Копируем package.json и package-lock.json (если есть) в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем статические файлы из ./dist внутрь контейнера
COPY ./dist .

# Устанавливаем простой сервер для обслуживания статических файлов
RUN npm install -g serve

# Определяем команду для запуска приложения
CMD ["serve", "-s", ".", "-l", "3000"]

# Открываем порт 3000 в контейнере
EXPOSE 3000
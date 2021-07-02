FROM tiangolo/node-frontend:10 as build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

FROM nginx:stable-alpine

COPY --from=build /app/build/ /usr/share/nginx/html

COPY /etc/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

RUN chmod 777 -R /usr/share/nginx/html

ENTRYPOINT ["nginx","-g","daemon off;"]
FROM nginx:1.13.12-alpine
COPY ./dist/ /usr/share/nginx/html
COPY ./.env.production ./.env
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
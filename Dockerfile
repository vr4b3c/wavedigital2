FROM php:8.3-fpm-alpine3.18

WORKDIR /var/www/html

RUN curl -sSLf \
        -o /usr/local/bin/install-php-extensions \
        https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions && \
    chmod +x /usr/local/bin/install-php-extensions

RUN install-php-extensions gd @composer-2.4.1 pdo pdo_mysql opcache intl # imagick #waiting for imagick support PHP 8.3


RUN apk update && apk add --no-cache nginx supervisor git nodejs npm


ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS="0"

# Configure nginx
COPY ./server/nginx.conf /etc/nginx/nginx.conf

# Configure PHP-FPM
COPY ./server/fpm-pool.conf /etc/php81/php-fpm.d/www.conf
COPY ./server/php.ini /usr/local/etc/php/php.ini

# Configure supervisord
COPY ./server/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN chown -R nobody.nobody /var/www/html /run /var/lib/nginx /var/log/nginx


COPY --chown=nobody ./composer.json ./composer.lock ./
RUN composer install --no-scripts --optimize-autoloader

COPY --chown=nobody . .

# Run script after copying project
#RUN cd ./ && php bin/console assets:install public
RUN sed -i "/#!\/bin\/sh/acd /var/www/html && php bin/console doctrine:migrations:migrate --no-interaction" /usr/local/bin/docker-php-entrypoint


RUN npm install
RUN npm run build

WORKDIR /var/www/html
EXPOSE 8080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]


# Base Symfony Project


## Environment variables
### `APP_ENV`
Possible values: `dev` / `prod`

### `APP_SECRET`
Apps secret (should be random generated string)

### `DATABASE_HOST`
Database host \

### `DATABASE_DBNAME`
Database name \

### `DATABASE_PORT`
Database port \

### `DATABASE_USER`
Database user \

### `DATABASE_PASSWORD`
Database password \

### `DATABASE_UNIX_SOCKET`
Database unix socket \

### `DATABASE_SERVER_VERSION`
Database server version \

### `SENTRY_DSN`
Sentry DSN for app error reporting. \
More info here: https://docs.sentry.io/product/sentry-basics/dsn-explainer/

### `PHP_OPCACHE_VALIDATE_TIMESTAMPS`
Default: `0` \
In development environment set to `1` or changes in your code will not take any effect

### `MAILER_DSN`
SMTP details for mailing \
Example: `smtp://email@mail.cz:password@smtp.host.cz:587`


### Ports
App is exposed on port 80

### Volumes
It's recommended to have `/var/www/html/var` path listed in volumes for better apps performance


## Development

### Requirements
- PHP >= 8.3

### Installation for development purpose
- Run `docker-compose up -d` to start docker
- Run `docker-compose exec www /bin/sh` to access app's bash
- Run `composer install` and `php bin/console assets:install` to install dependencies
- Run `php bin/console doctrine:migrations:migrate` to migrate database
- Run `php bin/console doctrine:fixtures:load` to create first user

### Working with database
- Run `php bin/console make:migration` to generate migrations from changes in entities
- Run `php bin/console doctrine:migrations:migrate` to migrate database

### Generate assets
- Run `npm install`
- Run for development `npm start` for build `npm run build`


## Code Quality Tools
- [GrumPHP](https://github.com/phpro/grumphp) see `grumphp.yml` config file
- [Psalm](https://psalm.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Important Libraries
- [Symfony](https://symfony.com/)
- [Doctrine](https://www.doctrine-project.org/)
- [API Platform](https://api-platform.com/docs/distribution/#using-symfony-flex-and-composer-advanced-users)


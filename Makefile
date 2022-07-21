SHELL := /bin/bash

.PHONY: up
up: ## [Start local development server]
	docker-compose up

###### DATABASE MIGRATION ######

.PHONY: _prepare
_prepare:
	docker-compose build
	docker-compose up -d

.PHONY: _makemigrations
_makemigrations: _prepare
	docker-compose exec rest_api python manage.py makemigrations --noinput

.PHONY: build
build: _makemigrations ## [Apply a db migration for the django db]
	bash -c "sleep 15"	
	docker-compose exec rest_api python manage.py migrate
	docker-compose down




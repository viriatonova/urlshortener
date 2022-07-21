SHELL := /bin/bash

.PHONY: build
build: ## [Build local development server]
	docker-compose build
	
.PHONY: up
up: ## [Start local development server]
	docker-compose up

.PHONY: migrations
migration: up
	docker-compose exec app python manage.py makemigrations

.PHONY: migrations
migrate: 
	docker-compose exec app python manage.py migrate
	docker-compose stop
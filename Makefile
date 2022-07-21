SHELL := /bin/bash

.PHONY: enviroment
enviroment: ## [Start local development server]
	bash -c "python3 -m venv venv && source venv/bin/activate && cd shortener-backend && python3 -m pip install -r requirements.txt"

.PHONY: prepare
prepare: enviroment
	docker-compose build
	docker-compose up -d

.PHONY: migrations
migrations: prepare
	bash -c "source venv/bin/activate && cd shortener-backend && python3 manage.py makemigrations"
	
.PHONY: build
build: migrations
	bash -c "source venv/bin/activate && cd shortener-backend && python3 manage.py migrate"
	docker-compose down


.PHONY: up
up: ## [Start local development server]
	docker-compose up

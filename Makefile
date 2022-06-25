SHELL := /bin/bash

.PHONY: build
build: ## [Build local development server]
	docker-compose build

.PHONY: up
up: ## [Start local development server]
	docker-compose up
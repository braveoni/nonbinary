init: down up build

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans
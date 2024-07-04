.PHONY: build up down

build:
	docker compose -f compose.dev.yaml build

up:
	docker compose -f compose.dev.yaml up

down:
	docker compose -f compose.dev.yaml down

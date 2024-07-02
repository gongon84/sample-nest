.PHONY: build up down

build:
	docker compose -f compose.dev.yaml build --progress=plain

up:
	docker compose -f compose.dev.yaml up

down:
	docker compose -f compose.dev.yaml down

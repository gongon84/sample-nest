.PHONY: up down

up:
	docker compose -f compose.dev.yaml up --build

down:
	docker compose -f compose.dev.yaml down

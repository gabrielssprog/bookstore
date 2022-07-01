#!/bin/bash

docker-compose up -d
docker-compose exec application npx prisma migrate deploy
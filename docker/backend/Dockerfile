FROM python:3.10-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /app

ADD manage.py /app
ADD requirements.txt /app
ADD backend /app/backend

RUN pip install -r requirements.txt

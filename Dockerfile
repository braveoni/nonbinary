# base image
FROM python:3.10-buster

# options
ENV PYTHONUNBUFFERED 1

# Set working directory
RUN mkdir core
# set the working directory
COPY . /core/
# copy commands
WORKDIR /core

# update docker-iamage packages
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y netcat-openbsd gcc && \
    apt-get clean

# update pip
RUN pip install --upgrade pip
# install python packages
RUN pip install -r requirements.txt
# RUN python manage.py collectstatic --no-input
EXPOSE 5000
CMD ["gunicorn","--bind", ":5000", "portfolio.wsgi:application"]
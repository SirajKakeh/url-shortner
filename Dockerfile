FROM python:3.10.5-alpine3.16

WORKDIR /url_shortener

RUN apk add build-base musl-dev linux-headers

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

EXPOSE 4300
COPY . .

ENV FLASK_APP=app
ENV FLASK_RUN_HOST=0.0.0.0

CMD [ "python3", "-m" , "flask", "run"]

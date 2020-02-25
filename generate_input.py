import json
import math
import random
import time

from faker import Faker
from kafka import KafkaProducer

fake = Faker()


def generate_input():
    return {
        'id': math.ceil(random.random() * 1000000),
        'name': fake.name(),
    }


def main():
    producer = KafkaProducer(
        bootstrap_servers=['localhost:9092'],
        value_serializer=lambda x: json.dumps(x).encode('utf-8')
    )

    while True:
        producer.send('input', generate_input())
        time.sleep(2)


if __name__ == '__main__':
    main()

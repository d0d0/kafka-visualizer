import json

from kafka import KafkaConsumer


def main():
    consumer = KafkaConsumer(
        'input',
        bootstrap_servers=['localhost:9092'],
        group_id='test',
        value_deserializer=lambda x: json.loads(x)
    )

    for msg in consumer:
        print(msg.value)


if __name__ == '__main__':
    main()

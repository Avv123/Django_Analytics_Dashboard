# backend/events/kafka_consumer.py
from kafka import KafkaConsumer
import json
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import django
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'analytics.settings')
django.setup()

def start_consuming():
    consumer = KafkaConsumer(
        'pageviews',
        'userclicks',
        bootstrap_servers=['kafka:29092'],
        value_deserializer=lambda x: json.loads(x.decode('utf-8'))
    )

    channel_layer = get_channel_layer()

    for message in consumer:
        print(f"Received: {message.value}")
        async_to_sync(channel_layer.group_send)(
            "dashboard",
            {
                "type": "dashboard_update",
                "data": message.value
            }
        )

if __name__ == "__main__":
    start_consuming()
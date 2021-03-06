'use strict';

class RabbitTransport {

    constructor(publisher, logger) {

        this.publisher = publisher;
        this.logger = logger;
    }

    publish(stream, streamId, eventType, data, asOf) {

        return this.publisher.publish(data, {
            key: `${stream}.${eventType}`
        });
    }
}

module.exports = RabbitTransport;

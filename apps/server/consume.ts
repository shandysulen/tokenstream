import amqp from "amqplib/callback_api";

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    const queue = "task_queue";

    channel.assertQueue(queue, {
      durable: true,
    });
    channel.prefetch(1);
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      function (msg) {
        if (!msg) {
          return;
        }

        var secs = msg.content.toString().split(".").length - 1;
        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
        }, secs * 1000);
      },
      {
        noAck: false,
      },
    );
  });

  // setTimeout(function () {
  //   connection.close();
  //   process.exit(0);
  // }, 500);
});

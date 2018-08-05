type Message = {
  body: string,
  from: string
}

let message: Message;

message.from = 'Max';
message.body = 'Hi!'

console.log(`New message from ${message.from}: ${message.body}`)

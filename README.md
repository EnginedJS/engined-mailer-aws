# engined-mailer-gmail

Local mailer use aws backend for engined.


## Installation

Install via NPM:

```shell
npm install engined-mailer-aws
```

## Usage

Start engined-mailer-aws service in engined, see example below:

```javascript
const { Manager } = require('engined');
const MailerService = require('engined-mailer');
const LocalMailerService = require('engined-mailer-aws');

const mailer = MailerService();
const localMailer = LocalMailerService({
	accessKeyId: config.get('mailer').ses.accessKeyId,
	secretAccessKey: config.get('mailer').ses.secretAccessKey,
	region: config.get('mailer').ses.region
});

const main = async () => {

	// Create manager
	let serviceManager = new Manager({ verbose: true });

	// Adding service to manager
	serviceManager.add('Mailer', mailer);
	serviceManager.add('LocalMailer', localMailer);

	// Start all services
	await serviceManager.startAll();
};

main();
```

## Send email with local mailer backend

The example to show how to save file with local mailer backend:

```javascript

// Using local mailer backend
let localAgent = this.getContext().get('Mailer').getAgent('default');

// Send Email
localAgent.sendMail({
	from: config.get('mailer').sender.name + ' <' + config.get('mailer').sender.address + '>',
	to: 'example@email.com',
	subject: 'test',
	html: '<p>1234</p>'
})
```

## License
Licensed under the MIT License

## Authors
Copyright(c) 2017 Leon Lin（林為志） <<leonlin14@gmail.com>>

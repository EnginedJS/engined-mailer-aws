const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

module.exports = class Agent {

	constructor(opts) {
		this.accessKeyId = opts.accessKeyId || '';
		this.secretAccessKey = opts.secretAccessKey || '';
		this.region = opts.region || '';
	}

	sendMail(msg) {
		if (!msg)
			return 'miss msg'

		var sesTransport = ses({
            accessKeyId: this.accessKeyId,
            secretAccessKey: this.secretAccessKey,
            region: this.region
        });

		// Create a transport
		let transporter = nodemailer.createTransport(sesTransport);

		// Send email
		transporter.sendMail(msg, (error, info) => {
            if (error)
                return console.log(error);

            console.log('Message %s sent: %s', info.messageId, info.response)
        })
	}
};

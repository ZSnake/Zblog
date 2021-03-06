var joi = require('Joi');
var boom = require('Boom');

exports.login = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    validate: {
      payload: {
        email: joi.string().email().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
        console.log(request.payload);
        if(request.payload.email === 'guest@guest.com' && request.payload.password === 'password') {
          request.auth.session.set({id: 123, email: 'guest@guest.com', scope: 'admin'});
          return reply('Login Successful');
        } else {
          return reply(boom.unauthorized('Bad email or password'));
        }
  }
};
exports.logout = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.auth.session.clear();
      return reply('Logout Successful!');
    }
  };

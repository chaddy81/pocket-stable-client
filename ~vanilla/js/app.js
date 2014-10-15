window.ENV = window.ENV || {};
window.ENV['simple-auth'] = {
  authorizerFactory: 'simple-auth-authorizer:devise'
};
// configure the endpoint for the devise authenticator
window.ENV['simple-auth-devise'] = {
  serverTokenEndpoint: 'http://0.0.0.0:3000/users/sign_in',
};

App = Ember.Application.create({
    LOG_TRANSITIONS:true ,
    LOG_TRANSITIONS_INTERNAL:true ,
    LOG_ACTIVE_GENERATION: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://0.0.0.0:3000'
});

Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
  var session = JSON.parse(localStorage.getItem('ember_simple_auth:session'));
  if(session) {
    jqXHR.setRequestHeader("X-Auth-Token", session.user_token);
  }
});

App.Router.map(function() {
  // put your routes here
  this.route('login');
  this.route('logout');

  this.resource('notes', function() {
    this.route('new');
  });

  this.resource('note', { path: '/notes/:note_id' }, function() {
    this.route('edit');
  });

  this.resource('horses', function() {
    this.route('new');
  });

  this.resource('horse', { path: '/horses/:horse_id' }, function() {
    this.route('edit');
    this.route('weight-calculator');
    this.route('links');
    this.route('photos');
  });

  this.resource('veterinarians', function() {
    this.route('new');
  });

  this.resource('veterinarian', { path: 'veterinarians/:vet_id' }, function() {
    this.route('edit');
  });
  this.resource('photo', { path: '/horses/:horse_id/photos/:photo_id' });
  this.resource('documents', function() {
    this.route('new');
  });
  this.resource('document', { path: '/documents/:id' }, function() {
    this.route('edit');
  });
  this.route('signup');
  this.route('check-email');
  this.route('change-password');
  this.route('cancel-account');
  this.route('account-settings');
  this.route('feeding-records');
  this.route('payment');
  this.route('stable-information');
  this.route('upgrade-account');
  this.route('password-changed');
  this.route('documents/new');
});

App.ApplicationController = Ember.Controller.extend({
  full_name: function() {
    var full_name = this.get('session').user_first_name + ' ' + this.get('session').user_last_name;
    return full_name;
  },
  title: function() {
    return this.get('title');
  },

  closeNotification: function() {
    var notification = this.get('notification');
    if(notification) {
      if(notification.persists) {
        console.log("Notification detected, clearing alert notification after next transition");
        notification.persists = null;
      } else {
        console.log("Notification detected, clearing alert notification now");
        this.set('notification', null);
      }
    }
  },

  notify: function(options) {
    this.set('notification', options);
  }
});

App.LoginController = Ember.Controller.extend(SimpleAuth.LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise'
});

App.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
  needs: ["application"],
  actions: {
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('horses');
    },

    sessionInvalidationSucceeded: function() {
      this.transitionTo('login');
    }
  }
});

App.HorsesIndexController = Ember.Controller.extend({
  filteredContent: function() {
    return this.get('content').filter(function(item, index) {
      return !(item.get('isDirty'));
    });
  }.property('content.@each')
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('login');
  }
});

App.LoginRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.get('session').isAuthenticated) {
      this.transitionTo('horses');
    }
  }
});

App.HorsesRoute = Ember.Route.extend({
  title: "My Horses",

  model: function() {
    return this.store.findAll('horse');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-plus', {
      outlet: 'header'
    });

    this.render();
  }
});

App.Horse = DS.Model.extend({
  avatar: DS.attr(),
  name: DS.attr(),
  nick_name: DS.attr(),
  breed: DS.attr(),
  sex: DS.attr(),
  fertility: DS.attr(),
  foaling_date: DS.attr(),
  color: DS.attr(),
  date_of_birth: DS.attr(),
  markings: DS.attr(),
  registration_number: DS.attr(),
  org_numbers: DS.attr(),
  emergencies: DS.attr(),
  comments: DS.attr()
});

App.Horse.FIXTURES = [
 {
    id: 1,
    avatar: '',
    name: 'Chad',
    nick_name: 'Chad',
    breed: 'Paint',
    sex: 'Male',
    fertility: 'none',
    foaling_date: '1/1/2014',
    color: 'Multiple',
    date_of_birth: '1/1/2001',
    markings: 'none',
    registration_number: '123123123',
    org_numbers: '123',
    emergencies: 'none',
    comments: 'none'
 }
];
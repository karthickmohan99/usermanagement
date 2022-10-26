const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'Sonarqube_11',
    options: {
      'sonar.sources': './src'
    }
  },
  () => process.exit()
);

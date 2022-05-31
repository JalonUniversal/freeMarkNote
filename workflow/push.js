const client = require('ssh2-sftp-client');

const configModule = 
{
  name: '生产环境',
  enviroment: 'production',
  ssh: {
    host: '122.51.246.249',
    port: 22,
    username: 'root',
    password: '778450y0uTXY!',
  },
  remotePath: '/usr/www/github_demo',// 远程地址
  localPath:'build',// 本地地址
}

function connect(config) {
  const cltIns = new client();
  return cltIns.connect(config.ssh)
    .then(() => {
      return cltIns.uploadDir(config.localPath, config.remotePath)
    })
    .finally(() => {
      cltIns.end()
    })
}

function main() {
  connect(configModule);
}

main();
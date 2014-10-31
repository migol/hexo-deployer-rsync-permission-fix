hexo.on('deployAfter', function(){
  if (hexo.config.deploy.type != 'rsync') {
    console.log('No permission fix needed');
    return;
  }

  if (!hexo.config.deploy.user || !hexo.config.deploy.host || !hexo.config.deploy.root) {
    console.error('rsync have been configured inproperly');
    return;
  }

  var portString = '';
  if (hexo.config.deploy.port) {
    portString = ' -p ' + hexo.config.deploy.port;
  }

  hexo.util.exec({
    command: 'ssh ' + hexo.config.deploy.user + '@' + hexo.config.deploy.host + portString + ' chmod -R a+rx ' + hexo.config.deploy.root,
    callback: function(){
      console.log('Permission fix applied.');
    }
  });
});

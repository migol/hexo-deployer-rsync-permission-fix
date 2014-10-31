hexo.on('deployAfter', function(err){
  if (hexo.config.deploy.type != 'rsync') {
    hexo.log.i('No permission fix needed');
    return;
  }

  if (err) {
    hexo.log.i('Fix will not be applied because of error in deployment.')
  }

  if (!hexo.config.deploy.user || !hexo.config.deploy.host || !hexo.config.deploy.root) {
    hexo.log.e('rsync have been configured inproperly');
    return;
  }

  var portString = '';
  if (hexo.config.deploy.port) {
    portString = ' -p ' + hexo.config.deploy.port;
  }

  hexo.util.exec({
    command: 'ssh ' + hexo.config.deploy.user + '@' + hexo.config.deploy.host + portString + ' chmod -R a+rx ' + hexo.config.deploy.root,
    callback: function(){
      hexo.log.i('Permission fix applied.');
    }
  });
});

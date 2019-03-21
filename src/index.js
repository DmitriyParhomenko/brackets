module.exports = function check(str, config) {
  let scope = [];

  for (let i= 0; i < str.length; i++) {
    for (let x = 0; x < config.length; x++) {
      if(config[x][0] === str[i])  {
        if(str[i] === scope[scope.length - 1] && config[x][0] === config[x][1]) {
          scope.pop();
          break;
        }
          scope.push(str[i]);
          break;
      }
      if(config[x][1] === str[i]){
        if(config[x][0] === scope[scope.length - 1]) {        
          scope.pop()
          break;
        } else return false;
      }
    }
  }
  return scope.length === 0;
}

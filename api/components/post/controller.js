const auth = require('../auth');
const TABLA = 'post';

module.exports = function(injectedStore) {

    function list(){
        return store.list(TABLA)
    }

    return {
        list,
    }
}
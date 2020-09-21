// const store = require('../../../store/mysql');
const TABLA = 'post';

module.exports = function(injectedStore) {
    const store = injectedStore;
    function list(){
        return store.list(TABLA)
    }

    function get(id){
        return store.get(TABLA, id)
    }

    function upsert(postToAdd) {
        return store.upsert(TABLA, postToAdd);
    }

    return {
        list,
        get,
        upsert
    }
}
const db = {
    'user': [
        { id: '1', name: "Jesus"}
    ]
};

async function list(table) {
    return db[table] || [];
}
async function get(table, id) {
    let col = await list(table);
    console.log(col);
    console.log(col.filter(item => item.id === id));
    return col.filter(item => item.id === id)[0] || null;
}
async function upsert(table, data) {
    if(!db[table]){
        db[table] = [];
    }
    db[table].push(data);
    console.log(db);
    return data;
}
async function remove(table, id) {
    const indexToDelete = db[table].findIndex(item => item.id === id);
    if(indexToDelete === -1 ){
        throw new Error("No se encontro el usuario");
    }
    db[table].splice(indexToDelete, 1);
    console.log("afterRemove", db[table]);
    return id;
}

async function query(table, q) {
    let col = await list(table);
    console.log('list', col);
    let keys = Object.keys(q);
    console.log(keys)
    const key = keys[0];
    console.log(key);
    console.log(col.filter(item => item[key] === q[key])[0])
    return col.filter(item => item[key] === q[key])[0] || null;
}
module.exports = {
    list,
    get,
    upsert,
    remove,
    query
};
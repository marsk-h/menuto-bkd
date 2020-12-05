const TABLE = 'user';
const ID_COL = 'ID';
const CHECK_COL = ["Email", "Phone"];

module.exports = (injectedDB) => {
    let db = injectedDB;
   
    const list = () => {
        console.log('Request LIST');
        return db.list(TABLE);
    };

    const get = (id) => {
        console.log('Request GET');
        return db.get(TABLE, ID_COL, id);
    };

    const search = async (value) => {
        console.log('Request SEARCH');
        return await db.search(TABLE, SEARCH_COL, value);
    };

    // const insert = async (body) => {
    //     console.log('Request INSERT');
    //     return db.insert(TABLE, body);
    // };

    const update = async (body) => {
        console.log('Request UPDATE');
        return db.update(TABLE, ID_COL, body);
    };

    // const remove = async (id) => {
    //     console.log('Request DELETE');
    //     return await db.remove(TABLE, ID_COL, id);
    // };

    return {
        list,
        get,
        search,
        // insert,
        update,
        // remove
    };
};
const TABLE = 'user';
const ID_COL = 'ID';
const CHECK_COL = ["Email", "Phone"];

module.exports = (injectedDB) => {
    let db = injectedDB;

    const login = (body) => {
        console.log('Login Acount');
        return db.login(TABLE, body.Email, body.Password);
    };

    const get = (id) => {
        console.log('Request GET');
        return db.get(TABLE, ID_COL, id);
    };

    // const search = async (value) => {
    //     console.log('Request SEARCH');
    //     return await db.search(TABLE, SEARCH_COL, value);
    // };

    const check = (body, x) => {
        console.log('Checking Value');
        if (body.hasOwnProperty('Email')) {
            return db.check(TABLE, CHECK_COL[x], body.Email);
        } else if (body.hasOwnProperty('Phone')) {
            return db.check(TABLE, CHECK_COL[x], body.Phone);
        } else {
            return new Promise ((resolve, reject) => {
                resolve({});
            });
        }
    };

    const insert = async (body) => {
        console.log('New Account');
        return db.insert(TABLE, body);
    };

    const update = async (body) => {
        console.log('Account Updated');
        return db.update(TABLE, ID_COL, body);
    };


    return {
        get,
        login,
        // search,
        check,
        insert,
        update,
    };
};
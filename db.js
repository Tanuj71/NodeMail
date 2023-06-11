var mysql = require('mysql');

const async = require('async');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
var d;
async.waterfall([

    (callback) => {
        async.parallel([
            (pcallback) => {



                var sql = "insert into customers (id , name , address ) values('','TANUJ GAUR','near bahjoi bus stand islamnagar')";

                con.connect(function (err) {
                    con.query(sql, function (err, result) {
                        if (err) {
                            pcallback(err);
                            return false;
                        } else {

                            console.log('Data Insert1');
                            pcallback(null);
                        }
                    });
                })
            },
            (pcallback) => {



                var sql = "insert into student (id , name , address,fathername ) values('','MANU GAUR','near bahjoi bus stand islamnagar','brijesh ch sharma')";
                con.connect(function (err) {
                    con.query(sql, function (err, result) {
                        if (err) {
                            pcallback(err);
                            return false;
                        } else {
                            console.log('Data Insert2')
                            pcallback(null);
                        }
                    });
                })
            },
            (pcallback) => {
                let sql = `SELECT id,name,address FROM student `;
                con.connect(function (err) {

                    con.query(sql, function (err, result, fields) {

                        console.log("Data fetch from DB")
                        if (err) {
                            pcallback(err);
                            return false;
                        } else {
                            console.log(result);
                            pcallback(null);


                        }
                    });
                });

            }
        ], (err, presult) => {
            if (err) {
                console.log(err);
            } else {
                console.log(presult+"SUCESS");

            }
        });



        callback(null)

    },
    (callback) => {
        let sql = `update customers set name='Tanuj Gaur'  where name ='tanu gaur'`;
        con.connect(function (err) {

            con.query(sql, function (err, result, fields) {
                console.log("Data upated from DB")
                if (err) {
                    callback(err);
                    return false;
                } else {

                    console.log(result.affectedRows);

                    callback(null)
                }
            });
        })

    },
    (callback) => {
        let sql = `SELECT id,name,address FROM customers `;
        con.connect(function (err) {

            con.query(sql, function (err, result, fields) {

                console.log("Data fetch from DB")
                if (err) {
                    callback(err);
                    return false;
                } else {
                    console.log(result);
                    d = result[0].id;
                    console.log(d)
                    callback(null, d)
                }
            });
        })

    },
    (d, callback) => {
        let sql = `DELETE FROM customers WHERE id=${d}`;
        con.connect(function (err) {

            con.query(sql, function (err, result, fields) {
                console.log("Data Delete from DB")
                if (err) {
                    callback(err);
                    return false;
                } else {
                    console.log("Number of records deleted: " + result.affectedRows)
                    callback(null)
                }
            });
        });

    },

], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log("SUCCESS 2");

    }
});


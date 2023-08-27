const express = require("express");
const dbCredentials = require('./config/dbCredentials');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

let connection;

(async () =>{
    try {
        connection = await mysql.createConnection(dbCredentials.db);
      } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
      }
})();


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
    
    res.json({ message: "ok" });
});

app.post("/store-products", async (req, res) => { 
    let result = {"message": "Success."}
    if(req.body){
        let sqlQuery = "INSERT INTO products VALUES";
        if(Array.isArray(req.body.products) && req.body.products.length > 0){
            let products = req.body.products;
            const placeholders = products.map(() => '(?, ?, ?)').join(',');
            const values = products.flatMap(obj => [obj.name, obj.price, obj.availability]);
            sqlQuery = `${sqlQuery} ${placeholders}`;
            try{
                const results = await connection.execute(sqlQuery, values)
                
            } catch(e){
                console.error(e);
                result.message = e;
            }
        }
        
    } else{
        result.message = 'Body cannot be empty'
    }

    res.json(result);

});

app.get("/list-products", async (req,res)=>{
    let result = {"products":[]}
    let sqlQuery = "SELECT * FROM products";
    try{
        const [queryResult, fields] = await connection.execute(sqlQuery);
        result.products = queryResult;
    
    } catch(e){
        console.error(e)
    }

    res.json(result)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');

const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  /*app.use((req, res) => {
    res.json([
        { "id": 1, "nom": "Bafoussam", "population": 285000, "departement": "Menoua" },
        { "id": 2, "nom": "Dschang", "population": 120000, "departement": "Menoua" },
        { "id": 3, "nom": "Mbouda", "population": 90000, "departement": "Bamboutos" },
        { "id": 4, "nom": "Bangangté", "population": 65000, "departement": "Ndé" },
        { "id": 5, "nom": "Foumban", "population": 100000, "departement": "Noun" },
        { "id": 6, "nom": "Foumbot", "population": 55000, "departement": "Noun" },
        { "id": 7, "nom": "Kékem", "population": 35000, "departement": "Haut-Nkam" },
        { "id": 8, "nom": "Makénéné", "population": 28000, "departement": "Haut-Nkam" },
        { "id": 9, "nom": "Bangou", "population": 20000, "departement": "Méfi" },
        { "id": 10, "nom": "Bafang", "population": 60000, "departement": "Haut-Nkam" }
    ]); 
 });*/


app.use((req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Liste des Villes</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 800px;
                    margin: auto;
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    text-align: center;
                    color: #333;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    padding: 12px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f8f8f8;
                    color: #555;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
            </style>
        </head>
        <body>
        
        <div class="container">
            <h1>Liste des Villes</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Population</th>
                        <th>Département</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bafoussam</td>
                        <td>285000</td>
                        <td>Menoua</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dschang</td>
                        <td>120000</td>
                        <td>Menoua</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mbouda</td>
                        <td>90000</td>
                        <td>Bamboutos</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Bangangté</td>
                        <td>65000</td>
                        <td>Ndé</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Foumban</td>
                        <td>100000</td>
                        <td>Noun</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Foumbot</td>
                        <td>55000</td>
                        <td>Noun</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Kékem</td>
                        <td>35000</td>
                        <td>Haut-Nkam</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Makénéné</td>
                        <td>28000</td>
                        <td>Haut-Nkam</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Bangou</td>
                        <td>20000</td>
                        <td>Méfi</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Bafang</td>
                        <td>60000</td>
                        <td>Haut-Nkam</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </body>
        </html>
    `);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});


module.exports = app;
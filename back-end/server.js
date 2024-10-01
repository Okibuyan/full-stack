import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { request } from "http";
import { error } from "console";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/products", (request, response) => {
//   fs.readFile("./data/products.json", "utf-8", (readError, data) => {
//     if (readError) {
//       response.json({ success: false, error: error });
//     }
//     let dbData = data ? JSON.parse(data) : [];

//     response.json({ success: true, products: dbData });
//   });
// });

app.post("/product", (request, response) => {
  const { productName, category, price } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({ success: false, error: error });
    }

    let dbData = data ? JSON.parse(data) : [];
    const newProduct = {
      id: Date.now().toString(),
      productName,
      category,
      price,
    };
    dbData.push(newProduct);

    fs.writeFile("./data/products.json", JSON.stringify(dbData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          product: newProduct,
        });
      }
    });
  });
});

app.delete("/product", (request, response) => {
  const { id } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({ success: false, error: error });
    }

    let dbData = data ? JSON.parse(data) : [];

    const filteredData = dbData.filter((data) => data?.id !== id);

    if (filteredData.length === dbData.length) {
      response.json({
        success: false,
        error: "Product id not found",
      });
    }

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            product: filteredData,
          });
        }
      }
    );
  });
});

app.put("/product", (request, response) => {
  const { id, productName, category, price } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({ success: false, error: error });
    }

    let dbData = data ? JSON.parse(data) : [];

    const editedData = dbData.map((data) => {
      if (data?.id === id) {
        return { id, productName, category, price };
      }
      return data;
    });

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(editedData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            product: editedData,
          });
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server ajillaj ehlelee ++ http://localhost:${port}`);
});

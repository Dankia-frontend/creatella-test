import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Product = styled.div`
  padding: 8px;
`;

const PorductBox = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.p`
  font-size: 23px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: underline;
  margin-top: 20px;
`;

const PriceDate = styled.p`
  color: #6a6c6f;
  font-size: 18px;
`;

function Products() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(10);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/products?_page=${page}=&_limit=15`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(response => {
        setProduct(product.concat(response));
        setLoading(false);
      })
      .catch(error => console.log(error));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  function getFormattedDate(date) {
    let newD = new Date(date);
    let month = newD.getMonth() + 1;
    return newD.getDate() + "/" + month + "/" + newD.getFullYear();
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (page <= 30) {
      setPage(page + 10);
      setLoading(true);
    }
  }

  return (
    <Container>
      <Heading>Ecommerce</Heading>
      <Grid onScroll={handleScroll}>
        {isLoading && (
          <ReactLoading
            type={"spin"}
            color={"#000000"}
            height={80}
            width={80}
          />
        )}
        {!isLoading &&
          product.map((products, index) => (
            <Product key={index}>
              <>
                <PorductBox>
                  <p style={{ fontSize: products.size }}>{products.face}</p>
                  <PriceDate>¢{products.price}</PriceDate>
                  <PriceDate>{getFormattedDate(products.date)}</PriceDate>
                </PorductBox>
              </>
            </Product>
          ))}
        {page === 40 && !isLoading && <p>~ end of catalogue ~</p>}
      </Grid>
    </Container>
  );
}

export default Products;

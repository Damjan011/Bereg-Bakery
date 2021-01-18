import React, { useEffect } from "react";
import './style.css';
import ProductBox from "../../components/ProductBox";
import { useParams } from "react-router-dom";
import { getProductsByCategoryName } from "../../utils/getProducts";
import PageHeader from '../../components/PageHeader';

const Products = ({ closeResponsiveMenu }) => {
  const { category = '' } = useParams();
  // useEffect(() => {
  //   const selectedProductsByCategory = getProductsByCategoryName(category);
  // }, [category])
  useEffect(closeResponsiveMenu, []);
  return (
    <div onClick={closeResponsiveMenu} className="page-content">
      <PageHeader title='Производи' subtitle={category} />
      <div className="products-container">
        {
          getProductsByCategoryName(category).map(el => <ProductBox image={el.image} price={el.price} name={el.name} />)
        }
      </div>
    </div>
  );
};

export default Products;

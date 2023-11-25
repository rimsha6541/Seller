import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from '@windmill/react-ui';
import { FiZoomIn } from 'react-icons/fi';

import Tooltip from '../tooltip/Tooltip';
import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ProductDrawer from '../drawer/ProductDrawer';
import ShowHideButton from '../table/ShowHideButton';
import EditDeleteButton from '../table/EditDeleteButton';
import useToggleDrawer from '../../hooks/useToggleDrawer';


const ProductTable = ({ products }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
 

  // console.log('product length');
  // console.log(product.length);
  // console.log('data');
  // console.log(products);
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        
        {
        products && products.length!=0 ?
        products.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="text-xs uppercase font-semibold">
                {' '}
                {product.p_id}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={'http://127.0.0.1:8000/'+product.p_image}
                  alt={product.p_name}
                />
                <div>
                  <h2 className="text-sm font-medium">{product.p_name}</h2>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product.category.cat_name}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">${product.p_price}</span>
            </TableCell>
            <TableCell>
              {product.p_status > 0 ? (
                <Badge type="success">Selling</Badge>
              ) : (
                <Badge type="danger">Sold Out</Badge>
              )}
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {product.discount >= 1? (
                  <span>{product.discount}</span>
                ):
                (
                  <span>0</span>
                )
                }
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product.p_brand}</span>
            </TableCell>
            {/* <TableCell>
            <button>update</button>
            </TableCell> */}
          </TableRow>
        ))
    :'Loading Data'
      }
      </TableBody>
    </>
  );
};

export default React.memo(ProductTable);

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';
import { FiZoomIn, FiTrash2 } from 'react-icons/fi';

import Tooltip from '../tooltip/Tooltip';
import MainModal from '../modal/MainModal';
import { SidebarContext } from '../../context/SidebarContext';
import { deleteCustomer } from '../../Axios/Axios';

const CustomerTable = ({ customers }) => {
  const [customerId, setCustomerId] = useState('');
  const { toggleModal } = useContext(SidebarContext);
  const [title, setTitle] = useState('');
  const getData = async () => {
    let response = await deleteCustomer();
  };
  // console.log(orders)
  useEffect(()=>{
    // navigation.push('/orders')
    getData();
  },[])

  const handleModalOpen = (id, title) => {
    setCustomerId(id);
    toggleModal();
    setTitle(title);
  };

  return (
    <>
      <MainModal id={customerId} title={title} />
      <TableBody>
        {[].map((user) => (
          <TableRow key={user._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {' '}
                {user.id}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(user.createdAt).format('MMM D, YYYY')}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{user.name}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{user.email}</span>{' '}
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">{user.phone}</span>
            </TableCell>

            <TableCell>
              <div className="flex justify-end text-right">
                <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                  {' '}
                  <Link to={`/customer-order/${user._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title="View Order"
                      bgColor="#34D399"
                    />
                  </Link>
                </div>
                <div
                  onClick={() => deleteCustomer(user.id)}
                  className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
                >
                  <Tooltip
                    id="delete"
                    Icon={FiTrash2}
                    title="Delete"
                    bgColor="#F87171"
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerTable;

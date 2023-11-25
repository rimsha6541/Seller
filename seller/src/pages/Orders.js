import React, { useContext, useState, useEffect } from 'react';
import { CSVDownloader } from 'react-papaparse';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Card,
  CardBody,
  Pagination,
} from '@windmill/react-ui';
import { IoCloudDownloadOutline } from 'react-icons/io5';

import orderData from '../utils/orders';
import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import NotFound from '../components/table/NotFound';
import OrderServices from '../services/OrderServices';
import Loading from '../components/preloader/Loading';
import OrderTable from '../components/order/OrderTable';
import PageTitle from '../components/Typography/PageTitle';
import { SidebarContext } from '../context/SidebarContext';
import { getAllOrders } from "../Axios/Axios";

const Orders = () => {
  const {
    time,
    setTime,
    currentPage,
    searchText,
    searchRef,
    status,
    setStatus,
    handleChangePage,
    handleSubmitForAll,
    resultsPerPage,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(() =>
    OrderServices.getAllOrders({
      contact: searchText,
      status,
      page: currentPage,
      limit: resultsPerPage,
      day: time,
    })
  );

  const { dataTable, serviceData} = useFilter(data?.orders);
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    let response = await getAllOrders();
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <PageTitle>Orders</PageTitle>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForAll}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:grid-cols-4 xl:grid-cols-4"
          >
            {/* <div>
              <Input
                ref={searchRef}
                type="search"
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                placeholder="Search by phone"
              />
            </div> */}
         
            {/* <div>
              <Select
                onChange={(e) => setTime(e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="Order limits" defaultValue hidden>
                  Order limits
                </option>
                <option value="5">Last 5 days orders</option>
                <option value="7">Last 7 days orders</option>
                <option value="15">Last 15 days orders</option>
                <option value="30">Last 30 days orders</option>
              </Select>
            </div> */}
            <div>
              
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
          <TableHeader>
              <tr>
                <TableCell>SR NO</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Total Bill</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Amount Payed</TableCell>
                <TableCell className="text-center">Status</TableCell>
                <TableCell className="text-center">Panel</TableCell>
                <TableCell className="text-center">Action</TableCell>
                {/* <TableCell className="text-right">Update</TableCell> */}
                {/* <TableCell className="text-right">Delete</TableCell> */}
              </tr>
            </TableHeader>
            <OrderTable orders={userData} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.totalDoc}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Order" />
      )}
    </>
  );
};

export default Orders;

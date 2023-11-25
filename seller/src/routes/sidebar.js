import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
  FiSlack,
} from 'react-icons/fi';
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
  {
    path: '/category',
    icon: FiList,
    name: 'Category',
  },
  
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  
  
  
  
];

export default sidebar;

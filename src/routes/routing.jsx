/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import NewListingForm from '../components/forms/newListingForm.jsx';
import ContactForm from '../components/forms/contactForm.jsx';
import LoginForm from '../components/forms/loginForm.jsx'
import RegistrationForm from '../components/forms/registerUserForm.jsx'
import Inbox from '../layouts/inbox.jsx'
var ThemeRoutes = [
  {
    path: '/home',
    name: 'Listings',
    icon: 'mdi mdi-apps',
    component: FirstDashboard
  },
  {
    path: '/new_listing',
    name: 'New Listing',
    icon: 'mdi mdi-pencil-circle',
    component: NewListingForm
  },
  {
    path: '/contact_seller',
    name: 'Contact Seller',
    icon: 'mdi mdi-comment-processing-outline',
    component: ContactForm
  },
  {
    path: '/inbox',
    name: 'Inbox',
    icon: 'mdi mdi-comment-processing-outline',
    component:Inbox
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'mdi mdi-image-filter-vintage',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'mdi mdi-credit-card-multiple',
    component: RegistrationForm
  }
];
export default ThemeRoutes;

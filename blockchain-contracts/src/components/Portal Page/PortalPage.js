import PortalPageCSS from './PortalPage.module.css';
import { Link } from 'react-router-dom';

const PortalPage = () => {
  return (
    <div className={PortalPageCSS.body}>
      <div className={PortalPageCSS.yourportaltext}>
        <h1>Your Donation Portal</h1>
        <h2>
          Welcome to the donation portal. Donating has never been more
          efficient, and this is the heart of your donations! Choose an option
          to get started
        </h2>
      </div>

      <div className={PortalPageCSS.portalBox}>
        <div className={PortalPageCSS.buttonGroup}>
          <Link to='/PreviousDonations'>Track previous donations</Link>

          <Link to='/DonationStatistics'>View your donation statistics</Link>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;

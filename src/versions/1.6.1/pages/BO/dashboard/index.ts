import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import {Dashboard as DashboardPageVersion} from '@versions/develop/pages/BO/dashboard';

/**
 * Bo dashboard page, contains functions that can be used on the page
 * @class
 * @extends DashboardPage
 */
class BODashboardPage extends DashboardPageVersion implements DashboardPageInterface {
  // Catalog
  public readonly catalogParentLink: string = 'li#maintab-AdminCatalog';

  public readonly productsLink: string = 'li#subtab-AdminProducts';

  // Customers
  public readonly customersParentLink: string = 'li#maintab-AdminParentCustomer';

  // Localization
  public readonly internationalParentLink: string = 'li#maintab-AdminParentLocalization';

  public readonly localizationLink: string = 'li#subtab-AdminLocalization';

  // Orders
  public readonly ordersParentLink: string = 'li#maintab-AdminParentOrders';

  // Shipping
  public readonly shippingLink: string = '#maintab-AdminParentShipping';
}

const boDashboardPage = new BODashboardPage();
export {boDashboardPage, BODashboardPage};

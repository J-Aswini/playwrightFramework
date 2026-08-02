import { test } from '../src/config/fixtures';
import { LoginPage } from '../src/pages/loginPage';
import { RolePage } from '../src/pages/rolePage';

test.describe("role", () => {

  let rolePage: RolePage
  test.beforeEach("navigate to login url", async ({pageWithLogin}) => {
    rolePage = new RolePage(pageWithLogin)
  })



  test('Verify add application pop up in roles page', async ({ page }) => {
    await rolePage.navigateViaDashBoard('Administrator', 'Roles')

  });


  test('Create role', async ({ page }) => {
    await rolePage.navigateViaDashBoard('Administrator', 'Roles')
    await rolePage.verifyAddApplication()
    await rolePage.createNewRole()
  });

})
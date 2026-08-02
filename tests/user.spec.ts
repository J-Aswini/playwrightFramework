import { test } from '../src/config/fixtures';
import { UsersPage } from '../src/pages/userPage'

test.describe("users module", () => {


    let userPage: UsersPage
    test.beforeEach("navigate to dashboard", async ({ pageWithLogin }) => {
        userPage = new UsersPage(pageWithLogin)
    })


    test('Verify mandatory field validation for add application users', async()=>{
        await userPage.navigateViaDashBoard("Administrator", 'Users')
        await userPage.add()
        await userPage.clickSaveButton()
        await userPage.verifyErrorMessage()
    })
})
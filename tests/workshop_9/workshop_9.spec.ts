import {test, expect} from "@playwright/test"


test('Automating Form Sumbmissions @githubAction', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/')

    const newTodo = await page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('John Doe');
    await newTodo.press('Enter');
    await newTodo.fill('JJ Doe');
    await newTodo.press('Enter');

    const firstTodo = page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check()
    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass('completed')
})

test('Handling Form @githubAction', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/')
    await page.fill('[placeholder="What needs to be done?"]', 'John Doe');
    await page.locator('[placeholder="What needs to be done?"]').press('Enter')
    
    const checkbox = await page.locator('.toggle')
    await checkbox.check();

})
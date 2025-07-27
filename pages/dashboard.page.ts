import { Locator, Page } from "playwright";

export class DashboardPage {
    readonly page:Page
    readonly itemNamenput: Locator
    readonly addItemButton: Locator
    readonly updateItemButton: Locator
    readonly editItemButton: (a:string) =>Locator
    readonly deleteItemButton: (a:string) =>Locator

    constructor(page:Page){
        this.page=page
        this.itemNamenput = page.getByRole('textbox', { name: 'Item name' })
        this.addItemButton = page.getByRole('button', { name: 'Add' })
        this.updateItemButton = page.getByRole('button', { name: 'Update' })
        this.editItemButton = (itemName) => page.locator('li', { hasText: itemName }).locator('button', { hasText: 'Edit' });
        this.deleteItemButton = (itemName) => page.locator('li', { hasText: itemName }).locator('button', { hasText: 'Delete' });
    }


    async goTo(){
        await this.page.goto('/dashboard')
    }

    async addNewItem(itemName: string){
      await this.itemNamenput.fill(itemName)
      await this.addItemButton.click()  
    }

    async updateItem(itemName: string){
      await this.editItemButton(itemName).click()  
      await this.itemNamenput.fill("item updated")
      await this.updateItemButton.click()
    }

    async deleteItem(itemName: string){
      await this.deleteItemButton(itemName).click() 
    }
}
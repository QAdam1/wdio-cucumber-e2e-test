
export default class Page {
    constructor() {

    }

    /**All reusable web functions */
    async navigateTo(path: string) {
        await browser.url(path)
        // await browser.maximizeWindow()
    }
    async click(ele) {
        await ele.waitForClickable({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.click()
    }
    async typeInto(ele, text: string) {
        console.log(`>>> element id: ${ele.selector}`);
        await ele.waitForDisplayed({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.setValue(text)
    }
}

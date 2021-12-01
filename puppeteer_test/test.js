
// 

const puppeteer = require('puppeteer-core');

(async () => {
	const browser = await puppeteer.launch({
		executablePath: '/home/ammarfaizi2/project/now/chromium/src/out/build001/chrome'
	});
	const page = await browser.newPage();
	await page.goto('https://www.ammarfaizi.net/test.html');
	await page.evaluate(function() {
		x();
	});
	await page.screenshot({
		path: 'example.png'
	});
	await browser.close();
})();


// 

const puppeteer = require('puppeteer-core');

(async () => {
	const browser = await puppeteer.launch({
		executablePath: '/home/ammarfaizi2/work/chromium/src/out/Default/chrome'
	});
	const page = await browser.newPage();
	await page.goto('http://127.0.0.1:8000/main.html');
	await page.evaluate(function() {
	});
	await page.screenshot({
		path: 'example.png'
	});
	await browser.close();
})();

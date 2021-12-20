
// 

const puppeteer = require('puppeteer-core');

(async () => {
	const browser = await puppeteer.launch({
		executablePath: '/home/ammarfaizi2/work/chromium/src/out/Default/chrome'
	});
	const page = await browser.newPage();
	await page.goto('http://127.0.0.1:8000/main.html');
	await page.screenshot({path: 'ss.png'});
	await browser.close();
})();

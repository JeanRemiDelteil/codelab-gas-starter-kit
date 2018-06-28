
/**
 * Adds a custom menu with items to show the sidebar
 *
 * @entryPoint
 */
function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu('GAS starter kit DEMO')
		.addItem('Open sidebar', 'openSidebar')
		.addToUi();
}


/**
 * Open the sidebar
 */
function openSidebar() {
	
	var template = HtmlService.createTemplateFromFile('sidebar/index');
	
	// Display sidebar
	var sidebarUi = template.evaluate().setTitle('GAS starter kit DEMO');
	SpreadsheetApp.getUi().showSidebar(sidebarUi);
	
}
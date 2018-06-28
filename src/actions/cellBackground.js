
/**
 * Update the selected cell background color
 *
 * @param {string} color
 */
function updateCellBackground(color) {
	
	SpreadsheetApp
		.getActiveSpreadsheet()
		.getActiveCell()
		.setBackground(color);
	
}


/**
 * Return the selected cell background color
 *
 * @return {string} cell background color
 */
function getCellBackground() {
	
	return SpreadsheetApp
		.getActiveSpreadsheet()
		.getActiveCell()
		.getBackground();
	
}

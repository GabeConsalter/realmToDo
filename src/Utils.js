export const Utils = {
	guid: () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		  var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		  return v.toString(16);
		});
	},

	colors: {
		yellow: '#FDB513',
		red: '#CF2B32',
		blue: '#1372A0',
		purple: '#8156A5',
		grey: '97948F'
	}
}
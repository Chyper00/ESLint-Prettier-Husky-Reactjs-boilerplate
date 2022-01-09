const CONTEXT_MENU_ID_WORD = 'searchWord';
const CONTEXT_MENU_ID_IMAGE = 'searchImage';

chrome.contextMenus.create({
	id: CONTEXT_MENU_ID_WORD,
	title: 'Salvar e pesquisar palavra',
	contexts: ['selection'],
});

chrome.contextMenus.create({
	id: CONTEXT_MENU_ID_IMAGE,
	title: 'Salvar e pesquisar imagem',
	contexts: ['image'],
});

chrome.contextMenus.onClicked.addListener((clickData) => {
	chrome.storage.sync.get('animes', ({ animes = [] }) => {
		animes.push({ ...clickData });
		chrome.storage.sync.set({ animes });
	});
});

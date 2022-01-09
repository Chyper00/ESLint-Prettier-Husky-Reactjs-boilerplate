chrome.contextMenus.create({
	id: 'Listinha',
	title: 'Salvar na minha listinha',
	contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((clickData) => {
	chrome.storage.sync.get('animes', ({ animes = [] }) => {
		animes.push({ name: clickData.selectionText, page: clickData.pageUrl });
		chrome.storage.sync.set({ animes });
	});
});

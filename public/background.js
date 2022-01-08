chrome.contextMenus.create({
	id: 'Listinha',
	title: 'Salvar na minha listinha',
	contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((clickData) => {
	chrome.storage.sync.set({ animes: clickData.selectionText });
});

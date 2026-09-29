// Minimaler Service Worker: macht die Seite installierbar ("App installieren").
// Er speichert nichts zwischen – jede Anfrage geht normal ans Netz, damit Kurse immer frisch sind.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

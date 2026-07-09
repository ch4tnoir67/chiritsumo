// sw.js - Service Worker for PWA
// ネットワーク優先戦略 + 即時引き継ぎ

const CACHE_NAME = 'chiritsumo-cache-v4';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
];

// インストール時: skipWaiting で即時アクティブ化
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting()) // 即時引き継ぎ
  );
});

// アクティベート時: 古いキャッシュを全削除 + 全クライアントを制御下に
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim()) // 即時全クライアント制御
  );
});

// フェッチ: ネットワーク優先（失敗時のみキャッシュ）
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // HTML・JS・CSS はネットワーク優先
  const url = new URL(event.request.url);
  const isCore = ['.html', '.js', '.css'].some(ext => url.pathname.endsWith(ext)) || url.pathname === '/';

  if (isCore) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // 取得成功ならキャッシュを更新して返す
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request)) // オフライン時はキャッシュ
    );
  } else {
    // 画像等はキャッシュ優先
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});

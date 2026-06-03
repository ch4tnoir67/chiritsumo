/* ==========================================
   CHIRITSUMO - App Logic
   ========================================== */

// ==========================================
// DATA
// ==========================================

const TRANSACTIONS_DATA = [
  { id: 1, name: 'セブンイレブン', icon: '🏪', price: 583, change: 17, date: '2026-05-25', time: '12:30' },
  { id: 2, name: 'スターバックス', icon: '☕', price: 520, change: 80, date: '2026-05-25', time: '10:15' },
  { id: 3, name: 'ユニクロ', icon: '👕', price: 2490, change: 10, date: '2026-05-24', time: '16:45' },
  { id: 4, name: 'ファミリーマート', icon: '🏪', price: 347, change: 53, date: '2026-05-24', time: '13:20' },
  { id: 5, name: 'Amazon', icon: '📦', price: 1834, change: 66, date: '2026-05-24', time: '09:00' },
  { id: 6, name: 'ローソン', icon: '🏪', price: 428, change: 72, date: '2026-05-23', time: '19:30' },
  { id: 7, name: 'マクドナルド', icon: '🍔', price: 690, change: 10, date: '2026-05-23', time: '12:00' },
  { id: 8, name: '丸亀製麺', icon: '🍜', price: 570, change: 30, date: '2026-05-23', time: '11:30' },
  { id: 9, name: 'ドラッグストア', icon: '💊', price: 1250, change: 50, date: '2026-05-22', time: '18:00' },
  { id: 10, name: 'ガソリンスタンド', icon: '⛽', price: 3421, change: 79, date: '2026-05-22', time: '08:30' },
  { id: 11, name: 'カフェ', icon: '☕', price: 450, change: 50, date: '2026-05-21', time: '15:00' },
  { id: 12, name: '書店', icon: '📚', price: 1650, change: 50, date: '2026-05-21', time: '14:00' },
  { id: 13, name: 'スーパー', icon: '🛒', price: 2876, change: 24, date: '2026-05-20', time: '17:30' },
  { id: 14, name: 'コンビニ', icon: '🏪', price: 215, change: 85, date: '2026-05-20', time: '07:45' },
  { id: 15, name: 'レストラン', icon: '🍽️', price: 1980, change: 20, date: '2026-05-19', time: '19:00' },
];

const HOLDINGS_DATA = [
  { name: '全世界株式', ticker: 'VT', amount: 8942, change: 6.2, percent: 36, color: '#6C63FF', icon: '🌍' },
  { name: '米国 S&P500', ticker: 'VOO', amount: 6214, change: 8.1, percent: 25, color: '#3CDFAB', icon: '🇺🇸' },
  { name: '先進国株式', ticker: 'VEA', amount: 3721, change: 3.4, percent: 15, color: '#FF6B9D', icon: '🏢' },
  { name: '新興国株式', ticker: 'VWO', amount: 2486, change: -1.2, percent: 10, color: '#FFB347', icon: '🌏' },
  { name: '日本株式', ticker: 'EWJ', amount: 2241, change: 4.8, percent: 9, color: '#4FC3F7', icon: '🇯🇵' },
  { name: '債券', ticker: 'BND', amount: 1227, change: 1.1, percent: 5, color: '#B388FF', icon: '🏛️' },
];

const COMMUNITY_USERS = [
  { name: '田中さん', initial: '田', color: '#FF6B9D', stock: 'VOO', amount: '+¥3,210' },
  { name: '鈴木さん', initial: '鈴', color: '#4FC3F7', stock: 'VT', amount: '+¥1,847' },
  { name: '佐藤さん', initial: '佐', color: '#FFB347', stock: 'EWJ', amount: '+¥982' },
  { name: '高橋さん', initial: '高', color: '#3CDFAB', stock: 'VOO', amount: '+¥5,621' },
  { name: '伊藤さん', initial: '伊', color: '#B388FF', stock: 'VWO', amount: '+¥712' },
];

const TRENDING_STOCKS = [
  { flag: '🌍', name: '全世界株式', ticker: 'VT', change: '+2.4%', positive: true },
  { flag: '🇺🇸', name: 'S&P500', ticker: 'VOO', change: '+3.1%', positive: true },
  { flag: '🇯🇵', name: '日経225', ticker: 'EWJ', change: '+1.8%', positive: true },
  { flag: '🌏', name: '新興国株', ticker: 'VWO', change: '-0.6%', positive: false },
  { flag: '🇪🇺', name: '欧州株', ticker: 'VGK', change: '+1.2%', positive: true },
];

const FEED_DATA = [
  {
    user: '田中さん', initial: '田', color: '#FF6B9D',
    time: '2時間前',
    content: 'コツコツ積み立てて3ヶ月！ついに利益が¥10,000を超えました 🎉 おつり投資の威力を実感しています。',
    stock: 'VOO', stockChange: '+8.1%', positive: true,
    likes: 24, comments: 5
  },
  {
    user: '鈴木さん', initial: '鈴', color: '#4FC3F7',
    time: '5時間前',
    content: '今日のコンビニのおつり¥73がそのまま全世界株式へ。小さな一歩だけど、将来の自分に投資している気分です ☺️',
    stock: 'VT', stockChange: '+2.4%', positive: true,
    likes: 18, comments: 3
  },
  {
    user: '佐藤さん', initial: '佐', color: '#FFB347',
    time: '昨日',
    content: '自動投資をONにしてから1ヶ月。合計¥4,200が自動で投資されていた！気づかないうちに貯まるのが良い 👍',
    stock: 'EWJ', stockChange: '+1.8%', positive: true,
    likes: 31, comments: 8
  },
  {
    user: '高橋さん', initial: '高', color: '#3CDFAB',
    time: '2日前',
    content: '投資初心者だったけど、おつりからなら怖くない。少しずつ勉強も始めました。このアプリのおかげで一歩踏み出せた！',
    stock: null, stockChange: null, positive: true,
    likes: 42, comments: 12
  },
];

const NOTIFICATIONS = [
  { icon: '💰', text: 'セブンイレブンでの買い物のおつり<strong>¥17</strong>が投資されました', time: '12:30', unread: true },
  { icon: '☕', text: 'スターバックスでの買い物のおつり<strong>¥80</strong>が投資されました', time: '10:15', unread: true },
  { icon: '📈', text: '保有銘柄の<strong>VOO</strong>が<strong>+1.2%</strong>上昇しました', time: '09:00', unread: true },
  { icon: '🎉', text: '累計投資額が<strong>¥20,000</strong>を突破しました！', time: '昨日', unread: false },
  { icon: '👥', text: '田中さんがあなたの投稿に「いいね」しました', time: '昨日', unread: false },
  { icon: '💡', text: '今週のマーケットレポートが届きました', time: '2日前', unread: false },
];


// ==========================================
// APP STATE
// ==========================================
let currentSlide = 0;
let currentTab = 'home';
let isAmountHidden = false;
let likedPosts = new Set();
let animationFrameId = null;
let currentInvestmentTarget = HOLDINGS_DATA[0];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Splash → Onboarding after splash animation
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('onboarding-screen').classList.remove('hidden');
  }, 3400);

  setupOnboarding();
  setupNavigation();
  setupNotifications();
  setupSettings();
  setupEyeToggle();
  setupPeriodSelector();
});

// ==========================================
// ONBOARDING
// ==========================================
function setupOnboarding() {
  const nextBtn = document.getElementById('onboarding-next');
  nextBtn.addEventListener('click', () => {
    if (currentSlide < 2) {
      goToSlide(currentSlide + 1);
    } else {
      // Enter main app
      document.getElementById('onboarding-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      initApp();
    }
  });

  // Dot navigation
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.dot));
    });
  });

  // Touch swipe
  let touchStartX = 0;
  const slides = document.getElementById('onboarding-slides');
  slides.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  slides.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < 2) goToSlide(currentSlide + 1);
      if (diff < 0 && currentSlide > 0) goToSlide(currentSlide - 1);
    }
  });
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.onboarding-slide');
  const dots = document.querySelectorAll('.dot');
  const btnText = document.querySelector('.btn-text');

  slides[currentSlide].classList.remove('active');
  slides[currentSlide].classList.add('exit');
  setTimeout(() => {
    slides[currentSlide].classList.remove('exit');
  }, 500);

  slides[index].classList.add('active');

  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
  btnText.textContent = index === 2 ? 'はじめる' : '次へ';
}

// ==========================================
// MAIN APP INIT
// ==========================================
function initApp() {
  renderRecentTransactions();
  renderFullTransactions();
  renderCommunityPreview();
  renderHoldings();
  renderTopHoldings();
  renderTrending();
  renderCommunityFeed();
  renderNotifications();

  // Draw charts after a short delay for animations
  setTimeout(() => {
    drawMiniChart();
    drawTransactionChart();
    drawDonutChart();
    drawPerformanceChart();
  }, 300);

  // Trigger first investment celebration after 5 seconds
  setTimeout(() => {
    showCelebration('初投資おめでとう！', 'おつり¥17がVTに投資されました。\n小さな一歩が、大きな資産に！');
  }, 5000);
}

// ==========================================
// NAVIGATION
// ==========================================
function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  // Update screens
  document.querySelectorAll('.screen-content').forEach(s => s.classList.add('hidden'));
  document.getElementById(`screen-${tab}`).classList.remove('hidden');

  // Scroll to top
  document.getElementById('screens-container').scrollTop = 0;

  // Close notification panel
  document.getElementById('notification-panel').classList.add('hidden');

  currentTab = tab;

  // Redraw charts if needed
  if (tab === 'portfolio') {
    setTimeout(() => {
      drawDonutChart();
      drawPerformanceChart();
    }, 100);
  }
  if (tab === 'transactions') {
    setTimeout(() => drawTransactionChart(), 100);
  }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================
function renderRecentTransactions() {
  const container = document.getElementById('recent-transactions');
  const recent = TRANSACTIONS_DATA.slice(0, 4);
  container.innerHTML = recent.map(t => createTransactionItem(t)).join('');
}

function renderFullTransactions() {
  const container = document.getElementById('full-transactions');
  let currentDate = '';
  let html = '';

  TRANSACTIONS_DATA.forEach(t => {
    if (t.date !== currentDate) {
      currentDate = t.date;
      html += `<div class="transaction-date-header">${formatDate(t.date)}</div>`;
    }
    html += createTransactionItem(t);
  });

  container.innerHTML = html;
}

function createTransactionItem(t) {
  return `
    <div class="transaction-item" onclick="showTransactionDetail(${t.id})">
      <div class="transaction-icon">${t.icon}</div>
      <div class="transaction-info">
        <div class="transaction-name">${t.name}</div>
        <div class="transaction-detail">${t.time} · おつり投資</div>
      </div>
      <div class="transaction-amounts">
        <div class="transaction-price">¥${t.price.toLocaleString()}</div>
        <div class="transaction-change">+¥${t.change}</div>
      </div>
    </div>
  `;
}

function renderCommunityPreview() {
  const container = document.getElementById('community-preview');
  container.innerHTML = COMMUNITY_USERS.map(u => `
    <div class="community-card" onclick="switchTab('community')">
      <div class="community-card-avatar" style="background: ${u.color}">${u.initial}</div>
      <div class="community-card-name">${u.name}</div>
      <div class="community-card-stock">${u.stock}に投資中</div>
      <div class="community-card-amount">${u.amount}</div>
    </div>
  `).join('');
}

function renderHoldings() {
  const container = document.getElementById('holdings-list');
  container.innerHTML = HOLDINGS_DATA.map(h => `
    <div class="holding-item">
      <div class="holding-icon" style="background: ${h.color}20; color: ${h.color}">
        ${h.icon}
      </div>
      <div class="holding-info">
        <div class="holding-name-row">
          <span class="holding-name">${h.name}</span>
          <span class="holding-ticker">${h.ticker}</span>
        </div>
        <div class="holding-bar-container">
          <div class="holding-bar-bg">
            <div class="holding-bar-fill" style="width: ${h.percent}%; background: ${h.color}"></div>
          </div>
          <span class="holding-percent">${h.percent}%</span>
        </div>
      </div>
      <div class="holding-values">
        <div class="holding-amount">¥${h.amount.toLocaleString()}</div>
        <div class="holding-change ${h.change >= 0 ? 'positive' : 'negative'}">
          ${h.change >= 0 ? '+' : ''}${h.change}%
        </div>
      </div>
    </div>
  `).join('');
}

function renderTopHoldings() {
  const container = document.getElementById('top-holdings-list');
  if (!container) return;
  const topHoldings = HOLDINGS_DATA.slice(0, 2);
  container.innerHTML = topHoldings.map(h => `
    <div class="holding-item top-holding-item" onclick="switchTab('portfolio')">
      <div class="holding-icon" style="background: ${h.color}20; color: ${h.color}">
        ${h.icon}
      </div>
      <div class="holding-info">
        <div class="holding-name-row">
          <span class="holding-name">${h.name}</span>
          <span class="holding-ticker">${h.ticker}</span>
        </div>
        <div class="holding-bar-container">
          <div class="holding-bar-bg">
            <div class="holding-bar-fill" style="width: ${h.percent}%; background: ${h.color}"></div>
          </div>
        </div>
      </div>
      <div class="holding-values">
        <div class="holding-amount">¥${h.amount.toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}

function renderTrending() {
  const container = document.getElementById('trending-list');
  container.innerHTML = TRENDING_STOCKS.map(s => `
    <div class="trending-item">
      <div class="trending-flag">${s.flag}</div>
      <div class="trending-name">${s.name}</div>
      <div class="trending-ticker">${s.ticker}</div>
      <div class="trending-change ${s.positive ? 'positive' : 'negative'}">${s.change}</div>
    </div>
  `).join('');
}

function renderCommunityFeed() {
  const container = document.getElementById('community-feed');
  container.innerHTML = FEED_DATA.map((f, i) => `
    <div class="feed-item">
      <div class="feed-header">
        <div class="feed-avatar" style="background: ${f.color}">${f.initial}</div>
        <div class="feed-user-info">
          <div class="feed-username">${f.user}</div>
          <div class="feed-time">${f.time}</div>
        </div>
      </div>
      <div class="feed-content">${f.content}</div>
      ${f.stock ? `
        <div class="feed-stock-tag">
          <span class="feed-stock-name">${f.stock}</span>
          <span class="feed-stock-change ${f.positive ? 'positive' : 'negative'}">${f.stockChange}</span>
        </div>
      ` : ''}
      <div class="feed-actions">
        <button class="feed-action-btn ${likedPosts.has(i) ? 'liked' : ''}" onclick="toggleLike(${i}, this)">
          <svg viewBox="0 0 24 24" fill="${likedPosts.has(i) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span>${f.likes + (likedPosts.has(i) ? 1 : 0)}</span>
        </button>
        <button class="feed-action-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
          </svg>
          <span>${f.comments}</span>
        </button>
      </div>
    </div>
  `).join('');
}

function renderNotifications() {
  const container = document.getElementById('notification-list');
  container.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notification-item ${n.unread ? 'unread' : ''}">
      <div class="notification-dot">${n.icon}</div>
      <div class="notification-text">
        <p>${n.text}</p>
        <span class="notif-time">${n.time}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// CHARTS (Canvas 2D)
// ==========================================
function drawMiniChart() {
  const canvas = document.getElementById('mini-chart-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  const data = [18, 20, 19, 22, 21, 23, 22, 24, 23, 25, 24, 26, 25, 27, 28, 27, 29, 28, 30, 29, 31, 30, 32, 33, 32, 34, 33, 35, 34];

  ctx.clearRect(0, 0, w, h);

  // Gradient fill
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, 'rgba(108, 99, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(108, 99, 255, 0)');

  const min = Math.min(...data) - 2;
  const max = Math.max(...data) + 2;
  const xStep = w / (data.length - 1);

  // Draw fill
  ctx.beginPath();
  ctx.moveTo(0, h);
  data.forEach((d, i) => {
    const x = i * xStep;
    const y = h - ((d - min) / (max - min)) * h;
    if (i === 0) ctx.lineTo(x, y);
    else {
      const prevX = (i - 1) * xStep;
      const prevY = h - ((data[i - 1] - min) / (max - min)) * h;
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw line
  const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
  lineGrad.addColorStop(0, '#6C63FF');
  lineGrad.addColorStop(1, '#3CDFAB');

  ctx.beginPath();
  data.forEach((d, i) => {
    const x = i * xStep;
    const y = h - ((d - min) / (max - min)) * h;
    if (i === 0) ctx.moveTo(x, y);
    else {
      const prevX = (i - 1) * xStep;
      const prevY = h - ((data[i - 1] - min) / (max - min)) * h;
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw end dot
  const lastX = (data.length - 1) * xStep;
  const lastY = h - ((data[data.length - 1] - min) / (max - min)) * h;
  ctx.beginPath();
  ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#3CDFAB';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(lastX, lastY, 7, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(60, 223, 171, 0.3)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawTransactionChart() {
  const canvas = document.getElementById('transaction-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  const days = ['月', '火', '水', '木', '金', '土', '日'];
  const data = [120, 85, 210, 45, 175, 95, 150];
  const maxVal = Math.max(...data) * 1.2;
  const barWidth = (w - 60) / days.length;
  const barMaxHeight = h - 40;

  ctx.clearRect(0, 0, w, h);

  data.forEach((val, i) => {
    const barH = (val / maxVal) * barMaxHeight;
    const x = 30 + i * barWidth + barWidth * 0.2;
    const barW = barWidth * 0.6;
    const y = h - 30 - barH;

    // Bar gradient
    const grad = ctx.createLinearGradient(0, y, 0, h - 30);
    grad.addColorStop(0, '#6C63FF');
    grad.addColorStop(1, 'rgba(108, 99, 255, 0.3)');

    // Rounded bar
    const radius = 6;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + barW - radius, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
    ctx.lineTo(x + barW, h - 30);
    ctx.lineTo(x, h - 30);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Labels
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#6a6a84';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(days[i], x + barW / 2, h - 10);

    // Value on top
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#9898b0';
    ctx.font = '10px Inter, sans-serif';
    ctx.fillText(`¥${val}`, x + barW / 2, y - 8);
  });
}

function drawDonutChart() {
  const canvas = document.getElementById('donut-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) / 2 - 10;
  const innerRadius = radius * 0.65;

  ctx.clearRect(0, 0, w, h);

  let startAngle = -Math.PI / 2;
  HOLDINGS_DATA.forEach(holding => {
    const sliceAngle = (holding.percent / 100) * Math.PI * 2;
    const endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.arc(cx, cy, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = holding.color;
    ctx.fill();

    // Gap between segments
    ctx.beginPath();
    ctx.arc(cx, cy, radius, endAngle - 0.02, endAngle + 0.02);
    ctx.arc(cx, cy, innerRadius, endAngle + 0.02, endAngle - 0.02, true);
    ctx.closePath();
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim() || '#0a0a0f';
    ctx.fill();

    startAngle = endAngle;
  });
}

function drawPerformanceChart() {
  const canvas = document.getElementById('performance-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  const myData = [0, 0.5, 1.2, 1.8, 2.1, 2.8, 3.2, 3.8, 4.1, 4.5, 4.8, 5.3];
  const avgData = [0, 0.3, 0.8, 1.0, 1.3, 1.8, 2.0, 2.3, 2.5, 2.8, 3.0, 3.2];
  const months = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

  const allData = [...myData, ...avgData];
  const min = Math.min(...allData) - 0.5;
  const max = Math.max(...allData) + 0.5;
  const xStep = w / (myData.length - 1);
  const padding = 4;

  ctx.clearRect(0, 0, w, h);

  // Draw average line (behind)
  drawSmoothLine(ctx, avgData, min, max, w, h, xStep, 'rgba(108, 99, 255, 0.25)', 2);

  // Draw my data with fill
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, 'rgba(108, 99, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(108, 99, 255, 0)');

  ctx.beginPath();
  ctx.moveTo(0, h);
  myData.forEach((d, i) => {
    const x = i * xStep;
    const y = h - padding - ((d - min) / (max - min)) * (h - padding * 2);
    if (i === 0) ctx.lineTo(x, y);
    else {
      const prevX = (i - 1) * xStep;
      const prevY = h - padding - ((myData[i - 1] - min) / (max - min)) * (h - padding * 2);
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw my line
  drawSmoothLine(ctx, myData, min, max, w, h, xStep, '#6C63FF', 2.5);
}

function drawSmoothLine(ctx, data, min, max, w, h, xStep, color, lineWidth) {
  const padding = 4;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = i * xStep;
    const y = h - padding - ((d - min) / (max - min)) * (h - padding * 2);
    if (i === 0) ctx.moveTo(x, y);
    else {
      const prevX = (i - 1) * xStep;
      const prevY = h - padding - ((data[i - 1] - min) / (max - min)) * (h - padding * 2);
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

// ==========================================
// INTERACTIONS
// ==========================================
function setupEyeToggle() {
  document.getElementById('eye-toggle').addEventListener('click', () => {
    isAmountHidden = !isAmountHidden;
    const amountEl = document.getElementById('portfolio-amount');
    if (isAmountHidden) {
      amountEl.classList.add('masked');
    } else {
      amountEl.classList.remove('masked');
    }
  });
}

function setupNotifications() {
  document.getElementById('notification-btn').addEventListener('click', () => {
    const panel = document.getElementById('notification-panel');
    panel.classList.toggle('hidden');
  });
  document.getElementById('close-notification').addEventListener('click', () => {
    document.getElementById('notification-panel').classList.add('hidden');
  });
}

function setupSettings() {
  // Accounts setting
  document.getElementById('setting-accounts').addEventListener('click', () => {
    showAccountsModal();
  });

  // Round-up setting
  document.getElementById('setting-roundup').addEventListener('click', () => {
    showRoundupModal();
  });

  // Investment target setting
  document.getElementById('setting-investment-target').addEventListener('click', () => {
    showInvestmentTargetModal();
  });

  // Dark mode toggle
  document.getElementById('darkmode-toggle').addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    // Redraw charts
    setTimeout(() => {
      drawMiniChart();
      drawTransactionChart();
      drawDonutChart();
      drawPerformanceChart();
    }, 300);
  });

  // Auto invest toggle
  document.getElementById('auto-invest-toggle').addEventListener('change', function() {
    if (this.checked) {
      showToast('✅', '自動投資をONにしました');
    } else {
      showToast('⏸️', '自動投資をOFFにしました');
    }
  });

  // Modal close
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) {
      closeModal();
    }
  });

  // Celebration close
  document.getElementById('celebration-close').addEventListener('click', () => {
    document.getElementById('celebration-overlay').classList.add('hidden');
  });
}

function setupPeriodSelector() {
  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      // Could update chart data here
      showToast('📊', `${this.textContent}のデータに切り替えました`);
    });
  });
}

function toggleLike(index, btn) {
  if (likedPosts.has(index)) {
    likedPosts.delete(index);
  } else {
    likedPosts.add(index);
  }
  renderCommunityFeed();
}

function showTransactionDetail(id) {
  const t = TRANSACTIONS_DATA.find(x => x.id === id);
  if (!t) return;

  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-title">${t.icon} ${t.name}</div>
    <div style="margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border);">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">支払金額</span>
        <span style="font-weight: 600;">¥${t.price.toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border);">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">おつり投資額</span>
        <span style="font-weight: 700; color: var(--positive);">+¥${t.change}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border);">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">切り上げ先</span>
        <span style="font-weight: 600;">¥${(Math.ceil(t.price / 100) * 100).toLocaleString()}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border);">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">投資先</span>
        <span style="font-weight: 600;">${currentInvestmentTarget.name} (${currentInvestmentTarget.ticker})</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0;">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">日時</span>
        <span style="font-weight: 500;">${formatDate(t.date)} ${t.time}</span>
      </div>
    </div>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function showAccountsModal() {
  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-title">連携口座・カード</div>
    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
      連携したカードや電子マネーの利用明細から、おつりを自動計算します。
    </p>
    
    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.85rem; color: var(--text-tertiary); margin-bottom: 12px;">連携中のサービス</h4>
      <div class="roundup-options" style="gap: 8px;">
        <div class="roundup-option" style="padding: 12px 16px;">
          <div class="roundup-option-left" style="flex-direction: row; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; background: #fff; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #BF0000; border: 1px solid var(--border);">R</div>
            <div>
              <span class="roundup-option-title" style="display: block;">楽天カード</span>
              <span class="roundup-option-desc">最終更新: 1時間前</span>
            </div>
          </div>
          <span style="font-size: 0.8rem; color: var(--positive);">連携中</span>
        </div>
        <div class="roundup-option" style="padding: 12px 16px;">
          <div class="roundup-option-left" style="flex-direction: row; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; background: #00BA4C; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #fff; border: 1px solid var(--border);">S</div>
            <div>
              <span class="roundup-option-title" style="display: block;">モバイルSuica</span>
              <span class="roundup-option-desc">最終更新: 昨日</span>
            </div>
          </div>
          <span style="font-size: 0.8rem; color: var(--positive);">連携中</span>
        </div>
      </div>
    </div>

    <div>
      <h4 style="font-size: 0.85rem; color: var(--text-tertiary); margin-bottom: 12px;">新しく連携する</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <button style="padding: 16px 12px; background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg); color: var(--text-primary); cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px;" onclick="showToast('💳', 'クレジットカードの連携画面へ移動します')">
          <span style="font-size: 1.5rem;">💳</span>
          <span style="font-size: 0.8rem; font-weight: 600;">クレジットカード</span>
        </button>
        <button style="padding: 16px 12px; background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg); color: var(--text-primary); cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px;" onclick="showToast('🏦', '銀行口座の連携画面へ移動します')">
          <span style="font-size: 1.5rem;">🏦</span>
          <span style="font-size: 0.8rem; font-weight: 600;">銀行口座</span>
        </button>
        <button style="padding: 16px 12px; background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg); color: var(--text-primary); cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px;" onclick="showToast('📱', '電子マネーの連携画面へ移動します')">
          <span style="font-size: 1.5rem;">📱</span>
          <span style="font-size: 0.8rem; font-weight: 600;">電子マネー</span>
        </button>
        <button style="padding: 16px 12px; background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg); color: var(--text-primary); cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px;" onclick="showToast('🛒', 'ECサイトの連携画面へ移動します')">
          <span style="font-size: 1.5rem;">🛒</span>
          <span style="font-size: 0.8rem; font-weight: 600;">ECサイト</span>
        </button>
      </div>
    </div>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function showRoundupModal() {
  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-title">おつり切り上げ単位</div>
    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
      買い物の金額をどの単位で切り上げるか選べます。切り上げた差額が投資に回ります。
    </p>
    <div class="roundup-options">
      <div class="roundup-option" onclick="selectRoundup(this, 100)">
        <div class="roundup-option-left">
          <span class="roundup-option-title">100円単位</span>
          <span class="roundup-option-desc">例: ¥583 → ¥600 (おつり ¥17)</span>
        </div>
        <span class="roundup-option-example">おすすめ</span>
      </div>
      <div class="roundup-option selected" onclick="selectRoundup(this, 500)">
        <div class="roundup-option-left">
          <span class="roundup-option-title">500円単位</span>
          <span class="roundup-option-desc">例: ¥583 → ¥1,000 (おつり ¥417)</span>
        </div>
      </div>
      <div class="roundup-option" onclick="selectRoundup(this, 1000)">
        <div class="roundup-option-left">
          <span class="roundup-option-title">1,000円単位</span>
          <span class="roundup-option-desc">例: ¥583 → ¥1,000 (おつり ¥417)</span>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function selectRoundup(element, value) {
  document.querySelectorAll('.roundup-option').forEach(o => o.classList.remove('selected'));
  element.classList.add('selected');
  setTimeout(() => {
    closeModal();
    showToast('✅', `おつり切り上げ単位を${value.toLocaleString()}円に変更しました`);
  }, 300);
}

function showInvestmentTargetModal() {
  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-title">おつり投資先の選択</div>
    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
      日々のおつりを自動的に投資する銘柄を1つ選択してください。
    </p>
    <div class="holdings-list" style="margin-bottom: 24px;">
      ${HOLDINGS_DATA.map(h => `
        <div class="holding-item" style="cursor: pointer; ${currentInvestmentTarget.ticker === h.ticker ? 'border-color: var(--accent-primary); background: var(--bg-card-hover);' : ''}" onclick="selectInvestmentTarget('${h.ticker}')">
          <div class="holding-icon" style="background: ${h.color}20; color: ${h.color}">
            ${h.icon}
          </div>
          <div class="holding-info">
            <div class="holding-name-row" style="margin-bottom: 0;">
              <span class="holding-name">${h.name}</span>
              <span class="holding-ticker">${h.ticker}</span>
            </div>
          </div>
          <div class="holding-values">
            ${currentInvestmentTarget.ticker === h.ticker ? `<span style="color: var(--accent-primary); font-weight: 700; font-size: 0.85rem;">選択中</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function selectInvestmentTarget(ticker) {
  const target = HOLDINGS_DATA.find(h => h.ticker === ticker);
  if (target) {
    currentInvestmentTarget = target;
    document.getElementById('current-investment-target-label').textContent = `現在: ${target.name} (${target.ticker})`;
    closeModal();
    showToast('✅', `投資先を ${target.name} に変更しました`);
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ==========================================
// TOAST
// ==========================================
function showToast(icon, text) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${text}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ==========================================
// CELEBRATION
// ==========================================
function showCelebration(title, text) {
  document.getElementById('celebration-title').textContent = title;
  document.getElementById('celebration-text').textContent = text;
  document.getElementById('celebration-overlay').classList.remove('hidden');
  createConfetti();
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#6C63FF', '#3CDFAB', '#FF6B9D', '#FFB347', '#4FC3F7', '#B388FF'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
    confetti.style.width = `${6 + Math.random() * 8}px`;
    confetti.style.height = `${6 + Math.random() * 8}px`;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(confetti);
  }
}

// ==========================================
// HELPERS
// ==========================================
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateStr === today.toISOString().split('T')[0]) return '今日';
  if (dateStr === yesterday.toISOString().split('T')[0]) return '昨日';

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
  return `${month}/${day} (${dayOfWeek})`;
}

// Handle window resize
window.addEventListener('resize', () => {
  if (currentTab === 'home') {
    drawMiniChart();
  } else if (currentTab === 'transactions') {
    drawTransactionChart();
  } else if (currentTab === 'portfolio') {
    drawDonutChart();
    drawPerformanceChart();
  }
});

// Make switchTab globally accessible
window.switchTab = switchTab;

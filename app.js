// ========================================
// PERSONAL FINANCE APP — App Logic
// ========================================

const CATEGORY_NAMES_PT = {
    Food: 'Alimentação', Transport: 'Transporte', Housing: 'Moradia',
    Health: 'Saúde', Leisure: 'Lazer', Education: 'Educação',
    Others: 'Outros', Salary: 'Salário', Freelance: 'Freelance',
    Investments: 'Investimentos'
};

const EXPENSE_CATEGORIES = ['Food', 'Transport', 'Housing', 'Health', 'Leisure', 'Education', 'Others'];
const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Investments', 'Others'];

const CATEGORY_COLORS = {
    Food: '#F97316', Transport: '#3B82F6', Housing: '#A855F7',
    Health: '#EC4899', Leisure: '#00D4FF', Education: '#6C63FF',
    Others: '#8899B4', Salary: '#22C55E', Freelance: '#14B8A6',
    Investments: '#FBBF24'
};

const CATEGORY_ICONS = {
    Food: '🍔', Transport: '🚗', Housing: '🏠', Health: '💊',
    Leisure: '🎮', Education: '📚', Others: '📦',
    Salary: '💰', Freelance: '💻', Investments: '📈'
};

// ========================================
// STATE
// ========================================
let state = {
    transactions: [],
    goals: [],
    activeTab: 'dashboard',
    filterType: 'all',
    filterCategory: 'all'
};

// ========================================
// SAMPLE DATA
// ========================================
function getSampleData() {
    const today = new Date();
    const m = (offset) => {
        const d = new Date(today); d.setDate(d.getDate() - offset);
        return d.toISOString().split('T')[0];
    };
    return {
        transactions: [
            { id: crypto.randomUUID(), type: 'income', description: 'Salário Mensal', amount: 5200, category: 'Salary', date: m(1) },
            { id: crypto.randomUUID(), type: 'expense', description: 'Supermercado', amount: 285.50, category: 'Food', date: m(2) },
            { id: crypto.randomUUID(), type: 'expense', description: 'Uber & Transporte Público', amount: 120, category: 'Transport', date: m(3) },
            { id: crypto.randomUUID(), type: 'income', description: 'Projeto Freelance', amount: 1800, category: 'Freelance', date: m(5) },
            { id: crypto.randomUUID(), type: 'expense', description: 'Aluguel', amount: 1400, category: 'Housing', date: m(7) },
            { id: crypto.randomUUID(), type: 'expense', description: 'Mensalidade da Academia', amount: 89, category: 'Health', date: m(10) },
            { id: crypto.randomUUID(), type: 'expense', description: 'Netflix & Spotify', amount: 32.90, category: 'Leisure', date: m(12) },
            { id: crypto.randomUUID(), type: 'income', description: 'Dividendos de Ações', amount: 340, category: 'Investments', date: m(15) },
        ],
        goals: [
            { id: crypto.randomUUID(), category: 'Food', limit: 500 },
            { id: crypto.randomUUID(), category: 'Transport', limit: 200 },
            { id: crypto.randomUUID(), category: 'Leisure', limit: 100 },
        ]
    };
}

// ========================================
// PERSISTENCE
// ========================================
function loadState() {
    try {
        const saved = localStorage.getItem('financeAppState');
        if (saved) {
            state = JSON.parse(saved);
        } else {
            const sample = getSampleData();
            state.transactions = sample.transactions;
            state.goals = sample.goals;
            saveState();
        }
    } catch {
        const sample = getSampleData();
        state.transactions = sample.transactions;
        state.goals = sample.goals;
    }
}

function saveState() {
    localStorage.setItem('financeAppState', JSON.stringify(state));
}

// ========================================
// COMPUTATIONS
// ========================================
function getTotalIncome() {
    return state.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
}

function getTotalExpenses() {
    return state.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
}

function getBalance() { return getTotalIncome() - getTotalExpenses(); }

function getExpensesByCategory() {
    const map = {};
    state.transactions.filter(t => t.type === 'expense').forEach(t => {
        map[t.category] = (map[t.category] || 0) + t.amount;
    });
    return map;
}

function getMonthlyBalanceData() {
    const months = {};
    state.transactions.forEach(t => {
        const key = t.date.substring(0, 7);
        if (!months[key]) months[key] = { income: 0, expense: 0 };
        if (t.type === 'income') months[key].income += t.amount;
        else months[key].expense += t.amount;
    });
    const sorted = Object.keys(months).sort();
    return {
        labels: sorted.map(k => { const [y, m] = k.split('-'); return `${['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][parseInt(m) - 1]} ${y}`; }),
        income: sorted.map(k => months[k].income),
        expense: sorted.map(k => months[k].expense),
        balance: sorted.map(k => months[k].income - months[k].expense)
    };
}

function getCurrentMonthExpenses(category) {
    const now = new Date();
    const ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    return state.transactions
        .filter(t => t.type === 'expense' && t.category === category && t.date.startsWith(ym))
        .reduce((s, t) => s + t.amount, 0);
}

function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
}

function formatDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('pt-BR');
}

// ========================================
// TRANSACTIONS CRUD
// ========================================
function addTransaction(data) {
    state.transactions.push({ id: crypto.randomUUID(), ...data });
    saveState();
    renderAll();
    showToast(`${data.type === 'income' ? '💰 Receita' : '💸 Despesa'} adicionada!`, 'success');
}

function deleteTransaction(id) {
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveState();
    renderAll();
    showToast('Transação excluída', 'error');
}

// ========================================
// GOALS CRUD
// ========================================
function addGoal(category, limit) {
    if (state.goals.find(g => g.category === category)) {
        state.goals = state.goals.map(g => g.category === category ? { ...g, limit } : g);
    } else {
        state.goals.push({ id: crypto.randomUUID(), category, limit });
    }
    saveState();
    renderGoals();
    showToast('Meta salva! 🎯', 'success');
}

function deleteGoal(id) {
    state.goals = state.goals.filter(g => g.id !== id);
    saveState();
    renderGoals();
}

// ========================================
// CHARTS
// ========================================
let pieChart = null;
let lineChart = null;

function renderCharts() {
    renderPieChart();
    renderLineChart();
}

function renderPieChart() {
    const data = getExpensesByCategory();
    const labels = Object.keys(data);
    const values = Object.values(data);
    const colors = labels.map(l => CATEGORY_COLORS[l] || '#8899B4');

    const ctx = document.getElementById('pieChart');
    if (!ctx) return;

    if (pieChart) pieChart.destroy();
    pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{ data: values, backgroundColor: colors, borderWidth: 0, hoverOffset: 8 }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: { position: 'bottom', labels: { color: getComputedStyle(document.body).getPropertyValue('--text-secondary').trim(), padding: 16, usePointStyle: true, pointStyleWidth: 10, font: { family: 'Inter', size: 12 } } },
                tooltip: {
                    backgroundColor: '#1A2540',
                    titleFont: { family: 'Inter' },
                    bodyFont: { family: 'Inter' },
                    callbacks: { label: (c) => ` ${CATEGORY_NAMES_PT[c.label] || c.label}: ${formatCurrency(c.raw)}` }
                }
            }
        }
    });
}

function renderLineChart() {
    const data = getMonthlyBalanceData();
    const ctx = document.getElementById('lineChart');
    if (!ctx) return;

    if (lineChart) lineChart.destroy();
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim();
    const gridColor = getComputedStyle(document.body).getPropertyValue('--border-subtle').trim();

    lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                { label: 'Receitas', data: data.income, borderColor: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.1)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
                { label: 'Despesas', data: data.expense, borderColor: '#F87171', backgroundColor: 'rgba(248, 113, 113, 0.1)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
                { label: 'Saldo', data: data.balance, borderColor: '#6C63FF', backgroundColor: 'rgba(108, 99, 255, 0.1)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6, borderDash: [5, 5] }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: { labels: { color: textColor, usePointStyle: true, pointStyleWidth: 10, font: { family: 'Inter', size: 12 } } },
                tooltip: { backgroundColor: '#1A2540', titleFont: { family: 'Inter' }, bodyFont: { family: 'Inter' }, callbacks: { label: (c) => ` ${c.dataset.label}: ${formatCurrency(c.raw)}` } }
            },
            scales: {
                x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Inter', size: 11 } } },
                y: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Inter', size: 11 }, callback: v => formatCurrency(v) } }
            }
        }
    });
}

// ========================================
// RENDER FUNCTIONS
// ========================================
function renderSummary() {
    document.getElementById('balanceValue').textContent = formatCurrency(getBalance());
    document.getElementById('incomeValue').textContent = formatCurrency(getTotalIncome());
    document.getElementById('expenseValue').textContent = formatCurrency(getTotalExpenses());
}

function renderTransactions() {
    const container = document.getElementById('transactionList');
    const container2 = document.getElementById('transactionList2');
    let filtered = [...state.transactions].sort((a, b) => b.date.localeCompare(a.date));

    if (state.filterType !== 'all') filtered = filtered.filter(t => t.type === state.filterType);
    if (state.filterCategory !== 'all') filtered = filtered.filter(t => t.category === state.filterCategory);

    const emptyHTML = `<div class="empty-state"><div class="empty-state__icon">📭</div><div class="empty-state__text">Nenhuma transação encontrada</div></div>`;

    if (filtered.length === 0) {
        container.innerHTML = emptyHTML;
        if (container2) container2.innerHTML = emptyHTML;
        return;
    }

    const html = filtered.map(t => `
    <div class="transaction-item transaction-item--${t.type}">
      <div class="transaction-item__indicator"></div>
      <div class="transaction-item__info">
        <div class="transaction-item__desc">${t.description}</div>
        <div class="transaction-item__meta">
          <span class="transaction-item__category" style="background: ${CATEGORY_COLORS[t.category]}22; color: ${CATEGORY_COLORS[t.category]}">${CATEGORY_ICONS[t.category] || '📦'} ${CATEGORY_NAMES_PT[t.category]}</span>
          <span>•</span>
          <span>${formatDate(t.date)}</span>
        </div>
      </div>
      <div class="transaction-item__amount">${t.type === 'income' ? '+' : '-'} ${formatCurrency(t.amount)}</div>
      <div class="transaction-item__actions">
        <button class="btn btn--danger" onclick="deleteTransaction('${t.id}')" title="Remover">✕</button>
      </div>
    </div>
  `).join('');

    container.innerHTML = html;
    if (container2) container2.innerHTML = html;
}

function renderGoals() {
    const container = document.getElementById('goalsList');
    if (state.goals.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state__icon">🎯</div><div class="empty-state__text">Nenhuma meta. Adicione uma abaixo!</div></div>`;
        return;
    }

    container.innerHTML = state.goals.map(g => {
        const spent = getCurrentMonthExpenses(g.category);
        const pct = g.limit > 0 ? Math.round((spent / g.limit) * 100) : 0;
        const exceeded = pct > 100;
        return `
      <div class="goal-card ${exceeded ? 'goal-card--exceeded' : ''}">
        <div class="goal-card__header">
          <div class="goal-card__category">${CATEGORY_ICONS[g.category] || '📦'} ${CATEGORY_NAMES_PT[g.category]}</div>
          <button class="btn btn--danger" onclick="deleteGoal('${g.id}')" title="Remover meta">✕</button>
        </div>
        <div class="goal-card__values">
          <span>Gasto: ${formatCurrency(spent)}</span>
          <span>Limite: ${formatCurrency(g.limit)}</span>
        </div>
        <div class="goal-card__bar">
          <div class="goal-card__bar-fill" style="width: ${Math.min(pct, 100)}%"></div>
        </div>
        <div class="goal-card__percentage">${pct}% ${exceeded ? '⚠️ Excedido!' : 'usado'}</div>
      </div>`;
    }).join('');
}

function renderAll() {
    renderSummary();
    renderCharts();
    renderTransactions();
    renderGoals();
}

// ========================================
// TAB NAVIGATION
// ========================================
function switchTab(tabName) {
    state.activeTab = tabName;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('nav-tab--active', t.dataset.tab === tabName));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('tab-panel--active', p.id === `panel-${tabName}`));
    if (tabName === 'dashboard') renderCharts();
}

// ========================================
// MODAL
// ========================================
function openModal() {
    document.getElementById('transactionModal').classList.add('modal-overlay--active');
    document.getElementById('txType-expense').checked = true;
    updateCategoryOptions();
    document.getElementById('txDescription').focus();
}

function closeModal() {
    document.getElementById('transactionModal').classList.remove('modal-overlay--active');
    document.getElementById('transactionForm').reset();
}

function updateCategoryOptions() {
    const type = document.querySelector('input[name="txType"]:checked').value;
    const select = document.getElementById('txCategory');
    const cats = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
    select.innerHTML = cats.map(c => `<option value="${c}">${CATEGORY_ICONS[c]} ${CATEGORY_NAMES_PT[c]}</option>`).join('');
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        type: document.querySelector('input[name="txType"]:checked').value,
        description: form.txDescription.value.trim(),
        amount: parseFloat(form.txAmount.value),
        category: form.txCategory.value,
        date: form.txDate.value
    };
    if (!data.description || !data.amount || !data.date) return;
    addTransaction(data);
    closeModal();
}

function handleGoalSubmit(e) {
    e.preventDefault();
    const cat = document.getElementById('goalCategory').value;
    const limit = parseFloat(document.getElementById('goalLimit').value);
    if (!cat || !limit) return;
    addGoal(cat, limit);
    e.target.reset();
}

// ========================================
// DARK MODE
// ========================================
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('financeTheme', next);
    document.getElementById('themeIcon').textContent = next === 'light' ? '🌙' : '☀️';
    setTimeout(() => renderCharts(), 100);
}

function loadTheme() {
    const saved = localStorage.getItem('financeTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('themeIcon').textContent = saved === 'light' ? '🌙' : '☀️';
}

// ========================================
// TOASTS
// ========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✅' : '🗑️'}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ========================================
// FILTERS
// ========================================
function handleFilterType(val) {
    state.filterType = val;
    renderTransactions();
}

function handleFilterCategory(val) {
    state.filterCategory = val;
    renderTransactions();
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadState();

    // Set default date to today
    document.getElementById('txDate').valueAsDate = new Date();

    // Form listeners
    document.getElementById('transactionForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('goalForm').addEventListener('submit', handleGoalSubmit);
    document.querySelectorAll('input[name="txType"]').forEach(r => r.addEventListener('change', updateCategoryOptions));

    // Tab listeners
    document.querySelectorAll('.nav-tab').forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));

    // Filter listeners
    document.getElementById('filterType').addEventListener('change', e => handleFilterType(e.target.value));
    document.getElementById('filterCategory').addEventListener('change', e => handleFilterCategory(e.target.value));

    renderAll();
});

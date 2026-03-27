# FinanceFlow 💸

Bem-vindo(a) ao **FinanceFlow**, um painel de controle simples, moderno e completo para gerenciamento de finanças pessoais. Este projeto foi desenvolvido para ajudar você a acompanhar suas receitas, despesas e metas de gastos de maneira visual e intuitiva. 

O FinanceFlow conta com gráficos atrativos, cartões com resumos dinâmicos e suporte a Modo Escuro nativo. Toda a aplicação foi inteiramente localizada para **Português do Brasil (PT-BR)**.

🔗 **Teste o projeto agora (Live Demo):** [https://lucasairess.github.io/FinanceFlow/](https://lucasairess.github.io/FinanceFlow/)

---

## 🚀 Funcionalidades Principais

- **📊 Visão Geral (Dashboard):** Acompanhe seu Saldo Total, Total de Receitas e Despesas através dos nossos "Summary Cards".
- **📋 Gestão de Transações:** Adicione, categorize e exclua entradas (receitas ou despesas). Todo o histórico de transações dispõe de marcadores de cores, categorias ricas em ícones (como Alimentação, Moradia, Salário, etc) e valores formatados na moeda local (*BRL/R$*).
- **📈 Gráficos Visuais Animados:** Utilização do Chart.js para apresentar um gráfico de rosca interativo com a divisão de despesas por categoria, e um gráfico de linhas contendo uma visão do fluxo mensal de caixa.
- **🎯 Metas de Gastos Mensais:** Estabeleça limites de gastos por categoria ao mês. Tenha acesso a uma barra de progresso visual que lhe avisará caso a sua cota mensal extrapole o estabelecido.
- **🌙 Tema Escuro Integrado:** Aproveite a estilização visual moderna, criada como Design System tokenizado, alternando perfeitamente entre o tema claro e tema escuro.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído usando tecnologias sólidas e dispensando frameworks obstrusivos:
- **HTML5:** Marcação semântica e acesso ao painel estrutural.
- **CSS3:** Variáveis e tokens avançados via Design System customizado (`styles.css`), garantindo estética harmoniosa e micro animações ricas sem o uso do Tailwind.
- **JavaScript (ES6+):** Utilizado em toda parte lógica (`app.js`) para formatar dados, persistir informações no Local Storage, manipular interações modais etc.
- **Chart.js:** Biblioteca externa responsável pela renderização visual de gráficos rápidos e eficientes.

---

## 💻 Como Rodar o Projeto

Dado que o aplicativo não possui um back-end (tudo é executado apenas no navegador salvando no `localStorage`), o deploy/inicialização é extremamente simples.

1. **Clone do repositório:**
   ```bash
   git clone https://github.com/lucasairess/FinanceFlow.git
   ```
2. **Abra o arquivo local:**
   Basta ir à pasta clonada e abrir o arquivo `index.html` em qualquer navegador moderno. 
3. *Opcional:* Se preferir rolar com um servidor HTTP simples (útil para certas validações):
   ```bash
   # Com o Python instalado
   python -m http.server 3000
   ```
   E acesse `http://localhost:3000` em seu navegador.

---

## 🗂 Estrutura de Arquivos

- `index.html`: Toda a visualização base e estrutura via tags.
- `app.js`: Cérebro da aplicação contendo as regras de CRUD, tratamento em `localStorage`, e instanciações do Chart.js.
- `styles.css`: Todos os nossos tokens de Design, modais, temas dark/light e sistema responsivo customizado.
- `design-system.md`: A base estrutural teórica da nossa aplicação documentada à parte contendo as escalas de cores e tipográficas.

---

> Desenvolvido com carinho para as suas Finanças Pessoais! ✨

// ─── Navbar scroll ─────────────────────────────────────────
const nb = document.getElementById("navbar");
window.addEventListener("scroll", () =>
  nb.classList.toggle("scrolled", scrollY > 60),
);

// ─── Mobile menu ───────────────────────────────────────────

const burger = document.querySelector(".nav-burger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");
const links = document.querySelectorAll(".nav-link");

function toggleMenu() {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
  overlay.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
    overlay.classList.remove("open");
  });
});
// ─── Parallax orb ──────────────────────────────────────────
const orb1 = document.getElementById("orb1");
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / innerWidth - 0.5) * 30;
  const y = (e.clientY / innerHeight - 0.5) * 30;
  orb1.style.transform = `translate(${x}px,${y}px)`;
});

// ─── Ticker ────────────────────────────────────────────────
const tickerWords = [
  "Contabilidade",
  "Gestão Tributária",
  "ESC",
  "Recrutamento",
  "Cursos Práticos",
  "Estratégia",
];
const track = document.getElementById("ticker");
const items = [...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords]
  .map(
    (w) => `<span class="ticker-item"><span class="tdot">◆</span> ${w}</span>`,
  )
  .join("");
track.innerHTML = items;

// ─── Reveal on scroll ──────────────────────────────────────
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// ─── Team grid ─────────────────────────────────────────────
const team = [
  {
    n: "Evaristo Costa",
    r: "Gerente Geral | Legalização e Certificado Digital",
    i: "EC",
    c: "#c9a84c",
  },
  {
    n: "Gustavo Aguiar",
    r: "Assistente Executivo | Atendimento ao Cliente",
    i: "GA",
    c: "#3ecf8e",
  },
  {
    n: "Maria Fernandes",
    r: "Supervisora Financeira e Administrativa",
    i: "MF",
    c: "#e07b54",
  },
  {
    n: "Evelyn Vitória",
    r: "Supervisora de Departamento Pessoal e RH",
    i: "EV",
    c: "#7c6af7",
  },
  {
    n: "Caio Higino",
    r: "Supervisor Contábil e Fiscal",
    i: "CH",
    c: "#e05494",
  },
  {
    n: "Letícia Caixeta",
    r: "Supervisora de Societário e Contratos",
    i: "LC",
    c: "#54b4e0",
  },
  {
    n: "Fernando Gomes",
    r: "Assistente de Marketing",
    i: "FG",
    c: "#c9a84c",
  },
  {
    n: "Maria Vitória",
    r: "Assistente de Departamento Pessoal e RH",
    i: "MV",
    c: "#3ecf8e",
  },
  { n: "Arthur Araújo", r: "Assistente Contábil", i: "AA", c: "#e07b54" },
  {
    n: "Danilo Neves",
    r: "Assistente Fiscal e Tributário",
    i: "DN",
    c: "#7c6af7",
  },
  {
    n: "Eduarda Mattiello",
    r: "Assistente Contábil e Tributário",
    i: "EM",
    c: "#e05494",
  },
  {
    n: "Gabrielly Vacarin",
    r: "Assistente de Societário e Contratos",
    i: "GV",
    c: "#54b4e0",
  },
];
const tg = document.getElementById("team-grid");
tg.innerHTML = team
  .map(
    (m, i) =>
      `<div class="team-card reveal d${(i % 4) + 1}">
    <div class="team-av" style="background:${m.c}18;border-color:${m.c}30;color:${m.c}">${m.i}</div>
    <div><div class="team-name">${m.n}</div><div class="team-role">${m.r}</div></div>
  </div>`,
  )
  .join("");
tg.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// ─── Blog grid ─────────────────────────────────────────────
const posts = [
  {
    cat: "Gestão Contábil",
    title: "Seu contador te ajuda a decidir ou só te manda guia para pagar?",
    exc: "A diferença entre cumprir exigências e ter uma gestão contábil que orienta decisões estratégicas.",
    c: "#c9a84c",
  },
  {
    cat: "Empresa Simples de Crédito",
    title: "Emprestar dinheiro sem estrutura pode sair muito caro",
    exc: "Risco da informalidade, o olhar da Receita Federal e o caminho legal por meio da ESC.",
    c: "#3ecf8e",
  },
  {
    cat: "Recrutamento e Seleção",
    title: "Como construir um processo seletivo que reduz turnover",
    exc: "Alinhamento de perfil, avaliação comportamental e fit cultural na prática do dia a dia.",
    c: "#7c6af7",
  },
  {
    cat: "Cursos e Treinamentos",
    title: "Aprender, praticar e conquistar: a metodologia Ontax",
    exc: "Aulas ao vivo, casos reais, tecnologia aplicada e encaminhamento para oportunidades de mercado.",
    c: "#e07b54",
  },
];
const bg = document.getElementById("blog-grid");
bg.innerHTML = posts
  .map(
    (p, i) =>
      `<a href="#blog" class="blog-card reveal d${i + 1}" style="--ca:${p.c}">
    <div class="blog-cover">
      <span class="blog-cat" style="color:${p.c};background:${p.c}18;border-color:${p.c}30">${p.cat}</span>
      <div class="blog-pat"></div>
    </div>
    <div class="blog-body">
      <h3 class="blog-title">${p.title}</h3>
      <p class="blog-excerpt">${p.exc}</p>
      <div class="blog-meta">
        <div class="blog-author"><div class="auth-dot" style="background:${p.c}"></div><span>Maria Araújo</span></div>
        <span class="blog-date">15 mai 2026</span>
      </div>
    </div>
  </a>`,
  )
  .join("");
bg.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// ─── Depoimentos slider ────────────────────────────────────
const deps = [
  {
    txt: "A Ontax trouxe mais organização, segurança e clareza para a gestão da nossa empresa. O atendimento é próximo, técnico e sempre orientado para solução.",
    a: "Cliente Ontax",
    r: "Gestão Contábil e Tributária",
  },
  {
    txt: "Encontramos na Ontax uma equipe preparada para entender as particularidades da ESC e conduzir nossa operação com segurança contábil e fiscal.",
    a: "Cliente ESC",
    r: "Contabilidade para ESC",
  },
  {
    txt: "Os treinamentos da Ontax unem prática, linguagem acessível e conteúdo aplicável à rotina profissional. Recomendo para toda a equipe.",
    a: "Cliente Ontax Cursos",
    r: "Cursos e Treinamentos",
  },
  {
    txt: "O suporte no processo de abertura e regularização da nossa empresa foi impecável. Equipe ágil, dedicada e sempre disponível.",
    a: "Empreendedor",
    r: "Legalização e Certificado Digital",
  },
  {
    txt: "Nunca imaginei que contabilidade poderia ser tão estratégica. A Ontax transformou a forma como enxergo meus números e tomo decisões.",
    a: "Empresário",
    r: "Gestão Contábil e Tributária",
  },
];
let active = 0;
const setDep = (i) => {
  active = i;
  document.getElementById("dep-stars").innerHTML = "★★★★★"
    .split("")
    .map(
      () =>
        `<svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    )
    .join("");
  document.getElementById("dep-txt").textContent = `"${deps[i].txt}"`;
  document.getElementById("dep-aav").textContent = deps[i].a[0];
  document.getElementById("dep-name").textContent = deps[i].a;
  document.getElementById("dep-role").textContent = deps[i].r;
  document
    .querySelectorAll(".dep-dot")
    .forEach((d, j) => d.classList.toggle("on", j === i));
};
const dots = document.getElementById("dep-dots");
deps.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dep-dot";
  d.setAttribute("aria-label", `Depoimento ${i + 1}`);
  d.addEventListener("click", () => setDep(i));
  dots.appendChild(d);
});
setDep(0);
setInterval(() => setDep((active + 1) % deps.length), 5000);

// ─── Contact form ──────────────────────────────────────────
document.getElementById("con-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const msg = encodeURIComponent(
    `Olá, vim pelo site da Ontax!\n\nNome: ${f.nome.value}\nE-mail: ${f.email.value}\nÁrea: ${f.area.value}\n\n${f.msg.value}`,
  );
  window.open(`https://wa.me/5561982011727?text=${msg}`, "_blank");
  const wrap = f.parentElement;
  wrap.innerHTML = `<div class="form-ok"><div class="form-ok-ico">✅</div><h3>Mensagem enviada!</h3><p>Você será redirecionado ao WhatsApp. Aguarde nosso retorno em breve.</p></div>`;
  setTimeout(() => location.reload(), 8000);
});

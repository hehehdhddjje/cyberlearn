/*
 * Direction artistique — CyberLearn / Terminal pédagogique
 * Swiss Style + centre d’opérations calme : graphite, blanc cassé, vert Signal #B7F36B,
 * progression visible, vocabulaire responsable et interactions orientées apprentissage.
 */

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Crosshair,
  ExternalLink,
  FileText,
  Filter,
  GraduationCap,
  KeyRound,
  Lock,
  Menu,
  Network,
  Play,
  Radar,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react";

const asset = (manusPath: string, filename: string) =>
  typeof window !== "undefined" && window.location.hostname.endsWith("github.io")
    ? `${import.meta.env.BASE_URL}assets/${filename}`
    : manusPath;

const courses = [
  { id: "fondamentaux", icon: ShieldCheck, title: "Fondamentaux", description: "Les réflexes qui protègent chaque connexion.", level: "Débutant", duration: "2 h 40", lessons: 8, progress: 72, color: "lime", tag: "Essentiel" },
  { id: "reseaux", icon: Network, title: "Réseaux", description: "Lire les échanges et comprendre les signaux.", level: "Intermédiaire", duration: "4 h 15", lessons: 12, progress: 38, color: "blue", tag: "Populaire" },
  { id: "web", icon: Code2, title: "Sécurité web", description: "Repérer les failles avant qu’elles ne deviennent des incidents.", level: "Intermédiaire", duration: "3 h 50", lessons: 10, progress: 0, color: "coral", tag: "À découvrir" },
  { id: "defense", icon: Radar, title: "Défense", description: "Trier, documenter et répondre avec méthode.", level: "Avancé", duration: "5 h 20", lessons: 14, progress: 0, color: "violet", tag: "À découvrir" },
];

const domains = [
  { icon: Shield, name: "Fondamentaux", count: "08 cours" },
  { icon: Network, name: "Réseaux", count: "12 cours" },
  { icon: Code2, name: "Sécurité web", count: "10 cours" },
  { icon: KeyRound, name: "Cryptographie", count: "06 cours" },
  { icon: Search, name: "OSINT responsable", count: "07 cours" },
];

const quizOptions = [
  "Un mot de passe long et unique, stocké dans un gestionnaire",
  "Le même mot de passe partout, mais changé souvent",
  "Un mot de passe court avec plusieurs symboles",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizDone, setQuizDone] = useState(false);

  const filteredCourses = useMemo(() => {
    if (activeFilter === "Tous") return courses;
    return courses.filter((course) => course.level === activeFilter);
  }, [activeFilter]);

  const answerQuiz = (index: number) => {
    setQuizAnswer(index);
    setQuizDone(true);
  };

  return (
    <div className="cyber-shell">
      <aside className={sidebarOpen ? "sidebar is-open" : "sidebar"}>
        <div className="sidebar-top">
          <a className="cyber-brand" href="#dashboard" onClick={() => setSidebarOpen(false)}>
            <span className="cyber-mark"><img src={asset("/manus-storage/cyberlearn-logo_3bb8b1a9.png", "cyberlearn-logo.webp")} alt="" /></span>
            <span><strong>Cyber</strong><b>Learn</b><small>LAB / 001</small></span>
          </a>
          <button className="sidebar-close" type="button" onClick={() => setSidebarOpen(false)} aria-label="Fermer le menu"><X size={18} /></button>
        </div>
        <div className="sidebar-label">ESPACE D’APPRENTISSAGE</div>
        <nav className="side-nav">
          <a className="active" href="#dashboard" onClick={() => setSidebarOpen(false)}><span className="nav-icon"><Radar size={17} /></span>Vue d’ensemble</a>
          <a href="#courses" onClick={() => setSidebarOpen(false)}><span className="nav-icon"><BookOpen size={17} /></span>Mes cours <i>3</i></a>
          <a href="#domains" onClick={() => setSidebarOpen(false)}><span className="nav-icon"><Network size={17} /></span>Domaines</a>
          <a href="#mission" onClick={() => setSidebarOpen(false)}><span className="nav-icon"><Crosshair size={17} /></span>Mission du jour</a>
        </nav>
        <div className="sidebar-label sidebar-domain-label">DOMAINES</div>
        <div className="domain-nav">
          {domains.slice(0, 4).map((domain) => { const Icon = domain.icon; return <a href="#courses" key={domain.name} onClick={() => setSidebarOpen(false)}><Icon size={15} />{domain.name}</a>; })}
        </div>
        <div className="sidebar-bottom">
          <div className="ethics-card"><Shield size={16} /><div><strong>Zone éthique</strong><span>Apprendre. Tester. Autoriser.</span></div></div>
          <a className="github-link" href="https://github.com/hehehdhddjje/cyberlearn" target="_blank" rel="noreferrer"><ExternalLink size={14} />Voir le projet sur GitHub</a>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <button className="mobile-menu" type="button" onClick={() => setSidebarOpen(true)} aria-label="Ouvrir le menu"><Menu size={20} /></button>
          <div className="breadcrumbs"><span>CYBERLEARN</span><ChevronRight size={13} /><strong>TABLEAU DE BORD</strong></div>
          <div className="topbar-right"><span className="online-status"><i /> SYSTÈME OPÉRATIONNEL</span><span className="avatar">CL</span></div>
        </header>

        <main id="dashboard">
          <section className="welcome-section">
            <div className="welcome-copy">
              <p className="eyebrow"><span className="pulse-dot" /> SESSION D’APPRENTISSAGE / 07</p>
              <h1>Comprendre le signal.<br /><span>Protéger la suite.</span></h1>
              <p className="welcome-lede">Des cours courts, des exercices guidés et les bons réflexes pour progresser dans la cybersécurité, à ton rythme.</p>
              <div className="welcome-actions"><a className="primary-action" href="#courses">Reprendre mon parcours <ArrowRight size={16} /></a><a className="quiet-action" href="#domains">Explorer les domaines <ChevronRight size={15} /></a></div>
            </div>
            <div className="welcome-visual"><img src={asset("/manus-storage/cyberlearn-hero_d7616f5f.png", "cyberlearn-hero.webp")} alt="Illustration d’un laboratoire d’apprentissage de la cybersécurité" /><div className="visual-readout"><span><i /> LIVE</span><small>TRACE / 07—A</small></div><div className="visual-coordinates">45.7640° N &nbsp; 4.8357° E</div></div>
            <div className="trace-path" aria-hidden="true"><span className="trace-node trace-node-one" /><span className="trace-node trace-node-two" /><span className="trace-node trace-node-three" /><span className="trace-path-line" /></div>
          </section>

          <section className="progress-section" aria-label="Progression globale">
            <div className="progress-label"><span>PROGRESSION GLOBALE</span><strong>34<small>%</small></strong></div>
            <div className="progress-track"><span style={{ width: "34%" }} /></div>
            <div className="progress-meta"><span>11 leçons terminées</span><span>sur 32 au total</span></div>
            <div className="streak"><Zap size={15} /><span><strong>4 jours</strong><small>de série</small></span></div>
          </section>

          <section className="courses-section" id="courses">
            <div className="section-topline"><div><p className="section-kicker">01 / CONTINUER À APPRENDRE</p><h2>Ton parcours<br /><span>en cours.</span></h2></div><a className="view-all" href="#domains">Voir tous les cours <ArrowRight size={15} /></a></div>
            <div className="filter-row"><Filter size={14} /><span>FILTRER PAR NIVEAU</span>{["Tous", "Débutant", "Intermédiaire", "Avancé"].map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
            <div className="course-grid">
              {filteredCourses.map((course) => { const Icon = course.icon; const isActive = activeCourse === course.id; return <article className={`course-card color-${course.color} ${isActive ? "is-active" : ""}`} key={course.id} onClick={() => setActiveCourse(isActive ? null : course.id)}>
                <div className="course-card-top"><span className="course-icon"><Icon size={19} /></span><span className="course-badges"><span className={`course-status ${course.progress > 0 ? "status-progress" : "status-new"}`}>{course.progress > 0 ? "EN COURS" : "À DÉCOUVRIR"}</span><span className="course-tag">{course.tag}</span></span></div>
                <h3>{course.title}</h3><p>{course.description}</p>
                <div className="course-details"><span><GraduationCap size={14} />{course.level}</span><span><Clock3 size={14} />{course.duration}</span><span><FileText size={14} />{course.lessons} leçons</span></div>
                <div className="course-progress"><div className="mini-track"><span style={{ width: `${course.progress}%` }} /></div><strong>{course.progress}%</strong></div>
                {isActive && <div className="course-expanded"><p>{course.progress > 0 ? "Reprends là où tu t’es arrêté. La prochaine leçon explique comment reconnaître une authentification solide." : "Commence par une courte introduction, puis passe à un exercice guidé dans un environnement autorisé."}</p><button type="button" onClick={(event) => { event.stopPropagation(); document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" }); }}>{course.progress > 0 ? "Reprendre la leçon" : "Voir le programme"}<ArrowRight size={14} /></button></div>}
              </article>; })}
            </div>
          </section>

          <section className="mission-section" id="mission">
            <div className="mission-image"><img src={asset("/manus-storage/cyberlearn-lab_6a8fa266.png", "cyberlearn-lab.webp")} alt="Table de laboratoire utilisée pour une mission de cybersécurité" loading="lazy" /><div className="mission-image-label"><span>MISSION 004</span><strong>OBSERVER<br />AVANT D’AGIR</strong></div></div>
            <div className="mission-copy"><p className="section-kicker">02 / MISSION DU JOUR</p><div className="mission-title-row"><h2>Le bon réflexe<br /><span>du jour.</span></h2><span className="mission-status">MISSION ACTIVE · + 120 XP</span></div><p>Quel choix réduit le mieux le risque lié aux mots de passe réutilisés ? Prends quelques secondes pour raisonner, puis lis l’explication.</p>
              <div className="quiz-box"><div className="quiz-head"><span><CircleHelp size={15} /> QUESTION 01 / 01</span><span>{quizDone ? "RÉPONSE ENREGISTRÉE" : "À FAIRE"}</span></div><h3>Quelle pratique est la plus robuste pour un compte important ?</h3><div className="quiz-options">{quizOptions.map((option, index) => <button className={quizAnswer === index ? (index === 0 ? "quiz-option correct" : "quiz-option wrong") : "quiz-option"} type="button" key={option} onClick={() => answerQuiz(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{quizAnswer === index && (index === 0 ? <CheckCircle2 size={16} /> : <X size={16} />)}</button>)}</div>{quizDone && <div className="quiz-feedback">{quizAnswer === 0 ? <><CheckCircle2 size={16} /><span><strong>Bonne réponse.</strong> Une phrase longue et unique, gérée par un gestionnaire, réduit les réutilisations et facilite la rotation.</span></> : <><CircleHelp size={16} /><span><strong>À revoir.</strong> La longueur et l’unicité comptent davantage que la complexité visuelle. Consulte la leçon sur les identifiants.</span></>}</div>}</div>
            </div>
          </section>

          <section className="domains-section" id="domains"><div className="section-topline"><div><p className="section-kicker">03 / EXPLORER</p><h2>Choisis ton<br /><span>angle d’observation.</span></h2></div><p className="section-note">Chaque domaine est découpé en modules courts. Commence par les fondamentaux, puis élargis ta vision.</p></div><div className="domain-grid">{domains.map((domain, index) => { const Icon = domain.icon; return <a className="domain-card" href="#courses" key={domain.name}><span className="domain-index">0{index + 1}</span><span className="domain-icon"><Icon size={19} /></span><strong>{domain.name}</strong><small>{domain.count}</small><span className={index === 0 ? "domain-status status-done" : "domain-status"}>{index === 0 ? "VALIDÉ" : "À DÉCOUVRIR"}</span><ArrowRight size={16} /></a>; })}</div></section>

          <section className="ethics-banner"><div className="ethics-banner-icon"><Shield size={22} /></div><div><p className="section-kicker">RÈGLE DE BASE</p><h2>La curiosité a besoin<br /><span>d’un cadre.</span></h2></div><p>Les exercices CyberLearn sont conçus pour des environnements de test autorisés. Apprendre la sécurité, c’est aussi savoir où s’arrête son périmètre.</p><a href="#domains" className="ethics-cta">Lire notre approche <ArrowRight size={15} /></a></section>
        </main>

        <footer className="cyber-footer"><span>CYBERLEARN / LAB 001</span><span>APPRENDRE · OBSERVER · PROTÉGER</span><span>© 2026</span></footer>
      </div>
    </div>
  );
}

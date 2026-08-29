/*
 * Direction artistique — Signal de poche
 * Swiss editorial technique, orange Signal #F36A2D, blanc chaud, graphite.
 * Cette page guide l’œil du téléphone vers le Flipper avec repères, statuts et micro-interactions courtes.
 */

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Cable,
  Check,
  ChevronDown,
  ClipboardCheck,
  Copy,
  Download,
  FileUp,
  Github,
  Info,
  LockKeyhole,
  Menu,
  Smartphone,
  Usb,
  Wifi,
  X,
  Zap,
} from "lucide-react";

const asset = (manusPath: string, filename: string) =>
  typeof window !== "undefined" && window.location.hostname.endsWith("github.io")
    ? `${import.meta.env.BASE_URL}assets/${filename}`
    : manusPath;

const steps = [
  {
    number: "01",
    label: "PRÉPARER",
    title: "Choisir le bon fichier",
    text: "Commence par identifier le type de fichier à déplacer. Le format et la taille déterminent la méthode la plus simple.",
    details: ["Un fichier déjà présent dans le téléphone", "Un câble USB-C ou un lecteur de carte compatible", "Quelques minutes pour vérifier le résultat"],
    accent: "orange",
    icon: FileUp,
  },
  {
    number: "02",
    label: "CONNECTER",
    title: "Créer le lien",
    text: "Relie les appareils avec le bon adaptateur. Le téléphone doit reconnaître la destination avant tout transfert.",
    details: ["Déverrouiller le téléphone", "Autoriser l’accès USB si une fenêtre apparaît", "Garder le câble immobile pendant la copie"],
    accent: "graphite",
    icon: Cable,
  },
  {
    number: "03",
    label: "VÉRIFIER",
    title: "Confirmer l’arrivée",
    text: "Ne retire pas le câble trop vite. Ouvre le fichier côté Flipper et vérifie qu’il correspond bien à la source.",
    details: ["Contrôler le nom et la taille du fichier", "Tester le fichier dans le menu correspondant", "Éjecter proprement la carte si nécessaire"],
    accent: "orange",
    icon: ClipboardCheck,
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openStep, setOpenStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const copyChecklist = async () => {
    const content = [
      "FLIPTRANSFERT — CHECKLIST",
      "",
      "[ ] Fichier identifié et compatible",
      "[ ] Téléphone déverrouillé",
      "[ ] Câble ou adaptateur connecté",
      "[ ] Autorisation USB acceptée",
      "[ ] Copie terminée",
      "[ ] Fichier vérifié côté Flipper Zero",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const downloadChecklist = () => {
    const content = [
      "FLIPTRANSFERT — CHECKLIST",
      "Du téléphone au Flipper Zero, sans détour.",
      "",
      "[ ] Fichier identifié et compatible",
      "[ ] Téléphone déverrouillé",
      "[ ] Câble ou adaptateur connecté",
      "[ ] Autorisation USB acceptée",
      "[ ] Copie terminée",
      "[ ] Fichier vérifié côté Flipper Zero",
      "",
      "Guide : https://github.com/",
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "fliptransfert-checklist.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="fliptransfert, retour en haut">
          <span className="brand-mark" aria-hidden="true">
            <img src={asset("/manus-storage/fliptransfert-logo_fbbb2bf4.png", "fliptransfert-logo.png")} alt="" />
          </span>
          <span className="brand-name">flip<span>transfert</span></span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
          <a href="#parcours" onClick={closeMenu}>Le parcours</a>
          <a href="#materiel" onClick={closeMenu}>Matériel</a>
          <a href="#checklist" onClick={closeMenu}>Checklist</a>
          <a className="nav-github" href="https://github.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>
            <Github size={15} strokeWidth={2.2} />
            GitHub
          </a>
        </nav>

        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> GUIDE DE TRANSFERT · V1.0</p>
              <h1>Du téléphone<br /><em>au Flipper.</em><br /><span>Sans détour.</span></h1>
              <p className="hero-lede">Le parcours clair pour déplacer un fichier, connecter les bons outils et vérifier qu’il est bien arrivé.</p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollToId("parcours")}>
                  Voir le parcours <ArrowRight size={17} />
                </button>
                <button className="text-button" type="button" onClick={() => scrollToId("materiel")}>
                  De quoi ai-je besoin ? <ArrowDown size={16} />
                </button>
              </div>
              <div className="hero-meta">
                <span><Check size={14} /> Méthode en 3 étapes</span>
                <span><LockKeyhole size={14} /> Fichiers gardés sous contrôle</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration du transfert entre un téléphone et un Flipper Zero">
              <div className="coordinate coordinate-top">N 48° 51′ 24″ &nbsp; / &nbsp; LINK 001</div>
              <div className="visual-card">
                <img src={asset("/manus-storage/fliptransfert-hero_0acd4e22.png", "fliptransfert-hero.png")} alt="Téléphone relié par un câble orange à un Flipper Zero" />
                <div className="visual-stamp"><span>TRANSFER</span><strong>READY</strong></div>
                <span className="visual-corner visual-corner-tl" />
                <span className="visual-corner visual-corner-br" />
              </div>
              <div className="visual-caption"><span className="signal-line" /> SOURCE <strong>PHONE</strong><span className="signal-line signal-line-short" /> DESTINATION <strong>FLIPPER</strong></div>
              <div className="coordinate coordinate-bottom">DATA PATH / 03—A &nbsp; · &nbsp; CHECKSUM PENDING</div>
            </div>
          </div>
          <div className="hero-scroll"><span>FAIRE DÉFILER</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-strip" aria-label="Résumé du parcours">
          <div className="container strip-inner">
            <p><span className="strip-index">00</span> Le principe</p>
            <h2>Un transfert réussi,<br /><span>c’est un transfert vérifié.</span></h2>
            <p className="strip-description">Pas besoin de deviner. On sépare le parcours en trois signaux simples : le fichier, la connexion, puis la confirmation.</p>
          </div>
        </section>

        <section className="steps-section" id="parcours">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">01 / LE PARCOURS</p>
                <h2>Trois signaux.<br /><span>Un seul chemin.</span></h2>
              </div>
              <p className="heading-aside">Suis l’ordre, prends le temps de vérifier chaque état et garde le contrôle du fichier jusqu’à sa destination.</p>
            </div>

            <div className="steps-layout">
              <div className="step-rail" aria-hidden="true">
                <span className="rail-dot active" />
                <span className="rail-segment" />
                <span className="rail-dot" />
                <span className="rail-segment" />
                <span className="rail-dot" />
              </div>
              <div className="steps-list">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isOpen = openStep === index;
                  return (
                    <article className={`step-card ${isOpen ? "is-open" : ""} accent-${step.accent}`} key={step.number}>
                      <button className="step-trigger" type="button" aria-expanded={isOpen} onClick={() => setOpenStep(isOpen ? -1 : index)}>
                        <span className="step-number">{step.number}</span>
                        <span className="step-icon"><Icon size={20} strokeWidth={1.8} /></span>
                        <span className="step-main"><span className="step-label">{step.label}</span><strong>{step.title}</strong></span>
                        <span className="step-toggle"><ChevronDown size={19} /></span>
                      </button>
                      <div className="step-details" aria-hidden={!isOpen}>
                        <p>{step.text}</p>
                        <ul>{step.details.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="equipment-section" id="materiel">
          <div className="container equipment-grid">
            <div className="equipment-image">
              <img src={asset("/manus-storage/fliptransfert-process_2bb86617.png", "fliptransfert-process.png")} alt="Téléphone, câble USB, carte microSD et Flipper Zero sur un bureau clair" loading="lazy" />
              <span className="image-label label-one">SOURCE</span>
              <span className="image-label label-two">LINK</span>
              <span className="image-label label-three">TARGET</span>
            </div>
            <div className="equipment-copy">
              <p className="section-kicker">02 / LE KIT MINIMUM</p>
              <h2>Pas plus de<br /><span>trois choses.</span></h2>
              <p>Le bon transfert commence avec le bon chemin physique. Rassemble l’essentiel avant d’ouvrir ton fichier.</p>
              <div className="kit-list">
                <div className="kit-item"><span className="kit-icon"><Smartphone size={18} /></span><span><strong>Un téléphone</strong><small>Source du fichier</small></span></div>
                <div className="kit-item"><span className="kit-icon"><Usb size={18} /></span><span><strong>Un câble ou adaptateur</strong><small>Le lien entre les deux</small></span></div>
                <div className="kit-item"><span className="kit-icon"><Zap size={18} /></span><span><strong>Un Flipper Zero</strong><small>Destination du fichier</small></span></div>
              </div>
              <div className="note-box"><Info size={17} /><p>Les noms de menus peuvent varier selon le téléphone, le câble et le type de fichier. Le principe reste identique : <strong>connecter, copier, vérifier.</strong></p></div>
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="container detail-grid">
            <div className="detail-copy">
              <p className="section-kicker">03 / LE BON RÉFLEXE</p>
              <h2>Ne confonds pas<br /><span>copié et terminé.</span></h2>
              <p>Le signal le plus important arrive à la fin. Un fichier qui apparaît dans un dossier n’est pas encore un fichier validé.</p>
              <div className="status-stack">
                <div className="status-row"><span className="status-mark status-orange">01</span><span><strong>Copie terminée</strong><small>La barre ou la notification disparaît.</small></span></div>
                <div className="status-row"><span className="status-mark status-graphite">02</span><span><strong>Fichier retrouvé</strong><small>Le nom et la taille correspondent.</small></span></div>
                <div className="status-row"><span className="status-mark status-orange">03</span><span><strong>Fichier testé</strong><small>Le Flipper peut bien l’utiliser.</small></span></div>
              </div>
            </div>
            <div className="detail-image">
              <img src={asset("/manus-storage/fliptransfert-detail_9d64ac0e.png", "fliptransfert-detail.png")} alt="Détail d’un câble orange entre un téléphone et un Flipper Zero" loading="lazy" />
              <div className="detail-callout"><span className="callout-line" /> <strong>CHECK</strong><span>01—03</span></div>
            </div>
          </div>
        </section>

        <section className="checklist-section" id="checklist">
          <div className="container checklist-card">
            <div className="checklist-topline"><span>FLIPTRANSFERT / CHECKLIST</span><span>READY TO RUN</span></div>
            <div className="checklist-content">
              <div>
                <p className="section-kicker">04 / AVANT DE PARTIR</p>
                <h2>Le dernier contrôle<br /><span>est le bon.</span></h2>
                <p>Copie la checklist dans tes notes ou télécharge-la en fichier texte. Elle tient sur un écran et évite les oublis.</p>
              </div>
              <div className="checklist-actions">
                <button className="button button-dark" type="button" onClick={copyChecklist}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Checklist copiée" : "Copier la checklist"}</button>
                <button className="button button-outline" type="button" onClick={downloadChecklist}><Download size={17} /> Télécharger .txt</button>
              </div>
            </div>
            <div className="checklist-footer"><span><Wifi size={14} /> Aucun compte requis</span><span><LockKeyhole size={14} /> Tes fichiers ne passent pas par ce site</span><span className="footer-arrow"><ArrowRight size={17} /></span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top"><span className="brand-mark"><img src={asset("/manus-storage/fliptransfert-logo_fbbb2bf4.png", "fliptransfert-logo.png")} alt="" /></span><span className="brand-name">flip<span>transfert</span></span></a>
          <p>Un guide simple pour passer du téléphone au Flipper Zero.</p>
          <div className="footer-links"><a href="#parcours">Le parcours</a><a href="#checklist">Checklist</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Github size={14} /></a></div>
        </div>
        <div className="container legal-line"><span>© 2026 fliptransfert</span><span>BUILD 001 / SIGNAL DE POCHE</span></div>
      </footer>
    </div>
  );
}

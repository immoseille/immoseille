// Liste centralisée des articles/guides du site.
// Sert au maillage interne (bloc "À lire aussi" en sidebar) et pourra alimenter
// d'autres listes (page guides, articles récents...).
// Ajouter chaque nouvel article ici pour qu'il apparaisse automatiquement dans le maillage.

export const articles = [
  // --- Bloc "Le métier" ---
  {
    slug: 'devenir-marchand-de-biens',
    title: 'Comment devenir marchand de biens ?',
    image: '/img/devenir-marchand-de-biens.jpg',
    cat: 'metier',
  },
  {
    slug: 'marchand-de-biens-definition',
    title: "Marchand de biens : c'est quoi ?",
    image: '/img/marchand-de-biens-definition.jpg',
    cat: 'metier',
  },
  {
    slug: 'marchand-de-biens-salaire',
    title: "Salaire d'un marchand de biens",
    image: '/img/marchand-de-biens-salaire.jpg',
    cat: 'metier',
  },
  {
    slug: 'avantages-inconvenients-marchand-de-biens',
    title: 'Avantages et inconvénients du métier',
    image: '/img/avantages-inconvenients-marchand-de-biens.jpg',
    cat: 'metier',
  },
  {
    slug: 'marchand-de-biens-ou-investisseur-locatif',
    title: 'Marchand de biens ou investisseur locatif ?',
    image: '/img/marchand-de-biens-ou-investisseur-locatif.jpg',
    cat: 'metier',
    guide: true, // hors menu header -> apparaît dans /guides/
    date: '9 août 2026',
    excerpt: "Achat-revente à court terme ou revenus locatifs sur le long terme ? Comparatif complet : objectif, fiscalité, risque, gestion et profil.",
  },
  {
    slug: 'marchand-de-biens-ou-promoteur-immobilier',
    title: 'Marchand de biens ou promoteur immobilier ?',
    image: '/img/marchand-de-biens-ou-promoteur-immobilier.jpg',
    cat: 'metier',
    guide: true, // hors menu header -> apparaît dans /guides/
    date: '25 août 2026',
    excerpt: "Construire du neuf ou valoriser de l'existant ? Comparatif complet : missions, capitaux, délais, risque et fiscalité des deux métiers.",
  },
  {
    slug: 'meilleure-formation-marchand-de-biens',
    title: 'Meilleure formation marchand de biens : le top 5',
    image: '/img/meilleure-formation-marchand-de-biens.jpg',
    cat: 'metier',
    guide: true, // hors menu header -> apparaît dans /guides/
    date: '25 août 2026',
    excerpt: "Notre comparatif des 5 meilleures formations marchand de biens : critères de choix, avis détaillé, prix et CPF. Imm'oseille en tête.",
  },
  {
    slug: 'calcul-rentabilite-immobiliere',
    title: 'Calcul de rentabilité immobilière : la méthode',
    image: '/img/calcul-rentabilite-immobiliere.jpg',
    cat: 'operations',
    guide: true, // hors menu header -> apparaît dans /guides/
    date: '27 août 2026',
    excerpt: "Rentabilité brute, nette, nette-nette et cash-flow : formules claires, exemple chiffré et bon taux à viser pour calculer la rentabilité d'un bien.",
  },
  {
    slug: 'marchand-de-biens-ou-agent-immobilier',
    title: 'Marchand de biens ou agent immobilier ?',
    image: '/img/marchand-de-biens-ou-agent-immobilier.jpg',
    cat: 'metier',
    guide: true, // hors menu header -> apparaît dans /guides/
    date: '30 août 2026',
    excerpt: "Intermédiaire ou propriétaire ? Comparatif complet : rôle, carte pro, rémunération, risque et fiscalité des deux métiers de l'immobilier.",
  },

  // --- Bloc "Statut & finance" ---
  {
    slug: 'statut-juridique-marchand-de-biens',
    title: 'Quel statut juridique choisir ?',
    image: '/img/statut-juridique-marchand-de-biens.jpg',
    cat: 'statut',
  },
  {
    slug: 'tva-marchand-de-biens',
    title: 'La TVA du marchand de biens',
    image: '/img/tva-marchand-de-biens.jpg',
    cat: 'statut',
  },
  {
    slug: 'frais-de-notaire-marchand-de-biens',
    title: 'Les frais de notaire réduits',
    image: '/img/frais-de-notaire-marchand-de-biens.jpg',
    cat: 'statut',
  },
  {
    slug: 'plus-value-marchand-de-biens',
    title: 'Imposition de la plus-value',
    image: '/img/plus-value-marchand-de-biens.jpg',
    cat: 'statut',
  },
  {
    slug: 'expert-comptable-marchand-de-biens',
    title: "L'expert-comptable du marchand de biens",
    image: '/img/expert-comptable-marchand-de-biens.jpg',
    cat: 'statut',
    guide: true, // hors menu header -> apparaît dans la page /guides/
    date: '9 août 2026',
    excerpt: "Pourquoi un marchand de biens a besoin d'un comptable spécialisé : TVA sur marge, engagement de revente, comptabilité par opération et coût.",
  },

  // --- Bloc "Finance" ---
  {
    slug: 'financement-marchand-de-biens',
    title: 'Financer une opération',
    image: '/img/financement-marchand-de-biens.jpg',
    cat: 'finance',
  },
  {
    slug: 'banque-marchand-de-biens',
    title: 'Quelle banque choisir ?',
    image: '/img/banque-marchand-de-biens.jpg',
    cat: 'finance',
  },
  {
    slug: 'marchand-de-biens-sans-apport',
    title: 'Se lancer sans apport ?',
    image: '/img/marchand-de-biens-sans-apport.jpg',
    cat: 'finance',
  },
  {
    slug: 'crowdfunding-immobilier',
    title: 'Le crowdfunding immobilier',
    image: '/img/crowdfunding-immobilier.jpg',
    cat: 'finance',
  },
  {
    slug: 'portage-immobilier',
    title: 'Le portage immobilier',
    image: '/img/portage-immobilier.jpg',
    cat: 'finance',
  },

  // --- Bloc "Opérations" ---
  {
    slug: 'monter-une-operation-marchand-de-biens',
    title: 'Monter une opération',
    image: '/img/monter-une-operation-marchand-de-biens.jpg',
    cat: 'operations',
  },
  {
    slug: 'achat-revente-immobilier',
    title: "L'achat-revente immobilier",
    image: '/img/achat-revente-immobilier.jpg',
    cat: 'operations',
  },
  {
    slug: 'diviser-un-terrain',
    title: 'Diviser un terrain',
    image: '/img/diviser-un-terrain.jpg',
    cat: 'operations',
  },
  {
    slug: 'simulateur-rentabilite-marchand-de-biens',
    title: 'Simulateur de rentabilité',
    image: '/img/simulateur-rentabilite-marchand-de-biens.jpg',
    cat: 'operations',
  },
  {
    slug: 'calcul-rentabilite-marchand-de-biens',
    title: 'Calcul de rentabilité : la méthode',
    image: '/img/calcul-rentabilite-marchand-de-biens.jpg',
    cat: 'operations',
  },
];

// Retourne jusqu'à `limit` articles autres que `currentSlug`, même catégorie en priorité.
export function relatedArticles(currentSlug, limit = 5) {
  const cur = articles.find((a) => a.slug === currentSlug);
  const others = articles.filter((a) => a.slug !== currentSlug);
  if (!cur) return others.slice(0, limit);
  const sameCat = others.filter((a) => a.cat === cur.cat);
  const rest = others.filter((a) => a.cat !== cur.cat);
  return [...sameCat, ...rest].slice(0, limit);
}

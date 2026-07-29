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

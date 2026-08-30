// Table de maillage interne automatique — V1.
// Chaque entrée : un "needle" (expression distinctive de la CIBLE, 2-3 mots) -> slug cible.
// L'auto-linker (dans ArticleLayout) wrappe la 1re occurrence du needle dans le corps
// de l'article (après l'intro, hors titres, hors liens existants), UNIQUEMENT si la cible
// n'est pas déjà liée sur la page. Ancre = le texte réellement trouvé (on wrappe, on ne
// remplace pas). Ordre = priorité (le pilier et les pages clés d'abord).
//
// Règles respectées (cf. pbn-maillage-interne.md) : ancre descriptive de la cible,
// terme distinctif présent, pas de self-link, pas de lien vers la home, wrap != replace.
// V1 client-side : à repasser en server-side plus tard.

export const MAILLAGE = [
  // Pilier / hub global
  { needle: 'devenir marchand de biens', slug: 'devenir-marchand-de-biens' },

  // Statut & finance
  { needle: 'statut juridique', slug: 'statut-juridique-marchand-de-biens' },
  { needle: 'TVA sur la marge', slug: 'tva-marchand-de-biens' },
  { needle: 'TVA sur marge', slug: 'tva-marchand-de-biens' },
  { needle: 'frais de notaire', slug: 'frais-de-notaire-marchand-de-biens' },
  { needle: 'plus-value', slug: 'plus-value-marchand-de-biens' },
  { needle: 'comptable spécialisé', slug: 'expert-comptable-marchand-de-biens' },
  { needle: 'expert-comptable', slug: 'expert-comptable-marchand-de-biens' },

  // Finance
  { needle: "plan de financement", slug: 'financement-marchand-de-biens' },
  { needle: 'crédit bancaire', slug: 'banque-marchand-de-biens' },
  { needle: 'sans apport', slug: 'marchand-de-biens-sans-apport' },
  { needle: 'crowdfunding immobilier', slug: 'crowdfunding-immobilier' },
  { needle: 'portage immobilier', slug: 'portage-immobilier' },

  // Opérations
  { needle: "montage d'opération", slug: 'monter-une-operation-marchand-de-biens' },
  { needle: "montage de l'opération", slug: 'monter-une-operation-marchand-de-biens' },
  { needle: 'achat-revente immobilier', slug: 'achat-revente-immobilier' },
  { needle: 'achat-revente', slug: 'achat-revente-immobilier' },
  { needle: 'division parcellaire', slug: 'diviser-un-terrain' },
  { needle: 'diviser un terrain', slug: 'diviser-un-terrain' },
  { needle: 'calcul de rentabilité', slug: 'calcul-rentabilite-marchand-de-biens' },
  { needle: 'simulateur de rentabilité', slug: 'simulateur-rentabilite-marchand-de-biens' },
  { needle: 'rentabilité locative', slug: 'calcul-rentabilite-immobiliere' },

  // Le métier (satellites)
  { needle: 'combien gagne un marchand', slug: 'marchand-de-biens-salaire' },
  { needle: 'avantages et inconvénients', slug: 'avantages-inconvenients-marchand-de-biens' },
  { needle: 'promoteur immobilier', slug: 'marchand-de-biens-ou-promoteur-immobilier' },
  { needle: 'investisseur locatif', slug: 'marchand-de-biens-ou-investisseur-locatif' },
  { needle: 'agent immobilier', slug: 'marchand-de-biens-ou-agent-immobilier' },
];

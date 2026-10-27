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
  { needle: 'société civile immobilière', slug: 'sci-marchand-de-biens' },
  { needle: 'créer une société', slug: 'creer-societe-marchand-de-biens' },
  { needle: 'TVA sur la marge', slug: 'tva-marchand-de-biens' },
  { needle: 'TVA sur marge', slug: 'tva-marchand-de-biens' },
  { needle: 'frais de notaire', slug: 'frais-de-notaire-marchand-de-biens' },
  { needle: 'engagement de revente', slug: 'delai-de-revente-marchand-de-biens' },
  { needle: 'délai de revente', slug: 'delai-de-revente-marchand-de-biens' },
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
  { needle: 'business plan', slug: 'business-plan-marchand-de-biens' },
  { needle: 'négocier le prix', slug: 'negocier-prix-achat-immobilier' },
  { needle: 'négociation', slug: 'negocier-prix-achat-immobilier' },
  { needle: "montage d'opération", slug: 'monter-une-operation-marchand-de-biens' },
  { needle: "montage de l'opération", slug: 'monter-une-operation-marchand-de-biens' },
  { needle: 'achat-revente immobilier', slug: 'achat-revente-immobilier' },
  { needle: 'achat-revente', slug: 'achat-revente-immobilier' },
  { needle: 'division parcellaire', slug: 'diviser-un-terrain' },
  { needle: 'diviser un terrain', slug: 'diviser-un-terrain' },
  { needle: 'vente à la découpe', slug: 'vente-a-la-decoupe' },
  { needle: 'changement de destination', slug: 'transformer-local-commercial-en-logement' },
  { needle: 'off-market', slug: 'immobilier-off-market' },
  { needle: 'off market', slug: 'immobilier-off-market' },
  { needle: 'logiciel marchand de biens', slug: 'logiciel-marchand-de-biens' },
  { needle: 'outils du marchand de biens', slug: 'logiciel-marchand-de-biens' },
  { needle: 'passoire thermique', slug: 'passoire-thermique-marchand-de-biens' },
  { needle: "surélévation d'immeuble", slug: 'surelevation-immeuble' },
  { needle: 'surélévation', slug: 'surelevation-immeuble' },
  { needle: 'garantie des vices cachés', slug: 'vice-cache-marchand-de-biens' },
  { needle: 'vice caché', slug: 'vice-cache-marchand-de-biens' },
  { needle: 'vices cachés', slug: 'vice-cache-marchand-de-biens' },
  { needle: 'loi de finances 2026', slug: 'loi-de-finances-2026-marchand-de-biens' },
  { needle: 'marché immobilier 2026', slug: 'marche-immobilier-2026-marchand-de-biens' },
  { needle: 'marché immobilier', slug: 'marche-immobilier-2026-marchand-de-biens' },
  { needle: 'enchères immobilières', slug: 'encheres-immobilieres-marchand-de-biens' },
  { needle: 'vente aux enchères', slug: 'encheres-immobilieres-marchand-de-biens' },
  { needle: 'adjudication', slug: 'encheres-immobilieres-marchand-de-biens' },
  { needle: 'calcul de rentabilité', slug: 'calcul-rentabilite-marchand-de-biens' },
  { needle: 'simulateur de rentabilité', slug: 'simulateur-rentabilite-marchand-de-biens' },
  { needle: 'rentabilité locative', slug: 'calcul-rentabilite-immobiliere' },
  { needle: 'choisir sa formation', slug: 'comment-choisir-formation-marchand-de-biens' },
  { needle: 'livre marchand de biens', slug: 'livre-marchand-de-biens' },
  { needle: 'formation gratuite', slug: 'formation-marchand-de-biens-gratuite' },

  // Le métier (satellites)
  { needle: 'combien gagne un marchand', slug: 'marchand-de-biens-salaire' },
  { needle: 'première opération', slug: 'marchand-de-biens-debutant' },
  { needle: 'avantages et inconvénients', slug: 'avantages-inconvenients-marchand-de-biens' },
  { needle: 'promoteur immobilier', slug: 'marchand-de-biens-ou-promoteur-immobilier' },
  { needle: 'investisseur locatif', slug: 'marchand-de-biens-ou-investisseur-locatif' },
  { needle: 'agent immobilier', slug: 'marchand-de-biens-ou-agent-immobilier' },
];

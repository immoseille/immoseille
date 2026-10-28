// Overrides du bloc "À lire aussi" (maillage interne, brief du 28/10/2026).
// Généré depuis immoseille-maillage-brief-agent.xlsx. Ne pas éditer à la main.
// RELATED_EXCLUDE : slugs de cartes à retirer du bloc related (sans remplacement).
// RELATED_REPLACE : cartes à remplacer en place (ex. /devenir/ -> /formation/).

export const RELATED_EXCLUDE = {
  'achat-revente-immobilier': ['business-plan-marchand-de-biens'],
  'achat-revente-immobilier-particulier': ['business-plan-marchand-de-biens', 'calcul-rentabilite-immobiliere'],
  'alternative-greenbull-campus': ['marchand-de-biens-ou-investisseur-locatif'],
  'business-plan-marchand-de-biens': ['calcul-rentabilite-immobiliere'],
  'calcul-rentabilite-immobiliere': ['business-plan-marchand-de-biens'],
  'calcul-rentabilite-marchand-de-biens': ['business-plan-marchand-de-biens'],
  'comment-choisir-formation-marchand-de-biens': ['marchand-de-biens-ou-investisseur-locatif'],
  'diviser-un-terrain': ['business-plan-marchand-de-biens'],
  'encheres-immobilieres-marchand-de-biens': ['business-plan-marchand-de-biens'],
  'formation-marchand-de-biens-gratuite': ['marchand-de-biens-ou-investisseur-locatif'],
  'immobilier-off-market': ['business-plan-marchand-de-biens'],
  'logiciel-marchand-de-biens': ['business-plan-marchand-de-biens', 'calcul-rentabilite-immobiliere'],
  'loi-de-finances-2026-marchand-de-biens': ['creer-societe-marchand-de-biens', 'delai-de-revente-marchand-de-biens', 'sci-marchand-de-biens'],
  'marchand-de-biens-debutant': ['marchand-de-biens-ou-investisseur-locatif'],
  'marche-immobilier-2026-marchand-de-biens': ['business-plan-marchand-de-biens', 'calcul-rentabilite-immobiliere'],
  'meilleure-formation-marchand-de-biens': ['marchand-de-biens-ou-investisseur-locatif'],
  'monter-une-operation-marchand-de-biens': ['business-plan-marchand-de-biens'],
  'negocier-prix-achat-immobilier': ['business-plan-marchand-de-biens'],
  'passoire-thermique-marchand-de-biens': ['business-plan-marchand-de-biens'],
  'simulateur-rentabilite-marchand-de-biens': ['business-plan-marchand-de-biens'],
  'surelevation-immeuble': ['business-plan-marchand-de-biens'],
  'transformer-local-commercial-en-logement': ['business-plan-marchand-de-biens'],
  'vente-a-la-decoupe': ['business-plan-marchand-de-biens'],
};

export const RELATED_REPLACE = {
  'banque-marchand-de-biens': [{ from: 'devenir-marchand-de-biens', to: 'formation', title: "formation marchand de biens (module 1 offert)", image: '/img/devenir-marchand-de-biens.jpg' }],
  'crowdfunding-immobilier': [{ from: 'devenir-marchand-de-biens', to: 'formation', title: "formation marchand de biens (module 1 offert)", image: '/img/devenir-marchand-de-biens.jpg' }],
  'financement-marchand-de-biens': [{ from: 'devenir-marchand-de-biens', to: 'formation', title: "formation marchand de biens (module 1 offert)", image: '/img/devenir-marchand-de-biens.jpg' }],
  'marchand-de-biens-sans-apport': [{ from: 'devenir-marchand-de-biens', to: 'formation', title: "formation marchand de biens (module 1 offert)", image: '/img/devenir-marchand-de-biens.jpg' }],
  'portage-immobilier': [{ from: 'devenir-marchand-de-biens', to: 'formation', title: "formation marchand de biens (module 1 offert)", image: '/img/devenir-marchand-de-biens.jpg' }],
};

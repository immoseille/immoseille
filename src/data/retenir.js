// Bloc "À retenir" (GEO / LLM-friendly) affiché en fin de chaque article.
// slug -> liste de phrases-clés autonomes (chaque puce = un fait extractible).
// Rendu server-side par ArticleLayout, sous forme de liste à puces.

export const RETENIR = {
  'devenir-marchand-de-biens': [
    "Aucun diplôme n'est obligatoire, mais des compétences en droit, fiscalité et négociation sont indispensables.",
    "Prévoir un apport de 50 000 à 150 000 € pour une première opération.",
    "Statut adapté : SAS ou SASU ; la micro-entreprise et la SCI sont à éviter.",
    "La marge se crée à l'achat, en achetant sous le prix du marché.",
  ],
  'marchand-de-biens-definition': [
    "Le marchand de biens achète pour revendre, de façon habituelle et dans un but de profit.",
    "C'est un commerçant immatriculé au registre du commerce, pas un intermédiaire comme l'agent immobilier.",
    "Deux critères le qualifient : l'exercice habituel et l'intention spéculative dès l'achat.",
    "Ses bénéfices relèvent des BIC et de la TVA immobilière.",
  ],
  'marchand-de-biens-salaire': [
    "Le marchand de biens ne touche pas de salaire fixe : il se rémunère sur la marge de ses opérations.",
    "Revenu indicatif : 30 000 à 60 000 €/an en début d'activité, 80 000 à 150 000 €/an et plus une fois confirmé.",
    "Marge brute visée : 10 à 25 % ; marge nette : 5 à 10 % après impôts et charges.",
    "Le chiffre d'affaires n'est pas la rémunération : tout se juge en net.",
  ],
  'avantages-inconvenients-marchand-de-biens': [
    "Avantages : accessible sans diplôme, autonomie, potentiel de marge, fiscalité favorable.",
    "Inconvénients : risque financier, apport élevé, fiscalité complexe, marché cyclique.",
    "Ce n'est pas une rente : c'est un revenu d'entrepreneur, sans revenu fixe.",
    "La réussite dépend de la préparation et d'un budget de travaux tenu.",
  ],
  'marchand-de-biens-ou-investisseur-locatif': [
    "Marchand de biens : plus-value à court terme, activité commerciale, pas de gestion locative.",
    "Investisseur locatif : revenus locatifs réguliers sur le long terme, avec gestion des locataires.",
    "Fiscalité : BIC et TVA pour le marchand ; revenus fonciers ou LMNP et abattement pour durée de détention pour le bailleur.",
    "Aucun n'est meilleur dans l'absolu : le choix dépend des objectifs et de la tolérance au risque.",
  ],
  'marchand-de-biens-ou-promoteur-immobilier': [
    "Le promoteur immobilier construit du neuf : il crée des surfaces à partir d'un terrain.",
    "Le marchand de biens valorise de l'existant (rénovation, division, changement d'usage) et le revend.",
    "La promotion mobilise beaucoup plus de capitaux et s'étale sur 2 à 5 ans ; le marchand de biens travaille sur 6 à 18 mois.",
    "Les deux sont des commerçants (BIC, TVA immobilière), mais le régime de TVA diffère selon l'opération.",
    "Le marchand de biens est la voie la plus accessible pour débuter ; la promotion vient souvent ensuite.",
  ],
  'statut-juridique-marchand-de-biens': [
    "La micro-entreprise est interdite pour l'achat-revente immobilier (article 50-0 du CGI).",
    "La SCI est inadaptée : objet civil, risque de requalification.",
    "Statuts adaptés : SAS, SASU, SARL, EURL, tous à responsabilité limitée.",
    "À l'impôt sur les sociétés : 15 % jusqu'à 42 500 € de bénéfice, puis 25 %.",
  ],
  'tva-marchand-de-biens': [
    "Trois régimes possibles : TVA sur le prix total, TVA sur la marge, exonération.",
    "Le régime se détermine dès l'achat, pas au moment de la vente.",
    "Immeuble de moins de 5 ans ou rénovation lourde : TVA sur le prix total (20 %) obligatoire.",
    "En TVA sur le prix total, les droits de mutation à l'achat tombent à environ 0,715 %.",
  ],
  'frais-de-notaire-marchand-de-biens': [
    "Les « frais de notaire » sont surtout des impôts, pas la rémunération du notaire.",
    "Le marchand de biens bénéficie de droits réduits à environ 0,715 %, contre 5,80 à 6,30 % pour un acheteur classique.",
    "Contrepartie : s'engager à revendre dans le délai légal (5 ans en principe).",
    "À défaut de revente, les droits normaux sont réclamés, majorés d'intérêts.",
  ],
  'plus-value-marchand-de-biens': [
    "Les profits du marchand de biens sont des BIC (article 35 du CGI), pas une plus-value de particulier.",
    "Il ne bénéficie d'aucun abattement pour durée de détention.",
    "Bénéfice imposable = prix de vente − prix de revient total − charges.",
    "Imposition à l'IR (entreprise individuelle) ou à l'IS (société : 15 % puis 25 %, dividendes à la flat tax de 30 %).",
  ],
  'expert-comptable-marchand-de-biens': [
    "La comptabilité du marchand de biens doit être analytique, opération par opération.",
    "Un cabinet spécialisé sécurise la TVA sur marge, l'engagement de revente et la structure.",
    "À consulter avant chaque achat, pas après la signature de l'acte.",
    "Coût indicatif : de l'ordre de 150 €+/mois selon le volume, plus le conseil ponctuel.",
  ],
  'financement-marchand-de-biens': [
    "Le financement combine apport, crédit bancaire et souvent des solutions complémentaires.",
    "Apport bancaire attendu : 20 à 30 %, jusqu'à 50 % pour un débutant.",
    "Le crédit in fine préserve la trésorerie pendant les travaux.",
    "Le crowdfunding et le portage prennent le relais quand la banque ne suit pas.",
  ],
  'banque-marchand-de-biens': [
    "Les banques jugent l'activité risquée et se montrent exigeantes.",
    "Trois critères clés : l'expérience, la localisation et le prix au mètre carré.",
    "Apport demandé : 20 à 30 %, jusqu'à 50 % sans historique.",
    "En cas de refus, se tourner vers les financements alternatifs (crowdfunding, portage).",
  ],
  'marchand-de-biens-sans-apport': [
    "Se lancer sans apport est possible mais rare, et plus risqué.",
    "Les banques exigent normalement 20 à 30 % d'apport.",
    "Leviers possibles : crowdfunding, portage, association, achat très décoté.",
    "Sans apport, l'effet de levier amplifie autant les gains que les pertes.",
  ],
  'crowdfunding-immobilier': [
    "Le crowdfunding immobilier : des investisseurs prêtent collectivement via une plateforme (crowdlending).",
    "Pour le marchand de biens, il sert surtout à compléter l'apport et à aller vite.",
    "Prêt souvent in fine, garanti par hypothèque, à un taux plus élevé qu'une banque.",
    "Il est complémentaire du crédit bancaire, rarement un substitut total.",
  ],
  'portage-immobilier': [
    "Le portage immobilier est une vente avec faculté de rachat (article 1659 du Code civil).",
    "Pour le marchand : le portage acquisition, un investisseur achète pour lui (6 à 12 mois).",
    "Apport très réduit et sans garantie personnelle, mais coût élevé (commission ~5 %).",
    "À intégrer dès le calcul de rentabilité de l'opération.",
  ],
  'monter-une-operation-marchand-de-biens': [
    "Les étapes : sourcing, financement, sécurisation, achat, travaux, revente.",
    "Viser une marge d'environ 30 % pour en sécuriser 20 % après imprévus.",
    "La précommercialisation (tester la demande avant l'achat) dérisque le projet.",
    "La valeur se crée dans la conception et la division, pas sur le chantier.",
  ],
  'achat-revente-immobilier': [
    "Acheter, valoriser puis revendre plus cher : la marge se crée à l'achat.",
    "Le cycle : sourcing, analyse, achat, valorisation, revente.",
    "Enchaîner les opérations expose à la requalification en marchand de biens.",
    "Marge brute visée : 15 à 25 %, à juger toujours en net.",
  ],
  'diviser-un-terrain': [
    "La division parcellaire découpe un terrain en lots ; depuis la loi Alur, aucune surface minimale n'est imposée.",
    "Vérifier la faisabilité via le PLU et un certificat d'urbanisme opérationnel.",
    "Permis d'aménager si équipements communs, sinon déclaration préalable.",
    "Le géomètre-expert réalise le bornage, étape incontournable.",
  ],
  'simulateur-rentabilite-marchand-de-biens': [
    "Le simulateur estime la marge brute et la marge nette d'une opération en direct.",
    "Les frais de notaire sont pré-remplis au taux réduit du marchand de biens (~0,715 %).",
    "La TVA n'est pas modélisée en détail : à valider avec un comptable.",
    "Viser une marge brute de 15 à 25 % pour absorber les imprévus.",
  ],
  'calcul-rentabilite-marchand-de-biens': [
    "Prix de revient = prix d'achat + frais de notaire + travaux + frais divers.",
    "Marge brute = prix de revente − prix de revient.",
    "Marge nette = marge brute − impôt sur le bénéfice.",
    "Repère courant : viser une marge brute de 15 à 25 %.",
  ],
};

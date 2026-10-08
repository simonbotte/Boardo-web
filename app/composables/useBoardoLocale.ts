export const supportedLocales = ["en", "fr"] as const;

export type Locale = (typeof supportedLocales)[number];

const messages = {
  en: {
    "seo.title": "Boardo — Board Game Score Tracker",
    "seo.description":
      "Never lose track of a game score again. Record, calculate, and keep scores for your favorite board games with Boardo.",
    "seo.keywords":
      "board game score tracker, scorekeeper, board game scores, game night, score calculator, Boardo",
    "seo.comparison.title": "Boardo vs BG Stats, Board Record & Scor'Pion",
    "seo.comparison.description":
      "Compare Boardo with leading board game score trackers: BG Stats, Board Record and Scor'Pion.",
    "seo.comparison.keywords":
      "Boardo vs BG Stats, Boardo vs Board Record, Boardo vs Scor'Pion, BG Stats alternative, Board Record alternative, Scor'Pion alternative, board game score tracker comparison",
    "locale.switchToFrench": "Voir le site en français",
    "locale.switchToEnglish": "View the website in English",
    "locale.selectorLabel": "Choose a language",
    "locale.suggestion.message": "Based on your browser, you seems to prefer English.",
    "locale.suggestion.action": "View the site in English",
    "locale.suggestion.dismiss": "Dismiss the language suggestion",
    "hero.logoAlt": "Boardo logo",
    "hero.title": "Never lose track of a game's score again.",
    "hero.description":
      "Record, calculate, and keep scores for your favorite board games.",
    "hero.download": "Download on the",
    "hero.downloadApp.title": "Download on the App Store",
    "preview.ariaLabel": "Boardo app previews",
    "preview.alt": "Boardo app preview",
    "collection.badge": "Browse",
    "collection.title": "A large game collection",
    "collection.alt": "game cover placeholder",
    "interface.badge": "Interface",
    "interface.title": "Tailored for each game",
    "interface.skull-king.title": "Skull King",
    "interface.skull-king.imageAlt": "Boardo interface for Skull King",
    "interface.skull-king.description":
      "Enter bids before each round, then tricks won. Boardo automatically calculates scores, applies bonuses, and keeps track of every round.",
    "interface.7-wonders.title": "7 Wonders",
    "interface.7-wonders.imageAlt": "Boardo interface for 7 Wonders",
    "interface.7-wonders.description":
      "Enter each scoring category for every player, then let Boardo automatically calculate the final score and identify the winner.",
    "interface.pixies.title": "Pixies",
    "interface.pixies.imageAlt": "Boardo interface for Pixies",
    "interface.pixies.description":
      "Validate numbered cards, enter symbols and the largest color area after each round. Boardo automatically calculates scores and every player's final total.",
    "features.badge": "Many",
    "features.title": "Features to enjoy most of your games",
    "features.addFriends.title": "Bring your players together",
    "features.addFriends.description":
      "Add your friends once, then rebuild your table in seconds for every new game night.",
    "features.saveScores.title": "Track every score",
    "features.saveScores.description":
      "Enter points easily and keep a clear view of the standings throughout the game.",
    "features.playGames.title": "Play your games",
    "features.playGames.description":
      "Every game has its own interface and scoring rules, so you can play without calculations or hassle.",
    "features.stats.title": "Relive your games",
    "features.stats.description":
      "Browse your history, statistics and score progress to find out who really rules the table.",
    "features.liveActivities.title": "Keep the score within reach",
    "features.liveActivities.description":
      "Follow the game from your Lock Screen and Dynamic Island with iPhone Live Activities.",
    "features.altSuffix": "placeholder",
    "pricing.badge": "Boardo Ultra",
    "pricing.title": "Your games, without limits.",
    "pricing.description":
      "Play ad-free and get more out of your games.",
    "pricing.hero.title": "Unlock Boardo Ultra",
    "pricing.hero.description":
      "Play ad-free and get more out of your games.",
    "pricing.included.players": "Recurring players",
    "pricing.included.stats": "Player stats and history",
    "pricing.included.ads": "No ads between games",
    "pricing.benefits.players.title": "Recurring players",
    "pricing.benefits.players.description":
      "Add your loved ones once to start games faster and follow their games over time.",
    "pricing.benefits.stats.title": "Player stats and performance",
    "pricing.benefits.stats.description":
      "See who wins most often and browse the game history of your loved ones.",
    "pricing.benefits.ads.title": "Ad-free games",
    "pricing.benefits.ads.description":
      "Play without ads between your games.",
    "pricing.plansTitle": "Choose your plan",
    "pricing.plansDescription":
      "Every Boardo Ultra plan starts with a 7-day free trial.",
    "pricing.plan.annual.title": "Annual",
    "pricing.plan.annual.price": "€10",
    "pricing.plan.annual.period": "/ year",
    "pricing.plan.monthly.title": "Monthly",
    "pricing.plan.monthly.price": "€0.99",
    "pricing.plan.monthly.period": "/ month",
    "pricing.bestValue": "Best value",
    "pricing.trial": "7 days free",
    "pricing.cancelAnytime":
      "Then renews automatically at this price. Cancel at least 24 hours before renewal.",
    "pricing.ctaTitle": "Start your free trial in Boardo",
    "pricing.ctaDescription":
      "Download Boardo and choose Boardo Ultra to begin your 7-day free trial.",
    "pricing.restore":
      "Already subscribed? Open Boardo Ultra in the app and tap Restore purchases.",
    "pricing.legal":
      "Payment is charged to your Apple Account after the free trial. Your subscription renews automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel it in your App Store account settings.",
    "comparison.badge": "Comparison",
    "comparison.title": "Boardo compared with the established score trackers",
    "comparison.description":
      "A practical comparison of Boardo and three established alternatives for board game scorekeeping.",
    "comparison.boardoLead.badge": "Built for game night",
    "comparison.boardoLead.title": "The easiest way to keep score while you play",
    "comparison.boardoLead.description":
      "Boardo is made for the table: choose a supported game, bring back your players and follow a scoring flow designed for that game.",
    "comparison.boardoLead.scoring.title": "Made for each game",
    "comparison.boardoLead.scoring.description":
      "Use a dedicated score entry flow and let Boardo handle the calculations for supported games.",
    "comparison.boardoLead.glance.title": "Always within reach",
    "comparison.boardoLead.glance.description":
      "Keep the score visible on your Lock Screen and Dynamic Island with Live Activities.",
    "comparison.boardoLead.devices.title": "At home on your Apple devices",
    "comparison.boardoLead.devices.description":
      "Move seamlessly from iPhone to iPad and Mac, whether you are playing at the table or looking back at a game night.",
    "comparison.recommended": "Recommended for game night",
    "comparison.back": "Back to home",
    "comparison.learnMore": "Learn more",
    "comparison.updated": "Checked on August 6, 2026 from the publishers’ public information.",
    "comparison.tableLabel": "Feature comparison",
    "comparison.feature": "Feature",
    "comparison.boardo": "Boardo",
    "comparison.bgStats": "BG Stats",
    "comparison.boardRecord": "Board Record",
    "comparison.scorpion": "Scor’Pion",
    "comparison.price": "Price and upgrades",
    "comparison.interface": "Interface and speed of score entry",
    "comparison.gameCount": "Games and score sheets",
    "comparison.appleFeatures": "Advanced iPhone features",
    "comparison.availability": "Availability",
    "comparison.value.boardo.price": "Free with ads · Boardo Ultra removes ads and unlocks premium features",
    "comparison.value.bgStats.price": "Paid upfront · additional in-app purchases",
    "comparison.value.boardRecord.price": "Free to download · in-app purchases",
    "comparison.value.scorpion.price": "Free with ads · in-app purchases",
    "comparison.value.boardo.interface": "A tailored, fast score entry flow for every supported game",
    "comparison.value.bgStats.interface": "Feature-rich tracking, score sheets, collection and statistics",
    "comparison.value.boardRecord.interface": "Advanced custom score sheets and detailed scoring rules",
    "comparison.value.scorpion.interface": "Flexible, configurable counters for many game types",
    "comparison.value.boardo.gameCount": "14 games with dedicated interfaces · more are coming",
    "comparison.value.bgStats.gameCount": "Over 2,800 game-specific score sheets",
    "comparison.value.boardRecord.gameCount": "Custom and cloud-shared score sheets for a broad catalog",
    "comparison.value.scorpion.gameCount": "A large game list plus custom counters",
    "comparison.value.boardo.appleFeatures": "Live Activities on the Lock Screen and Dynamic Island",
    "comparison.value.bgStats.appleFeatures": "No equivalent Live Activity is presented in its public features",
    "comparison.value.boardRecord.appleFeatures": "No equivalent Live Activity is presented in its public features",
    "comparison.value.scorpion.appleFeatures": "No equivalent Live Activity is presented in its public features",
    "comparison.value.boardo.availability": "iPhone, iPad and Mac",
    "comparison.value.bgStats.availability": "iPhone, iPad, Mac and Android",
    "comparison.value.boardRecord.availability": "iPhone, iPad and Mac",
    "comparison.value.scorpion.availability": "iPhone, Android and web",
    "comparison.seo.title": "Which board game score tracker should you choose?",
    "comparison.seo.bgStats.title": "Boardo vs BG Stats",
    "comparison.seo.bgStats.description": "BG Stats is built for deep collection tracking, BoardGameGeek sync and extensive score sheets. Boardo is the BG Stats alternative for game nights when you want a quicker, game-specific scoring experience on Apple devices.",
    "comparison.seo.boardRecord.title": "Boardo vs Board Record",
    "comparison.seo.boardRecord.description": "Board Record is a powerful option for custom score sheets and detailed play records. Choose Boardo over Board Record when a ready-to-use scoring flow for supported games matters more than configuring a sheet.",
    "comparison.seo.scorpion.title": "Boardo vs Scor’Pion",
    "comparison.seo.scorpion.description": "Scor’Pion offers flexible counters for board games, card games and other activities. Boardo is the Scor’Pion alternative focused on a polished, fast scorekeeping experience tailored to each supported board game.",
    "comparison.whyBoardo.badge": "Why Boardo",
    "comparison.whyBoardo.title": "Made for the moment you are playing",
    "comparison.whyBoardo.description":
      "Boardo focuses on a smooth score entry experience rather than making you configure a generic sheet first.",
    "comparison.whyBoardo.point1": "A dedicated interface and scoring rules for each supported game.",
    "comparison.whyBoardo.point2": "Saved players, game history and statistics for your group.",
    "comparison.whyBoardo.point3": "Live Activities keep the score visible from the Lock Screen and Dynamic Island.",
    "comparison.download": "Download Boardo",
    "comparison.sources": "Sources",
    "comparison.sourceBgStats": "BG Stats support",
    "comparison.sourceBoardRecord": "Board Record user manual",
    "comparison.sourceScorpion": "Scor’Pion website",
    "footer.comparison": "Compare alternatives",
    "footer.contact": "Contact",
    "footer.legal": "Legal and privacy",
    "footer.owner": "2026 Simon Botté",
    "footer.disclaimer":
      'This application is in no way authorized, approved or endorsed by the games available in the application. No part of it, whether text or images, may be used for any purpose other than personal use without explicit authorization. This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.',
    "contact.badge": "Contact",
    "contact.title": "Let’s talk about Boardo",
    "contact.description":
      "A question, feedback or a game you would like to see? Send me a message.",
    "contact.option.contact.label": "Contact",
    "contact.option.contact.description":
      "A question, comment or feedback about Boardo.",
    "contact.option.game.label": "Suggest a game",
    "contact.option.game.description":
      "Request the addition of a game to the app.",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Email address",
    "contact.emailHint": "Optional",
    "contact.emailDescription": "Leave it blank if you do not need a reply.",
    "contact.message": "Message",
    "contact.messagePlaceholder": "How can I help you?",
    "contact.gameMessagePlaceholder":
      "Which game would you like to add? Do you have a particular idea or wish for its interface in the app?",
    "contact.attachment": "Attachment",
    "contact.attachmentDescription":
      "Add a document or image if it helps explain your message.",
    "contact.gameAttachmentDescription":
      "A photo of the game box will help me identify it.",
    "contact.attachmentLabel": "Drop a file here or click to browse",
    "contact.attachmentImageLabel": "Drop a photo here or click to browse",
    "contact.attachmentLimit": "One file, up to 5 MB.",
    "contact.submit": "Send message",
    "contact.privacyNotice": "Your details are used only to respond to your request.",
    "contact.privacyPolicyLink": "Read the privacy policy",
    "contact.successTitle": "Message sent",
    "contact.successDescription": "Thanks for taking the time to write to me.",
    "contact.errorTitle": "Unable to send the message",
    "contact.errorDescription": "Please try again in a moment.",
    "contact.required": "This field is required.",
    "contact.invalidEmail": "Enter a valid email address.",
    "contact.invalidImage": "Please add an image file.",
    "contact.fileTooLarge": "The file must not exceed 5 MB.",
    "contact.ariaOptions": "Contact form type",
    "contact.attachmentHelp": "Accepted formats: image, PDF, Word document.",
    "contact.gameAttachmentHelp": "Accepted formats: JPG, PNG, WEBP or HEIC.",
    "contact.gameSubject": "Game addition request",
    "contact.generalSubject": "Contact request",
  },
  fr: {
    "seo.title": "Boardo — Compteur de scores de jeux de société",
    "seo.description":
      "Ne perdez plus jamais le score d’une partie. Enregistrez, calculez et conservez les scores de vos jeux de société préférés avec Boardo.",
    "seo.keywords":
      "compteur de scores jeux de société, score de jeu, calculateur de scores, soirée jeux, Boardo",
    "seo.comparison.title": "Boardo vs BG Stats, Board Record et Scor’Pion",
    "seo.comparison.description":
      "Comparez Boardo aux principaux compteurs de score de jeux de société : BG Stats, Board Record et Scor’Pion.",
    "seo.comparison.keywords":
      "Boardo vs BG Stats, Boardo vs Board Record, Boardo vs Scor’Pion, alternative BG Stats, alternative Board Record, alternative Scor’Pion, comparatif compteur de scores jeux de société",
    "locale.switchToFrench": "Voir le site en français",
    "locale.switchToEnglish": "View the website in English",
    "locale.selectorLabel": "Choisir une langue",
    "locale.suggestion.message": "Based on your browser, you seems to prefer English.",
    "locale.suggestion.action": "See the site in English",
    "locale.suggestion.dismiss": "Fermer la suggestion de langue",
    "hero.logoAlt": "Logo Boardo",
    "hero.title": "Ne perdez plus jamais le score d’une partie.",
    "hero.description":
      "Enregistrez, calculez et conservez les scores de vos jeux de société préférés.",
    "hero.download": "Télécharger dans l’",
    "hero.downloadApp.title": "Télécharger dans l'App Store",
    "preview.ariaLabel": "Aperçus de l’application Boardo",
    "preview.alt": "Aperçu de l’application Boardo",
    "collection.badge": "Parcourir",
    "collection.title": "Une vaste collection de jeux",
    "collection.alt": "maquette de boîte de jeu",
    "interface.badge": "Interface",
    "interface.title": "Adaptée à chaque jeu",
    "interface.skull-king.title": "Skull King",
    "interface.skull-king.imageAlt": "Interface Boardo pour le jeu Skull King",
    "interface.skull-king.description":
      "Saisissez les mises avant chaque manche, puis les plis remportés. Boardo calcule automatiquement les scores, applique les bonus et conserve le détail de chaque manche.",
    "interface.7-wonders.title": "7 Wonders",
    "interface.7-wonders.imageAlt": "Interface Boardo pour le jeu 7 Wonders",
    "interface.7-wonders.description":
      "Renseignez les points de chaque catégorie pour tous les joueurs, puis laissez Boardo calculer automatiquement le score final et désigner le vainqueur.",
    "interface.pixies.title": "Pixies",
    "interface.pixies.imageAlt": "Interface Boardo pour le jeu Pixies",
    "interface.pixies.description":
      "Validez les cartes numérotées, renseignez les symboles et la plus grande zone de couleur à chaque manche. Boardo calcule automatiquement les scores et le total final de chaque joueur.",
    "features.badge": "Nombreuses",
    "features.title": "Fonctionnalités pour profiter pleinement de vos parties",
    "features.addFriends.title": "Retrouvez vos joueurs",
    "features.addFriends.description":
      "Ajoutez vos amis une seule fois, puis reformez votre table en quelques secondes pour chaque nouvelle soirée.",
    "features.saveScores.title": "Suivez chaque score",
    "features.saveScores.description":
      "Saisissez les points simplement et gardez une vue claire du classement tout au long de la partie.",
    "features.playGames.title": "Jouez à vos jeux",
    "features.playGames.description":
      "Chaque jeu possède son interface et ses règles de score, pour jouer sans calculs ni prise de tête.",
    "features.stats.title": "Revivez vos parties",
    "features.stats.description":
      "Consultez l’historique, les statistiques et l’évolution des scores pour savoir qui domine vraiment la table.",
    "features.liveActivities.title": "Gardez le score à portée de main",
    "features.liveActivities.description":
      "Suivez la partie depuis l’écran verrouillé et la Dynamic Island grâce aux Live Activities d’iPhone.",
    "features.altSuffix": "maquette",
    "pricing.badge": "Boardo Ultra",
    "pricing.title": "Vos parties, sans limites.",
    "pricing.description":
      "Jouez sans publicité et profitez encore plus de vos parties.",
    "pricing.hero.title": "Débloquez Boardo Ultra",
    "pricing.hero.description":
      "Jouez sans publicité et profitez encore plus de vos parties.",
    "pricing.included.players": "Joueurs récurrents",
    "pricing.included.stats": "Statistiques et historique des joueurs",
    "pricing.included.ads": "Aucune publicité entre les parties",
    "pricing.benefits.players.title": "Joueurs récurrents",
    "pricing.benefits.players.description":
      "Ajoutez vos proches une seule fois pour lancer vos parties plus vite et suivre leur évolution au fil du temps.",
    "pricing.benefits.stats.title": "Statistiques et performances des joueurs",
    "pricing.benefits.stats.description":
      "Découvrez qui gagne le plus souvent et consultez l’historique des parties de vos proches.",
    "pricing.benefits.ads.title": "Des parties sans publicité",
    "pricing.benefits.ads.description":
      "Jouez sans publicité entre vos parties.",
    "pricing.plansTitle": "Choisissez votre formule",
    "pricing.plansDescription":
      "Chaque formule Boardo Ultra commence par 7 jours d’essai gratuit.",
    "pricing.plan.annual.title": "Annuel",
    "pricing.plan.annual.price": "10 €",
    "pricing.plan.annual.period": "/ an",
    "pricing.plan.monthly.title": "Mensuel",
    "pricing.plan.monthly.price": "0,99 €",
    "pricing.plan.monthly.period": "/ mois",
    "pricing.bestValue": "Meilleure offre",
    "pricing.trial": "7 jours gratuits",
    "pricing.cancelAnytime":
      "Puis renouvellement automatique à ce tarif. Résiliez au moins 24 heures avant le renouvellement.",
    "pricing.ctaTitle": "Commencez votre essai gratuit dans Boardo",
    "pricing.ctaDescription":
      "Téléchargez Boardo et choisissez Boardo Ultra pour profiter de vos 7 jours d’essai.",
    "pricing.restore":
      "Déjà abonné·e ? Ouvrez Boardo Ultra dans l’app et touchez Restaurer les achats.",
    "pricing.legal":
      "Après l’essai gratuit, le paiement sera prélevé sur votre compte Apple. L’abonnement est reconduit automatiquement, sauf annulation au moins 24 heures avant la fin de la période en cours. Gérez ou résiliez votre abonnement dans les réglages de votre compte App Store.",
    "comparison.badge": "Comparatif",
    "comparison.title": "Boardo face aux compteurs de score reconnus",
    "comparison.description":
      "Un comparatif pratique entre Boardo et trois alternatives établies pour suivre les scores de jeux de société.",
    "comparison.boardoLead.badge": "Pensé pour les soirées jeux",
    "comparison.boardoLead.title": "Le moyen le plus simple de suivre le score pendant la partie",
    "comparison.boardoLead.description":
      "Boardo est fait pour la table : choisissez un jeu pris en charge, retrouvez vos joueurs et suivez une saisie pensée pour ce jeu.",
    "comparison.boardoLead.scoring.title": "Adapté à chaque jeu",
    "comparison.boardoLead.scoring.description":
      "Utilisez une saisie dédiée et laissez Boardo effectuer les calculs pour les jeux pris en charge.",
    "comparison.boardoLead.glance.title": "Le score toujours à portée de regard",
    "comparison.boardoLead.glance.description":
      "Gardez le score visible sur l’écran verrouillé et dans la Dynamic Island grâce aux Live Activities.",
    "comparison.boardoLead.devices.title": "À l’aise sur vos appareils Apple",
    "comparison.boardoLead.devices.description":
      "Passez naturellement de l’iPhone à l’iPad et au Mac, à la table de jeu comme pour revivre vos parties.",
    "comparison.recommended": "Recommandé pour les soirées jeux",
    "comparison.back": "Retour à l’accueil",
    "comparison.learnMore": "En savoir plus",
    "comparison.updated": "Informations vérifiées le 6 août 2026 à partir des informations publiques des éditeurs.",
    "comparison.tableLabel": "Comparatif des fonctionnalités",
    "comparison.feature": "Fonctionnalité",
    "comparison.boardo": "Boardo",
    "comparison.bgStats": "BG Stats",
    "comparison.boardRecord": "Board Record",
    "comparison.scorpion": "Scor’Pion",
    "comparison.price": "Prix et options payantes",
    "comparison.interface": "Interface et rapidité de saisie",
    "comparison.gameCount": "Jeux et feuilles de score",
    "comparison.appleFeatures": "Fonctionnalités avancées d’iPhone",
    "comparison.availability": "Disponibilité",
    "comparison.value.boardo.price": "Gratuit avec publicités · Boardo Ultra retire les publicités et débloque les fonctionnalités premium",
    "comparison.value.bgStats.price": "Achat initial payant · achats intégrés supplémentaires",
    "comparison.value.boardRecord.price": "Téléchargement gratuit · achats intégrés",
    "comparison.value.scorpion.price": "Gratuit avec publicités · achats intégrés",
    "comparison.value.boardo.interface": "Une saisie rapide, adaptée à chaque jeu pris en charge",
    "comparison.value.bgStats.interface": "Un suivi très complet : feuilles de score, collection et statistiques",
    "comparison.value.boardRecord.interface": "Des feuilles de score avancées et des règles détaillées à personnaliser",
    "comparison.value.scorpion.interface": "Des compteurs polyvalents et configurables pour de nombreux jeux",
    "comparison.value.boardo.gameCount": "14 jeux avec une interface dédiée · d’autres arrivent",
    "comparison.value.bgStats.gameCount": "Plus de 2 800 feuilles de score propres à chaque jeu",
    "comparison.value.boardRecord.gameCount": "Des feuilles personnalisées et partagées dans le cloud pour un vaste catalogue",
    "comparison.value.scorpion.gameCount": "Une grande liste de jeux et des compteurs personnalisables",
    "comparison.value.boardo.appleFeatures": "Live Activities sur l’écran verrouillé et dans la Dynamic Island",
    "comparison.value.bgStats.appleFeatures": "Pas d’équivalent Live Activity présenté dans ses fonctionnalités publiques",
    "comparison.value.boardRecord.appleFeatures": "Pas d’équivalent Live Activity présenté dans ses fonctionnalités publiques",
    "comparison.value.scorpion.appleFeatures": "Pas d’équivalent Live Activity présenté dans ses fonctionnalités publiques",
    "comparison.value.boardo.availability": "iPhone, iPad et Mac",
    "comparison.value.bgStats.availability": "iPhone, iPad, Mac et Android",
    "comparison.value.boardRecord.availability": "iPhone, iPad et Mac",
    "comparison.value.scorpion.availability": "iPhone, Android et web",
    "comparison.seo.title": "Quel compteur de scores de jeux de société choisir ?",
    "comparison.seo.bgStats.title": "Boardo vs BG Stats",
    "comparison.seo.bgStats.description": "BG Stats est conçu pour suivre en profondeur une collection, la synchroniser avec BoardGameGeek et utiliser de nombreuses feuilles de score. Boardo est l’alternative à BG Stats pour les soirées jeux où une saisie plus rapide, adaptée au jeu et pensée pour les appareils Apple est prioritaire.",
    "comparison.seo.boardRecord.title": "Boardo vs Board Record",
    "comparison.seo.boardRecord.description": "Board Record est une solution complète pour créer des feuilles de score personnalisées et enregistrer les parties dans le détail. Choisissez Boardo plutôt que Board Record lorsque vous préférez une saisie prête à l’emploi pour les jeux pris en charge, sans configurer de feuille.",
    "comparison.seo.scorpion.title": "Boardo vs Scor’Pion",
    "comparison.seo.scorpion.description": "Scor’Pion propose des compteurs flexibles pour les jeux de société, les jeux de cartes et d’autres activités. Boardo est l’alternative à Scor’Pion centrée sur une saisie élégante et rapide, adaptée à chaque jeu de société pris en charge.",
    "comparison.whyBoardo.badge": "Pourquoi Boardo",
    "comparison.whyBoardo.title": "Pensé pour le moment où vous jouez",
    "comparison.whyBoardo.description":
      "Boardo privilégie une saisie de score fluide, plutôt que de vous demander de configurer d’abord une feuille générique.",
    "comparison.whyBoardo.point1": "Une interface et des règles de score dédiées à chaque jeu pris en charge.",
    "comparison.whyBoardo.point2": "Des joueurs enregistrés, l’historique des parties et des statistiques pour votre groupe.",
    "comparison.whyBoardo.point3": "Les Live Activities gardent le score visible depuis l’écran verrouillé et la Dynamic Island.",
    "comparison.download": "Télécharger Boardo",
    "comparison.sources": "Sources",
    "comparison.sourceBgStats": "Assistance BG Stats",
    "comparison.sourceBoardRecord": "Manuel Board Record",
    "comparison.sourceScorpion": "Site Scor’Pion",
    "footer.comparison": "Voir les alternatives",
    "footer.contact": "Contact",
    "footer.legal": "Mentions légales",
    "footer.owner": "2026 Simon Botté",
    "footer.disclaimer":
      'L’application n’est en aucun cas autorisée, approuvée ou cautionnée par les jeux présents dans l’application. Aucune partie, qu’il s’agisse de texte ou d’images, ne peut être utilisée à d’autres fins qu’un usage personnel, sauf autorisation explicite. Ce logiciel est fourni "tel quel", sans garantie d’aucune sorte, expresse ou implicite, y compris, sans s’y limiter, les garanties de qualité marchande. En aucun cas, les auteurs ou titulaires de droits d’auteur ne pourront être tenus responsables de toute réclamation, dommage ou autre responsabilité, que ce soit dans le cadre d’une action contractuelle, délictuelle ou autre, découlant du logiciel, de son utilisation ou d’autres opérations liées au logiciel.',
    "contact.badge": "Contact",
    "contact.title": "Parlons de Boardo",
    "contact.description":
      "Une question, un retour ou un jeu que vous aimeriez voir arriver ? Envoyez-moi un message.",
    "contact.option.contact.label": "Me contacter",
    "contact.option.contact.description":
      "Une question, une remarque ou un retour sur Boardo.",
    "contact.option.game.label": "Proposer un jeu",
    "contact.option.game.description":
      "Demander l’ajout d’un jeu dans l’application.",
    "contact.firstName": "Prénom",
    "contact.lastName": "Nom",
    "contact.email": "Adresse e-mail",
    "contact.emailHint": "Facultatif",
    "contact.emailDescription":
      "Laissez ce champ vide si vous ne souhaitez pas de réponse.",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Comment puis-je vous aider ?",
    "contact.gameMessagePlaceholder":
      "Quel jeu aimeriez-vous ajouter ? Avez-vous une idée ou une envie particulière pour son interface dans l’application ?",
    "contact.attachment": "Pièce jointe",
    "contact.attachmentDescription":
      "Ajoutez un document ou une image si cela aide à expliquer votre message.",
    "contact.gameAttachmentDescription":
      "Une photo de la boîte du jeu m’aidera à bien l’identifier.",
    "contact.attachmentLabel":
      "Déposez un fichier ici ou cliquez pour parcourir",
    "contact.attachmentImageLabel":
      "Déposez une photo ici ou cliquez pour parcourir",
    "contact.attachmentLimit": "Un fichier, jusqu’à 5 Mo.",
    "contact.submit": "Envoyer le message",
    "contact.privacyNotice": "Les informations saisies servent uniquement à traiter votre demande.",
    "contact.privacyPolicyLink": "Lire la politique de confidentialité",
    "contact.successTitle": "Message envoyé",
    "contact.successDescription": "Merci d’avoir pris le temps de m’écrire.",
    "contact.errorTitle": "Impossible d’envoyer le message",
    "contact.errorDescription": "Réessayez dans un instant.",
    "contact.required": "Ce champ est obligatoire.",
    "contact.invalidEmail": "Saisissez une adresse e-mail valide.",
    "contact.invalidImage": "Ajoutez un fichier image.",
    "contact.fileTooLarge": "Le fichier ne doit pas dépasser 5 Mo.",
    "contact.ariaOptions": "Type de formulaire de contact",
    "contact.attachmentHelp": "Formats acceptés : image, PDF, document Word.",
    "contact.gameAttachmentHelp": "Formats acceptés : JPG, PNG, WEBP ou HEIC.",
    "contact.gameSubject": "Demande d’ajout de jeu",
    "contact.generalSubject": "Demande de contact",
  },
} as const;

function getBoardoLegalContent(locale: Locale) {
  return locale === 'fr'
    ? {
        title: 'Mentions légales et politique de confidentialité',
        badge: 'Informations',
        backHome: 'Retour à l’accueil',
        description: 'Informations sur l’éditeur de Boardo, les données traitées par le site et l’application, les publicités et les abonnements.',
        updated: 'Mise à jour : 1er octobre 2026',
        sections: [
          {
            id: 'disclaimer',
            title: 'Garanties et responsabilité',
            paragraphs: [
              'Ce logiciel est fourni "tel quel", sans garantie d’aucune sorte, expresse ou implicite, y compris, sans s’y limiter, les garanties de qualité marchande. En aucun cas, les auteurs ou titulaires de droits d’auteur ne pourront être tenus responsables de toute réclamation, dommage ou autre responsabilité, que ce soit dans le cadre d’une action contractuelle, délictuelle ou autre, découlant du logiciel, de son utilisation ou d’autres opérations liées au logiciel.'
            ]
          },
          {
            id: 'publisher',
            title: 'Éditeur et hébergement',
            paragraphs: [
              'Éditeur : Simon Botté, activité exercée en nom propre. Directeur de la publication : Simon Botté.',
              'Contact de l’éditeur : simon@smnb.fr.',
              'Hébergeur du site : ALWAYSDATA SARL, 91 rue du Faubourg Saint-Honoré, 75008 Paris, France. Téléphone : +33 1 84 16 23 49. RCS Paris : 492 893 490.'
            ]
          },
          {
            id: 'privacy',
            title: 'Données personnelles',
            paragraphs: [
              'Simon Botté est le responsable des traitements effectués pour Boardo. Aucun compte Boardo n’est nécessaire pour utiliser l’application. Les données de parties (noms ou pseudonymes des joueurs, équipes, jeux, scores, historique, favoris et préférences) sont conservées sur l’appareil et peuvent être synchronisées dans la base iCloud privée associée au compte Apple de l’utilisateur. Elles sont utilisées pour fournir les fonctions de l’application, sur le fondement de l’exécution du service demandé, et restent sous le contrôle de l’utilisateur dans l’app et iCloud.',
              'Le formulaire du site traite les prénom et nom (obligatoires), l’adresse e-mail (facultative), le message (obligatoire) et, si vous en joignez un, un fichier d’au plus 5 Mo. Ces informations servent à répondre à votre demande ou à étudier une suggestion de jeu. Le fondement est l’intérêt légitime de l’éditeur à traiter les demandes qui lui sont adressées. Les champs facultatifs peuvent rester vides ; sans nom ni message, le formulaire ne peut pas être envoyé.',
              'Les messages et pièces jointes sont transmis par le prestataire Resend à l’adresse de contact de l’éditeur. Ils sont conservés pendant le traitement de la demande, puis supprimés au plus tard 12 mois après la clôture des échanges, sauf obligation légale ou nécessité de traiter un différend. Le prestataire d’hébergement peut également traiter des journaux techniques nécessaires au fonctionnement et à la sécurité du site. Apple, Google et Resend peuvent traiter certaines données depuis des pays hors de l’Espace économique européen ; les transferts sont encadrés par les garanties prévues par le droit applicable et les documents publiés par ces prestataires.',
              'Le site utilise uniquement des cookies fonctionnels de première partie pour mémoriser la langue choisie et masquer la suggestion de langue. Ces préférences expirent après 30 jours. Le site ne met pas en place de cookies de mesure d’audience ou de publicité.'
            ]
          },
          {
            id: 'ads',
            title: 'Publicités dans l’application et Google AdMob',
            paragraphs: [
              'La version gratuite de Boardo affiche des publicités interstitielles entre les parties. Elle utilise le SDK Google Mobile Ads (AdMob) et la plateforme de consentement Google User Messaging Platform (UMP). Selon l’appareil, la région, la configuration et les choix de confidentialité, Google peut traiter l’adresse IP (notamment pour estimer une zone géographique approximative), des identifiants d’appareil ou publicitaires, les annonces affichées et les interactions avec l’app ou les annonces, ainsi que des informations de diagnostic et de performance.',
              'Ces données peuvent servir à diffuser, personnaliser ou mesurer les publicités, prévenir la fraude, établir des statistiques et améliorer les services publicitaires. Google peut les partager avec les partenaires publicitaires autorisés pour ces finalités. Les partenaires concernés sont présentés dans le message de consentement Google et peuvent varier selon la configuration. Google les conserve selon les durées indiquées dans sa politique de confidentialité, qui varient selon les données et services. Les choix requis sont recueillis par l’UMP avant qu’AdMob puisse demander des annonces. Vous pouvez les consulter ou les modifier dans Boardo, Réglages > Confidentialité > Choix de confidentialité.'
            ]
          },
          {
            id: 'purchases',
            title: 'Abonnements et achats intégrés Apple',
            paragraphs: [
              'Boardo Ultra est proposé sous forme d’abonnements à renouvellement automatique gérés par Apple via StoreKit et l’App Store. Il débloque notamment les joueurs récurrents, l’historique et les statistiques, et supprime les publicités. En France, les offres actuellement présentées sont de 0,99 € par mois ou 10 € par an, chacune avec un essai gratuit de 7 jours lorsqu’il est proposé et que vous y êtes éligible. Le prix, la durée, l’essai applicable et le montant du renouvellement affichés par l’App Store avant la confirmation de l’achat prévalent ; ils peuvent varier selon le pays et l’offre.',
              'À la fin de l’essai, l’abonnement est reconduit automatiquement au prix affiché pour la période choisie et le paiement est débité du compte Apple. Pour empêcher le prélèvement après l’essai ou le prochain renouvellement, résiliez au moins 24 heures avant la fin de la période concernée. Vous pouvez gérer ou résilier l’abonnement dans les réglages de votre compte Apple. La restauration des achats est disponible dans l’app. Apple traite le paiement ; Boardo ne reçoit pas les coordonnées de paiement. L’app ne reçoit de StoreKit que les informations nécessaires à la vérification du droit d’accès et à l’activation des fonctionnalités, sur le fondement de l’exécution de l’abonnement. Apple conserve les informations de transaction selon ses règles et obligations propres, notamment pour la facturation et la conformité légale.',
            ]
          },
          {
            id: 'rights',
            title: 'Vos droits et contact',
            paragraphs: [
              'Vous pouvez demander l’accès à vos données, leur rectification ou leur effacement, vous opposer à certains traitements, en demander la limitation ou la portabilité lorsque celle-ci s’applique, et retirer votre consentement à tout moment lorsque le traitement repose sur celui-ci. Pour exercer vos droits, écrivez à simon@smnb.fr. Vous pouvez aussi adresser une réclamation à la CNIL.',
              'Les données de parties enregistrées dans Boardo peuvent être supprimées depuis l’app ; leur synchronisation et les sauvegardes iCloud relèvent également des réglages et conditions d’Apple. Les données nécessaires au statut d’abonnement sont vérifiées par l’app auprès de StoreKit, sans traitement du paiement par Boardo.'
            ]
          },
          {
            id: 'intellectual-property',
            title: 'Propriété intellectuelle',
            paragraphs: [
              'Boardo, son code, ses textes et ses éléments graphiques sont protégés par les règles applicables de propriété intellectuelle. Les noms, marques et visuels des jeux restent la propriété de leurs titulaires respectifs. Leur présence dans Boardo ne signifie aucune affiliation, autorisation, approbation ou recommandation de leur part. Aucune partie de Boardo, qu’il s’agisse de texte ou d’images, ne peut être utilisée à d’autres fins qu’un usage personnel, sauf autorisation explicite.'
            ]
          }
        ],
        linksTitle: 'Politiques et informations complémentaires',
        links: [
          { label: 'Politique de confidentialité de Google', href: 'https://policies.google.com/privacy?hl=fr' },
          { label: 'Données traitées par Google Mobile Ads sur iOS', href: 'https://developers.google.com/admob/ios/privacy/data-disclosure?hl=fr' },
          { label: 'Partenaires publicitaires Google', href: 'https://support.google.com/admob/answer/9012903?hl=fr' },
          { label: 'Politique de confidentialité d’Apple', href: 'https://www.apple.com/legal/privacy/fr/' },
          { label: 'Conditions d’utilisation standard Apple', href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
          { label: 'Gérer les abonnements App Store', href: 'https://apps.apple.com/account/subscriptions' },
          { label: 'Politique de confidentialité de Resend', href: 'https://resend.com/legal/privacy-policy' },
          { label: 'Addendum de traitement des données de Resend', href: 'https://resend.com/legal/dpa' },
          { label: 'Déposer une plainte auprès de la CNIL', href: 'https://www.cnil.fr/fr/plaintes' }
        ]
      }
    : {
        title: 'Legal notice and privacy policy',
        badge: 'Information',
        backHome: 'Back to home',
        description: 'Information about the publisher of Boardo, data used by the website and app, advertising, and subscriptions.',
        updated: 'Updated: October 1, 2026',
        sections: [
          {
            id: 'disclaimer',
            title: 'Warranty and liability',
            paragraphs: [
              'This software is provided "as is" without warranty of any kind, express or implied, including but not limited to the warranties of merchantability. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.'
            ]
          },
          {
            id: 'publisher',
            title: 'Publisher and hosting',
            paragraphs: [
              'Publisher: Simon Botté, operating as an individual. Publisher responsible for the website: Simon Botté.',
              'Contact the publisher at simon@smnb.fr.',
              'Website host: ALWAYSDATA SARL, 91 rue du Faubourg Saint-Honoré, 75008 Paris, France. Phone: +33 1 84 16 23 49. Paris Trade and Companies Register: 492 893 490.'
            ]
          },
          {
            id: 'privacy',
            title: 'Personal data',
            paragraphs: [
              'Simon Botté is the controller of personal data processed for Boardo. No Boardo account is required to use the app. Game data (player names or nicknames, teams, games, scores, history, favourites, and preferences) is stored on the device and may sync to the private iCloud database associated with the user’s Apple Account. It is used to provide app features, on the basis of providing the requested service, and remains under the user’s control in the app and iCloud.',
              'The website contact form processes first and last name (required), email address (optional), message (required), and, if attached, one file of up to 5 MB. This information is used to respond to your question or consider a game suggestion. The legal basis is the publisher’s legitimate interest in handling incoming requests. Optional fields can be left blank; a name and message are needed to send the form.',
              'Messages and attachments are routed by Resend to the publisher’s contact email. They are kept while the request is handled, then deleted no later than 12 months after the exchange is closed, unless the law requires retention or they are needed to handle a dispute. The website host may also process technical logs needed to operate and secure the site. Apple, Google, and Resend may process some data from countries outside the European Economic Area; transfers are subject to safeguards required by applicable law and the documents published by these providers.',
              'The website uses only first-party functional cookies to remember your selected language and whether you dismissed the language suggestion. These preferences expire after 30 days. The website does not use analytics or advertising cookies.'
            ]
          },
          {
            id: 'ads',
            title: 'In-app advertising and Google AdMob',
            paragraphs: [
              'The free version of Boardo shows interstitial ads between games. It uses the Google Mobile Ads SDK (AdMob) and Google User Messaging Platform (UMP) for consent choices. Depending on device, region, configuration, and privacy choices, Google may process IP address (including to estimate a device’s approximate location), device or advertising identifiers, ads shown and interactions with the app or ads, and diagnostic and performance information.',
              'This information may be used to deliver, personalize, or measure advertising, prevent fraud, produce statistics, and improve advertising services. Google may share it with authorized advertising partners for these purposes. The partners involved are presented in Google’s consent message and may vary with the configuration. Google retains data according to the periods in its privacy policy, which depend on the data and services involved. UMP collects any required choices before AdMob can request ads. You can review or change them in Boardo under Settings > Privacy > Privacy choices.'
            ]
          },
          {
            id: 'purchases',
            title: 'Apple subscriptions and in-app purchases',
            paragraphs: [
              'Boardo Ultra is offered as auto-renewing subscriptions managed by Apple through StoreKit and the App Store. It unlocks recurring players, history and statistics, and removes advertising. In France, the offers currently shown are €0.99 per month or €10 per year, each with a 7-day free trial when offered and when you are eligible. The price, duration, applicable trial, and renewal amount shown by the App Store before you confirm your purchase take precedence and may vary by country and offer.',
              'After the trial, the subscription automatically renews at the price shown for the selected period, with payment charged to your Apple Account. To prevent a charge after the trial or the next renewal, cancel at least 24 hours before the relevant period ends. Manage or cancel in your Apple Account settings. You can restore purchases in the app. Apple processes payment; Boardo does not receive payment card details. The app receives only the StoreKit information needed to verify subscription access and unlock features, on the basis of providing the subscription. Apple retains transaction information according to its own policies and legal obligations, including billing and compliance requirements.'
            ]
          },
          {
            id: 'rights',
            title: 'Your rights and contact',
            paragraphs: [
              'You may request access to, correction of, or erasure of your personal data; object to certain processing; request restriction or portability where applicable; and withdraw consent at any time where processing relies on consent. To exercise your rights, email simon@smnb.fr. You may also lodge a complaint with the French data protection authority (CNIL).',
              'Game data saved in Boardo can be deleted in the app; iCloud syncing and backups are also subject to Apple’s settings and terms. The app checks subscription status with StoreKit; Boardo does not process payments.'
            ]
          },
          {
            id: 'intellectual-property',
            title: 'Intellectual property',
            paragraphs: [
              'Boardo, its code, text, and graphic elements are protected under applicable intellectual property laws. Game names, trademarks, and artwork remain the property of their respective owners. Their presence in Boardo does not imply any affiliation, authorization, approval, or endorsement by those owners. No part of Boardo, including text or images, may be used for any purpose other than personal use without explicit authorization.'
            ]
          }
        ],
        linksTitle: 'Policies and further information',
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' },
          { label: 'Google Mobile Ads data disclosure for iOS', href: 'https://developers.google.com/admob/ios/privacy/data-disclosure?hl=en' },
          { label: 'Google advertising partners', href: 'https://support.google.com/admob/answer/9012903?hl=en' },
          { label: 'Apple Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
          { label: 'Apple Standard EULA', href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' },
          { label: 'Manage App Store subscriptions', href: 'https://apps.apple.com/account/subscriptions' },
          { label: 'Resend Privacy Policy', href: 'https://resend.com/legal/privacy-policy' },
          { label: 'Resend Data Processing Addendum', href: 'https://resend.com/legal/dpa' },
          { label: 'File a complaint with the CNIL (French page)', href: 'https://www.cnil.fr/fr/plaintes' }
        ]
      };
  }

type MessageKey = keyof typeof messages.en;

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === "string" && supportedLocales.includes(value as Locale);
}

export function useLocalePreference() {
  return useCookie<Locale | null>('boardo-preferred-locale', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 30
  })
}

export function useBoardoLocale() {
  const locale = useState<Locale>("boardo-locale", () => "en");
  const t = (key: MessageKey) => messages[locale.value][key];

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  const legalContent = computed(() => getBoardoLegalContent(locale.value));

  return { locale, setLocale, t, legalContent };
}

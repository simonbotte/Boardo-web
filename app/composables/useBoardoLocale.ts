type Locale = "en" | "fr";

const messages = {
  en: {
    "seo.title": "Boardo — Never lose track of a game score again.",
    "seo.description":
      "Record, calculate, and keep scores for your favorite board games.",
    "hero.logoAlt": "Boardo logo",
    "hero.title": "Never lose track of a game's score again.",
    "hero.description":
      "Record, calculate, and keep scores for your favorite board games.",
    "hero.download": "Download on the",
    "preview.ariaLabel": "Boardo app previews",
    "preview.alt": "Boardo app preview",
    "collection.badge": "Browse",
    "collection.title": "A large game collection",
    "collection.alt": "game cover placeholder",
    "interface.badge": "Interface",
    "interface.title": "Tailored for each game",
    "interface.scoreAlt": "Skull King score screen placeholder",
    "interface.scoringAlt": "Skull King scoring screen placeholder",
    "interface.gameAlt": "Skull King game screen placeholder",
    "interface.description":
      "Note bids before the round and fold at the end to automatically compute points.",
    "features.badge": "Many",
    "features.title": "Features to enjoy most of your games",
    "features.addFriends": "Add your friends",
    "features.saveScores": "Save every score",
    "features.playGames": "Play your games",
    "features.description":
      "Everything you need to keep your next board game night on track.",
    "features.altSuffix": "placeholder",
    "pricing.badge": "Pricing",
    "pricing.title": "Play your way",
    "pricing.description":
      "Choose the option that fits the way you keep track of your game nights.",
    "pricing.free.title": "Free",
    "pricing.free.price": "Free",
    "pricing.free.description": "All the essentials for your own games.",
    "pricing.free.games": "Access to every game",
    "pricing.free.history": "Track your own games",
    "pricing.premium.badge": "Most complete",
    "pricing.premium.title": "Premium",
    "pricing.premium.price": "€10",
    "pricing.premium.period": "/ year",
    "pricing.premium.description":
      "Everything in Free, plus more freedom to follow your game nights.",
    "pricing.premium.noAds": "No ads",
    "pricing.premium.people": "Track games for as many people as you like",
    "pricing.premium.stats": "Advanced statistics",
    "footer.contact": "Contact",
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
    "seo.title": "Boardo — Ne perdez plus jamais le score d’une partie.",
    "seo.description":
      "Enregistrez, calculez et conservez les scores de vos jeux de société préférés.",
    "hero.logoAlt": "Logo Boardo",
    "hero.title": "Ne perdez plus jamais le score d’une partie.",
    "hero.description":
      "Enregistrez, calculez et conservez les scores de vos jeux de société préférés.",
    "hero.download": "Télécharger dans l’",
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
    "pricing.badge": "Tarifs",
    "pricing.title": "Jouez à votre façon",
    "pricing.description":
      "Choisissez l’offre qui correspond à votre manière de suivre vos parties.",
    "pricing.free.title": "Gratuit",
    "pricing.free.price": "Gratuit",
    "pricing.free.description": "Tout l’essentiel pour vos propres parties.",
    "pricing.free.games": "Accès à tous les jeux",
    "pricing.free.history": "Suivi de vos propres parties",
    "pricing.premium.badge": "La plus complète",
    "pricing.premium.title": "Premium",
    "pricing.premium.price": "10 €",
    "pricing.premium.period": "/ an",
    "pricing.premium.description":
      "Tout ce qui est inclus dans l’offre gratuite, avec plus de liberté pour suivre vos parties.",
    "pricing.premium.noAds": "Sans publicité",
    "pricing.premium.people":
      "Suivi des parties d’autant de personnes que vous le souhaitez",
    "pricing.premium.stats": "Statistiques avancées",
    "footer.contact": "Contact",
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

type MessageKey = keyof typeof messages.en;

function browserUsesFrench() {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return browserLanguages.some((language) =>
    language.toLowerCase().startsWith("fr")
  );
}

export function useBoardoLocale() {
  // English is kept for SSR so prerendered pages hydrate consistently.
  const locale = useState<Locale>("boardo-locale", () => "en");

  onMounted(() => {
    locale.value = browserUsesFrench() ? "fr" : "en";
  });

  const t = (key: MessageKey) => messages[locale.value][key];

  return { locale, t };
}

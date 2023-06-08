// Définir la classe Citation
class Citation {
    constructor(title, content, author) {
      this.title = title;
      this.content = content;
      this.author = author;
    }
  }
  
  const citations = [
    new Citation("Citation #1", "Le courage n'est pas l'absence de peur, mais la capacite de vaincre ce qui fait peur.", "Nelson Mandela"),
    new Citation("Citation #2", "La beauté est dans les yeux de celui qui regarde", "Oscar Wilde"),
    new Citation("Citation #3", "Fais de ta vie un rêve, et d'un rêve, une réalité.", "Antoine de Saint-Exupéry"),
    new Citation("Citation #4", "L'imagination est plus importante que le savoir.", "Albert Einstein"),
    new Citation("Citation #5", "La musique est la langue des émotions.", "Emmanuel Kant"),
    new Citation("Citation #6", "Pas trop d'isolement ; pas trop de relations ; le juste milieu, voilà la sagesse.", "Confucius"),
    new Citation("Citation #7", "Le premier savoir est le savoir de mon ignorance : c'est le début de l'intelligence.", "Socrate"),
    new Citation("Citation #8", "Dans la vie, rien n'est à craindre, tout est à comprendre.", "Marie Curie"),
    new Citation("Citation #9", "L'intelligence, c'est pas sorcier, il suffit de penser à une connerie et de dire l'inverse.", "Coluche"),
    
  ];
  console.log(citations);
  
  const buttons = document.querySelectorAll('.element-button');
  
  // Sélectionner les éléments à mettre à jour
  const citationTitleElement = document.querySelector('.citation-title');
  const citationContentElement = document.querySelector('.citation-content');
  const citationAuthorElement = document.querySelector('.citation-author');
  const nextButton = document.querySelector('.citation-next');
  const citationContainer = document.querySelector('.citation-container');
  let currentIndex = 0;
  
  // Fonction pour afficher la citation correspondante
  function afficherCitation(index) {
    const citation = citations[index];
    citationTitleElement.textContent = citation.title;
    citationContentElement.textContent = citation.content;
    citationAuthorElement.textContent = citation.author;
  
   
  }
  
  // Fonction pour passer à la citation suivante
  function passerCitationSuivante() {
    currentIndex = (currentIndex + 1) % citations.length;
    afficherCitation(currentIndex);
  }
  
  // Ajouter des écouteurs d'événements à chaque bouton de la nav
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentIndex = index;
      afficherCitation(currentIndex);
    });
  });
  
  // Ajouter un évént pour le clic sur le bouton next
  nextButton.addEventListener('click', passerCitationSuivante);
  
  // Afficher la première citation 
  afficherCitation(currentIndex);
  
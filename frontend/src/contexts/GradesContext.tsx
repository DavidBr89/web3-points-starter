// GRADE: 16

// TODO: Maak een interface voor de GradeContext, deze moet de volgende functies bevatten:
//  // setSelectedCourseId: De state updater functie van het getal;
//  // setSelectedChance: De state updater functie van het getal;
//  // getAverage: Functie die niets binnen krijgt en een getal of null teruggeeft;
//  // getStats: Functie die niets binnen krijgt en { passed: number; failed: number; afw: number; } teruggeeft;

// TODO: Maak en exporteer de GradesContext met de juiste types, deze moet een type zijn van de GradeContext interface die je hebt gemaakt en kan ook null zijn.

// TODO: Maak een GradesProvider component met de juiste typing van de props die de GradesContext omsluit en de volgende states bevat:
// selectedCourseId: een getal dat de geselecteerde course id bevat, initialiseer deze met 0;
// selectedChance: een getal dat de geselecteerde kans bevat, initialiseer deze met 1;
// grades: een array van Grade objecten, initialiseer deze met een lege array;
// Gebruik een structuur die een GET request doet naar de backend om de grades op te halen voor de geselecteerde course id en kans,
// deze request moet worden gedaan wanneer de selectedCourseId verandert, en kan enkel gedaan worden als selectedCourseId niet 0 is.
// De URL voor de GET request is: `http://localhost:3000/courses/${selectedCourseId}/grades`.
// Vergeet niet de foutenafhandeling!
// Implementeer ook de getAverage methode die het gemiddelde berekent van de cijfers voor de geselecteerde kans,
// dus je zal eerst de grades moeten filteren op de geselecteerde kans en dan het gemiddelde (Som van de cijfers gedeeld door het aantal cijfers) moeten berekenen.
// Implementeer ook de getStats methode die de statistieken berekent voor de geselecteerde kans,
// dus je zal eerst de grades moeten filteren op de geselecteerde kans en dan het aantal geslaagde, niet geslaagde en afwezig studenten moeten tellen.
// Vergeet niet de values van de context provider te vullen met de juiste functies en states.

// GRADE: 4

const Stats = () => {
  // TODO: Haal de getAverage en getStats functies op uit de useGrades hook (OPGELET IMPORTS), deze functies geven respectievelijk het gemiddelde van de cijfers en de statistieken (geslaagd, niet geslaagd, afw) terug.
  // TODO: Haal de passed, failed en afw statistieken op uit de getStats functie.

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-sky-700 mb-4">Statistieken</h2>
      <div className="mb-4">
        <p className="text-gray-600">
          Gemiddelde:{" "}
          {
            // TODO: Geef het gemiddelde weer door de getAverage functie aan te roepen, deze functie geeft een getal terug.
          }
        </p>
      </div>
      <div>
        <p className="text-gray-600">
          Geslaagd:{" "}
          {
            // TODO: Geef de passed value weer die je hebt opgehaald uit de getStats functie, deze geeft het aantal geslaagde studenten terug.
          }
        </p>
        <p className="text-gray-600">
          Niet Geslaagd:{" "}
          {
            // TODO: Geef de failed value weer die je hebt opgehaald uit de getStats functie, deze geeft het aantal niet geslaagde studenten terug.
          }
        </p>
        <p className="text-gray-600">
          AFW:{" "}
          {
            // TODO: Geef de afw value weer die je hebt opgehaald uit de getStats functie, deze geeft het aantal studenten dat afwezig was terug.
          }
        </p>
      </div>
    </div>
  );
};

export default Stats;

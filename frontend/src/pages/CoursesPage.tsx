// GRADE: 10

const CoursesPage = () => {
  // TODO: Maak een courses state aan, deze moet een array zijn van Course objecten en initialiseer deze met een lege array.

  // TODO: Maak een isLoading state aan, deze moet een boolean zijn en initialiseer deze met true.

  // TODO: Gebruik een hook om achteraf te kunnen navigeren naar de details van een course.

  // TODO: Haal de selectedChance en selectedCourseId functies op uit de Grades context met de juiste hook

  // TODO: Gebruik de juiste structuur om een GET request te doen naar de backend om de courses op te halen.
  // De link voor de GET request is: `http://localhost:3000/courses`.
  // Zet de opgehaalde courses in de courses state die je hebt aangemaakt.
  // Zet de isLoading state op false wanneer de request is voltooid, ongeacht of deze succesvol was of niet.
  // Vergeet niet de foutenafhandeling!

  // TODO: Als isLoading true is, geef dan een "Laden..." bericht weer.

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">Vakken</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* TODO: Geef voor elk course object uit de courses state array de volgende code terug
        <div
        // TODO: Niets vergeten tijdens het mappen?
            className="flex items-center py-12 mt-4 border px-2 border-gray-300">
            <div>
              <p className="font-bold text-xl text-sky-700">{
                // TODO: Geef de name van de course weer, deze zit in het course object.
              }</p>
              <p className="text-gray-600 font-thin">{
              // TODO: Geef de credits van de course weer, deze zit in het course object.
              } SP</p>
            </div>

            <div className="flex flex-wrap ml-auto shrink-0">
            // Dit zorgt ervoor dat er een array aangemaakt wordt op basis van het aantal attempts van de course zodanig dat er gemapt kan worden
              {Array.from({ length: course.attempts }, (_, i) => i + 1).map(
                (attempt) => (
                  <button
                  // TODO: Niets vergeten tijdens het mappen?
                
                    onClick={() => {
                    // TODO: Zet de selectedCourseId en selectedChance in de context met de juiste waarden
                    // TODO: Gebruik de navigate functie om naar de details van de course te navigeren de url is: `/courses/${course.id}/attempt/${attempt}`
                      
                    }}
                    className="bg-sky-500 hover:bg-sky-400 cursor-pointer text-white px-4 py-2 rounded m-2">
                    // TODO: Als de attempt 1 is, geef dan "Eerste kans" weer, anders "Finale kans"
                  </button>
                )
              )}
            </div>
          </div>
*/}
      </div>
    </div>
  );
};

export default CoursesPage;

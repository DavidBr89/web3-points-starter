// GRADE: 11

const CoursesDetailsPage = () => {
  // TODO: Maak een course state aan, deze moet een CourseWithEnrollments object zijn en initialiseer deze met null.
  // TODO: Maak een isLoading state aan, deze moet een boolean zijn en initialiseer deze met true.

  // TODO: Haal de id en attemptNumber op uit de URL parameters met de correcte hook.
  // Parse de id en de attemptNumber en steek deze in de parsedId en parsedAttemptNumber variabelen.

  // TODO: Gebruik de juiste structuur om een GET request te doen naar de backend om de course op te halen met de gegeven id.
  // De link voor de GET request is: `http://localhost:3000/courses/${parseId}`.
  // Zet de opgehaalde course in de course state die je hebt aangemaakt.
  // Zet de isLoading state op false wanneer de request is voltooid, ongeacht of deze succesvol was of niet.
  // // Vergeet niet de foutenafhandeling!
  // Deze code moet worden uitgevoerd wanneer de parseId of parseAttemptNumber verandert.

  // TODO: Als isLoading true is, geef dan een "Laden..." bericht weer.

  // TODO: Als de course null is, geef dan een bericht weer dat er geen vak gevonden is.

  return (
    <div className="flex flex-col p-8">
      <Link to="/" className="text-sky-500 hover:underline underline-offset-4">
        Terug naar vakken
      </Link>
      <div className="flex flex-col p-4 mt-4">
        <h2 className="font-bold text-4xl text-sky-700">
          {
            // TODO: Geef de name van de course weer, deze zit in het course object.
          }
        </h2>
        <p className="text-gray-600 font-thin">
          {
            // TODO: Geef de credits van de course weer, deze zit in het course object.
          }{" "}
          SP
        </p>
        {/* TODO: Geef hier de Stats component terug */}

        {/* TODO: Geef hier de Enrollments component terug met de juiste props */}
      </div>
    </div>
  );
};

export default CoursesDetailsPage;

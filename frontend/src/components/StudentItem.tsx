// GRADE: 16
import { useFormik } from "formik";


// TODO: Krijg hier de student: Student object, enrollmentId: number en attemptNumber: number binnen in deze component via de props, geef ook de correcte types.

const StudentItem = () => {
  // TODO: Maak een state aan voor de grade, deze moet een string zijn en initialiseer deze met een lege string.

  // TODO: Zorg ervoor dat er een GET request wordt gedaan naar de backend
  // om de grade op te halen voor de gegeven enrollmentId en attemptNumber, gebruik hiervoor Axios.
  // De link voor de GET request is: `http://localhost:3000/grades/${enrollmentId}/attempt/${attemptNumber}`.
  // Zet de opgehaalde grade in de state die je hebt aangemaakt.
  // Zet dit in de juiste structuur en vergeet niet dat deze code steeds opnieuw uitgevoerd moet worden wanneer de enrollmentId of attemptNumber verandert.
  // Vergeet niet de foutenafhandeling!

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      grade: grade,
    },
    enableReinitialize: true,
    onSubmit: async ({ grade }) => {
      // TODO: Maak een POST request naar de backend om de grade op te slaan.
      // De link voor de POST request is: `http://localhost:3000/grades/`.
      // De body van de POST request moet een object zijn met de volgende structuur:
      // {
      //   enrollmentId: enrollmentId,
      //   chance: attemptNumber,
      //   grade: grade,
      // }
      // Vergeet niet de grade state bij te werken met de opgehaalde waarde van de response.
      // Vergeet niet de foutenafhandeling!
    },
  });

  return (
    <div className="flex gap-4 mt-6 items-center">
      <div className="grow-0 w-1/5">
        <p className="font-bold text-2xl">{
          // TODO: Geef de name van de student weer, deze zit in het student object.
          }</p>
        <p className="text-gray-600 font-thin">{
          // TODO: Geef de email van de student weer, deze zit in het student object.
          }</p>
      </div>
      <div className="flex grow">
        {/* TODO: Koppel de handleSubmit met de form */}
        <form className="flex grow">
          <input
            name="grade"
            className={`border border-gray-300 rounded p-2 m-2 grow ${

              // TODO: Als de grade niet leeg is en niet "AFW", geef dan een rode achtergrond bg-red-100 als de grade kleiner is dan 10, anders een groene achtergrond bg-green-100.
              // Als de grade leeg is of "AFW", geef dan een witte achtergrond bg-white.
              
            }`}
            type="text"
            // TODO: Koppel de value van de input met de grade uit formik.
            // TODO: Koppel de onChange van de input met de handleChange van formik.
            placeholder={`Punten voor kans ${attemptNumber}`}
          />
          <button
            type="submit"
            className={`grow-0 w-1/5 ${
              // TODO: Als de grade leeg is, geef dan een oranje achtergrond bg-orange-500, anders een groene achtergrond bg-green-500.
            } text-white px-4 py-2 rounded m-4 mt-6 cursor-pointer`}>
            {
            // TODO: Geef de tekst weer in de button, als de grade leeg is, geef dan "Toevoegen", anders "Bijwerken".
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentItem;

# Project Setup

**Geen gebruik toegestaan van internet, geen AI tools zoals ChatGPT, CoPilot, en andere... geen communicatie onderling op geen enkele manier, elke inbreuk hierop is fraude en wordt gemeld aan de fraudecomissie, dit kan grote gevolgen hebben voor jouw resultaten ook voor andere OLODs**

## Backend

1. Ga naar de backend map:

   ```sh
   cd backend
   ```

2. Installeer de dependencies:

   ```sh
   yarn install
   ```

3. Voer de migraties uit (maakt de database aan):

   ```sh
   npx prisma migrate deploy
   ```

4. Genereer de Prisma client:

   ```sh
   npx prisma generate
   ```

5. Seed de database met voorbeelddata:

   ```sh
   npx prisma db seed
   ```

6. Start de backend server:
   ```sh
   yarn start
   ```

---

## Frontend

1. Ga naar de frontend map:

   ```sh
   cd frontend
   ```

2. Installeer de dependencies:

   ```sh
   yarn install
   ```

3. Start de frontend development server:
   ```sh
   yarn dev
   ```

---

> **Let op:**  
> Zorg ervoor dat je MySQL lokaal draait en dat de `DATABASE_URL` in `backend/.env` correct is ingesteld.

**Na deze commando's zet je jouw internet UIT.**

## Indienen

. Verwijder de node_modules map in de frontend folder en de backend folder
. Verwijder de README map in de web3-points-starter
. Hernoem de web3-points-starter map met jouw ACHTERNAAM_VOORNAAM !! VOOR HET ZIPPEN !!
. Zip de folder
. Upload deze zip naar https://exam.hogent.be
. Stop de Panopto opname, zet het internet nu maar pas terug aan en wacht tot de upload van de video gedaan is.
.

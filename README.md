# Laboration 3 – Angular I 💻

Detta repository innehåller en webbapplikation byggd med Angular som en del av kursen Programmering i TypeScript.

Applikationen, *QuickConvert*, låter användaren omvandla mellan olika enheter, som meter och fot samt Celsius och Fahrenheit, direkt i webbläsaren.

---

## Syfte 🏁

Syftet med laborationen är att få en grundläggande förståelse för Angular som ramverk och hur man bygger en applikation med komponenter, routing och databindning.

Under arbetets gång har fokus legat på att:

- skapa en applikation med flera undersidor
- använda Angulars router för navigering
- arbeta med komponentbaserad struktur
- använda tvåvägsdatabindning (ngModel)
- skapa en responsiv layout med SCSS

---

## Funktionalitet 🛠️

Applikationen innehåller följande funktioner:

- omvandling mellan meter och fot
- omvandling mellan Celsius och Fahrenheit
- dynamiskt val av omvandling via dropdown
- automatisk uppdatering av värden
- 404-sida för ogiltiga sökvägar
- navigationsmeny för att växla mellan sidor
- visning av kuriosa beroende på vald omvandling

---

## Tekniker 🧩

Projektet är byggt med:

- Angular
- TypeScript
- HTML
- SCSS
- Angular Router
- FormsModule (ngModel)
- Git och GitHub

---

## Projektstruktur och uppbyggnad 🧶

Applikationen är uppbyggd med flera komponenter för att hålla koden strukturerad och lätt att underhålla.

### Huvudkomponenter

- **Home** – startsida med introduktion
- **Convert** – sida för omvandling av enheter
- **About** – beskrivning av uppgiften och arbetet
- **NotFound (404)** – visas vid ogiltiga sökvägar
- **MainNav** – navigationsmeny (egen komponent)
- **CuriosityBox** – återanvänd komponent som visar kuriosa

### Routing

Navigeringen hanteras med Angulars router, där olika komponenter visas beroende på vilken route användaren går till.

---

## Lösning och implementation 📐

På omvandlingssidan används tvåvägsdatabindning (ngModel) för att koppla inputfält till variabler i TypeScript.

När användaren skriver i ett fält uppdateras det andra automatiskt genom funktioner som konverterar mellan enheterna.

Villkor i templaten används för att visa olika innehåll beroende på vald omvandling, till exempel olika konverteringsdelar och kuriosa.

---

## Design och responsivitet 🎨

Applikationen är stylad med SCSS och har en enkel, centrerad layout.

Responsivitet har uppnåtts med hjälp av flexbox och clamp() för att anpassa spacing och storlek efter olika skärmstorlekar.

Global styling har separerats från komponent-specifik styling för att göra koden mer överskådlig.

---

## Publicering 🌐

Webbplatsen är publicerad via netlify:

[Öppna webbplats](Länk här)



---

## Det här tar jag med mig från uppgiften ✅

Det jag framför allt tar med mig från den här uppgiften är hur Angular är uppbyggt kring komponenter och hur dessa samverkar med routing och databindning.

Jag trodde från början att det skulle vara enklare att arbeta på det här sättet, men stylingen visade sig vara mer utmanande än väntat. Att ha allt uppdelat i komponenter gjorde att jag behövde tänka mer kring hur layout och styling hänger ihop.

Det var lite förvirrande i början, men också skönt när strukturen väl började falla på plats.

Sammanfattningsvis har uppgiften varit utmanande men lärorik och gett en bättre förståelse för hur en webbapplikation kan byggas med Angular. När jag väl kommit in i det märker jag också att jag gillar Angular och hur arbetssättet är uppbyggt.
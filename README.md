# Konfigurator Samochodu (Aplikacja Webowa)

## Opis zadania  
Należy przygotować **aplikację webową** umożliwiającą konfigurację samochodu poprzez wybór **koloru lakieru**, **rodzaju felg** oraz **dodatkowego wyposażenia**.  
Aplikacja ma dynamicznie aktualizować i wyświetlać łączną cenę samochodu na podstawie dokonanych wyborów.  

Projekt należy wykonać w środowisku programistycznym dostępnym na stanowisku egzaminacyjnym z wykorzystaniem archiwum `konfigurator.zip`, które zawiera grafikę pojazdów oraz plik `ceny.txt` z wartościami używanymi w obliczeniach.

---

## Wymagane elementy aplikacji  

- **Obraz samochodu** – w stanie początkowym wyświetla grafikę `szary.png`  
- **Nagłówek aplikacji** – tekst: „Konfigurator wyposażenia”  
- **Sekcja wyboru koloru lakieru**  
  - Label: „Wybierz kolor lakieru”  
  - Lista rozwijana (select) z wartościami: `szary`, `czerwony`, `zielony`, `żółty`, `granatowy`  
  - Zmiana koloru powoduje podmianę obrazu na odpowiednią grafikę  

- **Separator** – linia pozioma  

- **Sekcja wyboru felg**  
  - Label: „Felgi”  
  - Grupa przycisków jednokrotnego wyboru (radio):  
    - „Stalowe” – domyślnie zaznaczone  
    - „Aluminiowe” – dostępne do wyboru  

- **Separator** – linia pozioma  

- **Sekcja wyposażenia dodatkowego**  
  - Label: „Wybierz dodatkowe wyposażenie”  
  - Pola wyboru (checkbox):  
    - Czujniki parkowania  
    - Climatronic  
    - Nawigacja  

- **Separator** – linia pozioma  

- **Sekcja wyceny**  
  - Label: „Wycena”  
  - Pole tekstowe (textarea / div) zawierające dynamicznie aktualizowaną listę wybranych opcji z cenami oraz łączną kwotę  

---

## Klasa `Auto`  

Klasa odpowiedzialna za przechowywanie konfiguracji i obliczanie ceny.  

### Pola prywatne:
- `kolor` – tekstowy, kolor lakieru  
- `felgi` – tekstowy, rodzaj felg  
- `wyposazenie` – tablica typu `boolean[3]`, reprezentująca zaznaczenie opcji dodatkowych  

### Konstruktory:
- **Bezparametrowy** – ustawia wartości początkowe:  
  `kolor = "szary"`, `felgi = "stalowe"`, `wyposazenie = [false, false, false]`  
- **Parametrowy** – przyjmuje: kolor, rodzaj felg i tablicę wartości logicznych  

### Metody:
- **obliczCene()** – zwraca `int`, oblicza cenę auta na podstawie konfiguracji  
- **opis()** – zwraca `string`, generuje opis wyposażenia oraz sumę do wyświetlenia w polu wyceny  
- **Gettery / Settery** – umożliwiają odczyt i modyfikację pól  

---

## Działanie aplikacji  

1. **Stan początkowy:**  
   - Kolor: `szary`  
   - Obraz: `szary.png`  
   - Felgi: `stalowe`  
   - Dodatkowe wyposażenie: brak  
   - Wycena:  
     ```
     Cena bazowa: 75000 PLN
     RAZEM: 75000 PLN
     ```

2. **Interakcje użytkownika:**  
   - Zmiana koloru lakieru → aktualizacja obrazu i ceny  
   - Zmiana rodzaju felg → przeliczenie ceny  
   - Zaznaczenie / odznaczenie wyposażenia → natychmiastowa aktualizacja wyceny  

3. **Cennik (na podstawie pliku ceny.txt):**  
   - Kolor lakieru inny niż szary → +9000 PLN  
   - Felgi aluminiowe → +7000 PLN  
   - Czujniki parkowania → +6500 PLN  
   - Climatronic → +8500 PLN  
   - Nawigacja → +5000 PLN  

> Lakier szary i felgi stalowe są wliczone w cenę bazową (75000 PLN).  

---

## Założenia aplikacji (Front-end)  

- Projekt oparty o **HTML, CSS, JS** z wykorzystaniem **Bootstrap** do responsywności.  
- Margines wewnętrzny dla całej aplikacji: **10px**  
- Tło głównego kontenera: `#E8F5E9`  
- Obraz samochodu: wysokość **150px**  

### Styl nagłówka:  
- Tekst: „Konfigurator wyposażenia”  
- Kolor tekstu: **biały**  
- Czcionka: **25px**, pogrubiona  
- Tło: `#1B5E20`  
- Tekst wyśrodkowany, padding: 5px  

### Styl etykiet sekcji:  
- Kolor tekstu: `#5D9B5D`  
- Czcionka: **18px**, pogrubiona  
- Tekst wyśrodkowany  
- Margines: 5px  

### Lista rozwijana:  
- Wycentrowana z marginesami bocznymi  

### Grupa przycisków radiowych (felgi):  
- Tło: `#9AEB9A`  
- Układ poziomy (podział szerokości 50/50)  
- „Stalowe” – domyślnie zaznaczone  

### Pole wyceny:  
- Wyrównane do prawej strony  
- Zawiera listę wybranych opcji i końcową sumę  

---

## Wymagania jakościowe  

- Kod zapisany **czytelnie**, z zachowaniem zasad **czystego formatowania**  
- Znaczące nazwy zmiennych i funkcji  
- Poprawna obsługa zdarzeń formularza  
- Dane wczytywane z pliku `ceny.txt`  
- Responsywność dzięki Bootstrap  

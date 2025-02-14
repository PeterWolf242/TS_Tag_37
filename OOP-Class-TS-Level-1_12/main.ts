//*********************************
//     Klasse "IceCreamFlavor"
//*********************************

class IceCreamFlavor {
	name: string;
	price: number;
	isPopular: boolean;
	description?: string;
	scoops: number = 0;


	// Der richtige Konstruktor
	constructor(name: string, price: number, isPopular: boolean, description?: string) {
		this.name = name;
		this.price = price;
		this.isPopular = isPopular;
		this.description = description;
	}

	public printInfo() {
		console.log(`${this.name} is ${this.isPopular ? "popular" : "not popular"} and costs ${this.price.toFixed(2)} €`);
	}

	//* Getter "numberOfScoops"
	public getTotalPrice(): number {
		const fullPrice = this.price * this.scoops;
		return fullPrice;
	}
}

//* Methodenaufruf von getTotalPrice
const vanille = new IceCreamFlavor("Vanilla", 1.20, true);

vanille.printInfo();
vanille.getTotalPrice();

// Array mit 4 Instanzen der Klasse
const iceCreamFlavors: IceCreamFlavor[] = [
	new IceCreamFlavor("Blueberry-Basil", 6.99, true, "Süße Blaubeeren treffen auf frisches Basilikum – ein fruchtig-herbes Geschmackserlebnis."),
	new IceCreamFlavor("Chocolate", 4.99, true, "Klassischer Schokoladengeschmack"),
	new IceCreamFlavor("Mango-Lassi", 5.99, false, "Exotische Mango mit Joghurt"),
	new IceCreamFlavor("Pistachio", 6.49, true, "Cremige Pistazie mit echter Nuss")
];

//* Hinzufügen von "Vanille" zu iceCreamFlavors
iceCreamFlavors.push(vanille);

//* HTML-Element für die Ausgabe aus dem DOM holen
const IceContainer = document.querySelector<HTMLElement>("#ice-container");

//* Erstellung der Boxen für jede Eissorte
const IceCreams = iceCreamFlavors.map((ice) => {
	const iceBox = document.createElement("div");
	iceBox.classList.add("box");

	const star = document.createElement("p");
	star.classList.add("star");
	star.innerHTML = "&#10026;";
	iceBox.appendChild(star);

	// Name und Preis der Eissorte ausgeben
	iceBox.innerHTML += `<h2>${ice.name}</h2>`;

	//Ausgabe der Description nach Prüfung ob sie vorhanden ist oder nicht
	if (!ice.description || ice.description.length === 0) {
		console.log("Keine Beschreibung verfügbar");
		iceBox.innerHTML += `<h3>Keine Beschreibung verfügbar</h3>`;
	} else iceBox.innerHTML += `<h3>${ice.description}</h3>`;

	iceBox.innerHTML += `<p>Price: ${ice.price.toFixed(2)} Euro</p>`;

	const scoopText = document.createElement("p");
	scoopText.textContent = `Scoops: ${ice.scoops}`;
	iceBox.appendChild(scoopText);

	iceBox.innerHTML += `<p>Total Price: ${ice.getTotalPrice()} Euro</p>`;

	// Button erstellen
	const btnAddScoop = document.createElement("button");
	btnAddScoop.textContent = "+1";
	btnAddScoop.classList.add("addScoop");

	// Event Listener zum Hinzufügen einer Eiskugel
	btnAddScoop.addEventListener("click", () => {
		ice.scoops++;
		scoopText.textContent = `Scoops: ${ice.scoops}`;
		console.log(`Anzahl der Eiskugeln: ${ice.scoops}`);
	});

	// Button hinzufügen
	iceBox.appendChild(btnAddScoop);

	return iceBox;
});

//* Ausgabe aller Ice-Boxen
if (IceContainer) {
	IceCreams.forEach((box) => IceContainer.appendChild(box));
}

//* Sonderzeichen Stern: &#10043;


// Ausgabe der Eissorten im Array
console.log(iceCreamFlavors);

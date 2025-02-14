//*********************************
//     Klasse "IceCreamFlavor"
//*********************************

class IceCreamFlavor {
	_name: string;
	_price: number;
	_isPopular: boolean;
	_description: string;

	// Der richtige Konstruktor
	constructor(name: string, price: number, isPopular: boolean, description: string = "undefined") {
		this._name = name;
		this._price = price;
		this._isPopular = isPopular;
		this._description = description;
	}

	public printInfo() {
		console.log(`${this._name} is ${this._isPopular ? "popular" : "not popular"} and costs ${this._price.toFixed(2)} €`);
	}

	//* Getter "numberOfScoops"
	public getTotalPrice(numberOfScoops: number): number {
		const fullPrice = this._price * numberOfScoops;
		return fullPrice;
	}
}

//* Methodenaufruf von getTotalPrice
const vanille = new IceCreamFlavor("Vanilla", 1.20, true, "Ein cremiger, glatter Klassiker mit einem reichen, duftenden Vanillegeschmack.");

vanille.printInfo();
vanille.getTotalPrice(4);

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

//* Anfangswert der Eiskugeln setzen
let scoops: number = 0;

//* Erstellung der Boxen für jede Eissorte
const IceCreams = iceCreamFlavors.map((ice) => {
	const iceBox = document.createElement("div");
	iceBox.classList.add("box");

	const star = document.createElement("p");
	star.classList.add("star");
	star.innerHTML = "&#10026;";
	iceBox.appendChild(star);

	// Name und Preis der Eissorte ausgeben
	iceBox.innerHTML += `<h2>${ice._name}</h2>`;
	iceBox.innerHTML += `<h3>${ice._description}</h3>`;
	iceBox.innerHTML += `<p>Price: ${ice._price.toFixed(2)} Euro</p>`;

	const scoopText = document.createElement("p");
	scoopText.textContent = `Scoops: ${scoops}`;
	iceBox.appendChild(scoopText);

	// Button erstellen
	const btnAddScoop = document.createElement("button");
	btnAddScoop.textContent = "+1";
	btnAddScoop.classList.add("addScoop");

	// Event Listener zum Hinzufügen einer Eiskugel
	btnAddScoop.addEventListener("click", () => {
		console.log(`${ice._name}: Button geklickt`);
		scoops++;
		scoopText.textContent = `Scoops: ${scoops}`;
		console.log(`Anzahl der Eiskugeln: ${scoops}`);
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

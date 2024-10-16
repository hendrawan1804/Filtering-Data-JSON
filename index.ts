let data = [
	{
		id: 1,
		name: 'Boby',
		age: 21,
		address: 'bakung',
		city: 'blitar',
		phone: '085706979978',
		favoriteFoods: ['bakso', 'mie ayam', 'nasi goreng'],
		favoriteDrinks: ['coffee', 'tea'],
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 20,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678-567',
		favoriteFoods: ['salad', 'sushi'],
		favoriteDrinks: ['water', 'juice'],
	},
	{
		id: 3,
		name: 'Kim Mingyu',
		age: 18,
		address: 'Busan',
		city: 'Korea',
		phone: '555-8765-777',
		favoriteFoods: ['steak', 'burger'],
		favoriteDrinks: ['beer', 'whiskey'],
	},
	{
		id: 4,
		name: 'Matthew',
		age: 25,
		address: 'Gangnam',
		city: 'Australia',
		phone: '555-4321-678',
		favoriteFoods: ['pasta', 'tacos'],
		favoriteDrinks: ['wine', 'smoothie'],
	},
];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30

console.log(data); 

// Menampilkan semua data dengan makanan dan minuman kesukaan
// Menampilkan semua data sebagai JSON
console.log(JSON.stringify(data, null, 2));

// TODO 1 : Dapatkan semua data
console.log("Semua data:", data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(person => person.name === name);
console.log("Data dengan nama Jane Smith:", getDataByName('Jane Smith'));

// TODO 3 : Dapatkan data dengan alamat New York
const getDataByCity = (city) => data.filter(person => person.city === city);
console.log("Data dengan alamat Korea:", getDataByCity('Korea'));

// TODO 4 : Dapatkan data dengan umur >= 30
const getDataByAge = (age) => data.filter(person => person.age >= age);
console.log("Data dengan umur >= 20:", getDataByAge(20));


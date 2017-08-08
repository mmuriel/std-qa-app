import LastOclockTimeDefiner from 'js/classes/LastOclockTimeDefiner';

let dateBase = new Date();
let lastOclockTimer = new LastOclockTimeDefiner(dateBase);
let lastOclock = lastOclockTimer.defineLastOclockTime();

console.log("MMMMMMM...\n");
console.log(lastOclock);
console.log(lastOclock.getTime()/1000);

let CanalesDb = {

	canales : [
{
	"id": "382",
	"nom": "ANIMAL PLANET",
	"num": "308",
	"logo": "c8d0a24c7a8380b3dffe603fa643f37f.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "221558263",
		"nom": "La Tierra De Los Más Fuertes",
		"ini": lastOclock.getTime() - (parseInt(600) * 1000),
		"fin": lastOclock.getTime() + (parseInt(600) * 1000)
	}, {
		"id": "221558264",
		"nom": "Guerra De Bichos",
		"ini": lastOclock.getTime() + (parseInt(600) * 1000),
		"fin": lastOclock.getTime() + (parseInt(1200) * 1000)
	}, {
		"id": "221558265",
		"nom": "Crudo Y Sin Censura",
		"ini": lastOclock.getTime() + (parseInt(1200) * 1000),
		"fin": lastOclock.getTime() + (parseInt(1800) * 1000)
	}]
}, 

/*
	{
	"id": "644",
	"nom": "BBC HD",
	"num": "1413",
	"logo": "b9bc8235acca78de19e0cb889a6a3661.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "223620187",
		"nom": "The Graham Norton Show",
		"ini": 1491496140,
		"fin": 1491499020
	}, {
		"id": "223620188",
		"nom": "The Musketeers",
		"ini": 1491499020,
		"fin": 1491502380
	}, {
		"id": "223620189",
		"nom": "The Musketeers",
		"ini": 1491502380,
		"fin": 1491505740
	}]
}, {
	"id": "423",
	"nom": "DISCOVERY CHANNEL",
	"num": "302",
	"logo": "4b1b9d6293a4a26b002be3951242466c.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "221568902",
		"nom": "Peligro Al Desnudo",
		"ini": 1491496080,
		"fin": 1491499080
	}, {
		"id": "221568903",
		"nom": "Control De Fronteras: España",
		"ini": 1491499080,
		"fin": 1491500640
	}, {
		"id": "221568904",
		"nom": "Control De Fronteras: España",
		"ini": 1491500640,
		"fin": 1491502200
	}, {
		"id": "221568905",
		"nom": "Control De Fronteras: España",
		"ini": 1491502200,
		"fin": 1491503760
	}]
}, {
	"id": "424",
	"nom": "DISCOVERY CIVILIZATION",
	"num": "306",
	"logo": "bf384f03c76fe8bcc7c47914da743a0b.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220406380",
		"nom": "El Mundo De Las Pirámides",
		"ini": 1491495120,
		"fin": 1491498000
	}, {
		"id": "220406381",
		"nom": "Misterios De Asia",
		"ini": 1491498000,
		"fin": 1491500880
	}, {
		"id": "220406382",
		"nom": "Momias Del Desierto Peruano",
		"ini": 1491500880,
		"fin": 1491503760
	}]
}, {
	"id": "425",
	"nom": "DISCOVERY HOME & HEALTH",
	"num": "402",
	"logo": "e52177f343f0b6ebe8568a5321834fa3.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220443652",
		"nom": "Mi Casa, Tu Dinero",
		"ini": 1491495600,
		"fin": 1491497220
	}, {
		"id": "220443653",
		"nom": "Chef A Domicilio",
		"ini": 1491497220,
		"fin": 1491498840
	}, {
		"id": "220443654",
		"nom": "Chef A Domicilio",
		"ini": 1491498840,
		"fin": 1491500460
	}, {
		"id": "220443655",
		"nom": "No Te Lo Pongas!",
		"ini": 1491500460,
		"fin": 1491503700
	}]
}, {
	"id": "426",
	"nom": "DISC. HD THEATER",
	"num": "1302",
	"logo": "52cc6247264b6158e23b0510baa5cef6.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220410037",
		"nom": "En La Cuerda Floja",
		"ini": 1491495120,
		"fin": 1491498000
	}, {
		"id": "220410038",
		"nom": "Gibones De Tailandia",
		"ini": 1491498000,
		"fin": 1491499440
	}, {
		"id": "220410039",
		"nom": "Gibones De Tailandia",
		"ini": 1491499440,
		"fin": 1491500880
	}, {
		"id": "220410040",
		"nom": "Austin Stevens: Los Más Peligrosos",
		"ini": 1491500880,
		"fin": 1491503760
	}]
}, {
	"id": "428",
	"nom": "DISCOVERY SCIENCE",
	"num": "304",
	"logo": "6d6d77ca4c1850f5e9c3927a48ca3de8.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220416722",
		"nom": "Catástrofes Espaciales",
		"ini": 1491495120,
		"fin": 1491498000
	}, {
		"id": "220416723",
		"nom": "Ojo Crítico",
		"ini": 1491498000,
		"fin": 1491500880
	}, {
		"id": "220416724",
		"nom": "Ovnis En La Tierra",
		"ini": 1491500880,
		"fin": 1491503760
	}]
}, {
	"id": "429",
	"nom": "DISCOVERY TURBO",
	"num": "313",
	"logo": "a5e35d719db894deb5f619e9e57e662f.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "222843277",
		"nom": "Unidos Por El Acero",
		"ini": 1491494760,
		"fin": 1491498000
	}, {
		"id": "222843279",
		"nom": "Alto Octanaje En Las Vegas",
		"ini": 1491498000,
		"fin": 1491501240
	}, {
		"id": "222843281",
		"nom": "Superautos",
		"ini": 1491501240,
		"fin": 1491504480
	}]
}, {
	"id": "521",
	"nom": "HISTORY CHANNEL",
	"num": "310",
	"logo": "46ddf8dfb4cfd185bc98ebfbb0eb77df.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "223452170",
		"nom": "Desafío Sobre Fuego",
		"ini": 1491494400,
		"fin": 1491498000
	}, {
		"id": "223452171",
		"nom": "Solos",
		"ini": 1491498000,
		"fin": 1491501600
	}, {
		"id": "223452172",
		"nom": "Texas Bajo Fuego",
		"ini": 1491501600,
		"fin": 1491505200
	}]
}, {
	"id": "548",
	"nom": "NAT GEO WILD",
	"num": "322",
	"logo": "34eb9fe9d36e5574e1e7dfee1a627f63.png",
	"cat": "Culturales",
	"prog": [{
		"id": "221612805",
		"nom": "El Hombre Y La Naturaleza",
		"ini": 1491493800,
		"fin": 1491496500
	}, {
		"id": "221612806",
		"nom": "Depredadores Africanos",
		"ini": 1491496500,
		"fin": 1491499500
	}, {
		"id": "221612807",
		"nom": "El Club De La Pelea Animal",
		"ini": 1491499500,
		"fin": 1491502500
	}, {
		"id": "221612808",
		"nom": "Estrategia Salvaje",
		"ini": 1491502500,
		"fin": 1491505200
	}]
}, {
	"id": "549",
	"nom": "NAT GEO WILD HD",
	"num": "1322",
	"logo": "d6d8d94ccfaf5792fa49c2dbfd2a3ffc.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "221610963",
		"nom": "El Hombre Y La Naturaleza",
		"ini": 1491493800,
		"fin": 1491496500
	}, {
		"id": "221610964",
		"nom": "Depredadores Africanos",
		"ini": 1491496500,
		"fin": 1491499500
	}, {
		"id": "221610965",
		"nom": "El Club De La Pelea Animal",
		"ini": 1491499500,
		"fin": 1491502500
	}, {
		"id": "221610966",
		"nom": "Estrategia Salvaje",
		"ini": 1491502500,
		"fin": 1491505200
	}]
}, {
	"id": "550",
	"nom": "NATIONAL GEOGRAPHIC",
	"num": "320",
	"logo": "1e053cfb6b0a51e8dff813212cd5b48e.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "222915023",
		"nom": "La Ciencia De Lo Absurdo",
		"ini": 1491496140,
		"fin": 1491497940
	}, {
		"id": "222915025",
		"nom": "Megafábricas",
		"ini": 1491497940,
		"fin": 1491500940
	}, {
		"id": "222915028",
		"nom": "Destino Wild: Sudáfrica",
		"ini": 1491500940,
		"fin": 1491504240
	}]
}, {
	"id": "587",
	"nom": "TLC",
	"num": "305",
	"logo": "e1901e14959703c4788d038049ae75bf.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220433663",
		"nom": "Anthony Bourdain: Sin Reservas",
		"ini": 1491495120,
		"fin": 1491498360
	}, {
		"id": "220433664",
		"nom": "Los \u00c1ngeles Ink",
		"ini": 1491498360,
		"fin": 1491501600
	}, {
		"id": "220433665",
		"nom": "La Estrella Del Súper",
		"ini": 1491501600,
		"fin": 1491504840
	}]
}, {
	"id": "588",
	"nom": "DISCOVERY WORLD HD",
	"num": "1305",
	"logo": "2974c3247d2d3cf9df25d79c68ebd7f2.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220442031",
		"nom": "1000 Lugares Que Ver Antes De Morir",
		"ini": 1491495120,
		"fin": 1491498000
	}, {
		"id": "220442032",
		"nom": "Nobu En Japón",
		"ini": 1491498000,
		"fin": 1491499440
	}, {
		"id": "220442033",
		"nom": "Nobu En Japón",
		"ini": 1491499440,
		"fin": 1491500880
	}, {
		"id": "220442034",
		"nom": "Se Vende: Ny",
		"ini": 1491500880,
		"fin": 1491502320
	}, {
		"id": "220442035",
		"nom": "Se Vende: Ny",
		"ini": 1491502320,
		"fin": 1491503760
	}]
}, {
	"id": "593",
	"nom": "TV AGRO",
	"num": "330",
	"logo": "aa6e0fc72ff5c52e9b1338f308668acd.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "220172660",
		"nom": "Tierra, Pastos Y Ganado",
		"ini": 1491496200,
		"fin": 1491498000
	}, {
		"id": "220172661",
		"nom": "El Sembrador Y La Tierra",
		"ini": 1491498000,
		"fin": 1491499800
	}, {
		"id": "220172662",
		"nom": "En Foco - Vivencias",
		"ini": 1491499800,
		"fin": 1491501600
	}, {
		"id": "220172663",
		"nom": "Entre Establos Y Praderas",
		"ini": 1491501600,
		"fin": 1491503400
	}]
}, {
	"id": "894",
	"nom": "H2",
	"num": "311",
	"logo": "ff562ba129df13b9c29cb0f961ff24ed.jpg",
	"cat": "Culturales",
	"prog": [{
		"id": "212591206",
		"nom": "Mega Desastres",
		"ini": 1491494400,
		"fin": 1491498000
	}, {
		"id": "212591207",
		"nom": "Mega Desastres",
		"ini": 1491498000,
		"fin": 1491501600
	}, {
		"id": "212591208",
		"nom": "Mega Desastres",
		"ini": 1491501600,
		"fin": 1491505200
	}]
	
}]
*/
]
}


export default CanalesDb
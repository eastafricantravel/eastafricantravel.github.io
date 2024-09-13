'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d95eba862222eaeea3e3cf9427ab551",
"assets/AssetManifest.bin.json": "2ad5e05d297b0239442e347ce496ea0f",
"assets/AssetManifest.json": "90c5fe5ba2efd1aca57d84fbb678e5e6",
"assets/assets/icons/133390-hotel-pop-up.json": "ba41581ed25a84def61a53402dda9531",
"assets/assets/icons/135803-loader.json": "dfb57876a80c3855e7b8ff574e01f532",
"assets/assets/icons/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/icons/136901-scale-loop-animation.json": "cddde2b3d95203469ea9b6d498d4055c",
"assets/assets/icons/137519-hotel.json": "7add03442cd4909a201bd0141ed6a6f9",
"assets/assets/icons/2523-loading.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/assets/icons/29765-cheetah-loader.json": "b78658e1a11ccfe8dc037a9dbd65f6dc",
"assets/assets/icons/31071-jiggling-giraffe.json": "381d897fb71de47621a87feda431fe97",
"assets/assets/icons/355-grid-list-view.json": "8cf28830395f19f06adb70b12fd43c51",
"assets/assets/icons/36352-lion-running.json": "e32b415cf5aa17587e979b50fc8323e6",
"assets/assets/icons/53484-digital-clouds-rain.json": "a08bd09575cfb494c0d72629e485017f",
"assets/assets/icons/64705-elephant.json": "9ab3005134254f83f64a0708d5df3378",
"assets/assets/icons/71133-hotel-colors.json": "17258cae4fddce775fd9ca04d387daf5",
"assets/assets/icons/72236-humidly.json": "83ede7a02fba46f80472b3f7c184e85a",
"assets/assets/icons/73387-tourist-travel.json": "df8479900467dc895d9872a20ec3f690",
"assets/assets/icons/74973-charles-law-calculation-of-volume-of-air-ballon-if-the-temperature-drops.json": "201dd4775cee5dff3ca25a35997090c7",
"assets/assets/icons/76908-travel-for-girl.json": "209b1645b0a5420022fc3624bb8c4134",
"assets/assets/icons/90656-traditional-hotel.json": "492357e9c827961e4f98b31680726f0e",
"assets/assets/icons/90724-travel-world-usa.json": "aabf5e418d0da98b15ed7128445184c0",
"assets/assets/icons/90770-traveller.json": "0750407bbeccb57d2d4d51f5524ca61c",
"assets/assets/icons/92138-qr-scan-successful.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/assets/icons/92893-man-waiting-car.json": "eb5612a3731e08869059b714a1a2b0d4",
"assets/assets/icons/95751-hot-air-balloon.json": "baa8b0cb65e0dee9e03a353954a49935",
"assets/assets/icons/96833-login.json": "ed87bde50063ef58974c928f9adcd479",
"assets/assets/icons/978-walking-deer.json": "c0483e030109b4bf642d1dcfbf4f80f5",
"assets/assets/icons/99193-rainy.json": "7211f4497ac2730b004add1c1d536b19",
"assets/assets/icons/airbnb.png": "929890a9db72248b30bf949d480da92b",
"assets/assets/icons/air_ticketing.png": "f4347cb05dba1b407e56dee02faf9e65",
"assets/assets/icons/badge.json": "a0fe82170a993805b42c2b34e9f852f6",
"assets/assets/icons/beach_vacation.png": "bc8acff7430a839a233668af302966ca",
"assets/assets/icons/bird.json": "e67064c83157f0e830b596e8381ace05",
"assets/assets/icons/birdy.json": "32ee00e387b6497e7df74f2f2e861245",
"assets/assets/icons/budgetone.json": "830a6a3f7caca9137da778828f234c74",
"assets/assets/icons/calc.json": "b15a6c521aacd281fea0fcd108c6e754",
"assets/assets/icons/calmwind.json": "70788941f099794f44091bc506cbc2c8",
"assets/assets/icons/charter_flights.png": "a612e2c2c6fc319c9d37aa59fa1ca3bb",
"assets/assets/icons/ehsop.json": "886a111a23b4cce076600cb2d4f01387",
"assets/assets/icons/flight_booking.png": "773be70f6c4c0c5f62de7632bd163087",
"assets/assets/icons/honeymoon_packages.png": "0594efd42eaf8b1c6b4b22a29d36ea02",
"assets/assets/icons/hotel_booking.png": "2d6019ea9af4d8d64dc6a0f2b2a831e9",
"assets/assets/icons/like.json": "a10a4053da533e255a4bc8dcdb762f6e",
"assets/assets/icons/likess.json": "9203cf258eb55048df93957a2946ff34",
"assets/assets/icons/logo.jpg": "bdca0aca74ef24dc2dc1832d3b1d1f41",
"assets/assets/icons/moderatewind.json": "035fdcd36eacad3ba13c14502975c4a8",
"assets/assets/icons/nowind.json": "4c954401c8bf178b0b7d34f45110a3bc",
"assets/assets/icons/passport_application.png": "c82c152077c665212ad173dbac63a7b5",
"assets/assets/icons/pressure.json": "675d4d22bd4ac8a0ef459e5404cbd07b",
"assets/assets/icons/profile.json": "e31a81c80ed52cd279502314d8edb39f",
"assets/assets/icons/qrcode.json": "b7ecff6605964e654843a59b0d663e3e",
"assets/assets/icons/safari_booking.png": "bc0ccbc59d39bcca6e6a361f37dc8e95",
"assets/assets/icons/settings.json": "cded69172c914f01be8f8ca2ebc3d418",
"assets/assets/icons/strongwind.json": "227670cfc222f6d306297b544a2f9170",
"assets/assets/icons/team_building.png": "ab890d3f90be7042c52e0a143e567804",
"assets/assets/icons/temp.json": "d32ba2efef6e495b3f1738053da35d0f",
"assets/assets/icons/tick.json": "fb8ddc39b952ced0a0521e6a40bf517d",
"assets/assets/icons/translator.json": "6c7837c566ce9e500babd0cf0a6d9be5",
"assets/assets/icons/travelone.json": "3f4563d60aa0d7ed6a2dfbef51d238a4",
"assets/assets/icons/traveltwo.json": "e1fc870fa72195c14212bda19f1e60ef",
"assets/assets/icons/travel_insurance.png": "a8acd6b90333103db68da425559c2174",
"assets/assets/icons/trophy.json": "fcc630bb9f68ff91d35625c4fc6c0d4a",
"assets/assets/icons/visa_processing.png": "4f43803964c7b97b033d729cf90696d3",
"assets/assets/icons/wallpaper.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"assets/assets/icons/wishlist.json": "7dac0ebc043225c41c4531fac4ac119c",
"assets/assets/icons/worldjump.json": "a4e5f48b8220673bda292ce4a804bb4e",
"assets/assets/images/admin%2520(1).sql": "3025003496ebfaa50da7d7c4f2589184",
"assets/assets/images/admin.sql": "288295413309918325c9c19507905392",
"assets/assets/images/bmw.jpg": "a08973296ccc366b8a9000b8557f5ae1",
"assets/assets/images/bufallo.jpg": "02acc9f7cbd35db6e698ab2bcb2695e6",
"assets/assets/images/bushire.jpg": "c6cd72aefc7ca5b230eb42c76c07c0d3",
"assets/assets/images/cheetah.jpg": "75e406483fcbed0c7d55c8458f2c8101",
"assets/assets/images/elephant.jpg": "90b1fbbc81a54d3a413d56ef17caf651",
"assets/assets/images/fourpoints.jpg": "42e0fdb9e288bf400a5ba8871ecb2f8f",
"assets/assets/images/gondola.jpg": "689ae95c953be8371a3c997302cf688d",
"assets/assets/images/hotel0.jpg": "c5737b99f507741f5f36e8db10c0e9d8",
"assets/assets/images/hotel1.jpg": "bc9826c3d7c3c5128c62b916baa59aed",
"assets/assets/images/hotel2.jpg": "07a77366730e5997e096c7eac049c787",
"assets/assets/images/hoteli.jpg": "9ad50618afeeaa41d85b85458294575b",
"assets/assets/images/kenyacomfort3.jpg": "20df7b13b6f857ada96ed37771b8f6d5",
"assets/assets/images/kozi3.jpg": "b12eb6823ff8004ff2d2f04602720a19",
"assets/assets/images/lion.jpg": "86b373bf8f9c2e7d6efeef95991b5003",
"assets/assets/images/mercedes.jpeg": "fab9022239c587170c1473f203d5ea38",
"assets/assets/images/mistubishi.jpeg": "a2b28dda127ee932374dfce303fa5159",
"assets/assets/images/murano.jpg": "74851df25b8f4bca02afcfe05a0b7169",
"assets/assets/images/newdelhi.jpg": "56450a1054fcf15bab1f51af0fa90281",
"assets/assets/images/newyork.jpg": "0b02b13a33b63100c799a803b51a748f",
"assets/assets/images/olesereni.jpg": "c280d47b4ad08f53a316288915b18515",
"assets/assets/images/pajero.jpeg": "be571e385635febba468f09df22e2f12",
"assets/assets/images/paris.jpg": "6f5ad05e3583bfcdb378690cab52c4c7",
"assets/assets/images/prado.jpeg": "b1ea13188a59c643a1cabdd051fdb153",
"assets/assets/images/radissonblu.jpg": "a14931636b8abb0f1e4611bc15bce30c",
"assets/assets/images/rhino.jpg": "5236234cad0f7af61cc39098810c5821",
"assets/assets/images/room.jpg": "b4b0801f68a38c6c3d085f2c8cc6b7de",
"assets/assets/images/santorini.jpg": "d26bfc72030a1f0eac63ef62b9d2182a",
"assets/assets/images/saopaulo.jpg": "ffd521b1a80910a94c21ffe39a664268",
"assets/assets/images/sarovastanley.jpg": "ab15875bfe841ed712340bc38ed2dc24",
"assets/assets/images/stmarksbasilica.jpg": "d9dfdeebfc0b8d65bf8e519867838247",
"assets/assets/images/subaru.jpeg": "eeb8a87a8cdde1103d6cc9071cb32d18",
"assets/assets/images/tl.png": "9571875984173b4170c83202973b8eac",
"assets/assets/images/toyoavoxy.jpeg": "1ae5c784a44190b8909c8619ee285034",
"assets/assets/images/toyotaallion.jpeg": "128497292246b599f0c23c45adf7864c",
"assets/assets/images/toyotaaxio.jpg": "93d3eeae19aa41b95b3937ea67ba716e",
"assets/assets/images/toyotahiace.jpeg": "ceeda0316166affefb91a0951a2bfdbb",
"assets/assets/images/toyotahilux.jpg": "b7c8b7cbbe0b0aa35fa7f6c9b5457488",
"assets/assets/images/toyotamarkx.jpg": "292bd7de7b0dc42dd9856099820636a6",
"assets/assets/images/toyotaprius.jpg": "aa1f944dc8fc42d9b69e88bd89b83b3a",
"assets/assets/images/toyotax.jpeg": "dc33efb9bcbfcaab420206b1eb4b8f5a",
"assets/assets/images/users.sql": "202233b94215bf423f275b0636739a5a",
"assets/assets/images/venice.jpg": "10346f88226e7c8892e95033ba5430c0",
"assets/assets/images/weather.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3671c1df5f55e2b92a2d47bcc3d63042",
"assets/NOTICES": "5dbe71727c0b74b5dadd3450617c1dd1",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9eab44fa15a32de188c54ffe357bc981",
"/": "cab04d155b08d33263ae0fe3793762f6",
"launch.json": "4b4249ebfcd88d88933bc073a42506d1",
"main.dart": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "8489accee8993f349b62d8116952f346",
"manifest.json": "bb363767d573f2251b12b8d33d6a5aab",
"samsafaris.github.io/.git/COMMIT_EDITMSG": "5df03f95b4ff4f4b5dabe53a5a1e15d7",
"samsafaris.github.io/.git/config": "2eb197f5f636774f45bf0460a184422c",
"samsafaris.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"samsafaris.github.io/.git/FETCH_HEAD": "86856b493c7a9bc2be39261b9ca58c82",
"samsafaris.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"samsafaris.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"samsafaris.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"samsafaris.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"samsafaris.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"samsafaris.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"samsafaris.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"samsafaris.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"samsafaris.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"samsafaris.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"samsafaris.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"samsafaris.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"samsafaris.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"samsafaris.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"samsafaris.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"samsafaris.github.io/.git/index": "9b170f36c8b19765c511d52a1ed51c23",
"samsafaris.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"samsafaris.github.io/.git/logs/HEAD": "99d4f6f42679de0f25918723399c4e3d",
"samsafaris.github.io/.git/logs/refs/heads/main": "99d4f6f42679de0f25918723399c4e3d",
"samsafaris.github.io/.git/logs/refs/remotes/origin/HEAD": "29912c06288416ebe3071fb9ba6a75fa",
"samsafaris.github.io/.git/logs/refs/remotes/origin/main": "4e59b0f458fa860450f744e0d787262b",
"samsafaris.github.io/.git/objects/00/ae79036e8bfc68147e476db8a9bf60f5902b49": "d0bc5651188189146edd19f557709f78",
"samsafaris.github.io/.git/objects/00/e5f367ee128a2b79723b9c7e39778ed7e3a140": "59dfe674fabad7374d171ff96c1726ff",
"samsafaris.github.io/.git/objects/04/264cdf962bb31e95d21662f6efc089b63f214c": "63b04bfa8c5e6b7e269a0c6cbb0c3ff7",
"samsafaris.github.io/.git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
"samsafaris.github.io/.git/objects/04/f5bf6a9ce2560eb78271ee13c3179645a98c29": "75be9855b23dd4a8c5957ddf91c07f01",
"samsafaris.github.io/.git/objects/07/8f983972486ebb0c27983d23fe78b15fd052d2": "bc0d51f96704690f813a87e3b640c94f",
"samsafaris.github.io/.git/objects/0a/35479cd7c18f23a8322f0b37b1e11c5396ea28": "8f962f685562dcbcb9a4a90a21c8847d",
"samsafaris.github.io/.git/objects/0b/4f00e5cbbf678c0521c172be918cca821a9c6e": "c253b35516f45f7e2367efbb6c08394a",
"samsafaris.github.io/.git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
"samsafaris.github.io/.git/objects/0f/ad355d0c8d9c1c337ee119d262bc39ce45c567": "63f9d4c8c14a58a6f7ae7c2a2a0db9e4",
"samsafaris.github.io/.git/objects/10/41d8f5797f19218af1bf20adb7ae2e58985eea": "cc72f6541505a4584e27f0ad8e22446d",
"samsafaris.github.io/.git/objects/12/5c06c0bdbb5240113289ce1c341ce70213ee27": "4436eb31dda20b69eeaf1532fafaf835",
"samsafaris.github.io/.git/objects/12/b401ed6157573216f609b0e6550585c8e048e5": "f3d7c4133f2026ce4f95e2f1b65443c1",
"samsafaris.github.io/.git/objects/14/aeba98bd4e225d422dbf53631b345751cd1a78": "7f4246b8700fc5ff66d91ee3757fb60b",
"samsafaris.github.io/.git/objects/18/9c409bf8133541eb221faaa0debff67092a29b": "425faa5d55ca90dd7baf8c922a86fa4e",
"samsafaris.github.io/.git/objects/18/ac4f79549ddf163d007a1870659dbd85a8c78e": "be61d6614da233334e761c3ccf0aaa25",
"samsafaris.github.io/.git/objects/1c/265446328dff4da2406209215223f1b60c7f46": "84985b439267406420d502195926e4cf",
"samsafaris.github.io/.git/objects/1f/2c4d4d9cf9f75b4aedf5a226b0fa5b52786266": "64cab23912df344a4a61881d9709c8e8",
"samsafaris.github.io/.git/objects/21/39209e19963ee3cec2bd8a61f314ebcc6591f6": "e271c87c67e30f6ad9dc0c37a450b777",
"samsafaris.github.io/.git/objects/21/7c24aa175b82464cdedc8039f1bc1e9742125d": "605fceccdc3b6aa677a3f686b4c3d0f0",
"samsafaris.github.io/.git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
"samsafaris.github.io/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"samsafaris.github.io/.git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
"samsafaris.github.io/.git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
"samsafaris.github.io/.git/objects/24/1b1fa07f5b57713d335987a30bbe1a5cd5722a": "71680e6ed09e5ff1808017a306cfba33",
"samsafaris.github.io/.git/objects/26/a5a9506ee0bff2b8896694d2434b5e94df8a05": "c596513bcbe875cf105ee42919d996ca",
"samsafaris.github.io/.git/objects/27/adf0bb849e0423a679776190486de787e3ada9": "bd4ac36c4d64ef31e0b327bf5f293e8a",
"samsafaris.github.io/.git/objects/27/c62f9e9b32e7449353601ee493ab8d3d0f8bb3": "801fa286b1254a84e87dc95eaae92332",
"samsafaris.github.io/.git/objects/2d/7a8db3cf39560b0b377bfaabc531747bf4c7ac": "40994ee2df0fc5c188357ec0a1fa9a87",
"samsafaris.github.io/.git/objects/2e/68fae7cc9954a209b1486da8ad9f35cdaf12a3": "d30faf0608a6e93ef259b71e96f5907e",
"samsafaris.github.io/.git/objects/2f/5c635ad74be51596cb4feeb674e6e7388322c7": "9d60e844860797bab7371973c62378d7",
"samsafaris.github.io/.git/objects/2f/f5da5ce1381ccc756c926f6fc47210e10044ff": "d1a6079e773f57d24c92664601f80ef8",
"samsafaris.github.io/.git/objects/30/7f3cea88aca6e8066eb7aecb42c593e1492ce1": "77aac4991ba6ff0d680ff3d51c2a906b",
"samsafaris.github.io/.git/objects/31/078f87d452a0efa711b03222beec2769f30673": "486782c79d51c667a29fd2105528fd47",
"samsafaris.github.io/.git/objects/33/10f474e338a47f922490cb67121e82f8742949": "83367eae099f83b69b75ebce209d8e0b",
"samsafaris.github.io/.git/objects/33/d482458c599caa0c4f21ca55673e85fd727d2f": "605aa80cc1c99f36a77cc53e66ef9c67",
"samsafaris.github.io/.git/objects/37/4e6393441033df3b9e276bc106a586b78a083b": "558bb789914218e92fa27165bd682f5e",
"samsafaris.github.io/.git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
"samsafaris.github.io/.git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
"samsafaris.github.io/.git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
"samsafaris.github.io/.git/objects/3d/197253c56b5a771a71c4975407a2126af61cfe": "047dbd8051f1aad6d1877c2c6a9e1e9c",
"samsafaris.github.io/.git/objects/3f/4d057d3bb134807a17b85202ef6c2efce9487a": "e5281615354961843b8184662367d7e8",
"samsafaris.github.io/.git/objects/40/60413e2240c0d82677c134f6fa6d6e79a9225b": "bedb9d48c948a4bee7cbf04cba71b2e7",
"samsafaris.github.io/.git/objects/40/9a562f1cab923cfe4d6b8772347dfbc4b02ba1": "377049f49901be5c155f58756aa38ce0",
"samsafaris.github.io/.git/objects/42/9b74dc7227f318de544baa39cefd8c7c90bb61": "e89f577a283fb964d166c4419a50ba64",
"samsafaris.github.io/.git/objects/44/13cb842405a3e42f5491ba8272d5d203990d68": "9ea66f159341ef1a20a2ebd3d6d1f194",
"samsafaris.github.io/.git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
"samsafaris.github.io/.git/objects/45/58f46e01747e6923109f0a167bca5048d2ec2f": "cb4434230738c8633c05c3d19fbad3b6",
"samsafaris.github.io/.git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
"samsafaris.github.io/.git/objects/45/7de360ff536992d5f0853a93b9fc15663cab85": "40895f827af08b96b66ae4fb771bd568",
"samsafaris.github.io/.git/objects/45/8c785ceeac29e41868299cf52bc80d2c5da84e": "2cc975a6b2602e6962b2134b955ccdcb",
"samsafaris.github.io/.git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
"samsafaris.github.io/.git/objects/4b/dcebea34e3cdb517b012f9f08159c8f967a6b2": "80773a9f7a72fef4fc692da7b74203b8",
"samsafaris.github.io/.git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
"samsafaris.github.io/.git/objects/4c/9e9cdcbed28b942c1a516fa6b4d828c0f13469": "ab898bc5e4514f26773e247a1f4f5c29",
"samsafaris.github.io/.git/objects/51/91852cd2a9bbdfc20e8dd21a095f73b1c97da7": "832b5a8f9cbef43bf70232d3ec8d149c",
"samsafaris.github.io/.git/objects/52/05883c66d55fcf60b36c996098cc011859d3d7": "bc352de1abc01cea5d0b6f3432c3dcff",
"samsafaris.github.io/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"samsafaris.github.io/.git/objects/54/62d46ca881ca5808f7d193de81071c2373675c": "610319e854019da858bb5230f398dcc4",
"samsafaris.github.io/.git/objects/55/3b9ce71d29ca38ea8c16f67e40c1b1a804b226": "548e5e3585cd18c7a6219aaf5aac0a63",
"samsafaris.github.io/.git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
"samsafaris.github.io/.git/objects/5a/71dd70a162cb3e9e922572e6633c21030266e5": "bf65b50168b4b9cde4fd4ae82281ee4e",
"samsafaris.github.io/.git/objects/5a/e620b68ef876b518ff3d1c5c898b4c2fa317b1": "421c17c0d7723f774b044994939991d3",
"samsafaris.github.io/.git/objects/5b/593d7e4dc26738cf31c0a95d67edd619f994dd": "790a75abdc82a1115f38671379fe66c5",
"samsafaris.github.io/.git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
"samsafaris.github.io/.git/objects/5d/ef9db783edee848c778a33ea2808cddc6883b4": "e7616d1fbbf60753d336bca323e22cac",
"samsafaris.github.io/.git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
"samsafaris.github.io/.git/objects/60/f3e9f3d6c4bd21cac0bd8fff9241fc8f468fe3": "a2d041f7bcfd8fe48685894daaf65676",
"samsafaris.github.io/.git/objects/65/94b81ac25467474e3d9663c30d668772041dfa": "212a14464a4c55c4a3e8579ca8616014",
"samsafaris.github.io/.git/objects/67/f43a2560df970c5c99480c43ac0eeb20ae4600": "6ec052ca32bbe26b1470044d47c925af",
"samsafaris.github.io/.git/objects/69/3d7027a5100b6987dc91ce03c63df2ae346cbb": "c94e390cb324ce46e98774df8cf1009c",
"samsafaris.github.io/.git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
"samsafaris.github.io/.git/objects/6b/741579b828a7a18601b3bc6c3e225c02e981b2": "1dbc407dd4e08d9fc4c8b986722a30b8",
"samsafaris.github.io/.git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
"samsafaris.github.io/.git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
"samsafaris.github.io/.git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
"samsafaris.github.io/.git/objects/79/b84aac091ec8b3a31fc01f43a0efc01ab5a13b": "6b83048b918ac6fcbfc9aadf9d987d4e",
"samsafaris.github.io/.git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
"samsafaris.github.io/.git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
"samsafaris.github.io/.git/objects/7d/4a093af2b42dea12f6086bd958bc8ea0cdf2fc": "76e213da6873fac8fa6ee8a2fc987d69",
"samsafaris.github.io/.git/objects/7f/b2c110ea715078d813f5b980b114fc0ece03f3": "57104254c0a06e972dbccd53327ca87b",
"samsafaris.github.io/.git/objects/80/73c8716556257c20ca724081deac4ead4eb11f": "8fbafa00677118087e3dab126ddb6479",
"samsafaris.github.io/.git/objects/84/76ad1489b133604d2406a4b698f451f7a3a733": "374ec5559eb7c61f300aa8937a187b89",
"samsafaris.github.io/.git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
"samsafaris.github.io/.git/objects/87/8d22a8f51a3ae07749d17ff30726854ac7da32": "bca9a6ffd8244e1e37491446548cf0dd",
"samsafaris.github.io/.git/objects/88/23c2f6bc944c085f737ceb8ace572b9396ab7d": "13a798fa55d04f8e50fc5ffd62f8ba75",
"samsafaris.github.io/.git/objects/88/45c185dbaa9d174034748e16aaafdb10141ce8": "20a378a947dcebcc008b6d4ef0ff0e1c",
"samsafaris.github.io/.git/objects/89/472695d93cf3b49ae0e91386046a01e0547e43": "269298a6b1695a20179e130403dbaa78",
"samsafaris.github.io/.git/objects/8a/c06981f0e833efa76decd69fcee5a23ad8d669": "e65958eacd23a397190aced0f2ce7813",
"samsafaris.github.io/.git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
"samsafaris.github.io/.git/objects/8e/102c295fde11107b1c7fb5979b4c67426d0749": "629c41f25d03152a9e778e2f5d0f7a13",
"samsafaris.github.io/.git/objects/8e/db01c1d481bfaa74c1e75c530f44865bb4335d": "aa7263b2c4379eb7a4ee30029449ebb6",
"samsafaris.github.io/.git/objects/8f/f4b01d467b50d877aeea110cbc6bf5955c01c0": "c002ef5943e3639463940b9e7b0804be",
"samsafaris.github.io/.git/objects/91/2d49a143ded5460d41c92a005918fdf79a7202": "6ce874cb143e28398c8b92a6da4bd87f",
"samsafaris.github.io/.git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
"samsafaris.github.io/.git/objects/95/780896b30938035544dafc7199669724deb4d8": "257ba24572feab1c294d7cb291727955",
"samsafaris.github.io/.git/objects/98/ac278f5a6aaf6e2650fcc13cb0745abc0cb3c2": "4316d30490c6c9354c259d48a8e4ee45",
"samsafaris.github.io/.git/objects/99/484b5361073eca7d144017174dfd7a14777734": "cd95b5ff1b2390095b50b7065524911a",
"samsafaris.github.io/.git/objects/9f/cf3978387c4fc9adce266a0545bccd23720c8c": "6854af9814194ec80ee5c399a6a47c2f",
"samsafaris.github.io/.git/objects/a0/e9c64c73b1abf44beb839297039543e2732c8d": "3649bf469187e8cecc9dc56fc4f382d1",
"samsafaris.github.io/.git/objects/a5/5db0482dbad9624ee75a199dd9db1fb37fa59e": "263f2cc0215d2bc568baaa0036157d63",
"samsafaris.github.io/.git/objects/a6/bd9252ecd44d04a009e33feeb84b75af606333": "f657cbea605229c2e78e8ad989ec0246",
"samsafaris.github.io/.git/objects/a7/b1f51aa3c6eb1cefbc7455d507eeeae1e5fb76": "e8178e21e6768b300f9bc6f8e71316dd",
"samsafaris.github.io/.git/objects/a8/3bd6a17da4aa9ca3d0faee52139150a632745b": "8f9cb8f32960dc79f6f9a67152ecd1bf",
"samsafaris.github.io/.git/objects/ab/834bed80cdb474314e93e8ea77be427365b5b9": "d3d82d925201669af80471cc0c06f90d",
"samsafaris.github.io/.git/objects/ad/662438e5218ee782ca2b96d5a0a9b8c8da06a9": "20db622d7e7962f950d5f156013e672e",
"samsafaris.github.io/.git/objects/b3/b67aa457d3f6c7cef6c1ba3968fac18479bf8b": "76f37fc8d002ee75279032c9af96437e",
"samsafaris.github.io/.git/objects/b6/605b8c7b3f3e858985227114ce0db80ba97e1e": "c91c4c0e5008d556dff5ab53c9e0f04c",
"samsafaris.github.io/.git/objects/b7/99079dc4882ba5ee7e904dadb6940af8ed1e7a": "c9b4c174cc438ce5c7381d6b379d7ebf",
"samsafaris.github.io/.git/objects/b8/c4719e564ca2aedb1e3c77242b1819e4990710": "46893186c328a0fec49b48c2a9987d8b",
"samsafaris.github.io/.git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
"samsafaris.github.io/.git/objects/ba/8ec9d46eb3dc42bb03494bd5b1ade370febd10": "a6659f89c27cfc7698bee3e64d6892bd",
"samsafaris.github.io/.git/objects/bc/0ece83f71ae3276968b9901dc7f73b5e9d9682": "214626e3dac2d9beddba279024289d5e",
"samsafaris.github.io/.git/objects/bc/2d589916c6874a5e76c3d68c9fe5f4934b14f8": "4998bc62a1234bcf60121e166d6e41d6",
"samsafaris.github.io/.git/objects/bc/6871b02ef19a51b1158930f91c8b88dca70d75": "0115c25774617d8dd721780988cdb004",
"samsafaris.github.io/.git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
"samsafaris.github.io/.git/objects/be/b40056b65283356c7b8fa38656661fdb0a3b2a": "235f994c6e59f7d8a9a5049863bec2db",
"samsafaris.github.io/.git/objects/c0/8b1daaa83c86631597a500e15ca66f1a14e398": "784efaf67b8fe56f4f9a26adc517b1ca",
"samsafaris.github.io/.git/objects/c1/35a82f7658b609d12349b54c43edbc1c0cfede": "49e0a7b699ea209674a7558470619a12",
"samsafaris.github.io/.git/objects/c3/75e302204ee4cd3d7682bddf437dc32bc13d52": "d226f482181076d33770dd9fad98c626",
"samsafaris.github.io/.git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
"samsafaris.github.io/.git/objects/c6/25f4fcaa3923f95111a86d56b4b2ff4bbe4901": "32a119a5a63a5e853c9a7bbf4e4e96b5",
"samsafaris.github.io/.git/objects/ca/7bf999bda389bdcce0bb94cebd733b987adfef": "f754cee28faf79785f4a515b57154687",
"samsafaris.github.io/.git/objects/ca/faa40055a9ced9c0a3ac074b721760cf845b41": "9dd7d32a52b7c8c4037684c2759067be",
"samsafaris.github.io/.git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
"samsafaris.github.io/.git/objects/cd/041dcff8da8350266af1915b4ed535130ddd76": "81455a18d4232de3e771b465293c819a",
"samsafaris.github.io/.git/objects/ce/ae8e6d7033ee0c293a60e3bec140783b092afb": "519f825a498452aed7d2ea04fd97e7fc",
"samsafaris.github.io/.git/objects/cf/39b913cf4afa6291c4f4baa893512c0301355d": "7aab62649c37fc6108b813221a429c41",
"samsafaris.github.io/.git/objects/d3/84aece39a27aa73e322378b601f8f56afaaad2": "5183c7866c91c2dd7eac3ba515f10f91",
"samsafaris.github.io/.git/objects/d5/eaa1a2d2fff6d8d298c8766918ade28b0bdae2": "6c9043be7e8b02fcd4b815c5827d01ad",
"samsafaris.github.io/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"samsafaris.github.io/.git/objects/d8/4ddc707c7df1f5092b9285997f4b554f100c2a": "2c9f1ecf2577d4b3f4a0848bf02fe78a",
"samsafaris.github.io/.git/objects/dd/26fc88812cb39720f59235cfda90eee1e53c82": "2e2e8ca3e1e1c3e91b499e92c055a26a",
"samsafaris.github.io/.git/objects/df/c577417c3812ea1f53fdbd0ee091adb045b90c": "cf8ccb171ae236f24c77f48c25ea77a2",
"samsafaris.github.io/.git/objects/e0/34e54a69c1522e6dc9963eb3013f5b53e1954b": "0e4a26c90ae0832fcc9f3a59d5ac1f13",
"samsafaris.github.io/.git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
"samsafaris.github.io/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"samsafaris.github.io/.git/objects/e7/9306ee91616c33ce42aa605053628db76c2f86": "20e5d2e2e8627a5f39fe4c06f05dcc2d",
"samsafaris.github.io/.git/objects/e7/b0e558daabd33e71cc102384089daca45725e2": "07e4f80167705f9665a3f9e1c60fb0d3",
"samsafaris.github.io/.git/objects/e8/2d7a9320b927cf23c9aa650b0eb8cc1208d218": "31fde0e64bd583b330ea9f397e641bf4",
"samsafaris.github.io/.git/objects/ea/ad04ce17ea7dd92c0bea48f3bfcbbd0d954b3f": "9c05deb7d25d23eeeb07d84d15970d9e",
"samsafaris.github.io/.git/objects/eb/af2cc9cd2eb42929dd6f781fdcbe040216a670": "630eee64de383634ac4da58719b51ce4",
"samsafaris.github.io/.git/objects/eb/c66a8affb2a9e87f990eaa18833a2a4fa6a672": "0fce9ae501356a0193f7bce469e18afe",
"samsafaris.github.io/.git/objects/eb/ee9715abc7ef78ad9f24f62a063bda2a644ecf": "706f7692ba057dd20eeedbf70a7e956c",
"samsafaris.github.io/.git/objects/ed/9cb2030f4d5b90b3b09924271588c8898b3394": "cbab3d7ef022264769d1d7a73016c6c8",
"samsafaris.github.io/.git/objects/ef/3ea5d008540806f5f164669d794cb6ff0bb757": "b7a256b9c576d8bba47811c882fe6d8b",
"samsafaris.github.io/.git/objects/f1/5b837a38d6280323736ecf98ef36369d91a605": "aa97ae0cbbb4bc16340ae9630c0e6a0d",
"samsafaris.github.io/.git/objects/f5/c82d352d20f48899de3c74228cddf6de3328b1": "16aa84e55a98a39e4286d7ab3f423747",
"samsafaris.github.io/.git/objects/f5/fa45e3f7a7f75c6f195852f7fcf6117fd4bafd": "ed7b210c1af1800efdf52a6b458aa311",
"samsafaris.github.io/.git/objects/f6/0b914d43713c307250d5af95ee8fb0d7d62095": "d99a84e2738e6b108c3890c201a064eb",
"samsafaris.github.io/.git/objects/f9/2ab63d05a77a860bb6cf09f99efcac0af3b3b8": "97d76dea4e68cbe6ab3edfeab8b9d8f6",
"samsafaris.github.io/.git/objects/fb/d1c7ad2e47baa582caf5917798b6e3e64e42af": "d19772eb118132725c024603f2c10e8c",
"samsafaris.github.io/.git/objects/fe/09833974873e581c502b0ab6e31933d2efee97": "d07578dd793c528fc97c0fb4dd9407ec",
"samsafaris.github.io/.git/objects/fe/8ca47205bd93a1f28ef46fbd1d91ef671b8213": "b61dc9b12040a0ba64db25d03f50bca3",
"samsafaris.github.io/.git/objects/pack/pack-3f98e1a9d8d8d43d8290f27a16a18aa8e630788d.idx": "ac86bb7b05371b267607b94595511a7e",
"samsafaris.github.io/.git/objects/pack/pack-3f98e1a9d8d8d43d8290f27a16a18aa8e630788d.pack": "c19bea4202a52b9a056a8690486695e1",
"samsafaris.github.io/.git/objects/pack/pack-3f98e1a9d8d8d43d8290f27a16a18aa8e630788d.rev": "0eb41411581213ed91180d40217a63de",
"samsafaris.github.io/.git/packed-refs": "5d391252be394c46ace2e5208722ea25",
"samsafaris.github.io/.git/refs/heads/main": "8ff0c2ad5ac6b2b98c65e056bb70d91c",
"samsafaris.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"samsafaris.github.io/.git/refs/remotes/origin/main": "8ff0c2ad5ac6b2b98c65e056bb70d91c",
"samsafaris.github.io/assets/AssetManifest.bin": "8d95eba862222eaeea3e3cf9427ab551",
"samsafaris.github.io/assets/AssetManifest.bin.json": "2ad5e05d297b0239442e347ce496ea0f",
"samsafaris.github.io/assets/AssetManifest.json": "90c5fe5ba2efd1aca57d84fbb678e5e6",
"samsafaris.github.io/assets/assets/icons/133390-hotel-pop-up.json": "ba41581ed25a84def61a53402dda9531",
"samsafaris.github.io/assets/assets/icons/135803-loader.json": "dfb57876a80c3855e7b8ff574e01f532",
"samsafaris.github.io/assets/assets/icons/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"samsafaris.github.io/assets/assets/icons/136901-scale-loop-animation.json": "cddde2b3d95203469ea9b6d498d4055c",
"samsafaris.github.io/assets/assets/icons/137519-hotel.json": "7add03442cd4909a201bd0141ed6a6f9",
"samsafaris.github.io/assets/assets/icons/2523-loading.json": "8140dee112e141cd5c53c04e5727cb58",
"samsafaris.github.io/assets/assets/icons/29765-cheetah-loader.json": "b78658e1a11ccfe8dc037a9dbd65f6dc",
"samsafaris.github.io/assets/assets/icons/31071-jiggling-giraffe.json": "381d897fb71de47621a87feda431fe97",
"samsafaris.github.io/assets/assets/icons/355-grid-list-view.json": "8cf28830395f19f06adb70b12fd43c51",
"samsafaris.github.io/assets/assets/icons/36352-lion-running.json": "e32b415cf5aa17587e979b50fc8323e6",
"samsafaris.github.io/assets/assets/icons/53484-digital-clouds-rain.json": "a08bd09575cfb494c0d72629e485017f",
"samsafaris.github.io/assets/assets/icons/64705-elephant.json": "9ab3005134254f83f64a0708d5df3378",
"samsafaris.github.io/assets/assets/icons/71133-hotel-colors.json": "17258cae4fddce775fd9ca04d387daf5",
"samsafaris.github.io/assets/assets/icons/72236-humidly.json": "83ede7a02fba46f80472b3f7c184e85a",
"samsafaris.github.io/assets/assets/icons/73387-tourist-travel.json": "df8479900467dc895d9872a20ec3f690",
"samsafaris.github.io/assets/assets/icons/74973-charles-law-calculation-of-volume-of-air-ballon-if-the-temperature-drops.json": "201dd4775cee5dff3ca25a35997090c7",
"samsafaris.github.io/assets/assets/icons/76908-travel-for-girl.json": "209b1645b0a5420022fc3624bb8c4134",
"samsafaris.github.io/assets/assets/icons/90656-traditional-hotel.json": "492357e9c827961e4f98b31680726f0e",
"samsafaris.github.io/assets/assets/icons/90724-travel-world-usa.json": "aabf5e418d0da98b15ed7128445184c0",
"samsafaris.github.io/assets/assets/icons/90770-traveller.json": "0750407bbeccb57d2d4d51f5524ca61c",
"samsafaris.github.io/assets/assets/icons/92138-qr-scan-successful.json": "fd177caf7df34f592af4ab291cd10a22",
"samsafaris.github.io/assets/assets/icons/92893-man-waiting-car.json": "eb5612a3731e08869059b714a1a2b0d4",
"samsafaris.github.io/assets/assets/icons/95751-hot-air-balloon.json": "baa8b0cb65e0dee9e03a353954a49935",
"samsafaris.github.io/assets/assets/icons/96833-login.json": "ed87bde50063ef58974c928f9adcd479",
"samsafaris.github.io/assets/assets/icons/978-walking-deer.json": "c0483e030109b4bf642d1dcfbf4f80f5",
"samsafaris.github.io/assets/assets/icons/99193-rainy.json": "7211f4497ac2730b004add1c1d536b19",
"samsafaris.github.io/assets/assets/icons/airbnb.png": "929890a9db72248b30bf949d480da92b",
"samsafaris.github.io/assets/assets/icons/air_ticketing.png": "f4347cb05dba1b407e56dee02faf9e65",
"samsafaris.github.io/assets/assets/icons/badge.json": "a0fe82170a993805b42c2b34e9f852f6",
"samsafaris.github.io/assets/assets/icons/beach_vacation.png": "bc8acff7430a839a233668af302966ca",
"samsafaris.github.io/assets/assets/icons/bird.json": "e67064c83157f0e830b596e8381ace05",
"samsafaris.github.io/assets/assets/icons/birdy.json": "32ee00e387b6497e7df74f2f2e861245",
"samsafaris.github.io/assets/assets/icons/budgetone.json": "830a6a3f7caca9137da778828f234c74",
"samsafaris.github.io/assets/assets/icons/calc.json": "b15a6c521aacd281fea0fcd108c6e754",
"samsafaris.github.io/assets/assets/icons/calmwind.json": "70788941f099794f44091bc506cbc2c8",
"samsafaris.github.io/assets/assets/icons/charter_flights.png": "a612e2c2c6fc319c9d37aa59fa1ca3bb",
"samsafaris.github.io/assets/assets/icons/ehsop.json": "886a111a23b4cce076600cb2d4f01387",
"samsafaris.github.io/assets/assets/icons/flight_booking.png": "773be70f6c4c0c5f62de7632bd163087",
"samsafaris.github.io/assets/assets/icons/honeymoon_packages.png": "0594efd42eaf8b1c6b4b22a29d36ea02",
"samsafaris.github.io/assets/assets/icons/hotel_booking.png": "2d6019ea9af4d8d64dc6a0f2b2a831e9",
"samsafaris.github.io/assets/assets/icons/like.json": "a10a4053da533e255a4bc8dcdb762f6e",
"samsafaris.github.io/assets/assets/icons/likess.json": "9203cf258eb55048df93957a2946ff34",
"samsafaris.github.io/assets/assets/icons/logo.jpg": "bdca0aca74ef24dc2dc1832d3b1d1f41",
"samsafaris.github.io/assets/assets/icons/moderatewind.json": "035fdcd36eacad3ba13c14502975c4a8",
"samsafaris.github.io/assets/assets/icons/nowind.json": "4c954401c8bf178b0b7d34f45110a3bc",
"samsafaris.github.io/assets/assets/icons/passport_application.png": "c82c152077c665212ad173dbac63a7b5",
"samsafaris.github.io/assets/assets/icons/pressure.json": "675d4d22bd4ac8a0ef459e5404cbd07b",
"samsafaris.github.io/assets/assets/icons/profile.json": "e31a81c80ed52cd279502314d8edb39f",
"samsafaris.github.io/assets/assets/icons/qrcode.json": "b7ecff6605964e654843a59b0d663e3e",
"samsafaris.github.io/assets/assets/icons/safari_booking.png": "bc0ccbc59d39bcca6e6a361f37dc8e95",
"samsafaris.github.io/assets/assets/icons/settings.json": "cded69172c914f01be8f8ca2ebc3d418",
"samsafaris.github.io/assets/assets/icons/strongwind.json": "227670cfc222f6d306297b544a2f9170",
"samsafaris.github.io/assets/assets/icons/team_building.png": "ab890d3f90be7042c52e0a143e567804",
"samsafaris.github.io/assets/assets/icons/temp.json": "d32ba2efef6e495b3f1738053da35d0f",
"samsafaris.github.io/assets/assets/icons/tick.json": "fb8ddc39b952ced0a0521e6a40bf517d",
"samsafaris.github.io/assets/assets/icons/translator.json": "6c7837c566ce9e500babd0cf0a6d9be5",
"samsafaris.github.io/assets/assets/icons/travelone.json": "3f4563d60aa0d7ed6a2dfbef51d238a4",
"samsafaris.github.io/assets/assets/icons/traveltwo.json": "e1fc870fa72195c14212bda19f1e60ef",
"samsafaris.github.io/assets/assets/icons/travel_insurance.png": "a8acd6b90333103db68da425559c2174",
"samsafaris.github.io/assets/assets/icons/trophy.json": "fcc630bb9f68ff91d35625c4fc6c0d4a",
"samsafaris.github.io/assets/assets/icons/visa_processing.png": "4f43803964c7b97b033d729cf90696d3",
"samsafaris.github.io/assets/assets/icons/wallpaper.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"samsafaris.github.io/assets/assets/icons/wishlist.json": "7dac0ebc043225c41c4531fac4ac119c",
"samsafaris.github.io/assets/assets/icons/worldjump.json": "a4e5f48b8220673bda292ce4a804bb4e",
"samsafaris.github.io/assets/assets/images/admin%2520(1).sql": "3025003496ebfaa50da7d7c4f2589184",
"samsafaris.github.io/assets/assets/images/admin.sql": "288295413309918325c9c19507905392",
"samsafaris.github.io/assets/assets/images/bmw.jpg": "a08973296ccc366b8a9000b8557f5ae1",
"samsafaris.github.io/assets/assets/images/bufallo.jpg": "02acc9f7cbd35db6e698ab2bcb2695e6",
"samsafaris.github.io/assets/assets/images/bushire.jpg": "c6cd72aefc7ca5b230eb42c76c07c0d3",
"samsafaris.github.io/assets/assets/images/cheetah.jpg": "75e406483fcbed0c7d55c8458f2c8101",
"samsafaris.github.io/assets/assets/images/elephant.jpg": "90b1fbbc81a54d3a413d56ef17caf651",
"samsafaris.github.io/assets/assets/images/fourpoints.jpg": "42e0fdb9e288bf400a5ba8871ecb2f8f",
"samsafaris.github.io/assets/assets/images/gondola.jpg": "689ae95c953be8371a3c997302cf688d",
"samsafaris.github.io/assets/assets/images/hotel0.jpg": "c5737b99f507741f5f36e8db10c0e9d8",
"samsafaris.github.io/assets/assets/images/hotel1.jpg": "bc9826c3d7c3c5128c62b916baa59aed",
"samsafaris.github.io/assets/assets/images/hotel2.jpg": "07a77366730e5997e096c7eac049c787",
"samsafaris.github.io/assets/assets/images/hoteli.jpg": "9ad50618afeeaa41d85b85458294575b",
"samsafaris.github.io/assets/assets/images/kenyacomfort3.jpg": "20df7b13b6f857ada96ed37771b8f6d5",
"samsafaris.github.io/assets/assets/images/kozi3.jpg": "b12eb6823ff8004ff2d2f04602720a19",
"samsafaris.github.io/assets/assets/images/lion.jpg": "86b373bf8f9c2e7d6efeef95991b5003",
"samsafaris.github.io/assets/assets/images/mercedes.jpeg": "fab9022239c587170c1473f203d5ea38",
"samsafaris.github.io/assets/assets/images/mistubishi.jpeg": "a2b28dda127ee932374dfce303fa5159",
"samsafaris.github.io/assets/assets/images/murano.jpg": "74851df25b8f4bca02afcfe05a0b7169",
"samsafaris.github.io/assets/assets/images/newdelhi.jpg": "56450a1054fcf15bab1f51af0fa90281",
"samsafaris.github.io/assets/assets/images/newyork.jpg": "0b02b13a33b63100c799a803b51a748f",
"samsafaris.github.io/assets/assets/images/olesereni.jpg": "c280d47b4ad08f53a316288915b18515",
"samsafaris.github.io/assets/assets/images/pajero.jpeg": "be571e385635febba468f09df22e2f12",
"samsafaris.github.io/assets/assets/images/paris.jpg": "6f5ad05e3583bfcdb378690cab52c4c7",
"samsafaris.github.io/assets/assets/images/prado.jpeg": "b1ea13188a59c643a1cabdd051fdb153",
"samsafaris.github.io/assets/assets/images/radissonblu.jpg": "a14931636b8abb0f1e4611bc15bce30c",
"samsafaris.github.io/assets/assets/images/rhino.jpg": "5236234cad0f7af61cc39098810c5821",
"samsafaris.github.io/assets/assets/images/room.jpg": "b4b0801f68a38c6c3d085f2c8cc6b7de",
"samsafaris.github.io/assets/assets/images/santorini.jpg": "d26bfc72030a1f0eac63ef62b9d2182a",
"samsafaris.github.io/assets/assets/images/saopaulo.jpg": "ffd521b1a80910a94c21ffe39a664268",
"samsafaris.github.io/assets/assets/images/sarovastanley.jpg": "ab15875bfe841ed712340bc38ed2dc24",
"samsafaris.github.io/assets/assets/images/stmarksbasilica.jpg": "d9dfdeebfc0b8d65bf8e519867838247",
"samsafaris.github.io/assets/assets/images/subaru.jpeg": "eeb8a87a8cdde1103d6cc9071cb32d18",
"samsafaris.github.io/assets/assets/images/tl.png": "9571875984173b4170c83202973b8eac",
"samsafaris.github.io/assets/assets/images/toyoavoxy.jpeg": "1ae5c784a44190b8909c8619ee285034",
"samsafaris.github.io/assets/assets/images/toyotaallion.jpeg": "128497292246b599f0c23c45adf7864c",
"samsafaris.github.io/assets/assets/images/toyotaaxio.jpg": "93d3eeae19aa41b95b3937ea67ba716e",
"samsafaris.github.io/assets/assets/images/toyotahiace.jpeg": "ceeda0316166affefb91a0951a2bfdbb",
"samsafaris.github.io/assets/assets/images/toyotahilux.jpg": "b7c8b7cbbe0b0aa35fa7f6c9b5457488",
"samsafaris.github.io/assets/assets/images/toyotamarkx.jpg": "292bd7de7b0dc42dd9856099820636a6",
"samsafaris.github.io/assets/assets/images/toyotaprius.jpg": "aa1f944dc8fc42d9b69e88bd89b83b3a",
"samsafaris.github.io/assets/assets/images/toyotax.jpeg": "dc33efb9bcbfcaab420206b1eb4b8f5a",
"samsafaris.github.io/assets/assets/images/users.sql": "202233b94215bf423f275b0636739a5a",
"samsafaris.github.io/assets/assets/images/venice.jpg": "10346f88226e7c8892e95033ba5430c0",
"samsafaris.github.io/assets/assets/images/weather.jpg": "34c99d44d0d44f25cbc4155456a3ab1f",
"samsafaris.github.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"samsafaris.github.io/assets/fonts/MaterialIcons-Regular.otf": "b7b93a04580f9ce5d547dd8361986797",
"samsafaris.github.io/assets/NOTICES": "5dbe71727c0b74b5dadd3450617c1dd1",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"samsafaris.github.io/assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"samsafaris.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"samsafaris.github.io/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"samsafaris.github.io/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"samsafaris.github.io/assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"samsafaris.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"samsafaris.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"samsafaris.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"samsafaris.github.io/assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"samsafaris.github.io/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"samsafaris.github.io/canvaskit/canvaskit.js": "612ab9fd96eaf5221fdd4de3b9d72255",
"samsafaris.github.io/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"samsafaris.github.io/canvaskit/chromium/canvaskit.js": "75e0604e860ae82573d104d2c72ed529",
"samsafaris.github.io/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"samsafaris.github.io/canvaskit/skwasm.js": "8f70c47cdaaa2d48ea841fe1fd091ff5",
"samsafaris.github.io/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"samsafaris.github.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"samsafaris.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"samsafaris.github.io/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"samsafaris.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"samsafaris.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"samsafaris.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"samsafaris.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"samsafaris.github.io/index.html": "cab04d155b08d33263ae0fe3793762f6",
"samsafaris.github.io/launch.json": "4b4249ebfcd88d88933bc073a42506d1",
"samsafaris.github.io/main.dart": "d41d8cd98f00b204e9800998ecf8427e",
"samsafaris.github.io/main.dart.js": "1f1961cc8950991bb018dcd48b6e551e",
"samsafaris.github.io/manifest.json": "bb363767d573f2251b12b8d33d6a5aab",
"samsafaris.github.io/version.json": "3da8501ccd11e3be09cf4c27f572d8bf",
"version.json": "3da8501ccd11e3be09cf4c27f572d8bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

import type { Comment, Recipe } from '@/types'

import prawnMieGoreng from '@/assets/img/food/prawn-mie-goreng.webp'
import potstickers from '@/assets/img/food/potstickers.webp'
import chickenRendang from '@/assets/img/food/chicken-rendang.webp'
import pressureCookerSopBuntut from '@/assets/img/food/pressure-cooker-sop-buntut.webp'
import gingersnapPumpkinPie from '@/assets/img/food/gingersnap-pumpkin-pie.webp'
import spicyBraisedRibs from '@/assets/img/food/spicy-braised-ribs.webp'
import lentilBolognese from '@/assets/img/food/lentil-bolognese.webp'
import extraGarlicBolognese from '@/assets/img/food/extra-garlic-bolognese.webp'
import chickenBlanquette from '@/assets/img/food/chicken-blanquette.webp'
import midnightCupcakes from '@/assets/img/food/midnight-cupcakes.webp'
import sotoAyam from '@/assets/img/food/soto-ayam.webp'
import bakedLumpia from '@/assets/img/food/baked-lumpia.webp'
import winterPunch from '@/assets/img/food/winter-punch.webp'
import chocolateButterCookies from '@/assets/img/food/chocolate-butter-cookies.webp'

const MIN = 60_000
const HOUR = 60 * MIN
const DAY = 24 * HOUR

/** Family twists on the originals, so most recipes have a variation or two. */
export function twists(ago: (ms: number) => number): {
  recipes: Recipe[]
  comments: Comment[]
} {
  const recipes: Recipe[] = [
    {
      id: 'prawn-mie-goreng',
      cover: prawnMieGoreng,
      title: 'Prawn Mie Goreng',
      cuisine: 'Indonesian',
      authorId: 'mom',
      groupId: 'grandmas-cookbook',
      parentId: 'mie-goreng',
      twistNote:
        'Prawns instead of chicken, and (yes, Mama) an extra spoon of kecap manis. Finished with fried shallots.',
      servings: 4,
      minutes: 30,
      story:
        'The Friday version. Prawns cook in two minutes, so dinner is on the table before anyone can ask "is it ready yet?".',
      ingredients: [
        {
          items: [
            { qty: 1, unit: 'pack', name: 'egg noodles' },
            { qty: 2, name: 'eggs, beaten' },
            { qty: 300, unit: 'g', name: 'raw prawns, peeled' },
            { qty: 3, unit: 'cloves', name: 'garlic, minced' },
            { qty: 1, name: 'red chilli, sliced' },
            { qty: 150, unit: 'g', name: 'cabbage, shredded' },
            { qty: 3, unit: 'stalks', name: 'spring onions, chopped' },
          ],
        },
        {
          title: 'For the sauce',
          items: [
            { qty: 3, unit: 'tbsp', name: 'kecap manis (sweet soy sauce)' },
            { qty: 1, unit: 'tbsp', name: 'oyster sauce' },
            { qty: 1, unit: 'tbsp', name: 'sambal' },
          ],
        },
        {
          title: 'To garnish',
          items: [
            { qty: 2, unit: 'tbsp', name: 'fried shallots' },
            { qty: 1, name: 'lime, in wedges' },
          ],
        },
      ],
      steps: [
        'Cook the noodles according to the package instructions. Drain and set aside.',
        'Mix the kecap manis, oyster sauce and sambal in a small bowl.',
        'Scramble the eggs in a hot wok with a little oil. Remove and set aside.',
        'Add more oil, then the garlic and chilli. After 30 seconds add the prawns and cook for 2 minutes, until just pink.',
        'Add the cabbage and spring onions and cook until the cabbage wilts.',
        'Return the noodles and eggs, pour in the sauce and toss for 2 minutes. Top with fried shallots and serve with lime.',
      ],
      allergens: ['gluten', 'egg', 'soy', 'shellfish'],
      createdAt: ago(8 * DAY),
      loves: [
        { personId: 'grandma', at: ago(7 * DAY) },
        { personId: 'uncle-robert', at: ago(6 * DAY) },
      ],
      saves: [{ personId: 'cousin-james', at: ago(6 * DAY) }],
    },
    {
      id: 'potstickers',
      cover: potstickers,
      title: 'Pan-Fried Potstickers',
      cuisine: 'Chinese',
      authorId: 'uncle-robert',
      groupId: 'grandmas-cookbook',
      parentId: 'chinese-dumplings',
      twistNote:
        'Same filling and dough, but fried and steamed in one pan for a crispy bottom. Served with a black vinegar dip.',
      servings: 6,
      minutes: 100,
      story:
        'I could never wait for the boiled ones to cool down. These come out of the pan crunchy, and nobody has to fish them out of a pot.',
      ingredients: [
        {
          title: 'Dumplings',
          items: [
            { qty: 40, name: "dumplings, folded from Grandma's recipe" },
            { qty: 2, unit: 'tbsp', name: 'neutral oil' },
            { qty: 150, unit: 'ml', name: 'water' },
          ],
        },
        {
          title: 'Dipping sauce',
          items: [
            { qty: 3, unit: 'tbsp', name: 'Chinkiang black vinegar' },
            { qty: 1, unit: 'tbsp', name: 'soy sauce' },
            { qty: 1, unit: 'tsp', name: 'chilli oil' },
            { qty: 1, unit: 'tbsp', name: 'ginger, cut into fine strips' },
          ],
        },
      ],
      steps: [
        "Make and fold the dumplings following Grandma's recipe, but don't boil them.",
        'Heat the oil in a large non-stick pan with a lid. Arrange the dumplings flat side down and fry for 2 minutes, until the bottoms are golden.',
        'Pour in the water, cover immediately and steam for 7 minutes.',
        'Remove the lid and keep cooking until the water has gone and the bottoms crisp up again.',
        'Mix the dipping sauce and serve the potstickers crispy side up.',
      ],
      allergens: ['gluten', 'soy', 'sesame'],
      createdAt: ago(21 * DAY),
      loves: [
        { personId: 'grandma', at: ago(20 * DAY) },
        { personId: 'me', at: ago(15 * DAY) },
        { personId: 'cousin-james', at: ago(11 * DAY) },
      ],
      saves: [{ personId: 'me', at: ago(15 * DAY) }],
    },
    {
      id: 'chicken-rendang',
      cover: chickenRendang,
      title: 'Weeknight Chicken Rendang',
      cuisine: 'Indonesian',
      authorId: 'auntie-kate',
      groupId: 'grandmas-cookbook',
      parentId: 'rendang',
      twistNote:
        'Chicken thighs instead of beef, so it is ready in 90 minutes instead of an afternoon. A little saucier than the original.',
      servings: 4,
      minutes: 90,
      story:
        "I don't have a free afternoon until I retire. This keeps all of the spice paste and gets dinner done on a Tuesday.",
      ingredients: [
        {
          items: [
            { qty: 1, unit: 'kg', name: 'boneless chicken thighs, halved' },
            { qty: 400, unit: 'ml', name: 'coconut milk' },
            { qty: 2, unit: 'stalks', name: 'lemongrass, bruised' },
            { qty: 4, name: 'kaffir lime leaves' },
            { qty: 50, unit: 'g', name: 'toasted grated coconut (kerisik)' },
            { qty: 1, unit: 'tbsp', name: 'palm sugar' },
          ],
        },
        {
          title: 'Spice paste',
          items: [
            { qty: 8, name: 'shallots' },
            { qty: 5, unit: 'cloves', name: 'garlic' },
            { qty: 8, name: 'dried chillies, soaked' },
            { qty: 3, unit: 'cm', name: 'galangal' },
            { qty: 2, unit: 'cm', name: 'ginger' },
            { qty: 2, unit: 'cm', name: 'turmeric' },
          ],
        },
      ],
      steps: [
        'Blend the spice paste ingredients until smooth, then fry in a little oil for 8 minutes until darkened.',
        'Add the chicken, lemongrass and lime leaves and stir to coat.',
        'Pour in the coconut milk and simmer uncovered for 45 minutes, stirring now and then.',
        'Stir in the kerisik and palm sugar and cook for 15 minutes more, until the sauce is thick and clings to the chicken.',
      ],
      allergens: [],
      createdAt: ago(5 * DAY),
      loves: [
        { personId: 'mom', at: ago(4 * DAY) },
        { personId: 'ericaa', at: ago(2 * DAY) },
      ],
      saves: [{ personId: 'mom', at: ago(4 * DAY) }],
    },
    {
      id: 'pressure-cooker-sop-buntut',
      cover: pressureCookerSopBuntut,
      title: 'Pressure-Cooker Sop Buntut',
      cuisine: 'Indonesian',
      authorId: 'cousin-james',
      groupId: 'grandmas-cookbook',
      parentId: 'sop-buntut',
      twistNote:
        "Oxtail done in the pressure cooker in 45 minutes instead of 2 hours. Everything else is Grandma's.",
      servings: 6,
      minutes: 90,
      story:
        'After spending a whole day on the original, I bought a pressure cooker with my first paycheck. Grandma says the broth is "almost" as clear.',
      ingredients: [
        {
          items: [
            { qty: 1.5, unit: 'kg', name: 'oxtail, cut into pieces' },
            { qty: 2, unit: 'l', name: 'water' },
            { qty: 3, name: 'carrots, in thick slices' },
            { qty: 3, name: 'potatoes, in chunks' },
            { qty: 2, name: 'tomatoes, quartered' },
            { qty: 2, unit: 'stalks', name: 'celery leaves' },
            { qty: 3, unit: 'stalks', name: 'spring onions' },
          ],
        },
        {
          title: 'Spice paste',
          items: [
            { qty: 6, name: 'shallots' },
            { qty: 5, unit: 'cloves', name: 'garlic' },
            { qty: 0.5, unit: 'tsp', name: 'nutmeg, grated' },
            { qty: 1, unit: 'tsp', name: 'white pepper' },
            { qty: 3, name: 'cloves' },
            { qty: 1, name: 'cinnamon stick' },
          ],
        },
      ],
      steps: [
        'Blanch the oxtail in boiling water for 10 minutes, then drain and rinse.',
        'Put the oxtail in the pressure cooker with 2 litres of water. Cook at high pressure for 45 minutes and let the pressure release naturally.',
        'Fry the blended shallots and garlic with the nutmeg and pepper for 3 minutes, then stir into the broth with the cloves and cinnamon.',
        'Add the carrots and potatoes and simmer with the lid off for 20 minutes.',
        'Add the tomatoes, celery and spring onions for the last 5 minutes. Season and serve with rice and sambal.',
      ],
      allergens: ['celery'],
      createdAt: ago(7 * DAY),
      loves: [{ personId: 'sistur', at: ago(6 * DAY) }],
      saves: [{ personId: 'me', at: ago(2 * DAY) }],
    },
    {
      id: 'gingersnap-pumpkin-pie',
      cover: gingersnapPumpkinPie,
      title: 'Pumpkin Pie with Gingersnap Crust',
      cuisine: 'American',
      authorId: 'cousin-james',
      groupId: 'thanksgiving',
      parentId: 'pumpkin-pie',
      twistNote:
        'Pressed gingersnap crust instead of pastry, and a maple whipped cream on top. The filling is untouched.',
      servings: 8,
      minutes: 80,
      story:
        "I can't make pastry to save my life. Crushed biscuits and butter, on the other hand, I can do.",
      ingredients: [
        {
          title: 'Crust',
          items: [
            { qty: 250, unit: 'g', name: 'gingersnap biscuits' },
            { qty: 80, unit: 'g', name: 'butter, melted' },
          ],
        },
        {
          title: 'Filling',
          items: [
            { qty: 2, name: 'eggs, slightly beaten' },
            { qty: 425, unit: 'g', name: 'pumpkin purée' },
            { qty: 150, unit: 'g', name: 'sugar' },
            { qty: 0.5, unit: 'tsp', name: 'salt' },
            { qty: 1, unit: 'tsp', name: 'cinnamon' },
            { qty: 0.5, unit: 'tsp', name: 'ground ginger' },
            { qty: 0.25, unit: 'tsp', name: 'ground cloves' },
            { qty: 350, unit: 'ml', name: 'evaporated milk' },
          ],
        },
        {
          title: 'Maple cream',
          items: [
            { qty: 250, unit: 'ml', name: 'whipping cream' },
            { qty: 2, unit: 'tbsp', name: 'maple syrup' },
          ],
        },
      ],
      steps: [
        'Preheat the oven to 175°C. Blitz the gingersnaps to crumbs and mix with the melted butter.',
        'Press firmly into a 23 cm pie dish and bake for 10 minutes.',
        'Mix the filling as in the original and pour it into the warm crust.',
        'Bake for 50 minutes, until just set in the middle. Cool for at least 2 hours.',
        'Whip the cream with the maple syrup to soft peaks and spoon over each slice.',
      ],
      allergens: ['gluten', 'egg', 'milk'],
      createdAt: ago(36 * DAY),
      loves: [
        { personId: 'auntie-kate', at: ago(35 * DAY) },
        { personId: 'uncle-robert', at: ago(30 * DAY) },
      ],
      saves: [],
    },
    {
      id: 'spicy-braised-ribs',
      cover: spicyBraisedRibs,
      title: 'Spicy Braised Short Ribs',
      cuisine: 'Korean',
      authorId: 'mom',
      groupId: 'thanksgiving',
      parentId: 'braised-ribs',
      twistNote:
        'Gochujang and gochugaru in the braise for heat, plus chestnuts and radish alongside the carrots.',
      servings: 6,
      minutes: 180,
      story:
        "Robert's ribs, but for the people at the table who think Thanksgiving needs more chilli. That's me. I'm the people.",
      ingredients: [
        {
          items: [
            { qty: 1.5, unit: 'kg', name: 'beef short ribs' },
            { qty: 100, unit: 'ml', name: 'soy sauce' },
            { qty: 2, unit: 'tbsp', name: 'gochujang' },
            { qty: 1, unit: 'tbsp', name: 'gochugaru (Korean chilli flakes)' },
            { qty: 1, name: 'Asian pear, grated' },
            { qty: 6, unit: 'cloves', name: 'garlic, minced' },
            { qty: 1, unit: 'tbsp', name: 'sesame oil' },
            { qty: 300, unit: 'g', name: 'Korean radish, in chunks' },
            { qty: 2, name: 'carrots, in chunks' },
            { qty: 10, name: 'peeled chestnuts' },
          ],
        },
      ],
      steps: [
        'Soak the ribs in cold water for 30 minutes. Drain.',
        'Mix the soy sauce, gochujang, gochugaru, pear, garlic and sesame oil.',
        'Brown the ribs, then add the sauce and 500 ml of water. Cover and braise on low heat for 90 minutes.',
        'Add the radish, carrots and chestnuts and braise for 30 minutes more, until everything is tender and the sauce is glossy.',
      ],
      allergens: ['gluten', 'soy', 'sesame'],
      createdAt: ago(28 * DAY),
      loves: [
        { personId: 'uncle-robert', at: ago(27 * DAY) },
        { personId: 'me', at: ago(20 * DAY) },
      ],
      saves: [],
    },
    {
      id: 'lentil-bolognese',
      cover: lentilBolognese,
      title: 'Lentil Bolognese',
      cuisine: 'Italian',
      authorId: 'ericaa',
      groupId: 'home-kitchen',
      parentId: 'bolognese',
      twistNote:
        'Green lentils and mushrooms instead of beef. Soy sauce adds the savoury depth the meat used to give.',
      servings: 4,
      minutes: 55,
      story:
        "The vegetarian cousin strikes again. Nobody noticed until I told them, and by then they'd had seconds.",
      ingredients: [
        {
          items: [
            { qty: 200, unit: 'g', name: 'dried green lentils, rinsed' },
            { qty: 250, unit: 'g', name: 'chestnut mushrooms, finely chopped' },
            { qty: 1, name: 'onion, finely chopped' },
            { qty: 1, name: 'carrot, finely chopped' },
            { qty: 1, unit: 'stalks', name: 'celery, finely chopped' },
            { qty: 3, unit: 'cloves', name: 'garlic, minced' },
            { qty: 2, unit: 'tbsp', name: 'tomato paste' },
            { qty: 1, unit: 'tbsp', name: 'soy sauce' },
            { qty: 400, unit: 'g', name: 'chopped tomatoes' },
            { qty: 150, unit: 'ml', name: 'red wine' },
            { qty: 400, unit: 'g', name: 'spaghetti' },
          ],
        },
      ],
      steps: [
        'Soften the onion, carrot and celery in olive oil for 10 minutes.',
        'Add the mushrooms and cook until they release their water and start to brown.',
        'Stir in the garlic, tomato paste and soy sauce and cook for 2 minutes. Add the wine and let it bubble away.',
        'Add the lentils, tomatoes and 400 ml of water. Simmer for 30 minutes, until the lentils are soft.',
        'Toss with the cooked spaghetti and a splash of pasta water.',
      ],
      allergens: ['gluten', 'soy', 'celery'],
      createdAt: ago(4 * DAY),
      loves: [
        { personId: 'me', at: ago(3 * DAY) },
        { personId: 'sistur', at: ago(2 * DAY) },
      ],
      saves: [{ personId: 'me', at: ago(3 * DAY) }],
    },
    {
      id: 'extra-garlic-bolognese',
      cover: extraGarlicBolognese,
      title: "Mom's Extra-Garlic Bolognese",
      cuisine: 'Italian',
      authorId: 'mom',
      groupId: 'home-kitchen',
      parentId: 'bolognese',
      twistNote:
        'A whole head of garlic, half pork mince, a splash of milk and a parmesan rind in the sauce. Simmered twice as long.',
      servings: 4,
      minutes: 100,
      story: 'I said it needed more garlic. Nobody listened. So here it is.',
      ingredients: [
        {
          items: [
            { qty: 250, unit: 'g', name: 'minced beef' },
            { qty: 250, unit: 'g', name: 'minced pork' },
            { qty: 1, unit: 'head', name: 'garlic, minced' },
            { qty: 1, name: 'onion, finely chopped' },
            { qty: 1, name: 'carrot, finely chopped' },
            { qty: 1, unit: 'stalks', name: 'celery, finely chopped' },
            { qty: 2, unit: 'tbsp', name: 'tomato paste' },
            { qty: 150, unit: 'ml', name: 'red wine' },
            { qty: 100, unit: 'ml', name: 'whole milk' },
            { qty: 400, unit: 'g', name: 'chopped tomatoes' },
            { qty: 1, name: 'parmesan rind' },
            { qty: 400, unit: 'g', name: 'spaghetti' },
          ],
        },
      ],
      steps: [
        'Soften the onion, carrot and celery in olive oil for 10 minutes.',
        'Add both minces and brown well. Add the garlic and cook for 2 minutes, then the tomato paste.',
        'Pour in the wine and let it bubble away, then the milk, until it has almost disappeared.',
        'Add the tomatoes and parmesan rind and simmer on the lowest heat for 60 minutes. Fish out the rind.',
        'Toss with the cooked spaghetti and serve with more parmesan.',
      ],
      allergens: ['gluten', 'milk', 'celery'],
      createdAt: ago(5 * HOUR),
      loves: [{ personId: 'sistur', at: ago(3 * HOUR) }],
      saves: [],
    },
    {
      id: 'chicken-blanquette',
      cover: chickenBlanquette,
      title: 'Chicken Blanquette',
      cuisine: 'French',
      authorId: 'sistur',
      groupId: 'home-kitchen',
      parentId: 'blanquette-de-veau',
      twistNote:
        'Chicken thighs instead of veal, so it cooks in under an hour. Leeks join the carrots.',
      servings: 4,
      minutes: 70,
      story:
        "Couldn't find veal at the supermarket and refused to give up on rainy-day dinner. It worked better than expected.",
      ingredients: [
        {
          items: [
            { qty: 800, unit: 'g', name: 'chicken thighs, bone in' },
            { qty: 2, name: 'carrots, cut into chunks' },
            { qty: 1, name: 'leek, sliced' },
            { qty: 1, name: 'onion, studded with 2 cloves' },
            { qty: 1, name: 'bouquet garni' },
            { qty: 250, unit: 'g', name: 'button mushrooms' },
            { qty: 30, unit: 'g', name: 'butter' },
            { qty: 30, unit: 'g', name: 'plain flour' },
            { qty: 150, unit: 'ml', name: 'crème fraîche' },
            { qty: 1, name: 'egg yolk' },
            { qty: 0.5, name: 'lemon, juiced' },
          ],
        },
      ],
      steps: [
        'Cover the chicken with cold water, bring to a boil and skim.',
        'Add the carrots, leek, onion and bouquet garni and simmer for 35 minutes.',
        'Sauté the mushrooms in a little butter until golden.',
        'Lift out the chicken and vegetables and keep 750 ml of the broth. Make a velouté with the butter, flour and broth.',
        'Off the heat, stir in the crème fraîche, egg yolk and lemon juice.',
        'Return the chicken, vegetables and mushrooms, warm through and serve with rice.',
      ],
      allergens: ['gluten', 'egg', 'milk', 'celery'],
      createdAt: ago(12 * DAY),
      loves: [{ personId: 'me', at: ago(11 * DAY) }],
      saves: [],
    },
    {
      id: 'midnight-cupcakes',
      cover: midnightCupcakes,
      title: 'Midnight Chocolate Cupcakes',
      cuisine: 'Home baking',
      authorId: 'sistur',
      groupId: 'birthday',
      parentId: 'chocolate-cake',
      twistNote:
        "Mom's batter baked as 24 cupcakes, with whipped ganache piped on top. Perfect for school and office birthdays.",
      servings: 24,
      minutes: 60,
      story:
        "You can't bring a two-layer cake on the train. You can bring a box of these, and everyone gets their own candle.",
      ingredients: [
        {
          title: 'Cupcakes',
          items: [
            { qty: 250, unit: 'g', name: 'plain flour' },
            { qty: 75, unit: 'g', name: 'cocoa powder' },
            { qty: 300, unit: 'g', name: 'sugar' },
            { qty: 2, unit: 'tsp', name: 'baking soda' },
            { qty: 2, name: 'eggs' },
            { qty: 250, unit: 'ml', name: 'buttermilk' },
            { qty: 125, unit: 'ml', name: 'vegetable oil' },
            { qty: 250, unit: 'ml', name: 'hot coffee' },
          ],
        },
        {
          title: 'Whipped ganache',
          items: [
            { qty: 200, unit: 'g', name: 'dark chocolate, chopped' },
            { qty: 300, unit: 'ml', name: 'double cream' },
          ],
        },
      ],
      steps: [
        'Make the ganache first: pour the hot cream over the chocolate, stir until smooth and chill for 2 hours.',
        'Preheat the oven to 175°C and line two 12-hole muffin tins.',
        'Make the batter as for the cake and fill each case two-thirds full.',
        'Bake for 18 minutes, until a skewer comes out clean. Cool completely.',
        'Whip the cold ganache until light and fluffy, then pipe onto the cupcakes.',
      ],
      allergens: ['gluten', 'egg', 'milk'],
      createdAt: ago(16 * DAY),
      loves: [
        { personId: 'mom', at: ago(15 * DAY) },
        { personId: 'me', at: ago(15 * DAY) },
      ],
      saves: [{ personId: 'me', at: ago(15 * DAY) }],
    },
    {
      id: 'soto-ayam',
      cover: sotoAyam,
      title: 'Soto Ayam',
      cuisine: 'Indonesian',
      authorId: 'grandma',
      groupId: 'comfort-foods',
      parentId: 'chicken-soup',
      twistNote:
        'The same simmered chicken, but with a turmeric and lemongrass broth, glass noodles and all the toppings.',
      servings: 6,
      minutes: 100,
      story:
        'James, your soup is good. But when I had the flu, my mother made this. Now you have both.',
      ingredients: [
        {
          items: [
            { qty: 1, name: 'whole chicken (about 1.5 kg)' },
            { qty: 2, unit: 'stalks', name: 'lemongrass, bruised' },
            { qty: 4, name: 'kaffir lime leaves' },
            { qty: 3, unit: 'cm', name: 'galangal, sliced' },
            { qty: 100, unit: 'g', name: 'glass noodles' },
            { qty: 100, unit: 'g', name: 'bean sprouts' },
          ],
        },
        {
          title: 'Spice paste',
          items: [
            { qty: 6, name: 'shallots' },
            { qty: 4, unit: 'cloves', name: 'garlic' },
            { qty: 4, unit: 'cm', name: 'turmeric' },
            { qty: 2, unit: 'cm', name: 'ginger' },
            { qty: 3, name: 'candlenuts' },
            { qty: 1, unit: 'tsp', name: 'coriander seeds' },
          ],
        },
        {
          title: 'To serve',
          items: [
            { qty: 3, name: 'hard-boiled eggs, halved' },
            { qty: 2, unit: 'tbsp', name: 'fried shallots' },
            { qty: 1, name: 'lime, in wedges' },
            { qty: 1, unit: 'handful', name: 'celery leaves, chopped' },
            { qty: 2, unit: 'tbsp', name: 'sambal' },
          ],
        },
      ],
      steps: [
        'Cover the chicken with cold water, bring to a simmer and skim.',
        'Blend the spice paste and fry it for 5 minutes until fragrant. Stir it into the pot with the lemongrass, lime leaves and galangal.',
        'Simmer for 60 minutes. Lift out the chicken, shred the meat and season the broth with salt.',
        'Soak the glass noodles in hot water for 5 minutes and blanch the bean sprouts.',
        'Put noodles, sprouts and chicken in each bowl, ladle over the yellow broth and add the toppings.',
      ],
      allergens: ['egg', 'tree nuts', 'celery'],
      createdAt: ago(2 * DAY),
      loves: [
        { personId: 'cousin-james', at: ago(40 * HOUR) },
        { personId: 'auntie-kate', at: ago(30 * HOUR) },
        { personId: 'me', at: ago(20 * HOUR) },
      ],
      saves: [{ personId: 'cousin-james', at: ago(40 * HOUR) }],
    },
    {
      id: 'baked-lumpia',
      cover: bakedLumpia,
      title: 'Baked Veggie Lumpia',
      cuisine: 'Filipino',
      authorId: 'me',
      groupId: 'comfort-foods',
      parentId: 'lumpia',
      twistNote:
        'Filled with vegetables and glass noodles instead of pork, brushed with oil and baked rather than deep-fried.',
      servings: 20,
      minutes: 60,
      story:
        "My flat has no extractor fan and a very sensitive smoke alarm. Auntie Kate says they're \"good for baked\". I'll take it.",
      ingredients: [
        {
          items: [
            { qty: 2, name: 'carrots, grated' },
            { qty: 200, unit: 'g', name: 'cabbage, finely shredded' },
            { qty: 150, unit: 'g', name: 'green beans, finely sliced' },
            { qty: 50, unit: 'g', name: 'glass noodles, soaked and cut' },
            { qty: 1, name: 'onion, finely chopped' },
            { qty: 3, unit: 'cloves', name: 'garlic, minced' },
            { qty: 2, unit: 'tbsp', name: 'soy sauce' },
            { qty: 20, name: 'spring roll wrappers' },
            { qty: 3, unit: 'tbsp', name: 'neutral oil, for brushing' },
          ],
        },
      ],
      steps: [
        'Preheat the oven to 210°C and line a tray with baking paper.',
        'Fry the onion and garlic until soft, add the vegetables and cook for 4 minutes. Stir in the noodles and soy sauce and let cool.',
        'Roll a thin line of filling in each wrapper, folding in the sides, and seal with water.',
        'Brush all over with oil and bake for 20 minutes, turning halfway, until crisp and golden.',
      ],
      allergens: ['gluten', 'soy'],
      createdAt: ago(9 * DAY),
      loves: [{ personId: 'auntie-kate', at: ago(8 * DAY) }],
      saves: [],
    },
    {
      id: 'winter-punch',
      cover: winterPunch,
      title: 'Alcohol-Free Winter Punch',
      cuisine: 'German',
      authorId: 'auntie-kate',
      groupId: 'christmas-eve',
      parentId: 'mulled-wine',
      twistNote:
        'Grape and apple juice instead of red wine, with fresh ginger. Same spices, safe for the kids and the drivers.',
      servings: 10,
      minutes: 25,
      story:
        'The kids kept asking why the grown-ups got the nice-smelling drink. Now everyone gets a mug.',
      ingredients: [
        {
          items: [
            { qty: 1, unit: 'l', name: 'red grape juice' },
            { qty: 1, unit: 'l', name: 'cloudy apple juice' },
            { qty: 2, name: 'oranges, sliced' },
            { qty: 3, unit: 'cm', name: 'ginger, sliced' },
            { qty: 3, name: 'cinnamon sticks' },
            { qty: 6, name: 'cloves' },
            { qty: 2, name: 'star anise' },
          ],
        },
      ],
      steps: [
        'Put everything into a large pot.',
        'Warm over low heat for 20 minutes. It can simmer, there is no alcohol to lose.',
        'Ladle into mugs with a slice of orange.',
      ],
      allergens: [],
      createdAt: ago(65 * DAY),
      loves: [
        { personId: 'grandma', at: ago(60 * DAY) },
        { personId: 'mom', at: ago(60 * DAY) },
      ],
      saves: [],
    },
    {
      id: 'chocolate-butter-cookies',
      cover: chocolateButterCookies,
      title: 'Chocolate-Dipped Butter Cookies',
      cuisine: 'Dutch',
      authorId: 'me',
      groupId: 'christmas-eve',
      parentId: 'butter-cookies',
      twistNote:
        "Grandma's rosettes, half-dipped in dark chocolate and finished with chopped pistachios.",
      servings: 30,
      minutes: 70,
      story:
        "If Uncle Robert is going to empty the tin anyway, they may as well be fancy. I've hidden this batch somewhere else.",
      ingredients: [
        {
          title: 'Cookies',
          items: [
            { qty: 250, unit: 'g', name: 'unsalted butter, softened' },
            { qty: 125, unit: 'g', name: 'icing sugar' },
            { qty: 1, name: 'egg yolk' },
            { qty: 1, unit: 'tsp', name: 'vanilla extract' },
            { qty: 300, unit: 'g', name: 'plain flour' },
            { qty: 1, unit: 'pinch', name: 'salt' },
          ],
        },
        {
          title: 'To finish',
          items: [
            { qty: 150, unit: 'g', name: 'dark chocolate' },
            { qty: 40, unit: 'g', name: 'pistachios, finely chopped' },
          ],
        },
      ],
      steps: [
        "Make and bake the cookies following Grandma's recipe. Let them cool completely.",
        'Melt the chocolate gently over a pan of barely simmering water.',
        'Dip half of each cookie in the chocolate and lay it on baking paper.',
        'Sprinkle with pistachios before the chocolate sets. Leave for 30 minutes to firm up.',
      ],
      allergens: ['gluten', 'egg', 'milk', 'tree nuts'],
      createdAt: ago(75 * DAY),
      loves: [
        { personId: 'grandma', at: ago(74 * DAY) },
        { personId: 'uncle-robert', at: ago(3 * HOUR) },
      ],
      saves: [],
    },
  ]

  const comments: Comment[] = [
    {
      id: 'c12',
      recipeId: 'extra-garlic-bolognese',
      authorId: 'me',
      text: 'Okay. Fine. You were right.',
      createdAt: ago(4 * HOUR),
    },
    {
      id: 'c13',
      recipeId: 'soto-ayam',
      authorId: 'cousin-james',
      text: 'Grandma just out-souped me. Making this tonight.',
      createdAt: ago(38 * HOUR),
    },
    {
      id: 'c14',
      recipeId: 'potstickers',
      authorId: 'grandma',
      text: 'Crispy is fine. But fold them neater, Robert.',
      createdAt: ago(20 * DAY),
    },
    {
      id: 'c15',
      recipeId: 'lentil-bolognese',
      authorId: 'mom',
      text: 'Could use more garlic.',
      createdAt: ago(3 * DAY),
    },
    {
      id: 'c16',
      recipeId: 'chocolate-butter-cookies',
      authorId: 'uncle-robert',
      text: 'Found them.',
      createdAt: ago(2 * HOUR),
    },
    {
      id: 'c17',
      recipeId: 'winter-punch',
      authorId: 'uncle-robert',
      text: 'Respectfully, I will be sticking with the original.',
      createdAt: ago(60 * DAY),
    },
  ]

  return { recipes, comments }
}

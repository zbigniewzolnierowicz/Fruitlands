// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    const deployRecipe = (input, catalyst, output) => event.recipes.create.deploying([output], [input, catalyst])
    const knifeRecipe = (input, output) => deployRecipe(input, '#c:tools/knives', output)

    knifeRecipe('minecraft:porkchop', Item.of('farmersdelight:bacon', 2))
    knifeRecipe('minecraft:beef', Item.of('farmersdelight:minced_beef', 2))
    knifeRecipe('minecraft:chicken', Item.of('farmersdelight:chicken_cuts', 2))
    knifeRecipe('minecraft:cooked_chicken', Item.of('farmersdelight:cooked_chicken_cuts', 2))
    knifeRecipe('minecraft:cod', Item.of('farmersdelight:cod_slice', 2))
    knifeRecipe('minecraft:cooked_cod', Item.of('farmersdelight:cooked_cod_slice', 2))
    knifeRecipe('minecraft:salmon', Item.of('farmersdelight:salmon_slice', 2))
    knifeRecipe('minecraft:cooked_salmon', Item.of('farmersdelight:cooked_salmon_slice', 2))
    knifeRecipe('minecraft:mutton', Item.of('farmersdelight:mutton_chops', 2))
    knifeRecipe('minecraft:cooked_mutton', Item.of('farmersdelight:cooked_mutton_chops', 2))
    knifeRecipe('#c:dough', 'farmersdelight:raw_pasta')
    knifeRecipe('farmersdelight:smoked_ham', Item.of('minecraft:cooked_porkchop', 2))
    knifeRecipe('farmersdelight:ham', Item.of('minecraft:porkchop', 2))
    knifeRecipe('farmersdelight:sweet_berry_cheesecake', Item.of('farmersdelight:sweet_berry_cheesecake_slice', 4))
    knifeRecipe('farmersdelight:chocolate_pie', Item.of('farmersdelight:chocolate_pie_slice', 4))
    knifeRecipe('farmersdelight:apple_pie', Item.of('farmersdelight:apple_pie_slice', 4))
    // NOTE: doesn't work for some reason
    // knifeRecipe('minecraft:pumpkin_pie', Item.of('delightfulcreators:pumpkin_pie_slice', 4))
    knifeRecipe('minecraft:pumpkin', Item.of('farmersdelight:pumpkin_slice', 4))
    knifeRecipe('minecraft:melon', Item.of('minecraft:melon_slice', 9))
    knifeRecipe('farmersdelight:kelp_roll', Item.of('farmersdelight:kelp_roll_slice', 3))
    knifeRecipe('farmersdelight:cabbage', Item.of('farmersdelight:cabbage_leaf', 2))
})


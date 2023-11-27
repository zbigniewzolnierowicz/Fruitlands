ServerEvents.recipes(event => {
	event.remove({ output: 'luphieclutteredmod:small_shelf' })
	event.shaped('luphieclutteredmod:small_shelf', [
		'AAA',
		'   ',
		'   ',
	], {
		A: 'minecraft:oak_slab'
	})
})

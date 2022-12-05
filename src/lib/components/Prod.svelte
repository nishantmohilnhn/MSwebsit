<script>
	let productsTypes = [
		{
			title: 'Baby Diaper',
			subtitel: 'Open and Pull-Up',
			imgsrc:
				'https://images.unsplash.com/photo-1613465457505-42eaac07c3e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
		},
		{
			title: 'Adult Diaper ',
			subtitel: 'Open and Pull-Up',
			imgsrc:
				'https://images.unsplash.com/photo-1613732437147-f5878329f6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
		},
		{
			title: 'Sanitary Napkin',
			subtitel: 'Single and Double Wings',
			imgsrc:
				'https://images.unsplash.com/photo-1613733451221-c3e5e37e4b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			title: 'Panty Liner',
			subtitel: ' ',
			imgsrc:
				'https://images.unsplash.com/photo-1534639077088-d702bcf685e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
		},
		{
			title: 'Under Pad',
			subtitel: ' ',
			imgsrc:
				'https://images.unsplash.com/photo-1612882514773-2bf558552e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			title: 'Wet - Wipes',
			subtitel: ' ',
			imgsrc:
				'https://images.unsplash.com/photo-1633265484557-e298493cb162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
		},
		{
			title: 'Toilet Paper',
			subtitel: ' ',
			imgsrc:
				'https://images.unsplash.com/photo-1584374829107-d5edbfe98d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
		},
		{
			title: 'Pocket Tissue',
			subtitel: ' ',
			imgsrc:
				'https://images.unsplash.com/photo-1502148589715-3f209594d750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80'
		}
	];
</script>

<section class="mt-4">
	<h1 class="text-center text-2xl font-extrabold text-my-nvy1">Product Design</h1>
	<p class="mt-2 font-Roboto p-2 text-center font-semibold text-gray-700">
		We Have Provided the Design of the Quality Product List are According to below.
	</p>
	<section class=" ">
		<div class=" static items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
			<div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
				{#each productsTypes as i}
					
				<div class="p-6">
					<img class="object-cover object-center w-full mb-8  lg:h-48 h-36 rounded-xl" src="{i.imgsrc}" alt="blog">
					<div class="inline-flex justify-between w-full">
						<h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">{i.title}.</h1>
						<span>$00.00</span>
					</div>
					<p class="mx-auto text-base font-medium leading-relaxed text-gray-500">{i.subtitel}</p>
				
				</div>
				{/each}	

			</div>
		</div>
	</section>
	<!-- product segment--->
</section>

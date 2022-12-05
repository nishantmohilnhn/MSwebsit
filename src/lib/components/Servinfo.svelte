<script>
	let databo = [
		{
			name: 'Plant Layout',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'Machinery Layout',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'Product Validation',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'Class Room Tanning ',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'On Job Tanning ',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'Raw Materials Selection ',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'Labour Inquiry ',
			tagline: 'we provide the best possible service'
		},
		{
			name: 'one solution Services. ',
			tagline: 'we provide the best possible service'
		}
	];
</script>

<section class=" body-font ">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h2 class="text-xs text-my-purp1 tracking-widest font-medium title-font mb-1">
				Our Services
			</h2>
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-my-nvy1">
				Creating Quality Solutions For the Personal Hygiene Industry.
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				we help you Appropriate and under budget machine and give the Profitable Business according
				your need . <br />Our Experts will analyse your market . Also work on low cost, product
				performance benchmarks, required product size and machine speed.so our experts customized
				your machine according your Requirements :<br /> Minimum Wastage ,High Productivity , good Accuracy
				and Best Quality of final Product .
			</p>
		</div>

		<div class="flex flex-wrap">
			{#each databo as i}
				<div
					class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
				>
					<h2 class="text-lg text-my-nvy1 sm:text-xl font-medium title-font mb-2">{i.name}</h2>
					<p class="leading-relaxed text-base mb-4 ">{i.tagline}</p>
					<a href="/services" class=" text-my-nvy1 inline-flex items-center"
						>Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			{/each}
		</div>
		<button
			class="flex mx-auto mt-16 text-white bg-my-nvy1 border-0 py-2 px-8 focus:outline-none hover:bg-my-blue rounded text-lg"
			>Button</button
		>
	</div>
</section>

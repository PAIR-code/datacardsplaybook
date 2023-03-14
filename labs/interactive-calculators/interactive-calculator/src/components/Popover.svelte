<!-- Copyright 2022 Google LLC. All Rights Reserved. Licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) -->

<script>
	
	// Importing styles
	import main from 'styles/main.scss';
	import variables from 'styles/variables.scss';

	const click;
	
	function enter() {
		click = true;
	}
	
	function leave() {
		click = false; 
	}
		
	let Popover = [{
		id: 1,
		heading: "Agents",
		definition: "use, evaluate, or determine how the dataset is used",
		example: "Examples include Machine Learning or Product Engineers, Researchers, 3rd Party Vendors, Subject Matter Experts, Leadership or Managers.",
		additionalinfo: "Agents are important because their work is affected by availability, updates, and data removal. These decisions can directly affect the goals of producers or core agents."
		}, 
		{
		id: 2,
		heading: "Data Fluency",
		question: "How familiar and comfortable does the agent have with data, either in or outside of their domain of expertise?",
		example: ""	
		}, 
		{
		id: 3,
		heading: "Domain Expertise",
		question: "What knowledge and understanding of the essential aspects of a specific field of inquiry, in the domain of the dataset does the agent have?",
		example: ""	
		},
		{
		id: 4,
		heading: "Value judgment",
		example: "Value judgments in this case include accountability / utility / quality / impact & consequences / risks & recommendations",
		},
		{
		id: 5,
		heading: "Accountability",
		definition: "Statements that express different stakeholders’ reflective, reasonable, and systematic decisions regarding the trust in the dataset",
		question: "What do you want to know about the publishers of the dataset? What is the paradigm of the dataset? What are the explanations and motivations for creating the dataset?",
		example: "Authorship, maintenance, responsibility"	
		},
		{
		id: 6,
		heading: "paradigm",
		definition: "any updates, refreshes, or additions to the data"
		},
		{
		id: 7,
		heading: "Impact & Consequences",
		definition: "Information that help readers achieve their desirable outcomes when using and managing the dataset, acknowledging consequences that could negatively impact their goals",
		question: "What are any past usage and associated performance of the dataset? What are the policies associated with the dataset? Are there any known patterns within the data set?",
		example: "Efficacious, relevance, group benefit, implications"	
		},
		{
		id: 8,
		heading: "performance",
		definition: "includes models trained"
		},
		{
		id: 9,
		heading: "policies",
		definition: "includes licensing and more"
		},
		{
		id: 10,
		heading: "efficacious",
		definition: "the power or capacity to produce the desired result "
		},
		{
		id: 11,
		heading: "Quality",
		definition: "Summarizes the rigor, integrity and completeness of the dataset, communicated in a manner that’s accessible to many readers",
		question: "Are there any known patterns within the dataset? Any dataset validation processes, explanations, and results? What privacy and security measures were the datasets?",
		example: "validity, reliability, intergrity, reproducibility"	
		},
		{
		id: 12,
		heading: "patterns",
		definition: "correlations, biases, and skews",
		example: ""	
		},
		{
		id: 13,
		// TODO: Edit the definitions as necessary
		heading: "Risk & Recommendations",
		definition: "makes readers aware of known and potential risks associated with the dataset, stemming from representation, use, or context of use.",
		question: "What are the safety of using the dataset? What are any socio-cultural, geopolitical, or economic representations of people in the dataset? Are there any attributes missing from the dataset documentation?",
		example: "risks, group harms, recommendations, mitigation"	
		},
		{
		id: 14,
		heading: "safety",
		definition: "risks, limitations, and tradeoffs of using the dataset",
		example: ""	
		},
		{
		id: 15,
		heading: "socio-cultural",
		definition: "combining social and cultural factors",
		example: ""	
		},
		{
		id: 16,
		heading: "geopolitical",
		definition: "combining politics and geographical factors",
		example: "trade agreements, climate agreements, balance of power"	
		},
		{
		id: 17,
		heading: "Utility",
		definition: "provides details that satisfy readers’ responsible decision-making process needs, and establish use cases suitability as it pertains to their goals",
		question: "What are the definitions and explanations for technical terms used in the documentation? What are the expectations around using datasets with other datasets or tables? What is the intended application of the dataset?",
		example: "Producer needs, user needs, agent needs, societal needs"	
		},
		{
		id: 18,
		heading: "technical terms",
		definition: "metrics, scores, industry-specific terms, acronyms",
		example: ""	
		},
		{
		id: 19,
		heading: "other datasets",
		definition: "feature engineering, joining, sampling, comparative analysis, etc",
		example: ""	
		}
	]
	
	</script>
	
	<!-- Popover as a slot element, so we can put items inside -->

	<div class="Popover">
		<slot></slot>
	</div>

	<button on:click=
		{() => (visible = true)} bind:this={anchor}>Open
	</button>

	<!--<popover on:click= {() => (visible = true)}Open</popover>-->
	
	<Popover let:Popover={Popover}>
	{#if visible}
		<div slot: active>
			<h1>{heading}</h1>
			<p>{definition}</p>
			<p-strong strong>Discuss</p-strong> <p>{question}</p>
			<p-strong strong>Examples</p-strong> <p>{example}</p>
			<p>{additionalinfo}</p>
			<!-- <slot> Button {#if Clicked} refer to the file </slot>-->
		</div>
	</Popover>
	{/if}
	
	<style lang="scss">
		.popover {
			border: 1px solid #{$concrete-200};
			box-shadow: 1px 1px 1px #{$concrete-200};
			background: #{$concrete-100};
			border-radius: 4px;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			padding: 4px;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 100%;
			left: 0; 
		}
	</style>
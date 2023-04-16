namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		/**
		 * GitHub Personal Access Token (PAT)
		 *
		 * @description Token used for fetching repositories
		 */
		GITHUB_PAT: string;
	}
}

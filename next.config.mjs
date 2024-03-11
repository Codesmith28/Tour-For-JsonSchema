/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.md$/,
			// This is the asset module.
			type: "asset/source",
		});
		return config;
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	output: process.env.HOST === "Vercel" ? "" : "export",
	basePath: process.env.HOST === "Vercel" ? "" : "/Tour-For-JsonSchema",
};

export default nextConfig;

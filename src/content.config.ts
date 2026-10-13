import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const TZ = 'America/Chicago';

// Date-only values (e.g. 'Oct 11 2026') are treated as midnight in Central time,
// so they render on the same calendar day regardless of the build machine's zone.
function chicagoMidnight(y: number, m: number, d: number): Date {
	const utcGuess = Date.UTC(y, m, d);
	const parts = new Intl.DateTimeFormat('en-US', {
		timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
		hour: '2-digit', minute: '2-digit', second: '2-digit',
	}).formatToParts(new Date(utcGuess));
	const get = (t: string) => Number(parts.find((p) => p.type === t)!.value);
	const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
	return new Date(utcGuess + (utcGuess - asUtc));
}

const centralDate = z.preprocess((v) => {
	if (v instanceof Date) {
		// YAML date-only values arrive as UTC midnight.
		if (v.getUTCHours() === 0 && v.getUTCMinutes() === 0 && v.getUTCSeconds() === 0) {
			return chicagoMidnight(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate());
		}
		return v;
	}
	if (typeof v === 'string' && !/\d:\d/.test(v)) {
		const u = new Date(`${v} UTC`);
		const base = isNaN(u.valueOf()) ? new Date(v) : u;
		if (!isNaN(base.valueOf())) {
			return chicagoMidnight(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate());
		}
	}
	return v;
}, z.coerce.date());

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: centralDate,
			updatedDate: centralDate.optional(),
			heroImage: z.optional(image()),
			heroImageAlt: z.string().optional(),
		}),
});

export const collections = { blog };

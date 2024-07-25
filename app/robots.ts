import { DATA } from "@/data/resume";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*"
            },
        ],
        sitemap: `${DATA.url}/sitemap.xml`
    }
}
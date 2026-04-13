import { motion } from 'framer-motion';

export function Experience() {
    const technicalExperiences = [
        {
            title: 'Researcher - Fine-Tuning Small Language Models',
            organization: 'LNMIIT, Jaipur',
            duration: 'Aug 2025 - Present',
            description: 'Engaged in research focused on optimizing small language models (SLMs) for performance comparable to large language models (LLMs). Designed custom datasets, implemented fine-tuning pipelines, and performed comparative evaluations across models like Phi-4, Qwen3, Gemini, and Mistral-7B.',
        },
        {
            title: 'Open Source Contributor',
            organization: 'GSSoC\'25 & Hacktoberfest\'25',
            duration: '2025',
            description: 'Selected Contributor at GSSoC\'25, collaborating with maintainers to submit meaningful PRs and earning a verified contributor certificate. Additionally recognized as a Hacktoberfest\'25 Super-Contributor for delivering impactful pull requests and earning the Super-Contribution badge.',
        },
    ];

    return (
        <section id="experience" className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Technical Experience</h2>
                <div className="space-y-12">
                    {technicalExperiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-8 border-l border-zinc-800"
                        >
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                <h3 className="text-lg font-medium text-white">{exp.title}</h3>
                                <span className="text-sm text-zinc-500">{exp.duration}</span>
                            </div>
                            <p className="text-blue-400 text-sm mb-3">{exp.organization}</p>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
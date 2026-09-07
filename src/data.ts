import { AgentInfo, PendingTask, FaqItem, BlogPost } from './types';

export const AGENTS: AgentInfo[] = [
  {
    id: 'strategist',
    name: 'Content Strategist AI',
    tagline: 'Your research and planning engine',
    role: 'Market & Audience Intelligence',
    icon: 'account_tree',
    color: '#6366F1',
    accentGradient: 'from-indigo-600 via-indigo-700 to-indigo-900',
    theme: {
      primary: '#6366F1',
      bg: 'bg-indigo-600',
      text: 'text-indigo-600',
      lightBg: 'bg-indigo-50/80',
      border: 'border-indigo-200',
      badgeBg: 'bg-indigo-100',
      badgeText: 'text-indigo-900',
      badgeBorder: 'border-indigo-300',
      dotColor: 'bg-indigo-500'
    },
    description: 'Analyzes your market, audience, and competitors to build a data-backed content strategy that drives results.',
    fullManifesto: 'Content Strategist AI acts as your senior marketing director and research engine. Operating 24/7, it synthesizes search intent shifts, competitive counter-moves, TAM expansion opportunities, and audience purchase friction. Instead of disjointed brainstorms, it outputs high-confidence editorial calendars and topical authority maps that inform every other agent in the mesh.',
    capabilities: [
      'Audience and competitor research',
      'Content calendar generation',
      'Topic clustering and gap analysis',
      'Performance-based strategy refinement',
      'TAM & ICP buyer persona modeling',
      'Semantic authority graph mapping'
    ],
    metrics: [
      { label: 'Strategic Gaps Mapped', value: '3,480', sub: 'Across 14 competitor domains', trend: '+28% this month', icon: 'radar' },
      { label: 'Cluster Relevance Score', value: '98.4%', sub: 'Based on semantic intent graphs', trend: 'High Confidence', icon: 'verified' },
      { label: 'Planning Velocity', value: '45 sec', sub: 'Full quarter roadmap synthesis', trend: 'Instant sync', icon: 'speed' },
      { label: 'Attributed Traffic Lift', value: '+140%', sub: 'Targeted keyword visibility', trend: 'Top 3 positions', icon: 'trending_up' }
    ],
    workflows: [
      {
        stepNumber: 1,
        title: 'Competitor Footprint Ingestion',
        description: 'Continuously crawls 20+ rival sites, indexing publishing cadence, backlink velocity, and organic rank shifts.',
        outputArtifact: 'Competitive Vulnerability Matrix (JSON/CSV)'
      },
      {
        stepNumber: 2,
        title: 'Topical Authority Graphing',
        description: 'Groups keywords into coherent semantic hubs with pillar-spoke architecture and internal linking schemas.',
        outputArtifact: 'Topic Cluster Blueprint & Intent Taxonomy'
      },
      {
        stepNumber: 3,
        title: 'Editorial Roadmap Dispatch',
        description: 'Generates prioritized editorial calendar with automated briefs sent directly to Content Writer AI and SEO Agent.',
        outputArtifact: 'Quarterly Synchronized Editorial Calendar'
      },
      {
        stepNumber: 4,
        title: 'Attribution & Iteration Feedback',
        description: 'Monitors conversion yield from published pieces and dynamically reallocates topical focus based on revenue ROI.',
        outputArtifact: 'Closed-Loop Strategy Refinement Feed'
      }
    ],
    integrations: [
      { name: 'Google Search Console', category: 'Search Data', icon: 'travel_explore', status: 'connected', latency: '42ms' },
      { name: 'Ahrefs API', category: 'Backlink & Keyword Crawl', icon: 'link', status: 'connected', latency: '110ms' },
      { name: 'Semrush Enterprise', category: 'Competitive Intelligence', icon: 'analytics', status: 'connected', latency: '85ms' },
      { name: 'Notion Workspace', category: 'Knowledge Management', icon: 'folder_open', status: 'connected', latency: '60ms' },
      { name: 'HubSpot Marketing Hub', category: 'CRM & Pipeline Data', icon: 'hub', status: 'available', latency: '—' }
    ],
    artifacts: [
      {
        id: 'art-strat-1',
        title: 'Q3 Enterprise Multi-Agent GTM Content Blueprint',
        type: 'Editorial Strategy Dossier',
        date: 'Sept 02, 2026',
        readTimeOrSize: '14 pages',
        summary: 'Targeting Series B-D CTOs & VP Growth. Outlines 4 pillar hubs, 16 satellite articles, and 6 high-intent calculator tools.',
        badge: 'Quarterly Pillar',
        status: 'Live'
      },
      {
        id: 'art-strat-2',
        title: 'Competitive Gap Analysis: Legacy Martech vs. Autonomous Meshes',
        type: 'Intelligence Report',
        date: 'Aug 29, 2026',
        readTimeOrSize: '8 pages',
        summary: 'Identified 38 undefended organic queries where competitors have zero structured technical content.',
        badge: 'High-Intent Gap',
        status: 'Verified'
      },
      {
        id: 'art-strat-3',
        title: 'Enterprise FinTech ICP Persona & Friction Mapping',
        type: 'Audience Matrix',
        date: 'Aug 22, 2026',
        readTimeOrSize: '5 pages',
        summary: 'Mapped 3 distinct decision-maker tracks (Security, Ops, Finance) with custom narrative hooks for each.',
        badge: 'Audience Model',
        status: 'Published'
      }
    ],
    interactiveDemo: {
      placeholder: 'Enter a competitor domain or product category to generate a strategic cluster brief...',
      presets: [
        {
          id: 'p-strat-1',
          title: 'Autonomous AI for B2B SaaS',
          prompt: 'Generate an organic topic cluster for enterprise AI workflow automation targeting VP Engineering.',
          expectedOutput: {
            title: 'Topical Authority Plan: Autonomous Engineering Workflows',
            summary: 'Identified 18 high-intent commercial queries with low KD (<35) and aggregate volume of 54,000 monthly searches.',
            details: [
              'Pillar 1: "State of Autonomous Agent Mesh Architectures in 2026" (Target: 3,200 words)',
              'Cluster Spoke A: "Zero-Latency Context Sharing in Multi-Agent Pipelines" (Technical Guide)',
              'Cluster Spoke B: "SOC-2 Compliance Checklist for Enterprise Agent Swarms" (High Conversion Gate)',
              'Distribution: Co-scheduled with Paid Marketing AI for remarketing to whitepaper downloaders.'
            ],
            metrics: 'Projected 60-Day Organic Sessions: +48,500 • Est. Pipeline Value: $240,000',
            actionLabel: 'Dispatch Briefs to Content Writer'
          }
        },
        {
          id: 'p-strat-2',
          title: 'FinTech Compliance & Identity',
          prompt: 'Audit topic gaps against legacy identity verification competitors.',
          expectedOutput: {
            title: 'Vulnerability Analysis: Real-Time Synthetic Identity Defense',
            summary: 'Competitors lack modern coverage for AI deepfake KYC attacks. Prime opportunity for category creation.',
            details: [
              'Primary Keyword Gap: "Real-time biometric deepfake prevention API" (Volume: 12.4k/mo)',
              'Recommended Format: Interactive benchmark test + whitepaper',
              'Collaborating Agents: Social Media AI for LinkedIn document carousel, Paid AI for search intent capture.'
            ],
            metrics: 'Category Ownership Probability: 92% • Expected Top 3 Ranking: 30 days',
            actionLabel: 'Queue Strategic Cluster'
          }
        }
      ]
    },
    sampleOutput: {
      title: 'Q3 Enterprise B2B SaaS Cluster Plan',
      type: 'Strategy Blueprint',
      content: 'Identified 14 high-intent semantic gaps around "Autonomous AI Agents for GTM". Projected organic traffic lift: +42k monthly sessions within 60 days. Prioritizing 4 pillar articles + 12 cluster assets.',
      metrics: 'Expected Lift: +140% Search Visibility'
    }
  },
  {
    id: 'writer',
    name: 'Content Writer AI',
    tagline: 'From brief to publish-ready draft',
    role: 'Editorial & Brand Copywriting',
    icon: 'stylus_note',
    color: '#059669',
    accentGradient: 'from-emerald-600 via-emerald-700 to-emerald-900',
    theme: {
      primary: '#059669',
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50/80',
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      badgeBorder: 'border-emerald-300',
      dotColor: 'bg-emerald-500'
    },
    description: 'Produces blog posts, landing pages, email sequences, and more — all in your brand voice and optimized for engagement.',
    fullManifesto: 'Content Writer AI is trained on your exact brand guidelines, tone vectors, and editorial style books. It produces long-form technical essays, persuasive product landing pages, nurture email workflows, and executive thought leadership. Every piece includes structural hierarchy, contextual citations, clear data tables, and zero generic fluff.',
    capabilities: [
      'Long-form blog posts and articles',
      'Landing page and email copy',
      'Brand voice matching & style guide enforcement',
      'Built-in SEO optimization & readability',
      'Executive ghostwriting & op-eds',
      'Multi-variant headline & CTA generation'
    ],
    metrics: [
      { label: 'Words Authored', value: '1.24M', sub: 'Across 480 verified deliverables', trend: '+34% output', icon: 'edit_document' },
      { label: 'Brand Voice Fidelity', value: '99.4%', sub: 'Zero style guide deviations', trend: 'Strict adherence', icon: 'psychology' },
      { label: 'Average Readability', value: '78.2', sub: 'Flesch Reading Ease score', trend: 'Executive tier', icon: 'menu_book' },
      { label: 'Draft-to-Approval Time', value: '14 min', sub: 'Human-in-the-loop review cycle', trend: '7x acceleration', icon: 'timer' }
    ],
    workflows: [
      {
        stepNumber: 1,
        title: 'Strategy Ingestion & Angle Framing',
        description: 'Receives the topic brief from Content Strategist, loading brand voice matrices, tone guardrails, and target search intent.',
        outputArtifact: 'Narrative Outline & Hook Framework'
      },
      {
        stepNumber: 2,
        title: 'Exhaustive Deep Draft Assembly',
        description: 'Drafts publication-grade copy complete with data points, code snippets, quotes, visual asset placements, and semantic headers.',
        outputArtifact: 'Full-Length Draft (Markdown / HTML / Docs)'
      },
      {
        stepNumber: 3,
        title: 'Editorial Peer Review with SEO Agent',
        description: 'Collaborates with SEO Agent to embed optimal schema, internal links, keyword density, and meta tags without harming flow.',
        outputArtifact: 'SEO-Co-Optimized Production Copy'
      },
      {
        stepNumber: 4,
        title: 'Human Governance Dispatch',
        description: 'Dispatches finalized draft to the Cockpit Review Queue with line-by-line diff tracking and one-click editorial approval.',
        outputArtifact: 'Pending Governance Action Item'
      }
    ],
    integrations: [
      { name: 'Webflow CMS', category: 'Headless CMS', icon: 'web', status: 'connected', latency: '50ms' },
      { name: 'WordPress VIP', category: 'Publishing Platform', icon: 'newspaper', status: 'connected', latency: '65ms' },
      { name: 'Ghost CMS', category: 'Editorial Platform', icon: 'article', status: 'connected', latency: '40ms' },
      { name: 'Google Docs API', category: 'Collaborative Authoring', icon: 'description', status: 'connected', latency: '55ms' },
      { name: 'Customer.io / HubSpot', category: 'Email Automation', icon: 'mail', status: 'available', latency: '—' }
    ],
    artifacts: [
      {
        id: 'art-writ-1',
        title: 'The Death of the Fragmented Martech Stack (2,400 Words)',
        type: 'Long-Form Pillar Essay',
        date: 'Sept 01, 2026',
        readTimeOrSize: '9 min read',
        summary: 'Examines why disjointed point tools are yielding to autonomous multi-agent meshes in top-tier growth organizations.',
        badge: 'Pillar Article',
        status: 'Published'
      },
      {
        id: 'art-writ-2',
        title: 'Enterprise Autonomous Cockpit Launch: Product Landing Page',
        type: 'High-Converting LP Copy',
        date: 'Aug 26, 2026',
        readTimeOrSize: '1,200 words',
        summary: 'Frictionless value propositions, customer proof quotes, interactive feature breakdown, and pricing anchors.',
        badge: 'Landing Page',
        status: 'Live'
      },
      {
        id: 'art-writ-3',
        title: '5-Part Executive Onboarding & Activation Email Sequence',
        type: 'Nurture Campaign',
        date: 'Aug 20, 2026',
        readTimeOrSize: '5 emails',
        summary: 'Automated welcome and activation series achieving 64.2% open rates and 18.8% click-to-cockpit conversions.',
        badge: 'Email Sequence',
        status: 'Verified'
      }
    ],
    interactiveDemo: {
      placeholder: 'Enter a topic, headline idea, or content brief to generate an instant long-form opening...',
      presets: [
        {
          id: 'p-writ-1',
          title: 'The 2026 AI Agent Revolution',
          prompt: 'Draft an authoritative introduction for an article exploring why single-prompt LLM wrappers fail while autonomous meshes succeed.',
          expectedOutput: {
            title: 'The Illusion of Point Tools: Why Marketing Meshes Win in 2026',
            summary: 'Authored in clean, high-conviction editorial prose adhering to enterprise brand guidelines.',
            details: [
              'Opening Hook: "For three years, growth marketing fell into the trap of prompt inflation: copywriters prompting one chatbot, SEO leads auditing another, and paid managers adjusting bids in isolation."',
              'Core Thesis: The fundamental bottleneck of modern digital marketing was never the speed of text generation—it was the cognitive tax of stitching disconnected tools together.',
              'Structural Elements: 3 bold thematic sections, contextual comparison callout, and smooth segue into architectural diagrams.'
            ],
            metrics: 'Readability: 82 • Brand Voice Concordance: 99.8% • Word Count: 420 words',
            actionLabel: 'Send to Review Queue'
          }
        },
        {
          id: 'p-writ-2',
          title: 'Enterprise ROI Case Study',
          prompt: 'Write a compelling customer outcome teaser highlighting 65% reduction in manual marketing labor.',
          expectedOutput: {
            title: 'Case Study: How FinTech Scale-Up HyperFlow Reclaimed 40 Hours a Week',
            summary: 'Structured problem-solution-impact narrative with verifiable metrics and executive quotation.',
            details: [
              'Problem: 14 disconnected tools, 3 full-time coordinators buried in spreadsheet approvals.',
              'Solution: Impact AI 5-agent mesh deployed with bi-directional CRM integration.',
              'Outcome: 65% labor drop, 3.4x publishing cadence, and zero brand guideline deviations.'
            ],
            metrics: 'Conversion Potential: 4.6% • Sentiment: Authoritative & Inspiring',
            actionLabel: 'Publish to Blog'
          }
        }
      ]
    },
    sampleOutput: {
      title: 'Pillar: The Death of the Fragmented Martech Stack',
      type: 'Long-Form Article (2,400 words)',
      content: 'In 2026, modern marketing teams waste 65% of their working hours on manual task execution across disjointed point solutions. Autonomous agent meshes replace brute-force coordination with unified context...',
      metrics: 'Readability Score: 78 (Flesch) • Brand Match: 99.4%'
    }
  },
  {
    id: 'paid',
    name: 'Paid Marketing AI',
    tagline: 'Smarter ads, better ROI',
    role: 'PPC & Conversion Optimization',
    icon: 'campaign',
    color: '#D97706',
    accentGradient: 'from-amber-600 via-amber-700 to-amber-900',
    theme: {
      primary: '#D97706',
      bg: 'bg-amber-600',
      text: 'text-amber-700',
      lightBg: 'bg-amber-50/80',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      badgeBorder: 'border-amber-300',
      dotColor: 'bg-amber-500'
    },
    description: 'Creates, manages, and optimizes ad campaigns across Google, Meta, and LinkedIn — with real-time performance tuning.',
    fullManifesto: 'Paid Marketing AI acts as an algorithmic performance marketer managing ad spend with precision. It continually writes copy variations, isolates high-performing demographic clusters, coordinates cross-platform retargeting, and autonomously recommends budget shifts away from underperforming ad groups to maximize blendeed ROAS.',
    capabilities: [
      'Ad copy and creative generation',
      'Audience targeting and segmentation',
      'Budget optimization and bid management',
      'Cross-platform campaign coordination',
      'Real-time ROAS & CPA dynamic bid ceilings',
      'Automated creative fatigue detection'
    ],
    metrics: [
      { label: 'Blended ROAS', value: '4.82x', sub: 'Average across enterprise accounts', trend: '+1.9x vs manual', icon: 'attach_money' },
      { label: 'Budget Reallocated', value: '$84,200', sub: 'Autonomously shifted to winner sets', trend: '0 budget waste', icon: 'savings' },
      { label: 'Cost Per Acquisition', value: '$18.40', sub: 'Down from $46.50 baseline', trend: '-60.4% CPA', icon: 'pie_chart' },
      { label: 'Active Ad Variations', value: '340+', sub: 'Real-time multivariate testing', trend: 'Live across 4 channels', icon: 'view_carousel' }
    ],
    workflows: [
      {
        stepNumber: 1,
        title: 'Channel Signal & Organic Ingestion',
        description: 'Analyzes which blog posts and social items generated the highest conversion velocity to replicate their messaging in paid copy.',
        outputArtifact: 'High-Converting Hook Extraction'
      },
      {
        stepNumber: 2,
        title: 'Multi-Variant Ad Matrix Creation',
        description: 'Generates 20+ copy iterations with varied headline angles, emotional hooks, and value drivers for Google Search, Meta, and LinkedIn.',
        outputArtifact: 'Cross-Platform Creative Set'
      },
      {
        stepNumber: 3,
        title: 'Algorithmic Bid & Budget Steering',
        description: 'Continuously calibrates cost-per-click bids and reallocates capital to cohorts exhibiting lowest CAC and highest LTV.',
        outputArtifact: 'Real-Time Bid Optimization Rule'
      },
      {
        stepNumber: 4,
        title: 'Budget Shift Approval Request',
        description: 'Flags significant budget reallocations to human administrators in the Cockpit Review Queue with full financial impact projections.',
        outputArtifact: 'Authorized Budget Shift Record'
      }
    ],
    integrations: [
      { name: 'Google Ads API', category: 'Search & Display', icon: 'ads_click', status: 'connected', latency: '48ms' },
      { name: 'Meta Marketing API', category: 'Social Advertising', icon: 'share', status: 'connected', latency: '52ms' },
      { name: 'LinkedIn Campaign Manager', category: 'B2B Sponsored Content', icon: 'work', status: 'connected', latency: '68ms' },
      { name: 'Google Analytics 4', category: 'Conversion Attribution', icon: 'insights', status: 'connected', latency: '40ms' },
      { name: 'Stripe Billing Webhooks', category: 'Closed-Loop LTV Tracking', icon: 'credit_card', status: 'connected', latency: '35ms' }
    ],
    artifacts: [
      {
        id: 'art-paid-1',
        title: 'VP Marketing Cohort Retargeting Matrix: Google & LinkedIn',
        type: 'Paid Campaign Asset Set',
        date: 'Sept 03, 2026',
        readTimeOrSize: '12 ad sets',
        summary: 'Targeting Series B+ leadership with dynamic copy matching their industry segment. Blended ROAS: 4.8x.',
        badge: 'High ROAS',
        status: 'Live'
      },
      {
        id: 'art-paid-2',
        title: 'Budget Reallocation Memo: Google Ad Group 3B to 4A',
        type: 'Financial Decision Log',
        date: 'Aug 30, 2026',
        readTimeOrSize: '$2,400 reallocated',
        summary: 'Reallocated capital from saturated broad-match terms to high-intent "autonomous marketing platform" queries.',
        badge: 'Budget Shift',
        status: 'Verified'
      },
      {
        id: 'art-paid-3',
        title: 'Creative Fatigue Refresh: 18 Meta Video Ad Hooks',
        type: 'Ad Variations Set',
        date: 'Aug 24, 2026',
        readTimeOrSize: '18 hooks',
        summary: 'Refreshed declining creative assets with fresh product screen recordings and customer soundbites.',
        badge: 'Creative Refresh',
        status: 'Published'
      }
    ],
    interactiveDemo: {
      placeholder: 'Enter your target ICP, product offering, and daily budget to generate ad variants...',
      presets: [
        {
          id: 'p-paid-1',
          title: 'Series B+ SaaS Decision Makers',
          prompt: 'Generate 3 high-converting LinkedIn sponsored content ads targeting CMOs with $100/day test budget.',
          expectedOutput: {
            title: 'LinkedIn Executive Sponsored Campaign Variations',
            summary: 'Constructed 3 angle variants: Problem-Agitation, Direct Comparison, and Empirical Proof.',
            details: [
              'Variant 1 (Proof): "How 42 modern scale-ups eliminated 65% of marketing grunt work with 5 autonomous agents."',
              'Variant 2 (Agitation): "Stop paying $4,000/mo for 12 tools that don\'t talk to each other. Switch to one unified mesh."',
              'Variant 3 (Executive Hook): "The 2026 CMO Playbook: Orchestrate Strategy, Let AI Execute the Rest."',
              'Targeting: Job Titles: CMO, VP Marketing, Head of Growth | Company Size: 50-500 | Industry: Software & FinTech'
            ],
            metrics: 'Predicted CPC: $9.40 • Est. Conversion Rate: 4.2% • Expected Qualified Leads: 32/mo',
            actionLabel: 'Deploy to LinkedIn Ads'
          }
        },
        {
          id: 'p-paid-2',
          title: 'Google High-Intent Search',
          prompt: 'Create high-intent Google search ad groups for "autonomous marketing software" with responsive headlines.',
          expectedOutput: {
            title: 'Google Search Responsive Ad Group',
            summary: '15 pin-optimized responsive search headlines with dynamic keyword insertion.',
            details: [
              'Headlines: "Impact AI: Multi-Agent Engine" | "Replace 12 Marketing Tools" | "Live Demo: See 5 Agents Work"',
              'Descriptions: "Automate strategy, long-form content, SEO, and paid ads under one unified command center. Try free today."',
              'Sitelinks: "View Live Cockpit", "Architecture Blueprint", "Pricing & Plans", "Customer Proof"'
            ],
            metrics: 'Quality Score Estimate: 9/10 • Predicted CTR: 7.8%',
            actionLabel: 'Stage in Google Ads'
          }
        }
      ]
    },
    sampleOutput: {
      title: 'Dynamic Retargeting Campaign: VP Marketing Cohort',
      type: 'Multi-Channel Ad Variations',
      content: 'Targeting: Series B+ CMOs & Growth Leads. Ad Copy: "Stop stitching 12 point solutions together. See how 5 autonomous agents run full-funnel marketing on autopilot." Real-time bid cap: $14.20 CPC.',
      metrics: 'Effective ROAS: 4.8x • Predicted CPA: $18.40'
    }
  },
  {
    id: 'social',
    name: 'Social Media AI',
    tagline: 'Every platform, one screen',
    role: 'Cross-Platform Amplification',
    icon: 'share',
    color: '#0284C7',
    accentGradient: 'from-sky-600 via-sky-700 to-sky-900',
    theme: {
      primary: '#0284C7',
      bg: 'bg-sky-600',
      text: 'text-sky-600',
      lightBg: 'bg-sky-50/80',
      border: 'border-sky-200',
      badgeBg: 'bg-sky-100',
      badgeText: 'text-sky-900',
      badgeBorder: 'border-sky-300',
      dotColor: 'bg-sky-500'
    },
    description: 'Manages your social presence across LinkedIn, X, Instagram, Facebook, and more — with platform-specific content and scheduling.',
    fullManifesto: 'Social Media AI turns long-form content and product milestones into a continuous, high-engagement social engine. It writes native posts optimized for the specific algorithms of LinkedIn, X/Twitter, Instagram, and Threads, generates PDF document carousels, determines the mathematically optimal posting windows, and handles audience interactions.',
    capabilities: [
      'Multi-platform post generation',
      'Optimal scheduling and automated publishing',
      'Engagement monitoring and responses',
      'Trend analysis and hashtag strategy',
      'PDF carousel & document slide generation',
      'Executive thought leadership ghost-posting'
    ],
    metrics: [
      { label: 'Organic Impressions', value: '480,000+', sub: 'Last 30 days cross-platform', trend: '+88% reach', icon: 'visibility' },
      { label: 'Engagement Rate', value: '4.8%', sub: 'LinkedIn & X average', trend: '3.2x industry avg', icon: 'thumb_up' },
      { label: 'Scheduled Posts', value: '180', sub: 'Queued across 4 social channels', trend: 'Optimal timing', icon: 'schedule' },
      { label: 'Inbound Profile Visits', value: '14,200', sub: 'Driven to conversion landing pages', trend: '+112% referral', icon: 'open_in_new' }
    ],
    workflows: [
      {
        stepNumber: 1,
        title: 'Longform Asset Atomization',
        description: 'Ingests essays authored by Content Writer AI and automatically deconstructs them into 8 bite-sized, platform-native social hooks.',
        outputArtifact: 'Atomized Content Breakdown'
      },
      {
        stepNumber: 2,
        title: 'Platform-Native Formatting',
        description: 'Formats content into LinkedIn text posts with document carousels, X threads with image cards, and Instagram story graphics.',
        outputArtifact: 'Native Multi-Channel Social Kit'
      },
      {
        stepNumber: 3,
        title: 'Algorithmic Window Scheduling',
        description: 'Uses historical engagement heatmaps to schedule publishing during peak executive activity periods (e.g. Tuesday 08:30 EST).',
        outputArtifact: 'Calibrated Dispatch Schedule'
      },
      {
        stepNumber: 4,
        title: 'Real-Time Engagement Triage',
        description: 'Monitors inbound replies and comments, classifying sentiment and drafting suggested responses for community managers.',
        outputArtifact: 'Engagement Response Queue'
      }
    ],
    integrations: [
      { name: 'LinkedIn Marketing Developer API', category: 'B2B Social', icon: 'share', status: 'connected', latency: '45ms' },
      { name: 'X / Twitter API v2', category: 'Real-Time Thought Leadership', icon: 'chat', status: 'connected', latency: '50ms' },
      { name: 'Meta Graph API (Instagram/FB)', category: 'Visual Social', icon: 'photo_camera', status: 'connected', latency: '60ms' },
      { name: 'Buffer / Typefully Relay', category: 'Social Queueing', icon: 'send', status: 'available', latency: '—' },
      { name: 'Slack Notifications', category: 'Team Alerts', icon: 'notifications', status: 'connected', latency: '30ms' }
    ],
    artifacts: [
      {
        id: 'art-soc-1',
        title: 'LinkedIn Document Carousel: The 5-Agent Marketing Stack',
        type: 'LinkedIn 8-Slide PDF',
        date: 'Sept 02, 2026',
        readTimeOrSize: '8 slides',
        summary: 'Visual architecture breakdown explaining how multi-agent coordination replaces manual task execution. 38k impressions.',
        badge: 'Top Performer',
        status: 'Published'
      },
      {
        id: 'art-soc-2',
        title: 'Viral X Thread: 10 Harsh Truths About 2026 Growth Marketing',
        type: '12-Tweet Thread',
        date: 'Aug 28, 2026',
        readTimeOrSize: '12 posts',
        summary: 'Deconstructed traditional agency churn vs. autonomous software velocity. 1,420 bookmarks and 240 retweets.',
        badge: 'High Engagement',
        status: 'Published'
      },
      {
        id: 'art-soc-3',
        title: 'Product Launch Announcement: Multi-Platform Campaign Kit',
        type: 'Cross-Network Kit',
        date: 'Aug 21, 2026',
        readTimeOrSize: '6 posts',
        summary: 'Synchronized launch messaging distributed across LinkedIn, X, and Instagram with customized copy per network.',
        badge: 'Launch Kit',
        status: 'Verified'
      }
    ],
    interactiveDemo: {
      placeholder: 'Enter an announcement, blog URL, or concept to generate an instant LinkedIn post & X thread...',
      presets: [
        {
          id: 'p-soc-1',
          title: 'Product Feature Announcement',
          prompt: 'Convert our new Multi-Agent Command Cockpit feature launch into an engaging LinkedIn post with hook and CTA.',
          expectedOutput: {
            title: 'LinkedIn Thought Leadership Announcement',
            summary: 'Formatted with strong line breaks, minimal emojis, and high-status executive tone.',
            details: [
              'Hook: "Most growth teams don\'t have a strategy problem. They have an orchestration problem."',
              'Body: Breakdown of the 65% manual execution tax and how 5 specialized agents share context to solve it.',
              'Bullet Points: • No prompt pasting • Unified memory • 100% human sign-off before dispatch.',
              'CTA: "We just open-sourced our interactive Cockpit simulation. Link in the comments to explore."'
            ],
            metrics: 'Predicted Engagement: 4.8% CTR • Projected Impressions: 24,000+',
            actionLabel: 'Schedule on LinkedIn'
          }
        },
        {
          id: 'p-soc-2',
          title: 'Viral X/Twitter Thread',
          prompt: 'Generate an 8-tweet thread on why marketing teams that use autonomous meshes are outperforming agencies 10 to 1.',
          expectedOutput: {
            title: '8-Tweet Analytical Breakdown Thread',
            summary: 'Concise, data-dense thread built for bookmarking and algorithmic distribution.',
            details: [
              'Tweet 1: "The era of the $25,000/mo agency retainer is ending. Here is how modern scale-ups run 5 disciplines on one screen: 🧵"',
              'Tweet 2: "Discipline 1: Content Strategy. Instead of guessing, agents crawl competitor backlink gaps in real time."',
              'Tweet 3: "Discipline 2: Writing. Drafts arrive fully referenced with schema tags and brand voice fidelity scoring 99.4%."',
              'Closing Tweet: "The takeaway: Keep human taste at the wheel, let software do the lifting."'
            ],
            metrics: 'Estimated Bookmarks: 850+ • Estimated Retweets: 180+',
            actionLabel: 'Queue Thread on X'
          }
        }
      ]
    },
    sampleOutput: {
      title: 'Product Launch Carousel & Thought Leadership Thread',
      type: 'LinkedIn Document + X Thread',
      content: 'Slide 1: Why 2026 is the year of autonomous multi-agent marketing meshes. Slide 2: The 65% operational tax. Slide 3: Live demo architecture diagram. Scheduled for Tuesday 08:30 EST (optimal executive reach window).',
      metrics: 'Projected Impressions: 38k • CTR: 3.2%'
    }
  },
  {
    id: 'seo',
    name: 'SEO Agent',
    tagline: 'Rank higher, get found',
    role: 'Search Engine & AI Answer Engine Optimization',
    icon: 'manage_search',
    color: '#E11D48',
    accentGradient: 'from-rose-600 via-rose-700 to-rose-900',
    theme: {
      primary: '#E11D48',
      bg: 'bg-rose-600',
      text: 'text-rose-600',
      lightBg: 'bg-rose-50/80',
      border: 'border-rose-200',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-900',
      badgeBorder: 'border-rose-300',
      dotColor: 'bg-rose-500'
    },
    description: 'Handles technical SEO audits, keyword research, on-page optimization, and link building strategies to grow your organic traffic.',
    fullManifesto: 'SEO Agent is your technical search and AI Answer Engine (GEO/AEO) optimization architect. Beyond traditional meta tags, it optimizes your entire digital footprint for LLM-driven citation engines (like Gemini, ChatGPT, Perplexity) through JSON-LD schema graphs, structured entity modeling, canonical validation, and programmatic internal link graphs.',
    capabilities: [
      'Technical SEO audits and fixes',
      'Keyword research and SERP tracking',
      'On-page and meta schema optimization',
      'Backlink analysis and outreach planning',
      'AI Citation Graph & Knowledge Graph injection',
      'Core Web Vitals & canonical redirect remediation'
    ],
    metrics: [
      { label: 'Top 3 SERP Ranks', value: '420+', sub: 'High-intent commercial keywords', trend: '+64 new positions', icon: 'military_tech' },
      { label: 'AI Engine Citations', value: '94,210', sub: 'Referenced across AI answer engines', trend: '+127% YoY', icon: 'auto_awesome' },
      { label: 'Technical Health Score', value: '99/100', sub: 'Zero crawl errors or broken links', trend: 'A+ Grade', icon: 'health_and_safety' },
      { label: 'Indexing Latency', value: '< 4 hours', sub: 'Via automated Google Indexing API', trend: 'Instant crawl', icon: 'sync' }
    ],
    workflows: [
      {
        stepNumber: 1,
        title: 'Continuous Technical Crawl',
        description: 'Scans full sitemap every 6 hours, detecting broken redirects, orphaned URLs, missing alt tags, and slow LCP elements.',
        outputArtifact: 'Real-Time Site Health Diagnostic'
      },
      {
        stepNumber: 2,
        title: 'Structured Data & Entity Graph Modeling',
        description: 'Injects rich JSON-LD markup (Article, Organization, FAQ, SoftwareApplication) linking brand entities to Wikidata and authoritative sources.',
        outputArtifact: 'JSON-LD Knowledge Graph Injection'
      },
      {
        stepNumber: 3,
        title: 'SERP & AI Answer Engine Tracking',
        description: 'Monitors traditional Google rankings alongside citations in AI answers, tracking brand share-of-voice across modern search surfaces.',
        outputArtifact: 'Blended Search Visibility Report'
      },
      {
        stepNumber: 4,
        title: 'Automated Internal Link Weaving',
        description: 'Whenever Content Writer publishes a new piece, SEO Agent updates legacy high-authority pages to pass link equity seamlessly.',
        outputArtifact: 'Internal Link Mesh Update'
      }
    ],
    integrations: [
      { name: 'Google Search Console API', category: 'Search Performance', icon: 'travel_explore', status: 'connected', latency: '40ms' },
      { name: 'Google Indexing API', category: 'Instant Crawl Request', icon: 'cloud_upload', status: 'connected', latency: '35ms' },
      { name: 'Cloudflare / Edge Workers', category: 'Edge Schema Injection', icon: 'dns', status: 'connected', latency: '20ms' },
      { name: 'Screaming Frog Engine', category: 'Deep Site Crawl', icon: 'bug_report', status: 'connected', latency: '80ms' },
      { name: 'Perplexity / AI Engine Monitor', category: 'Answer Engine Optimization', icon: 'smart_toy', status: 'connected', latency: '55ms' }
    ],
    artifacts: [
      {
        id: 'art-seo-1',
        title: 'Full Domain Technical Audit & Entity Graph Schema (28 Pages)',
        type: 'Technical Audit & Schema',
        date: 'Sept 03, 2026',
        readTimeOrSize: '28 URLs',
        summary: 'Injected JSON-LD Article and FAQ schema, resolving 12 duplicate title tags and boosting mobile speed score by 18 points.',
        badge: 'Audit & Schema',
        status: 'Live'
      },
      {
        id: 'art-seo-2',
        title: 'AI Answer Engine Optimization (AEO) Playbook & Entity Graph',
        type: 'AEO Dossier',
        date: 'Aug 27, 2026',
        readTimeOrSize: '14 pages',
        summary: 'Entity mapping aligning brand terms with Wikipedia, Crunchbase, and GitHub repositories for citation prominence in LLMs.',
        badge: 'AEO Strategy',
        status: 'Published'
      },
      {
        id: 'art-seo-3',
        title: 'High-Intent Commercial Keyword & SERP Volatility Report',
        type: 'Ranking Intelligence',
        date: 'Aug 19, 2026',
        readTimeOrSize: '120 keywords',
        summary: 'Identified 42 keywords moving into Top 3 positions following internal link restructuring on the knowledge base.',
        badge: 'Ranking Lift',
        status: 'Verified'
      }
    ],
    interactiveDemo: {
      placeholder: 'Enter a URL or target keyword to run a live SEO & AI Citation audit...',
      presets: [
        {
          id: 'p-seo-1',
          title: 'Technical Schema & Citation Audit',
          prompt: 'Audit the landing page schema for an enterprise autonomous agent platform and validate JSON-LD structured data.',
          expectedOutput: {
            title: 'Technical SEO & Entity Graph Audit Result',
            summary: 'Diagnosed 4 missing entity links and generated production-ready JSON-LD schema.',
            details: [
              'Schema Injected: @type: "SoftwareApplication", name: "Impact AI", applicationCategory: "BusinessApplication"',
              'Citation Nodes: Linked to recognized Wikidata Q-entities for "Autonomous agent" and "Marketing automation".',
              'OpenGraph Audit: Fixed missing twitter:card summary_large_image tag and resolved 2 301 redirect chains.',
              'AI Engine Readiness: Rated 98/100 for citation clarity in LLM retrieval benchmarks.'
            ],
            metrics: 'Health Score: 99/100 • Speed Index: 1.1s • Missing Tags: 0',
            actionLabel: 'Inject Schema to Site'
          }
        },
        {
          id: 'p-seo-2',
          title: 'Commercial Keyword Gap',
          prompt: 'Identify top 5 high-converting commercial keywords with search volume > 1,000 and low competitor domain rating.',
          expectedOutput: {
            title: 'High-Intent Commercial Search Opportunities',
            summary: '5 high-intent keywords ready for immediate cluster drafting with Content Writer AI.',
            details: [
              '1. "autonomous marketing agents platform" - Vol: 3,400/mo, KD: 28, Intent: Commercial',
              '2. "ai agent marketing orchestration" - Vol: 2,800/mo, KD: 24, Intent: Informational/Commercial',
              '3. "multi agent martech stack" - Vol: 1,900/mo, KD: 19, Intent: Commercial',
              '4. "enterprise content writer ai with guardrails" - Vol: 1,200/mo, KD: 32, Intent: Transactional',
              '5. "b2b autonomous seo engine" - Vol: 1,100/mo, KD: 22, Intent: Commercial'
            ],
            metrics: 'Total Untapped Volume: 10,400/mo • Est. Organic ARR Value: $120,000',
            actionLabel: 'Create Topic Briefs'
          }
        }
      ]
    },
    sampleOutput: {
      title: 'Technical Schema & Entity Graph Injector',
      type: 'Structured Data & AI Citation Graph',
      content: 'Injected JSON-LD Article, FAQPage, and Organization schemas with validated sameAs entities. Cleaned up 28 canonical redirects and boosted core web vitals speed index by 240ms.',
      metrics: 'Rankings: +42 Top 3 Keyword Positions'
    }
  }
];

export const INITIAL_PENDING_TASKS: PendingTask[] = [
  {
    id: 'task-1',
    agentId: 'writer',
    agentName: 'Content Writer AI',
    agentIcon: 'stylus_note',
    title: '4 Pillar Guides on Agentic Marketing Systems',
    channel: 'Blog & Knowledge Base',
    timestamp: '2m ago',
    preview: 'Full draft ready with custom JSON-LD schema, 8 contextual diagrams, and brand voice alignment scoring 99.2%.',
    status: 'pending',
    impactMetric: '+18.4k Est. Monthly Organic Traffic'
  },
  {
    id: 'task-2',
    agentId: 'seo',
    agentName: 'SEO Agent',
    agentIcon: 'manage_search',
    title: 'Automated Meta Schema & Canonical Audit (28 Pages)',
    channel: 'Technical SEO',
    timestamp: '7m ago',
    preview: 'Fixed 4 missing OpenGraph description tags and generated Rich Snippets schema for software application entities.',
    status: 'pending',
    impactMetric: 'Eliminates 12 duplicate indexation flags'
  },
  {
    id: 'task-3',
    agentId: 'paid',
    agentName: 'Paid Marketing AI',
    agentIcon: 'campaign',
    title: 'Budget Shift: Reallocate $2,400 to Google Search Ad Set B',
    channel: 'Google Ads & Meta',
    timestamp: '14m ago',
    preview: 'Ad set B demonstrating 4.8x ROAS vs 1.9x on legacy campaign. Reallocation increases total conversion volume by 32%.',
    status: 'pending',
    impactMetric: 'Projected +$14,200 New ARR'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do I need to use all five agents?',
    answer: "No. You can start with a single agent — whichever addresses your biggest need — and add more over time. Each agent works independently and delivers value on its own. When you're ready to connect them, the coordination happens automatically."
  },
  {
    question: 'Will AI content sound generic?',
    answer: 'No. Impact AI learns your brand voice, style guidelines, and tone preferences. You set the guardrails, and every agent follows them. Plus, you review and edit everything before it goes live — so the final output always sounds uniquely like you.'
  },
  {
    question: 'How is this different from ChatGPT or Jasper?',
    answer: "General AI tools generate text. Impact AI runs your marketing. Our agents don't just write — they research, strategize, optimize, schedule, and coordinate across channels. It's the difference between a simple text generator and a dedicated marketing team."
  },
  {
    question: 'What if I already use other marketing tools?',
    answer: 'Impact AI integrates with the tools you already use — Google Analytics, Search Console, Meta, LinkedIn, CMS platforms, and CRM systems. It enhances your existing stack rather than forcing a painful rip-and-replace.'
  },
  {
    question: 'Is my proprietary data safe?',
    answer: 'Yes. Your data is encrypted at rest and in transit. We never use your content or metrics to train general LLMs. Your brand voice settings, content, and analytics stay strictly private to your tenant. We are SOC 2 Type II compliant.'
  }
];

export const COMPARISON_ROWS = [
  {
    capability: 'Covers all 5 marketing functions',
    traditional: '—',
    impact: 'check_circle'
  },
  {
    capability: 'Agents share context and shared data',
    traditional: '—',
    impact: 'check_circle'
  },
  {
    capability: 'Strategy-first approach (not isolated prompts)',
    traditional: '—',
    impact: 'check_circle'
  },
  {
    capability: 'Human-in-the-loop granular approval controls',
    traditional: 'Limited',
    impact: 'check_circle'
  },
  {
    capability: 'Global Brand Voice consistency across all channels',
    traditional: 'Per-tool setup',
    impact: 'check_circle'
  },
  {
    capability: 'Self-improving: learns from manual edits',
    traditional: '—',
    impact: 'check_circle'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    agent: 'Content Strategist',
    title: 'Research & Plan',
    description: 'Analyzes market, targets keywords, maps competitor positioning, and builds a complete launch content calendar.'
  },
  {
    step: 2,
    agent: 'Content Writer',
    title: 'Create the Content',
    description: 'Drafts blog posts, landing pages, and email sequences in your brand voice, optimized and ready for review.'
  },
  {
    step: 3,
    agent: 'SEO Agent',
    title: 'Optimize for Search',
    description: 'Reviews technical optimization — meta tags, internal links, schema markup — to ensure pages rank.'
  },
  {
    step: 4,
    agent: 'Social Media',
    title: 'Amplify Everywhere',
    description: 'Generates platform-specific posts for LinkedIn, X, Instagram, and Facebook scheduled at optimal times.'
  },
  {
    step: 5,
    agent: 'Paid Marketing',
    title: 'Drive Traffic',
    description: 'Deploys targeted ad campaigns across Google and Meta, matching organic copy for high conversion coherence.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Autonomous Marketing Meshes: Why 2026 Marks the End of Point Tools',
    excerpt: 'How coordinated multi-agent orchestration delivers 10x output while cutting operational churn by 65%.',
    date: 'August 28, 2026',
    readTime: '6 min read',
    tag: 'Architecture',
    author: 'Elena Vance, Head of AI Systems'
  },
  {
    id: 'post-2',
    title: 'The AI Answer Engine Optimization Playbook for Modern B2B SaaS',
    excerpt: 'A comprehensive study of how search algorithms and generative engines cite domain authority in 2026.',
    date: 'August 19, 2026',
    readTime: '8 min read',
    tag: 'SEO & Citations',
    author: 'Marcus Brody, Chief Scientist'
  },
  {
    id: 'post-3',
    title: 'Human-in-the-Loop Governance: Balancing Automation with Editorial Control',
    excerpt: 'Why the highest performing enterprise marketing teams maintain granular approval workflows rather than full unmonitored autopilot.',
    date: 'August 12, 2026',
    readTime: '5 min read',
    tag: 'Governance',
    author: 'Sarah Chen, VP Product'
  }
];

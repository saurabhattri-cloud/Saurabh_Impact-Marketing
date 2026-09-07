export type ScreenType = 
  | 'home'
  | 'cockpit'
  | 'agents'
  | 'agent-detail'
  | 'how-it-works'
  | 'pricing'
  | 'blog'
  | 'contact';

export interface AgentTheme {
  primary: string;
  bg: string;
  text: string;
  lightBg: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
  bgDark?: string;
  bgLight?: string;
  accent?: string;
}

export interface AgentWorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  outputArtifact: string;
}

export interface AgentIntegration {
  name: string;
  category: string;
  icon: string;
  status: 'connected' | 'available' | 'syncing';
  latency: string;
}

export interface AgentArtifact {
  id: string;
  title: string;
  type: string;
  date: string;
  readTimeOrSize: string;
  summary: string;
  badge: string;
  status: 'Published' | 'Live' | 'Scheduled' | 'Verified';
}

export interface AgentMetricStat {
  label: string;
  value: string;
  sub: string;
  trend: string;
  icon: string;
}

export interface InteractiveDemoPreset {
  id: string;
  title: string;
  prompt: string;
  expectedOutput: {
    title: string;
    summary: string;
    details: string[];
    metrics: string;
    actionLabel: string;
  };
}

export interface AgentInfo {
  id: string;
  name: string;
  tagline: string;
  role: string;
  icon: string;
  color: string;
  accentGradient: string;
  theme: AgentTheme;
  description: string;
  fullManifesto: string;
  capabilities: string[];
  metrics: AgentMetricStat[];
  workflows: AgentWorkflowStep[];
  integrations: AgentIntegration[];
  artifacts: AgentArtifact[];
  interactiveDemo: {
    placeholder: string;
    presets: InteractiveDemoPreset[];
  };
  sampleOutput: {
    title: string;
    type: string;
    content: string;
    metrics: string;
  };
}

export interface PendingTask {
  id: string;
  agentId?: string;
  agentName: string;
  agentIcon: string;
  title: string;
  channel: string;
  timestamp: string;
  preview: string;
  status: 'pending' | 'approved' | 'rejected';
  impactMetric: string;
}

export interface MetricItem {
  label: string;
  val: string;
  delta: string;
  sub: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  author: string;
}

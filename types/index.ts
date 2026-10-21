export interface NavItem {
  label: string;
  href: string;
}

export interface CapabilityItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

export interface SolutionItem {
  badge: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
  tags: string[];
}

export interface PrincipleItem {
  index: string;
  title: string;
  description: string;
}

export interface ProductItem {
  status: string;
  title: string;
  description: string;
}

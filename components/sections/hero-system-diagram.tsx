import * as React from "react";
import {
  Globe,
  Inbox,
  Users,
  Database,
  BarChart3,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number; // percentage position within the panel
  y: number;
  accent?: boolean;
};

const nodes: Node[] = [
  { id: "website", label: "Website", icon: Globe, x: 18, y: 23 },
  { id: "leads", label: "Leads", icon: Inbox, x: 50, y: 14, accent: true },
  { id: "crm", label: "CRM", icon: Users, x: 82, y: 23 },
  { id: "data", label: "Data", icon: Database, x: 18, y: 77 },
  { id: "reporting", label: "Reporting", icon: BarChart3, x: 50, y: 86, accent: true },
  { id: "automation", label: "Automation", icon: Workflow, x: 82, y: 77 },
];

const CENTER = { x: 50, y: 50 };

/**
 * Abstract "operating layer" diagram: six business systems connected into one
 * calm hub. Built with positioned cards + an SVG connector layer. No stock
 * photos and no maritime imagery — just clean structure, matte gray and gold.
 */
export function HeroSystemDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[540px]", className)}>
      {/* Soft glow behind the panel */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl"
      />

      <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card/80 shadow-card backdrop-blur-sm">
        <div aria-hidden className="absolute inset-0 bg-fine-grid opacity-[0.5]" />

        {/* Connector lines (drawn in a 0–100 coordinate space) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {nodes.map((node) => (
            <line
              key={node.id}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={node.x}
              y2={node.y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* Flowing accent lines for the two highlighted nodes */}
          {nodes
            .filter((n) => n.accent)
            .map((node) => (
              <line
                key={`accent-${node.id}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={node.x}
                y2={node.y}
                stroke="hsl(var(--gold))"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="animate-dash-flow opacity-70"
              />
            ))}
        </svg>

        {/* Satellite system nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div
                className={cn(
                  "flex items-center gap-2 rounded-xl border bg-card px-3 py-2 shadow-soft",
                  node.accent ? "border-gold/40" : "border-border"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-7 w-7 items-center justify-center rounded-lg",
                    node.accent
                      ? "bg-gold-bright text-dark"
                      : "bg-gold-soft text-gold"
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Central hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
        >
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-dark px-5 py-4 text-center shadow-lift ring-1 ring-white/5">
            <HubMark />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-foreground">
              Harborline
            </span>
            <span className="text-[0.65rem] text-dark-muted">Operating layer</span>
          </div>
        </div>
      </div>

      {/* Caption strip */}
      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        One calm system instead of five disconnected tools
      </div>
    </div>
  );
}

function HubMark() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <line x1="5" y1="7" x2="17" y2="7" stroke="white" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="5" y1="11" x2="17" y2="11" stroke="hsl(var(--gold-bright))" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="5" y1="15" x2="13" y2="15" stroke="white" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="11" r="1.8" fill="hsl(var(--gold-bright))" />
      </svg>
    </span>
  );
}

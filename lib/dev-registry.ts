export type StoryGroup =
  | "Foundations"
  | "Actions"
  | "Forms"
  | "Navigation"
  | "Data Display"
  | "Feedback & Overlays"
  | "Layout Blocks";

export interface StoryMeta {
  slug: string;
  title: string;
  group: StoryGroup;
  description: string;
}

/** Sidebar + [slug] route registry for the /dev/components showcase. */
export const storyRegistry: StoryMeta[] = [
  // Foundations
  { slug: "colors", title: "Colors", group: "Foundations", description: "Brand, semantic and chart color tokens." },
  { slug: "typography", title: "Typography", group: "Foundations", description: "Display, heading and body type scale." },
  { slug: "spacing-radius", title: "Spacing & Radius", group: "Foundations", description: "Layout spacing scale and corner radii." },

  // Actions
  { slug: "button", title: "Button", group: "Actions", description: "Pill buttons: solid, outline, secondary, ghost, link." },
  { slug: "badge", title: "Badge", group: "Actions", description: "Status and tag pills." },
  { slug: "button-group", title: "Button Group", group: "Actions", description: "Segmented, connected button clusters." },
  { slug: "toggle", title: "Toggle", group: "Actions", description: "Single and grouped toggle buttons." },
  { slug: "dropdown-menu", title: "Dropdown Menu", group: "Actions", description: "Contextual action menu." },

  // Forms
  { slug: "input", title: "Input", group: "Forms", description: "Text input, sizes and states." },
  { slug: "textarea", title: "Textarea", group: "Forms", description: "Multi-line text field." },
  { slug: "select", title: "Select", group: "Forms", description: "Native-feeling select dropdown." },
  { slug: "combobox", title: "Combobox", group: "Forms", description: "Searchable single-select list." },
  { slug: "checkbox", title: "Checkbox", group: "Forms", description: "Boolean and indeterminate checkbox." },
  { slug: "radio-group", title: "Radio Group", group: "Forms", description: "Single choice from a set." },
  { slug: "switch", title: "Switch", group: "Forms", description: "On/off toggle." },
  { slug: "slider", title: "Slider", group: "Forms", description: "Range and single-value slider." },
  { slug: "date-picker", title: "Date Picker", group: "Forms", description: "Calendar popover date field." },
  { slug: "input-otp", title: "OTP Input", group: "Forms", description: "One-time-passcode field." },
  { slug: "form", title: "Form", group: "Forms", description: "react-hook-form + zod validated form." },

  // Navigation
  { slug: "header", title: "Header & Mega Menu", group: "Navigation", description: "Sticky site header with mega navigation." },
  { slug: "sidebar", title: "Dashboard Shell", group: "Navigation", description: "Collapsible app sidebar + topbar." },
  { slug: "breadcrumb", title: "Breadcrumb", group: "Navigation", description: "Hierarchical page trail." },
  { slug: "tabs", title: "Tabs", group: "Navigation", description: "Line and pill tab styles." },
  { slug: "pagination", title: "Pagination", group: "Navigation", description: "Page navigation control." },
  { slug: "command", title: "Command Palette", group: "Navigation", description: "⌘K searchable command menu." },
  { slug: "footer", title: "Footer", group: "Navigation", description: "Multi-column site footer." },

  // Data Display
  { slug: "cards", title: "Cards", group: "Data Display", description: "Event, promo, CTA and insight cards." },
  { slug: "stat-card", title: "Stat Card", group: "Data Display", description: "KPI tile with trend indicator." },
  { slug: "table", title: "Table", group: "Data Display", description: "Sortable data table (TanStack Table)." },
  { slug: "avatar", title: "Avatar", group: "Data Display", description: "User avatar with fallback initials." },
  { slug: "accordion", title: "Accordion", group: "Data Display", description: "Collapsible content sections." },
  { slug: "chart", title: "Chart", group: "Data Display", description: "Line, bar and area charts (Recharts)." },
  { slug: "skeleton", title: "Skeleton", group: "Data Display", description: "Loading placeholder blocks." },
  { slug: "empty", title: "Empty State", group: "Data Display", description: "No-data / zero-state panel." },

  // Feedback & overlays
  { slug: "alert", title: "Alert", group: "Feedback & Overlays", description: "Inline banner messages." },
  { slug: "toast", title: "Toast", group: "Feedback & Overlays", description: "Sonner toast notifications." },
  { slug: "dialog", title: "Dialog", group: "Feedback & Overlays", description: "Modal dialog." },
  { slug: "alert-dialog", title: "Alert Dialog", group: "Feedback & Overlays", description: "Confirmation dialog." },
  { slug: "sheet", title: "Sheet", group: "Feedback & Overlays", description: "Side panel drawer." },
  { slug: "drawer", title: "Drawer", group: "Feedback & Overlays", description: "Bottom drawer (mobile-first)." },
  { slug: "popover", title: "Popover", group: "Feedback & Overlays", description: "Floating content panel." },
  { slug: "tooltip", title: "Tooltip", group: "Feedback & Overlays", description: "Hover hint." },
  { slug: "hover-card", title: "Hover Card", group: "Feedback & Overlays", description: "Rich hover preview." },
  { slug: "progress", title: "Progress", group: "Feedback & Overlays", description: "Determinate progress bar." },
  { slug: "spinner", title: "Spinner", group: "Feedback & Overlays", description: "Indeterminate loading spinner." },

  // Layout blocks
  { slug: "hero", title: "Hero", group: "Layout Blocks", description: "Full-bleed dark hero section." },
  { slug: "carousel", title: "Card Carousel", group: "Layout Blocks", description: "Arrow-navigable card row." },
  { slug: "feature-grid", title: "Feature Grid", group: "Layout Blocks", description: "Icon + text tile grid." },
  { slug: "page-header", title: "Page Header", group: "Layout Blocks", description: "Dashboard page title row." },
];

export const storyGroups: StoryGroup[] = [
  "Foundations",
  "Actions",
  "Forms",
  "Navigation",
  "Data Display",
  "Feedback & Overlays",
  "Layout Blocks",
];

export function getStory(slug: string) {
  return storyRegistry.find((story) => story.slug === slug);
}

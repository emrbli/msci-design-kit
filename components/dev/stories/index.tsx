import type { ComponentType } from "react";

import * as Colors from "./colors";
import * as Typography from "./typography";
import * as SpacingRadius from "./spacing-radius";
import * as ButtonStory from "./button";
import * as Badge from "./badge";
import * as ButtonGroup from "./button-group";
import * as Toggle from "./toggle";
import * as DropdownMenu from "./dropdown-menu";
import * as Input from "./input";
import * as Textarea from "./textarea";
import * as Select from "./select";
import * as Combobox from "./combobox";
import * as Checkbox from "./checkbox";
import * as RadioGroup from "./radio-group";
import * as Switch from "./switch";
import * as Slider from "./slider";
import * as DatePicker from "./date-picker";
import * as InputOtp from "./input-otp";
import * as Form from "./form";
import * as Header from "./header";
import * as Sidebar from "./sidebar";
import * as Breadcrumb from "./breadcrumb";
import * as Tabs from "./tabs";
import * as Pagination from "./pagination";
import * as Command from "./command";
import * as Footer from "./footer";
import * as Cards from "./cards";
import * as StatCard from "./stat-card";
import * as Table from "./table";
import * as Avatar from "./avatar";
import * as Accordion from "./accordion";
import * as Chart from "./chart";
import * as Skeleton from "./skeleton";
import * as Empty from "./empty";
import * as Alert from "./alert";
import * as Toast from "./toast";
import * as Dialog from "./dialog";
import * as AlertDialog from "./alert-dialog";
import * as Sheet from "./sheet";
import * as Drawer from "./drawer";
import * as Popover from "./popover";
import * as Tooltip from "./tooltip";
import * as HoverCard from "./hover-card";
import * as Progress from "./progress";
import * as Spinner from "./spinner";
import * as Hero from "./hero";
import * as Carousel from "./carousel";
import * as FeatureGrid from "./feature-grid";
import * as PageHeader from "./page-header";

interface StoryModule {
  default: ComponentType;
  code?: string;
}

/** slug -> story module, backing app/dev/components/[slug]/page.tsx. */
export const storyModules: Record<string, StoryModule> = {
  colors: Colors,
  typography: Typography,
  "spacing-radius": SpacingRadius,
  button: ButtonStory,
  badge: Badge,
  "button-group": ButtonGroup,
  toggle: Toggle,
  "dropdown-menu": DropdownMenu,
  input: Input,
  textarea: Textarea,
  select: Select,
  combobox: Combobox,
  checkbox: Checkbox,
  "radio-group": RadioGroup,
  switch: Switch,
  slider: Slider,
  "date-picker": DatePicker,
  "input-otp": InputOtp,
  form: Form,
  header: Header,
  sidebar: Sidebar,
  breadcrumb: Breadcrumb,
  tabs: Tabs,
  pagination: Pagination,
  command: Command,
  footer: Footer,
  cards: Cards,
  "stat-card": StatCard,
  table: Table,
  avatar: Avatar,
  accordion: Accordion,
  chart: Chart,
  skeleton: Skeleton,
  empty: Empty,
  alert: Alert,
  toast: Toast,
  dialog: Dialog,
  "alert-dialog": AlertDialog,
  sheet: Sheet,
  drawer: Drawer,
  popover: Popover,
  tooltip: Tooltip,
  "hover-card": HoverCard,
  progress: Progress,
  spinner: Spinner,
  hero: Hero,
  carousel: Carousel,
  "feature-grid": FeatureGrid,
  "page-header": PageHeader,
};

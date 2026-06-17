import React from 'react';
import {
  Brain,
  TrendingUp,
  Star,
  Cpu,
  EyeOff,
  ShieldAlert,
  TrendingDown,
  Clock,
  MessageSquareCode,
  Bot,
  UserCheck,
  CheckSquare,
  CalendarRange,
  Combine,
  Sparkles,
  Zap,
  Network,
  Layers,
  Plus,
  Check,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Upload,
  PlusCircle,
  Edit2,
  Save,
  User,
  Calendar,
  Building,
  Globe,
  Mail,
  ChevronRight,
  ChevronLeft,
  Settings,
  DollarSign
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  key?: any;
}

export default function LucideIcon({ name, className = '', size = 20, style, ...props }: LucideIconProps) {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Brain,
    TrendingUp,
    Star,
    Cpu,
    EyeOff,
    ShieldAlert,
    TrendingDown,
    Clock,
    MessageSquareCode,
    Bot,
    UserCheck,
    CheckSquare,
    CalendarRange,
    Combine,
    Sparkles,
    Zap,
    Network,
    Layers,
    Plus,
    Check,
    Menu,
    X,
    ArrowRight,
    ExternalLink,
    Linkedin,
    Instagram,
    Facebook,
    Youtube,
    Phone,
    Upload,
    PlusCircle,
    Edit2,
    Save,
    User,
    Calendar,
    Building,
    Globe,
    Mail,
    ChevronRight,
    ChevronLeft,
    Settings,
    DollarSign
  };

  const IconComponent = iconMap[name] || Settings; // Fallback to Settings icon if not found
  return <IconComponent className={className} size={size} style={style} />;
}
